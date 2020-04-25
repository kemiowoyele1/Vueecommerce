<template>

  <!-- <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
    <slide>
       <img :src="slide.imageLink" height="200px" />
    
    </slide>
    
  </carousel> -->
  <div id="caro-container">
    <carousel :per-page="1" :autoplay = true :loop = 'true'  id="caro">
      <slide v-for="image in slide" :key="image.id" id="slide">
      <img :src="image.imageLink" />
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
 width:60vw;
  height: 50vh;
}
#caro{
   width:60vw;
    height: 60vh;
 
 }
 img{
  background-color: rgba(41, 36, 44, 0.8);
  width:60vw;
  height: 100%;
   

 }
 #slide{
   height: 50vh;
  /* background-color: brown; */
 }
 @media only screen and (max-width: 600px) {
 
#caro{
  width:100%;
  
 }
#caro-container{
  width:100%;
  margin: 0;
  position: relative;

}
img{
  width:100%;
}
 }
</style>