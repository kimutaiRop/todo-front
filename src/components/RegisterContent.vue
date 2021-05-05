<template>
  <div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
      <form @submit="handleRegister">
        <div class="form-group">
          <label>Username</label>
          <input
            type="username"
            class="form-control"
            placeholder="Username"
            name="username"
          />
        </div>
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
            name="password1"
            type="password"
            class="form-control"
            placeholder="your password"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            name="password2"
            type="password"
            class="form-control"
            placeholder="confirm your password"
          />
        </div>
        <button class="btn btn-success">login now</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterContent",
  methods: {
      handleRegister(e){
          e.preventDefault();
          let data = {
              username : e.target.elements.username.value,
              email :  e.target.elements.email.value,
              password1 :  e.target.elements.password1.value,
              password2 :  e.target.elements.password2.value
          }
          this.$emit("handle-register", data)
      }
  }
};
</script>