<script>
  import { saveResponse, imgSrc } from "$lib";
  import { page } from "$app/stores";
  let url = $page.url.href;
</script>

<main class="lg:flex">
  <section class="w-1/2">
    <img src={imgSrc} alt="Lush's new subscription box" class="w-full h-full" />
  </section>
  <section class="w-1/2 h-full p-8 m-auto" o>
    <p>
      Imagine landing on the website or app of one of your favourite cosmetic or
      drug stores where you intend to purchase repeat self-care items (lotion,
      toothpaste, deodorant, etc.)
    </p>

    <p>
      This store offers a selection of fragrances among its self-care items, and
      you already have your favourite fragrance picked out. You want to see your
      favourite items with that fragrance and find out about anything new that
      may be available in that fragrance.
    </p>

    <p>
      You have just clicked on the search bar at the top of their app or
      website. You would see one of either of the following screens. Answer the
      following questions...
    </p>

    <a
      href="/survey/question-2"
      data-sveltekit-replacestate
      on:click={saveResponse("instructions", url)}>Next</a
    >
  </section>
</main>
