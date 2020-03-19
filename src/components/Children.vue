<template>
  <div class="profile" >
    <div class="left">
      <img :src="girl.imageLink" height="200px" />
    </div>
    <div class="right">
      <p>{{girl.name}}</p>
      <small>{{girl.price}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["girl"]
};
</script>

