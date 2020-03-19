<template>
  <div class="container">
    <h1>Create Account</h1>

    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form v-on:submit.prevent>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="firstName"
              v-model="first_name"
              aria-describedby="emailHelp"
              placeholder="First Name"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="lastName"
              v-model="last_name"
              aria-describedby="emailHelp"
              placeholder="Last Name"
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Password"
            />
             <div v-if="password.length > 1 && password.length <6" class="text-danger">Password length should not be less than 6</div>
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              v-model="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
          <div v-if="password !=confirm_password" class="text-danger">Password do not match</div>
          <button @click="register()" type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    register() {
      console.log(`
            First Name: ${this.first_name}
            Last Name: ${this.last_name}
            Email: ${this.email}
            Password: ${this.password}
            
            
            `);
    }
  }
};
</script>

<style>
</style>