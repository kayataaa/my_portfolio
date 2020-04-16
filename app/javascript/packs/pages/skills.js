import { gsap, TweenMax } from "gsap";
import Vue from 'vue'
import SkillCard from '../components/skillCard.vue'

function appendVueComp() {
  var modalTarget = document.body.querySelectorAll('.modal-target')

  for (var i = 0; i < modalTarget.length; i++) {
    modalTarget[i].appendChild(new Vue({
      render: h => h(SkillCard)
    }).$mount().$el);
  }
}

function load() {
  appendVueComp();
}

window.onload = load;

