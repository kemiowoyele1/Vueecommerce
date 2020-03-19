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
 <div class="footer-container">
       <Footer :footer='footer' id="footer" />

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
import Footer from '@/components/Footer.vue'
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
        name: "men custom made fashion",
        price: "₦50000",
         imageLink: "https://ankaralovers.info/wp-content/uploads/2019/08/abb22a06559ca8449651d29683e8f143.jpg" 
      },
      {
        name: "custom made office wear",
        price: "₦50000",
         imageLink: "https://i.pinimg.com/originals/d1/eb/97/d1eb974d925cb5855d8629936682d321.jpg" 
      },
      {
        name: "African fabric designs for men",
        price: "₦50000",
         imageLink: "https://i.ytimg.com/vi/Pmo6_tercC0/maxresdefault.jpg" 
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
         name: "NAija bridal fashion",
        price: "₦50000",
         imageLink: "https://i2.wp.com/www.od9jastyles.com/wp-content/uploads/2019/02/ankara_and_asoebi_styles_1548908762.jpg?resize=608%2C760&ssl=1" 
      },
      {
       name: "blue bridal dress for traditional wedding",
        price: "₦50000",
         imageLink: "https://i.pinimg.com/736x/8a/3e/39/8a3e396186c0fb367a107c645ec9517a.jpg" 
      },
      {
        name: "yellow ankara wedding dress",
        price: "₦50000",
         imageLink: "https://ankarafashion.com.ng/wp-content/uploads/2018/06/ball-12.jpg" 
      },
       
      ],
      products: [
         {name: 'prom dresses'},{ name:'formal dresses'},{ name:'girl dresses'},{name:'short dresses'},{ name:'bridal dresses'}

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
  components: {
    HelloWorld,
    Profile,
    Office,
    Children,
    Short,
    Bridal,
    Product,
    Slider,
    Footer
  }
}
</script>
<style scoped>

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
</style>
<style>
.footer-container{
     background-color: rgb(133, 123, 125);
     display: inline-block;
     z-index: 300;
     position: relative;
     width: 100vw;
   }
   #footer{
     width: 100%;
   }
</style>