import Vue from 'vue'
import WorkCardPublic from '../components/workCardPublic.vue'
import WorkCardPrivate from '../components/workCardPrivate.vue'

function appendVueComp() {
  var modalTarget = document.body.querySelectorAll('.m-card.-workTarget')

  for (var i = 0; i < modalTarget.length; i++) {
    modalTarget[i].appendChild(new Vue({
      render: h => h(WorkCardPublic)
    }).$mount().$el);
  }
}

function load() {
  appendVueComp();
}

window.onload = load;

