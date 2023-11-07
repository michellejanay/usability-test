<script>
  import { saveResponse, imgSrc } from "$lib";
  import { page } from "$app/stores";
  let url = $page.url.href;
  let userResponse1 = "";
</script>

<main class="lg:flex">
  <section class="w-1/2">
    <img src={imgSrc} alt="Lush's new subscription box" class="w-full h-full" />
  </section>
  <section class="w-1/2 h-full p-8 m-auto" o>
    <fieldset>
      <legend
        >Where would you prefer to shop for bath/body care products for
        yourself/others?</legend
      >
      <li>
        <input
          name="response1"
          type="radio"
          value="Laptop/Desktop"
          id="laptop-desktop"
          bind:group={userResponse1}
          required={true}
        />
        <label for="">Laptop/Desktop</label>
      </li>
      <li>
        <input
          name="userResponse1"
          type="radio"
          value="Mobile App"
          id="mobile-app"
          bind:group={userResponse1}
          required={true}
        />
        <label for="">Mobile App</label>
      </li>
      <li>
        <input
          name="userResponse1"
          type="radio"
          value="In Store"
          id="in-store"
          bind:group={userResponse1}
          required={true}
        />
        <label for="">In Store</label>
      </li>
      <p />
    </fieldset>

    <a
      href="/survey/instructions"
      data-sveltekit-replacestate
      on:click={saveResponse(userResponse1, url)}>Next</a
    >
  </section>
</main>
