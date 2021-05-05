<template>
  <div id="app">
    <div id="nav">
     <Header brand="Todo"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default ({
  components:{
    Header
  }
})
</script>


<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
