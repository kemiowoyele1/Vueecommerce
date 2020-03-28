<template>

  <!-- <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
    <slide>
       <img :src="slide.imageLink" height="200px" />
    
    </slide>
    
  </carousel> -->
  <div id="caro-container">
    <carousel :per-page="1" :autoplay = true :loop = 'true'  id="caro">
      <slide v-for="image in slide" :key="image.id" id="slide">
      <img :src="image.imageLink" style="width:90%;height:400px" />
      </slide>
    </carousel>
    
  </div>


</template>

<script>



export default {
  
    props: ["slide"]


}
</script>

<style  scoped>
#caro-container{
 background-image: url('https://cdn.shopify.com/s/files/1/0276/6855/articles/Wax_print_wash_3_1024x1024.jpg?v=1478201027');
 width:60vw;

}
#caro{
  background-color: rgba(41, 36, 44, 0.8);
  width:60vw;

 }
 #slide{
   height: 150%;
   /* background-color: brown; */
 }
 @media only screen and (max-width: 600px) {
 
#caro{
  width:60vw;

 }
#caro-container{
  width:60vw;

}
 }
</style>