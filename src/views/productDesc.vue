<template>
  <div>
      <div class="main-container">

            <div class="container">
                        <h1> {{ product.name }} </h1>
                <div class="img-container">

                    <img class="main-img" :src="product.imageLink" alt="main image">
                    <div class="small-img-img">
                        <img :src="product.imageLink" alt="different image view" class="small">
                        <img :src="product.imageLink" alt="different image view" class="small">
                        <img :src="product.imageLink" alt="different image view" class="small">
                    </div>
                </div>

                <div class="product-infomation">
                    <div title="Product Information">
                        <div class="title">
                            {{ product.name }}
                        </div>
                        <p>{{ product.price }}</p>
                        <button href="#" variant="primary">Add to Cart</button>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         </p>
                    </div>
                </div>
                </div>
                <div class="footer-container">
       <Footer :footer='footer' id="footer" />

 </div>
           
            <!-- <div class="product-infomation">
                <h3>Product Detail</h3>
                <p>{{ productDetail.productInf }}</p>
            </div> -->
      </div>

  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
 
export default {
       
   computed:{
       product(){
           return this.$store.state.selectedProduct;
       }
   },
      
     components: {
      Footer
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
    width: 200px;
    padding: 10px;
    background-color: tomato;
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