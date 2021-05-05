<template>
  <div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
      <form @submit="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Username"
            name="email"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            placeholder="your password"
          />
        </div>
        <button class="btn btn-success">login now</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginContent",
  methods: {
    handleLogin(e){
        e.preventDefault()
        let data = {
            email :  e.target.elements.email.value,
            password :  e.target.elements.password.value
        }
        this.$emit('login-handler', data)
    }
  },
};
</script>