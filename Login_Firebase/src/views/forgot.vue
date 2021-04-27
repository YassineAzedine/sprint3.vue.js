<template>
  <div class="container">
    <h1 class="text-center">Forgot</h1>
    <form @submit.prevent="forgetPass" class="form-group">
      <label for="email">Email:</label>
      <input
        type="email"
        v-model="user.email"
        class="form-control"
        id="email"
        name="email"
      />
      <br />
      <button type="submit" class="btn btn-primary form-control">
        Reset Password
      </button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {
        email: "",
      },
    };
  },
  methods: {
    forgetPass() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert("check your email");
          this.user = {
            email: "",
          };
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style>
</style>