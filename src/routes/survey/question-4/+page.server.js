/** @type {import('./$types').Actions} */
import { v4 as uuidv4 } from "uuid";
import { fail, redirect } from "@sveltejs/kit";
import { createPool } from "@vercel/postgres";
const pool = createPool({
  connectionString: import.meta.env.VITE_DATABASE_URL,
  // ssl: { rejectUnauthorized: false },
});
let responseCreated = false;

let id = Math.floor(Math.random() * 1000);

const addResponse = async (userResponse) => {
  console.log(userResponse);
  try {
    await pool.sql`
  CREATE TABLE IF NOT EXISTS Responses (
    id SERIAL PRIMARY KEY, 
    response1 VARCHAR(255),
    response2 VARCHAR(225),
    response3 VARCHAR(225),
    userpreference VARCHAR(225),
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
  `;

    const result = await pool.sql`
    INSERT INTO public.responses(
      id, response1, response2, response3, userPreference, "createdAt")
      VALUES (
        ${id}, ${userResponse.response1}, ${userResponse.response2}, ${
      userResponse.response3
    }, ${userResponse.userPreference}, ${new Date()}
      );
    `;
    console.log(result);
    return { result };
  } catch (err) {
    console.log(err);
  }
};

export const actions = {
  submit: async (event) => {
    const responses = await event.request.formData();

    const response1 = responses.get("response1") || "";
    const response2 = responses.get("response2") || "";
    const response3 = responses.get("response3") || "";
    const userPreference = responses.get("userPreference") || "";

    const userResponse = {
      response1,
      response2,
      response3,
      userPreference,
    };

    addResponse(userResponse)
      .then(() => {
        console.log("success");
        responseCreated = true;
      })
      .catch((e) => {
        console.log(e);
      });

    if (responseCreated) {
      throw redirect(303, "/survey/thank-you");
    }
  },
};
