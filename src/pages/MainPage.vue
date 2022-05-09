<template>
  <div>
    <NavMenu :auth="auth"></NavMenu>
    <router-view :auth="auth"></router-view>
    <hr>
    <b-button class="mt-1 mb-3" @click="logout" variant="danger">Logout</b-button>
  </div>
</template>

<script>
import {firebase} from '../firebase/index';
import NavMenu from '../components/NavMenu'

export default {
  name: "MainPage",
  components: {
    NavMenu
  },
  props: {
    auth: Object
  },
  methods: {
    logout(){
      firebase.auth().signOut();
      this.$emit("logout")
    }
  }
}
</script>