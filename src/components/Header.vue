<template>
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" :to="{name:'Home'}">
        {{brand}}
      </router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li >
           <router-link :to="{name:'Home'}">
        Home
      </router-link></li>
        <li>
          <router-link :to="{name:'About'}">
        About
      </router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link :to="{name:'Login'}">Login</router-link>
        </li>
        <li>
          <router-link :to="{name:'Register'}">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default ({
  name:"Header",
  props:{
    brand:String,
  }
})
</script>
