<template>
  <div>
    <RegisterContent @handle-register="registerHandler" />
  </div>
</template>
<script>
import RegisterContent from "@/components/RegisterContent.vue";
import gql from "graphql-tag";

let REGISTER_QUERY = gql`
  mutation(
    $username: String!
    $email: String!
    $password1: String!
    $password2: String!
  ) {
    register(
      username: $username
      email: $email
      password1: $password1
      password2: $password2
    ) {
      token
    }
  }
`;
export default {
  name: "Home",
  components: {
    RegisterContent,
  },
  methods: {
    registerHandler(data) {
      this.$apollo.mutate({
          mutation:REGISTER_QUERY,
          variables:data,
          update: (cache, {data})=>{
              console.log(data)
          }
      })
    },
  },
};
</script>