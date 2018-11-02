<template>
    <div>
      <h2>ログインページ</h2>
      <p>
        <button type="button" @click="login">ログイン</button><br>
        <nuxt-link to='/home'>トップページへ戻る</nuxt-link>
      </p>
    </div>
</template>

<script>
import Cookies from 'universal-cookie'

export default {
  name: "login",
  methods: {
    login() {
      const cookies = new Cookies()
      cookies.set('credential', true, {maxAge: 90})
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
