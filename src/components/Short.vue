<template>
  <div class="profile" >
    <div class="left">
      <img :src="short.imageLink" height="200px" />
    </div>
    <div class="right">
      <p>{{short.name}}</p>
      <small>{{short.price}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["short"]
};
</script>

