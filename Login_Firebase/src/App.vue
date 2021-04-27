<template>
  <div id="app">
    <div id="nav"></div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand text-primary" href="#">Youcode Youssoufia</a>
        <!-- <router-link to="/forgot">forgot</router-link> -->
        <form>
          <router-link class="btn btn-primary" to="/">SingUp</router-link> |
          <router-link class="btn btn-primary" to="/login">SingIn</router-link>
          
        </form>
      </div>
    </nav>
    <router-view />
   
  </div>
</template>
<script>
</script>

<style>
body { background-color: #00a8ff;

}
.container {
  background: white;
  width: 50%;
  border: 1px solid white;
  border-radius: 10px;
  padding: 7%;
  margin-top: 100px;
}
</style>
