<template>
  <div>
    <LoginContent @login-handler="loginHandler" />
  </div>
</template>
<script>
import LoginContent from "@/components/LoginContent.vue";

export default {
  name: "Home",
  components: {
    LoginContent,
  },
  methods: {
    loginHandler(data){
        console.log(data)
    }
  },
};
</script>