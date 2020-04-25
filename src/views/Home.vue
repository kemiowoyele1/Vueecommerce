<template>
  <div id="container">
     <!-- <div class="header-container"> -->
       <Header :header='header' id="header" />

 <!-- </div> -->
     <!-- <div class="display-container"> -->
       <div class="categories">
        <Value v-for="value in values" :value="value" :key="value.id" id="value-card"/>
       </div>
       
     <div  class="display-card">
      <!-- <Slider  :slide="moving" :key="moving.id" id="slider"/> -->
      </div>
      <!-- </div> -->
           <div class="choose-class-title">choose your class</div>
      <div class="choose-class" >
   
<div v-for="product in allProducts"  :key="product.id" id="car-cover">
    <a href="#" @click="goToProduct(product)">
       
          <div id="car-container" >
	          	<div id="top-left"> <div id="top-left-inner"></div></div>
    <div id="top-right"><div id="top-right-inner"> <div id="driver"></div> </div></div>
    <div id="left-side"></div>
	<div id="car-body"> 
    <div id="text-display">{{product.grade}}</div>    
    </div>
    <div id="right-side"></div>
    <div id="fender-cover"></div>
    <div id="right-tyre" class="tyre"></div>
    <div id="left-tyre" class="tyre"></div>
    <div id="fender" ></div>
    <div id="front-light" class="car-light"></div>
    <div id="back-light" class="car-light"></div>


  
</div>
    </a>
	</div>
      </div>
          <!-- <Gradeclass  :gradeclass="gradeclass" :key="gradeclass.id" id="gradeclass"/> -->
     <!--  <ul >
      <li v-for="product in allProducts"  :key="product.id">
         <a href="#" @click="goToProduct(product)">
         <div id="profile" >
           
    <div class="left">
      
      <img :src="product.imageLink" id="img2" />
    </div>
    <div class="right">

      <p>{{product.name}}</p>
      <small>{{product.price}}</small>
         <button class="buy">buy now</button>
  
  
    </div>
  </div>
  </a> -->
      <!-- </li>
     
  </ul>
   </div> -->
 <div class="footer-container">
       <Footer :footer='footer' id="footer" />
</div>
 </div> 
      
      
</template>

<script>

import Value from '@/components/ProductList.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Gradeclass from '@/components/Grade.vue'
export default {
  name: 'Home',
  data(){
    return{
     
      values: [
         {name: 'quality learning experience'},
         { name:'interactive and engaging'},
         { name:'fun activities to learn with'},
         { name:'our kids enjoy learning'},
         {name:'bring the best out in your kids'}

      ],
       moving: [
         {
       
           imageLink: require('./../assets/slide1.jpg')
       },
       {
       
           imageLink: require('./../assets/slide2.jpg')
       },
       {
       
           imageLink: require('./../assets/slide3.jpg')
       },
       {
       
           imageLink: require('./../assets/slide4.jpg') 

       }
      
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
    Value,
    Slider,
    Header,
    Footer,
    Gradeclass
  }
}
</script>
<style scoped>
#container{
   background: tomato;
   background: radial-gradient( rgb(230, 214, 206) 10%, 30%, antiquewhite 51%, white 100%);
   background-size:5px 5px;
   background-repeat: repeat;
}
body{
   background: tomato;
   background: radial-gradient( rgb(230, 214, 206) 10%, 30%, antiquewhite 51%, white 100%);
   background-size:5px 5px;
   background-repeat: repeat;

}
.choose-class{
  background-color: tomato;
  padding: 15px;
  border: 10px outset rgb(197, 104, 92);
  border-radius:30px;
  width :96%;
  margin:10px 2%;
  margin-top: -35px;
  padding: 30px;
  box-shadow: 2px 2px 5px rgb(136, 127, 114),-2px -2px 5px rgb(136, 127, 114);
  text-align: center;

}

.choose-class-title{
  padding:15px;
  color:  rgb(35, 84, 148);
  background: antiquewhite;
  margin: auto;
  margin-top: 15px;
  font-weight: 900;
  font-size: 40px;
  border-top: 5px solid silver;
  border-bottom: 5px solid silver;
  border-right: 5px solid white;
  border-left: 5px solid white;
  border-radius: 30px;
  text-shadow: 1px 1px tomato,-1px -1px tomato;
  position: relative;
  width: fit-content;
    z-index: 200; 
    -moz-transform: skew(40deg, 0deg);
-webkit-transform: skew(40deg, 0deg);
-o-transform: skew(40deg, 0deg);
-ms-transform: skew(40deg, 0deg);
transform: skew(40deg, 0deg);
}
#container{
  background-color:  rgba(250, 253, 253, 0.98);
}

#value-card{
  display: inline;
  margin:5px;
}
.display-card{
   background-image:url(../assets/slide1.jpg) ;
   background-repeat: no-repeat;
   background-size: 100% 100%;
   height: 45vh;
   margin: 10px auto;
   width: 60%;
   display: inline-block;
 
}
.categories{
 
background-color: tomato;
border: 4px ridge rgb(192, 45, 19);
border: 4px none;
padding: 20px;
box-shadow: 2px 2px 6px rgb(92, 22, 10);
}


.footer-container{
  margin-top: 50px;
}

@media only screen and (max-width: 600px) {
  .categories {
 width:80vw;
 margin: 20px 10% ;
 position: relative;
 
  }
 .home {
 width:80vw;
 margin-left: 10% ;
 position: relative;
 float: none;
 
  }
  
  #value-card{
  display: block;
  width:96%;
  margin-left:2%;
  margin-top: 3px;
}
}
</style>
