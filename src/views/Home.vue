<template>
  <div id="container">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <!-- <div class="card"> -->
      
       <div class="categories">
        <Product v-for="product in products" :product="product" :key="product.id"/>
        <div id="ads"></div>
       </div>
     <!-- <Product class="list-group-item" v-for="product in products">{{task.title}}</li> -->
     <div  class="home">
       <!-- <h3 class="h3"> dresses</h3> -->
      <Slider  :slide="moving" :key="moving.id" id="slider"/>
       <!-- <Slider/> -->
    <!-- <Profile v-for="person in fellows" :user="person" :key="person.id"/> -->
        <!-- <Slider /> -->
    <ul >
      <li v-for="product in allProducts"  :key="product.id">
         <a href="#" @click="goToProduct(product)">
         <div id="profile" >
           
    <div class="left">
      
      <img :src="product.imageLink" id="img2" />
    </div>
    <div class="right">

      <p>{{product.name}}</p>
      <small>{{product.price}}</small>
         <!-- <button class="buy">buy now</button> -->
             <!-- <router-link class="nav-link" to="/productDesc">buy now </router-link> -->
         <button class="buy">buy now</button>
  
  
    </div>
  </div>
  </a>
      </li>
     
  </ul>
    
    <!-- <Office v-for="dress in dresses" :dress="dress" :key="dress.id"/>
    <Children v-for="girl in girls" :girl="girl" :key="girl.id"/>
   <Short v-for="short in shorts" :short="short" :key="short.id"/>
 <Bridal v-for="bridal in bridals" :bridal="bridal" :key="bridal.id"/> -->
  </div>
 <div class="footer-container">
       <Footer :footer='footer' id="footer" />

 </div>


    
    </div>
      
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Profile from '@/components/Profile.vue'
// import Office from '@/components/Office.vue'
// import Children from '@/components/Children.vue'
// import Short from '@/components/Short.vue'
// import Bridal from '@/components/Bridal.vue'
import Product from '@/components/ProductList.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  data(){
    return{
     
      products: [
         {name: 'Aso-Oke'},{ name:'Men Native Attire'},{ name:'Gele'},{name:'Traditional Kids'},{ name:'Traditional Bridal'}

      ],
       moving: [
         {
       
           imageLink: "https://ae01.alicdn.com/kf/HTB15NFUXcfrK1Rjy1Xdq6yemFXab/African-aso-oke-headtie-auto-asoebi-gele-headwear-flower-decorate-african-turban-headwraps.jpg"
       },
       {
       
        imageLink: "https://www.turbantempest.com/wp-content/uploads/2019/10/Complicated-Aso-Oke.png" 
       },
       {
        
         imageLink: "https://www.bellanaija.com/wp-content/uploads/2018/10/aso_ebi-asoebi-asoebibella1.1804635F-8745-4BB1-B67A-836B5A895D05.jpg" 
      },
       {
       
         imageLink: "https://i2.wp.com/www.od9jastyles.com/wp-content/uploads/2020/01/Top-10-Gorgeous-Bride-Aso-Oke-and-Makeup-Styles-for-Event-9.jpg?fit=469%2C368&ssl=1" 
      },
      ]
     
    }
  },
    computed: {
        allProducts(){
            return this.$store.state.products;
        }
    },
    methods: {
      goToProduct(product){
           this.$store.commit("setSelectedProductValue", product);
            this.$router.push({ path: "/productDesc"});
                }
    },
  components: {
    // HelloWorld,
    // Profile,
    // Office,
    // Children,
    // Short,
    // Bridal,
    Product,
    Slider,
    Footer
  }
}
</script>
<style scoped>
 #profile {
 width: 28%;
 height: 400px;
 max-height: 450px;
 border-radius: 5px;
  padding: 10px;
  text-align: left;
  /* display: inline; */
  float: left;
  margin: 30px  2%  30px 0;
  box-shadow:2px 3px 2px silver;
  border: 5px solid rgba(73, 62, 83, 0.063);

}
li{
  list-style: none;
}
div.left {
  float: left;
  width: 100%;
}
#img2{
  width: 100%;
  height: 300px;

}
.buy{
  display: block;
  margin: 2px auto;
  background: rgb(35, 34, 49);
  color: white;
  text-shadow: 0.5px 0.5px rgb(160, 114, 204), -0.5px -0.5px rgb(160, 114, 204);
   padding: 10px;

}
.buy:hover{
   background: rgb(39, 71, 87);
  color: rgb(130, 194, 194);
  font-weight: bolder;
  padding: 12px;

}
@media only screen and (max-width: 600px) {
  #profile {
    width: 100%;
    margin: 0;
  }
}
/* div.right {
  float: right;
  width: 65%;
  margin-left: 5px;
} */
#container{
  background-color:  rgba(250, 253, 253, 0.98);
}
.home{
  /* display: inline; */
  width: 70%;
  float: right;
 
  }
.home{
  margin-top: 100px;
  

}
.categories{
  /* display: inline; */
width: 25vw;
margin:100px 20px ;
position:fixed;
left: 0;
}

#ads{
width: 100%;
height: 35vh;
margin:30px 0;
/* background-color:brown; */
animation-name: ads;
 animation-duration: 50s;
  animation-timing-function: ease-in-out;
  /* animation-delay: 5s; */
  animation-iteration-count: infinite;
  /* animation-fill-mode: forwards; */
  background-size: 100% 100%;
  background-repeat: no-repeat;

}
.footer-container{
  margin-top: 50px;
}
@keyframes ads {
   0% {background-image:url('https://i.ytimg.com/vi/bhzCSOyOU_4/maxresdefault.jpg')}
 20% {background-image:url('https://cdn.shopify.com/s/files/1/0045/1995/2484/products/Aso-oke-headtie-with-beads-aso-oke-Nigerian-headtie-aso-ebi-African-gele-auto-gele-African.jpg_640x640_09897bf8-7bd7-4df2-96a3-b32b8c2b6785_large.jpg?v=1580839926')}
 40% {background-image:url('data:image/jpeg;base64,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')}
 60% {background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8QyKGm1-5c7Q6CPcHiJuozA_hzjTlaIC5MD0IdCbnTMCO-7xQ')}
 80% {background-image:url('https://i2.wp.com/clipkulture.com/wp-content/uploads/2019/06/rmscr-1560193651gkn48.jpg?fit=512%2C676&ssl=1')}
100% {background-image:url('https://i0.wp.com/clipkulture.com/wp-content/uploads/2019/09/rmscr-1568053120k84ng.jpg?fit=235%2C291&ssl=1')}

 } 
@media only screen and (max-width: 600px) {
  .categories {
 width:100%;
 margin: 0 ;
 position: relative;
 
  }
  
}
</style>
<style>
.footer-container{
     background-color: rgb(35, 34, 49);
     display: inline-block;
     z-index: 300;
     position: relative;
     width: 110vw;
     margin-left: -10%;
   }
   #footer{
     width: 100%;
   }
   
</style>