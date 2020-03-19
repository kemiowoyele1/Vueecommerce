<template>
  <div >
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <!-- <div class="card"> -->
      
       <div class="categories">
        <Product v-for="product in products" :product="product" :key="product.id"/>
       </div>
     <!-- <Product class="list-group-item" v-for="product in products">{{task.title}}</li> -->
     <div  class="home">
       <!-- <h3 class="h3"> dresses</h3> -->
      <Slider  :slide="moving" :key="moving.id"/>
       <!-- <Slider/> -->
    <Profile v-for="person in fellows" :user="person" :key="person.id"/>
        <!-- <Slider /> -->
    
    
    <Office v-for="dress in dresses" :dress="dress" :key="dress.id"/>
    <Children v-for="girl in girls" :girl="girl" :key="girl.id"/>
   <Short v-for="short in shorts" :short="short" :key="short.id"/>
 <Bridal v-for="bridal in bridals" :bridal="bridal" :key="bridal.id"/>
     </div>
    </div>
      
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Profile from '@/components/Profile.vue'
import Office from '@/components/Office.vue'
import Children from '@/components/Children.vue'
import Short from '@/components/Short.vue'
import Bridal from '@/components/Bridal.vue'
import Product from '@/components/ProductList.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  data(){
    return{
      fellows: [ 
        {
        name: "floral embroided v-neck dress",
        price: "₦50000",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRIhR_xxP-1PoSZJRS22uk59ctdU9_lscIkggr64F2wexoz9OZ"
        },
      {
       name:"red embroided v-neck dress",
        price: "₦50000",
        imageLink: "https://www.xdressy.com/uploads/product/1/7/17863/off-the-shoulder-two-piece-red-satin-mermaid-prom-gown-1.jpg" 
      },
      {
        name: "red embroided v-neck dress",
        price: "₦50000",
         imageLink: "https://www.jovani.com/image/catalog/prom-dresses/55634-RED.jpg" 
      },
       
      ],
      dresses: [ 
       {
        name: " Grey Winter Office Wear",
        price: "₦50000",
         imageLink: "https://dqzrr9k4bjpzk.cloudfront.net/images/9497261/618095184.jpg" 
      },
      {
        name: "custom made office wear",
        price: "₦50000",
         imageLink: "https://dqzrr9k4bjpzk.cloudfront.net/images/9497261/613908881.jpg" 
      },
      {
        name: "favorite red office dress",
        price: "₦50000",
         imageLink: "https://dqzrr9k4bjpzk.cloudfront.net/images/9497261/572043406.jpg" 
      },
       
      ],
     girls: [ 
       {
         name: "custom made dress for girls",
        price: "₦50000",
         imageLink: "https://olist-uc.feednews.com/upload/20200226/nclf1kd1on5.jpg" 
      },
      {
       name: "custom made dress for girls",
        price: "₦50000",
         imageLink: "https://olist-uc.feednews.com/upload/20200226/ncl1u1wwgle.jpg" 
      },
      {
        name: "custom made dress for girls",
        price: "₦50000",
         imageLink: "https://ae01.alicdn.com/kf/HTB1krkDcWmWQ1JjSZPhq6xCJFXan.jpg?size=104159&height=1066&width=800&hash=fb3200141ef8bd453466e3f250cc0b6b" 
      },
       
      ],
     
      shorts: [ 
       {
         name: "custom made dress for girls",
        price: "₦50000",
         imageLink: "https://www.dhresource.com/webp/m/0x0s/f2-albu-g8-M00-3B-88-rBVaVFw-ytSAalSRAAHARc6MiJE573.jpg/2019-newest-cheap-sexy-gradient-short-prom.jpg" 
      },
      {
       name: "custom made dress for girls",
        price: "₦50000",
         imageLink: "https://www.promfy.com/uploads/product/1/R/1R098/Selena-Gomez-unique-white-3D-lace-long-sleeve-celebrity-short-cocktail-dress-1.jpg" 
      },
      {
        name: "custom made dress for girls",
        price: "₦50000",
         imageLink: "https://beyondshoping.com/wp-content/uploads/2019/09/Mini-Cocktail-Dresses-2019-Short-Party-Formal-Evening-Gowns-Short-Cocktail-Dress-1.jpg" 
      },
       
      ],
     bridals: [ 
       {
         name: "custom made dress for girls",
        price: "₦50000",
         imageLink: "https://www.promfy.com/uploads/product/2/7/27122/Illusion-beaded-lace-glitter-mermaid-long-bridal-prom-dress-with-feather-embellishement-1-thumb.jpg" 
      },
      {
       name: "custom made dress for girls",
        price: "₦50000",
         imageLink: "https://www.promfy.com/uploads/product/2/7/27102/Off-white-lace-and-tulle-Boho-country-scalloped-A-line-long-wedding-gown-1-thumb.jpg" 
      },
      {
        name: "custom made dress for girls",
        price: "₦50000",
         imageLink: "https://www.promfy.com/uploads/product/2/H/2H261/V-neck-pleated-bodice-horsehair-skirt-wedding-dress-1-thumb.jpg" 
      },
       
      ],
      products: [
         {name: 'prom dresses'},{ name:'formal dresses'},{ name:'girl dresses'},{name:'short dresses'},{ name:'bridal dresses'}

      ],
       moving: [
         {
       
           imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRIhR_xxP-1PoSZJRS22uk59ctdU9_lscIkggr64F2wexoz9OZ"
       },
       {
       
        imageLink: "https://dqzrr9k4bjpzk.cloudfront.net/images/9497261/618095184.jpg" 
       },
       {
        
         imageLink: "https://www.xdressy.com/uploads/product/1/7/17863/off-the-shoulder-two-piece-red-satin-mermaid-prom-gown-1.jpg" 
      },
       {
       
         imageLink: "https://olist-uc.feednews.com/upload/20200226/ncl1u1wwgle.jpg" 
      },
      ]
     
    }
  },
  components: {
    HelloWorld,
    Profile,
    Office,
    Children,
    Short,
    Bridal,
    Product,
    Slider
  }
}
</script>
<style scoped>

.home{
  display: inline;
  width: 70%;
  float: right;
 
  }
.home{
  margin-top: 100px;
  

}
.categories{
  display: inline;
width: 25vw;
margin:100px 20px ;
position:fixed;
left: 0;
}
</style>