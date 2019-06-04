<template>
<div class="container">
    <div class="row">
      <v-btn color="error" fab large dark>
              <v-icon>alarm</v-icon>
            </v-btn>
      <h2 style="text-align:center">Connect with your Social Media Account!</h2>

      <div class="col">
        <button @click="signupFacebook" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Connect via Facebook
         </button>
        <button @click="signupGoogle" class="google btn"><i class="fa fa-google fa-fw">
          </i> Connect via Google
        </button>
      </div>

      
    </div>
</div>

</template>

<script>
  import firebase from 'firebase';
  import axios from 'axios';

  export default {
    name: 'login',

    methods: {
      
      signupGoogle: function() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken
          // ...
        }
        // The signed-in user info.
        var user = result.user
        this.$router.replace('orderfields')
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          // ...
        });
    },

    signupFacebook: function() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      this.$router.replace('orderfields')
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    }
  }
}
</script>