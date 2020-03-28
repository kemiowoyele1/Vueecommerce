<template>
  <div class="profile" >
    <div class="left">
      <img :src="dress.imageLink" height="200px" />
    </div>
    <div class="right">
      <p>{{dress.name}}</p>
      <small>{{dress.price}}</small>
         <!-- <button class="buy">buy now</button> -->
             <router-link class="nav-link" to="/productDesc">buy now </router-link>
  
  
    </div>
  </div>
</template>

<script>
export default {
  props: ["dress"]
};
</script>

<style>
 #profile {
  /* border: 1px solid #ccc; */
 width: 25%;
  height: 350px;
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px;
  text-align: left;
  /* display: inline; */
  float: left;
  margin: 20px;
  box-shadow:2px 3px 2px silver;
  border: 10px solid red;

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
  background: rgb(35, 34, 49);
  color: white;
  text-shadow: 0.5px 0.5px rgb(160, 114, 204), -0.5px -0.5px rgb(160, 114, 204);
}
.buy:hover{
   background: rgb(39, 71, 87);
  color: rgb(130, 194, 194);
  font-weight: bolder;
  padding: 5px;

}
@media only screen and (max-width: 600px) {
  div.profile {
    width: 90%;
    margin: 0;
  }
}
/* div.right {
  float: right;
  width: 65%;
  margin-left: 5px;
} */
</style>