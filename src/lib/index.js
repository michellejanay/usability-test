// place files you want to import through the `$lib` alias in this folder.
import lushSubscription from "$lib/images/lush-subscription-image.jpg";
export const data = [];
export let currentURL;
export let imgSrc = lushSubscription;

export const saveResponse = (response, url) => {
  currentURL = url;
  if (response === "instructions") {
    console.log(data);
  } else {
    data.push(response);
  }
  console.log(data);
};
