<template>
  <div class="m-modal__bkground">
    <div class="m-modal">
      Sample
      <button class="a-button" @click="clickEvent">x</button>
    </div>
  </div>
</template>

<script>

export default {
  methods :{
    clickEvent(event){
      this.$emit('from-child', 'false')
    }
  }
}
</script>