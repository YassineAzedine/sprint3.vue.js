<template>

  <div class="container">
       <h1 class="text-center" >SingIn</h1>
         <form @submit.prevent='userLogin' >
      
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" v-model="user.email" id="email"  name="email">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" class="form-control" v-model="user.password" id="password" name="password">
    </div>
   
    <button  type="submit"  class="btn btn-primary form-control ">Sing In</button>
           <divc class="form" >     <router-link class ="float-right" to="/forgot">forgot Password ?</router-link> </divc>
                
  </form>
       </div>
</template>

<script>
import firebase from 'firebase'
export default {
  
  data() {
    return{
         user:{
           email :'',
           password:''
         }
    }

},
   methods:{
     userLogin(){
       firebase.auth()
       .signInWithEmailAndPassword(this.user.email,this.user.password)
       .then(()=>{
         this.$router.push('/home')

       })
            .catch((error)=>{
         alert(error.message)
       })
     }
   }

}
</script>

<style>

</style>