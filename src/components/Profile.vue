<template>

  <div class="profile" >
    <div class="left">
      <img :src="user.imageLink" height="200px" />
    </div>
    <div class="right">
      <p>{{user.name}}</p>
      <small>{{user.price}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

