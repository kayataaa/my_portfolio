import { gsap } from "gsap";

function load() {
  const logo = document.querySelector(".a-logo");

  if(logo) {
    gsap.to(logo, {rotation: 27, x: 100, duration: 1});
  }
}

window.onload = load;