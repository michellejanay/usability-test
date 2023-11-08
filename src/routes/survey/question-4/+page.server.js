/** @type {import('./$types').Actions} */
// import { v4 as uuidv4 } from "uuid";
import { fail, redirect } from "@sveltejs/kit";
import pg from "pg";
const { Client } = pg;

const client = new Client({
  connectionString: import.meta.env.PRIVATE_DATABASE_URL + "?sslmode=require",
  // ssl: { rejectUnauthorized: false },
});
client.connect();
let responseCreated = false;

let id = Math.floor(Math.random() * 1000);

const addResponse = async (userResponse) => {
  console.log(userResponse);
  try {
    await client.query(`
  CREATE TABLE IF NOT EXISTS Responses (
    id SERIAL PRIMARY KEY, 
    response1 VARCHAR(255),
    response2 VARCHAR(225),
    response3 VARCHAR(225),
    userpreference VARCHAR(225),
    createdat TIMESTAMP
  );
  `);

    const result = await client.query(
      `
    INSERT INTO public.responses(
      id, response1, response2, response3, userpreference, createdat)
      VALUES (
        $1, $2, $3, $4, $5, $6
      )
      RETURNING *;
    `,
      [
        id,
        userResponse.response1,
        userResponse.response2,
        userResponse.response3,
        userResponse.userPreference,
        new Date(),
      ]
    );
    console.log(result.rows[0]);
    return { result };
    // responseCreated = true;
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
