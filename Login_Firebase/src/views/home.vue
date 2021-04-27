<template>
<div class="container">
    <div class="card" style="width: 100%">
    <img class="card-img-top" src="../assets/web.png" alt="Card image cap" />
    <div class="card-body">
        <h1>User Info :</h1>
      <p class="card-title"><strong>votre nom :</strong>  <br> {{ user.displayName }}</p>
      <p class="card-text"><strong>votre email :</strong>  {{ user.email }}</p>
      <button type="sbmite" @click="logOut()" class="btn btn-danger">
        logout
      </button>
    </div>
  </div>
</div>

</template>

<script>

import firebase from "firebase";
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
        });
    },
  },
};
</script>
