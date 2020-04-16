import { gsap, TweenMax } from "gsap";
import Vue from 'vue'
import Card from '../components/card.vue'

function appendVueComp() {
  var modalTarget = document.body.querySelectorAll('.modal-target')

  for (var i = 0; i < modalTarget.length; i++) {
    modalTarget[i].appendChild(new Vue({
      render: h => h(Card)
    }).$mount().$el);
  }
}

function load() {
  appendVueComp();
}

window.onload = load;

