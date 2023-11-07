<script>
  import lushDesktopImproved from "$lib/images/lush-improved.png";
  import lushMobileImproved from "$lib/images/lush-mobile-improved.png";
  import { saveResponse, data } from "$lib";
  import { page } from "$app/stores";
  let url = $page.url.href;
  let userResponse = "";
  let imgSrc;

  if (data[0] === "Laptop/Desktop") {
    imgSrc = lushDesktopImproved;
  } else {
    imgSrc = lushMobileImproved;
  }
</script>

<main class="lg:flex">
  <section class="w-1/2">
    <img src={imgSrc} alt="Lush's new subscription box" class="w-full h-full" />
  </section>
  <section class="w-1/2 h-full p-8 m-auto" o>
    <h1>
      How easy/clear is it to search for a product or fragrance on the example
      screen? Describe why or why not.
    </h1>
    <textarea
      name="response3"
      id="response3"
      cols="30"
      rows="4"
      placeholder="Your response..."
      bind:value={userResponse}
    /><br />
    <a
      href="/survey/question-4"
      data-sveltekit-replacestate
      on:click={saveResponse(userResponse, url)}>Next</a
    >
  </section>
</main>
