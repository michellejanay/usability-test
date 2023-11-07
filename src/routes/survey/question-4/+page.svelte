<script>
  let userResponse = "";
  import { data } from "$lib";
  import desktopOptions from "$lib/images/desktop-options.png";
  import mobileOptions from "$lib/images/mobile-options.png";

  let imgSrc;
  if (data[0] === "Laptop/Desktop") {
    imgSrc = desktopOptions;
  } else if (data[0] === "Mobile App" || data[0] === "In Store") {
    imgSrc = mobileOptions;
  }
</script>

<main class="lg:flex">
  <section class="w-1/2">
    <img src={imgSrc} alt="Lush's new subscription box" class="w-full h-full" />
  </section>
  <section class="w-1/2 h-full p-8 m-auto" o>
    <form method="POST" action="?/submit">
      <fieldset>
        <legend>Which design did you prefer?</legend>
        <li>
          <input
            name="userPreference"
            type="radio"
            id="option1"
            value="option-1"
            bind:group={userResponse}
            required={true}
          />
          <label for="option1">Option 1</label>
        </li>
        <li>
          <input
            name="userPreference"
            type="radio"
            id="option2"
            value="option-2"
            bind:group={userResponse}
            required={true}
          />
          <label for="option2">Option 2</label>
        </li>
        <p />
      </fieldset>
      {#each data as d, i}
        <input type="hidden" name={`response${[i + 1]}`} value={d} />
      {/each}
      <button>Submit</button>
    </form>
  </section>
</main>
