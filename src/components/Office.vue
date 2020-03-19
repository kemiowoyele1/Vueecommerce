<template>
  <div class="profile" >
    <div class="left">
      <img :src="dress.imageLink" height="200px" />
    </div>
    <div class="right">
      <p>{{dress.name}}</p>
      <small>{{dress.price}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dress"]
};
</script>

<style>
div.profile {
  border: 1px solid #ccc;
 width: 25%;
  height: 300px;
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px;
  text-align: left;
  display: inline;
  float: left;
  margin: 20px;

}
div.left {
  float: left;
  width: 100%;
}
img{
  width: 100%;
}
/* div.right {
  float: right;
  width: 65%;
  margin-left: 5px;
} */
</style>