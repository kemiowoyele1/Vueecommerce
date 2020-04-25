<template>
  <div>
  <div id="sign-page" >
     <Header :header='header' id="header" />
<div class="sign-up-container">
    <div>
       <input type="email" value="email" placeholder="email">
       </div>
       <div>
       <input type="password"  placeholder="password">
       </div>
       <div>
           <button  type="submit" class="register">login</button>
   </div>
   <div>
             <p class="log-in-text">
               Dont have an account? create an account.
             </p>
           </div>
                    <router-link class="nav-link" to="/register" id="sign-in">  
               Here
                 </router-link>
            
            
           </div>
  </div>
  <div class="footer-container">
       <Footer footer='footer' id="footer" />
</div>
  </div>
 
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
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
  },
   components: {
    Header,
      Footer
  }
};
</script>

<style scoped>
.row{
  margin-top:300px;
  height: 200px;
  width: 200px;
  background: violet;
 }
 /*
p{
  font-size:30px;
  color: tomato;
} */
</style>