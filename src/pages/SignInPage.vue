<template>
  <div>
    <b-button v-b-modal.SignInModal>Sign-In With E-mail</b-button>
    <b-modal id="SignInModal" cancel-disabled ok-disabled>
      <form>
        <input placeholder="E-mail">
        <input placeholder="Password">
        <button type="submit" @click="loginWithEmail">Sign-In</button>
      </form>
    </b-modal>
    <br>
    <b-button @click="loginWithGoogle">Sign-In With Google</b-button>
  </div>
</template>

<script>
import {firebase,db} from '../firebase/index'
import User from "@/models/User";


export default {
name: "SignInPage",
data() {
  return {email: "email", password: "password", auth: null,}
},
methods: {
    loginWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
          .catch(function (error){
            // let errorCode = error.code;
            // let errorMessage = error.message;

            console.error('Error signing in: ', error);
          })


    },

    loginWithEmail(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      this.createUserDoc()
    },

    createUserDoc(){
      db.collection("users").doc(this.auth.uid).get().then(snapshot => {
        if (!snapshot.data()){
          db.collection("users").doc(this.auth.uid).set({displayName: this.auth.displayName, email: this.auth.email, uid: this.auth.uid})
        }
      })
    }
},

  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        // let displayName = user.displayName;
        // let email = user.email;
        // let emailVerified = user.emailVerified;
        // let photoURL = user.photoURL;
        // let isAnonymous = user.isAnonymous;
        // let uid = user.uid;
        // let providerData = user.providerData;

        console.log('Signed in as: ', user);

        //store user in app
        this.auth = new User(user);
        this.createUserDoc()
      } else {
        // User is signed out.
        console.log('Not signed in.');

        this.auth = null;
      }
      console.log("state changed", this.auth)
      this.$emit("log-in", this.auth)
    });
  },

}
</script>