<template>
  <div class="m-card">
    <div class="a-picture">
      test
    </div>
    <h2 class="a-title">What's new</h2>
    <h3 class="a-title -sub">2020.04.15 | モーダルを更新しました！</h3>
    <span class="a-title -desc">Ruby on Rails5, slim, scss, jQuery...</span>
  </div>
</template>

<script>
import { gsap, TweenMax } from "gsap";

export default {
  methods: {
    changeLinkColorToClear: function() {
      TweenMax.to('.a-title.-desc', 2, {opacity: 0})
    },
    changeLinkColorTo: function() {
      TweenMax.to('.a-title.-desc', 2, {opacity: 1})
    }
  },
}
</script>

