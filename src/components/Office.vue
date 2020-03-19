<template>
  <div class="profile" >
    <div class="left">
      <img :src="dress.imageLink" height="200px" />
    </div>
    <div class="right">
      <p>{{dress.name}}</p>
      <small>{{dress.price}}</small>
         <button class="buy">buy now</button>
  
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
  height: 350px;
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px;
  text-align: left;
  /* display: inline; */
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
.buy{
  display: block;
  margin: 2px auto;
  background: grey;
  color: white;
  text-shadow: 0.5px 0.5px rgb(160, 114, 204), -0.5px -0.5px rgb(160, 114, 204);
}
.buy:hover{
   background: rgb(39, 71, 87);
  color: rgb(130, 194, 194);
  font-weight: bolder;
  padding: 5px;

}
/* div.right {
  float: right;
  width: 65%;
  margin-left: 5px;
} */
</style>