import { gsap, TweenMax } from "gsap";
import Vue from 'vue'
import App from '../../app.vue'
import AOS from 'aos'

function appendVueComp() {
  const app = new Vue({
    render: h => h(App)
  }).$mount()

  const article = document.body.querySelector('.o-article.-sec')
  const card = document.body.querySelector('.new-card')

  if (article) {
    article.insertBefore(app.$el, card)
  }
}

function logo() {
  const tl = gsap.timeline({repeat: -1, repeatDelay: 0.5});
  const logo = document.querySelectorAll(".a-logo.-alphabet");
  var grid = [7,15];

  var selections = {from: "left", axis: null, ease: "none"};
  tl.to(logo, {
    duration: 1,
    scale: 0.1,
    y: 60,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
    stagger: {
      amount: 1.5,
      grid: grid,
      axis: selections.axis,
      ease: selections.ease,
      from: selections.from
    }
  });
}

// function aos() {
//   AOS.init();
//   console.log(AOS);
// }

function load() {
  appendVueComp();
  logo();
  // aos();
}

window.onload = load;