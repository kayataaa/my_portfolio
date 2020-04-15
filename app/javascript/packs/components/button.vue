<template>
  <div>
    <button class="a-button" @click="clickEvent">x</button>
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