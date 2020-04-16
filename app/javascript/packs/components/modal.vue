<template>
  <div class="m-modal__bkground">
    <div class="m-modal">
      What's new
      <button class="a-button" @click="clickEvent">x</button>
      <h2 class="a-title">2020.04.16 | 記事ページを追加しました！</h2>
      <span class="a-title">Rails側から記事作成(管理者用)ページを追加しました。</span>
      ----
      <h2 class="a-title">2020.04.15 | モーダルを更新しました！</h2>
      <span class="a-title">Vue.jsを使ったモーダルを追加しました。</span>
      ----

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