<template>
  <div class="container">
    <h1>Login Page</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form v-on:submit.prevent>
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
            placeholder="Password" />
          </div>

          <button @click="login()" event.prevent class="btn btn-primary">Login</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
    <p>{{sitename}}</p>
    <p>this a a {{page}} page</p>
  </div>

</template>

<script>
import router from '../router/'
export default {
  name: "Login",
  data() {
    return {
        email: '',
        password: '',

    };
  },

  methods: {
      login(){
          console.log(`
          Email: ${this.email} 
          Password: ${this.password}
          `)
          router.push('/dashboard')
      }
  },
   computed: {
    sitename(){
     return this.$store.state.siteName;
    },
    page() {
      return  this.$store.state.pageName;
    }
  }
};
</script>

<style scoped>
p{
  font-size:30px;
  color: blue;
}
</style>