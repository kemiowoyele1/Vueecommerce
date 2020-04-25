<template>
  <div>
      <div class="main-container">
              <Header :header='header' id="header" />

            <div class="container">
                        <h1> {{ product.grade }} </h1>
                <div class="img-container">

                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
              <!-- <Slider /> -->
   
            <p id="lorem2">   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         </p>
         
                    </div>
                </div>
                </div>
                <div id="comment">
                    <p>read testimonies from other {{product.grade }} students  <button>  <router-link class="nav-link" to="/comments"> here  </router-link>
     </button></p>
                </div>
                <div class="footer-container">
       <Footer :footer='footer' id="footer" />
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
    background-color: bisque;
    margin: 0;
    padding:0;
    overflow: hidden;
    text-align: center;
}
p{
    margin: 20px 5px;
}
h1{
margin-top:100px;
font-weight: 800;

}
.img-container{
    width: 60%;
    margin: 0;
}

.main-img{
       width: 100%;
    margin-top: 50px;
    height: 60vh;
    display: inline-block;
}
.small-img{
    width: 100%;
    margin: 50px 0;
}
.product-infomation{
    width: 35vw;
    display: inline-block;
    position: absolute;
    left: 60%;
    top: 30vh;

    /* float:right; */

}
.title{
    font-size:30px;
}
.small{
    width: 20%;
    margin:20px 2%;
}
button{
    padding: 10px;
    padding: 10px;
    font-weight: bold;
    color: bisque;
    font-size: 30px;
    border-radius: 15px;
    background-color: tomato;
}
/* #line   {
    height: 10px;
    background-color: rgb(18, 16, 37);
} */
#lorem2{
    display: block;
    color: tomato;
     padding-top: 20px;
  }
  #lorem3{
    display: block;
     padding: 20px;
  }
#more-goods{
    display: block;
      border-top: 10px ridge  rgb(235, 155, 143);
      border-bottom: 10px ridge rgb(235, 155, 143);

     background-color:     rgb(240, 190, 155);


}

#h3{
    font-weight: bold;
}
#img2{
      display: inline-block;
    width: 70px;
    height: 70px;
    margin:20px;
     /* float: left;   */
}

@media only screen and (max-width: 600px) {
  .img-container{
      width: 100vw;
      display: block;

  }
  .product-infomation{
    width: 100vw;
    display: block;
    position: relative;
   margin: 30px 0;
   left: 0;
   top: 0;

    /* float:right; */

}
}
</style>