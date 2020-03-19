<template>
  <div class="profile" >
    <div class="left">
      <img :src="bridal.imageLink" height="200px" />
    </div>
    <div class="right">
      <p>{{bridal.name}}</p>
      <small>{{bridal.price}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bridal"]
};
</script>

