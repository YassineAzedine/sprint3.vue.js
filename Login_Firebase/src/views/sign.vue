<template>
  
      <div class="container">
       <h1 class="text-center" >Sing Up</h1>
  
  <form @submit.prevent ='userRegistration' >
       <div class="form-group">
      <label for="text">Full Name:</label>
      <input type="text" class="form-control" v-model="user.name" id="text"  name="text">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" v-model="user.email" id="email"  name="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" v-model="user.password" id="pwd" name="password">
    </div>
   
    <button type="submit"  class="btn btn-primary form-control ">Sing Up </button>
    <div class="form" >
    <router-link class="float-right" to="/login"> SingIn ?</router-link>
    <span class="font-weight-light float-right ">Already registered </span>
    </div>
    
    
  </form>
</div>
</template>

<script>
import firebase from 'firebase'
export default{
  data(){
    return{
      user:{
        name:'',
        email:'',
        password:''
      }
    }
  },
  methods:{
                userRegistration(){
                  firebase.auth()
                  .createUserWithEmailAndPassword(this.user.email,this.user.password)
                  .then((res)=>{
                    res.user.updateProfile({

                   displayName: this.user.name
                    }).then(() =>{
                      this.$router.push('/login')
                      
                    })
                  }).catch((error)=>{
                    alert(error.message)
                  })
                }
  }

}

</script>

<style>

</style>