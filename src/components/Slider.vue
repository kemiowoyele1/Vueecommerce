<template>

  <!-- <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
    <slide>
       <img :src="slide.imageLink" height="200px" />
    
    </slide>
    
  </carousel> -->
  <div>
    <carousel :per-page="1" :autoplay="true" loop="true" >
      <slide v-for="image in slide" :key="image.id">
      <img :src="image.imageLink" style="width:400px;height:400px" />
      </slide>
    </carousel>
    
  </div>


</template>

<script>



export default {
  
    props: ["slide"]


}
</script>

