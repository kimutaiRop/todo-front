<template>
  <div class="home">
    <HomePage :todos="todos" msg="Welcome to this is home page"/>
  </div>
</template>

<script>

import HomePage from '@/components/Home.vue'
import gql from 'graphql-tag'

let QUERY = gql`
query{  
  todos{
    id
    dateTime
    place
    title
  }
}`
export default {
  name: 'Home',
  data(){
    return{
      todos:[]
    }
  },
  components: {
    HomePage
  },
  apollo:{
    todos:{
      query:QUERY
    }
  }

}
</script>
