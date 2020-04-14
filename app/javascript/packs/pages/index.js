import { gsap, TweenMax } from "gsap";
import Vue from 'vue'
import App from '../../app.vue'


function appendVueComp() {
  const app = new Vue({
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)
}

function logo() {
  const tl = gsap.timeline({repeat: -1, repeatDelay: 0.5});
  const logo = document.querySelectorAll(".a-logo");
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

function load() {
  appendVueComp();
  logo();
}

window.onload = load;