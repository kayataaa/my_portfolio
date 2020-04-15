<template>
  <div id="app" class="m-card -new">
    <div class="a-picture">
      <img v-bind:src="require('../assets/images/sakura.jpg')"/>
    </div>
    <h2>What's new</h2>
    <button class="a-button" @click="clickEvent">x</button>
    <modal @from-child="handler()" v-show="show"></modal>
  </div>
</template>


<script>
import modal from 'packs/components/modal.vue'
import article from 'packs/components/article.vue'

export default {
  data: function () {
    return {
      message: "Hello Vue!",
      show: false
    }
  },
  components: {
    'modal': modal,
    'card': article
  },
  methods: {
    handler: function() {
      this.show = false
    },
    clickEvent(event){
      this.show = true
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
