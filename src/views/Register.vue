<template>
<div>
 <Header :header='header' id="header" />

  <div class="sign-up-container">
    
    <h1 class="register-heading">Create Account</h1>

    
        <form v-on:submit.prevent>
          <div >
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
          <div>
            <input
              type="password"
        
              id="password"
              v-model="password"
              placeholder="Password"
            />
             <div v-if="password.length > 1 && password.length <6" class="text-danger">Password length should not be less than 6</div>
          </div>

          <div class="form-group">
            <input
              type="password"
       
              id="confirmPassword"
              v-model="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
          <div v-if="password !=confirm_password" class="text-danger">Password do not match</div>
          <button @click="register()" type="submit" class="register">Register</button>
           <div>
             <p class="log-in-text">
               already have an account? Log in
             </p>
           </div>
           <div>
                    <router-link class="nav-link" to="/login" id="sign-in">  
               Here
                 </router-link>
           </div>
         
           
        </form>
        </div>
        <div class="footer-container">
       <Footer footer='footer' id="footer" />
</div>
      
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

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
   
  },
  components: {
    Header,
      Footer
  }
};
  
</script>

<style>
.sign-up-container{
  min-height: 100vh;
  top: 100px;
  padding: 50px;

}

.log-in-text{
  font-size: 20px;
  font-weight: 500;
  margin: 20px;
   color: tomato;

}
input{
  width: 80%;
  font-size: 40px;
  color: tomato;
  background-color: antiquewhite;
  padding: 7px;
  border-radius: 20px;
  margin: 10px;
}
.register , #sign-in{
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  color: antiquewhite;
  background-color: tomato;
  border-radius: 10px;
  box-shadow: 3px 3px 3px brown;
  border:2px solid  antiquewhite;
  margin: 30px;
  text-decoration: none;
}
.register-heading{
  font-size: 40px;
  font-weight: 900;
  color: tomato;
  text-shadow: 1px 1px antiquewhite, 2px 2px antiquewhite,
               -1px -1px antiquewhite, -2px -2px antiquewhite;
 
}

@media only screen and (max-width: 600px) {
  
.sign-up-container{
  min-height: 100vh;
  top: 100px;
  padding: 50px;

}

.log-in-text{
  font-size: 20px;
  font-weight: 500;
  margin: 20px;
   color: tomato;

}
input{
  width: 86%;
  font-size: 18px;
  color: tomato;
  background-color: antiquewhite;
  padding: 7px;
  border-radius: 20px;
  margin: 10px;
}
.register , #sign-in{
  padding: 6px;
  font-size: 25px;
  font-weight: bold;
  margin: 20px;
}
.register-heading{
  font-size: 30px;
  font-weight: 600;
 
}

}
</style>