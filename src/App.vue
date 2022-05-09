<template>
  <div id="app">
    <SignInPage @log-in="setAuth" v-if="!auth"></SignInPage>
    <MainPage @logout="auth=null" :auth="auth" v-else></MainPage>
  </div>
</template>

<script>
import SignInPage from './pages/SignInPage.vue'
import MainPage from "@/pages/MainPage";
import router from "@/router";

export default {
  name: 'App',
  router,
  components: {
    MainPage,
    SignInPage
  },
  data() {
    return {auth: null,}
  },
  methods: {

    setAuth(auth){
      console.log(auth)

      this.auth = auth;
    }
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
