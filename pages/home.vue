<template>
    <div>
      <h2>index page</h2>
      <ul>
        <li>
          <nuxt-link to="/login">ログインページへ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/authed-route">認証が必要なページ</nuxt-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
