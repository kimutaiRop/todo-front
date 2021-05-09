<template>
  <div>
    <div v-for="err of errors" :key="err.code">
      {{err.message}}
    </div>
    <LoginContent @login-handler="loginHandler" />
  </div>
</template>
<script>
import LoginContent from "@/components/LoginContent.vue";
import gql from "graphql-tag";

const LOGIN_QUERY = gql`
  mutation($email: String!, $password: String!) {
    tokenAuth(password: $password, email: $email) {
      token
      success
      errors
    }
  }
`;
export default {
  name: "Home",
  components: {
    LoginContent,
  },
  data(){
    return{
      errors:[]
    }
  },
  methods: {
    loginHandler(data) {
      this.$apollo.mutate({
        mutation: LOGIN_QUERY,
        variables: data,
        update: (cache, { data }) => {
          console.log(data)
          if(!data.tokenAuth.errors){
            localStorage.setItem("token",data.tokenAuth.token)
          }else{
            let errors = []
            for(let e of data.tokenAuth.errors.nonFieldErrors){
              errors.push(e)
            }
            this.errors = errors
          }
          }
          
      });
    },
  },
};
</script>