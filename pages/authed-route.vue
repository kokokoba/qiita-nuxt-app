<template>
  <div>
    <h2>認証が必要なページ</h2>
    <p>
      Cookieの'credential'値がTruthyな場合のみアクセス可能です<br>
      <nuxt-link to="/home">トップページへ戻る</nuxt-link>
    </p>
  </div>
</template>

<script>
    export default {
        name: "authed-route"
    }
</script>

<style scoped>

</style>
