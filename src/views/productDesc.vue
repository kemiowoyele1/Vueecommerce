<template>
  <div>
      <div class="main-container">
              <Header header='header' id="header" />

            <div class="container">
                        <h1> {{ product.grade }} </h1>
             <div class="choose-subject">CHOOSE SUBJECT</div>
                </div>
                <div class="subjects-container">
                    <router-link  to="/levels" >  
                <div id="math" class="subjects">MATHEMATICS</div>
                 </router-link>
                     

                  <router-link  to="/levels">  
                  <div id="english" class="subjects">ENGLISH LANGUAGE</div>
               </router-link>
                  
                  
                </div>
                </div>
                <div id="comment">
                    <p>read testimonies from other {{product.grade }} students  <button>  <router-link class="nav-link" to="/comments"> here  </router-link>
     </button></p>
                </div>
                <div class="footer-container">
       <Footer footer='footer' id="footer" />
</div>
            
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
 
export default {
           methods: {
      goToProduct(product){
           this.$store.commit("setSelectedProductValue", product);
            this.$router.push({ path: "/productDesc"});
                }
    },
    
computed: {
        allProducts(){
            return this.$store.state.products;
        },
    
       product(){
           return this.$store.state.selectedProduct;
       }
   },
      
     components: {
      Footer,
      Header
      } 
      }
</script>

<style scoped>

  
.main-container{
    width: 100vw;
    min-height: 100%;
    margin-top: 300px;
    margin: 0;
    padding:0;
    overflow: hidden;
    text-align: center;
}
p{
    margin: 20px 5px;
}
h1{
margin-top:20px;
font-size:50px;
font-weight: 800;
color:darkslateblue;

}
.title{
    font-size:30px;
}
.subjects-container{
    display: grid;
    grid-template-columns: 50% 50%;
 height:200px;
}
.subjects{
    padding: 20px;
      background-image: url(../assets/name.png);
    background-size: 100% 100%;
     width: 80%;
     font-size: 40px;
     font-weight: 900;
     color:tomato;
     text-shadow:1px 1px darkslateblue;
       animation: type 1s steps(32);
    margin: 20px auto;
     overflow: hidden;
       border-top:10px solid rgb(224, 116, 97);
       border-bottom:10px solid rgb(224, 116, 97);
    border-left:10px solid tomato;
    border-right:10px solid tomato;
    border-radius: 5px;
    box-shadow: 2px 2px rgba(65, 39, 36, 0.616),-2px -2px rgba(68, 38, 31, 0.774),
                5px 5px 5px  rgba(65, 39, 36, 0.616),-5px -5px  5px rgba(68, 38, 31, 0.774);
  

}
button{
    padding: 10px;
    padding: 10px;
    font-weight: bold;
    color: bisque;
    font-size: 30px;
    border-radius: 15px;
    background-color: tomato;
     text-decoration: none;
  
}

	.choose-subject {
       animation: type 2s steps(32);
       overflow: hidden;
       white-space: nowrap;
       font-family: consolas;
       text-align: center;
       width: fit-content;
       font-size: 40px;
       color: tomato;
       font-weight: 600;
       text-shadow: 1px 1px darkslateblue, -1px -1px darkslateblue;
       margin-left: 50px;
       }
	@keyframes type {
		0%{
			width: 0ch;
		}
		100% {
			width: 50%;
		}
	}

     a{
        text-decoration: none;

    }
</style>