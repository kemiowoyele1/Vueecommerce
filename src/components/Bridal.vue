<template>
  <div class="profile" >
    <div class="left">
      <img :src="bridal.imageLink" height="200px" />
    </div>
    <div class="right">
      <p>{{bridal.name}}</p>
      <small>{{bridal.price}}</small>
      <button class="buy">buy now</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bridal"]
};
</script>

