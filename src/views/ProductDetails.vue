<template>

<div id="product">
  <ul>
      <li v-for="product in allProducts"  :key="product.id">
    <a href="#">{{product.name}}</a>
      </li>
      <p>this is a paragraph
      </p>
  </ul>
</div>


</template>
<script>
export default {
  
};

</script>

<style scopes>
#product{
    height: 1000px;
    background-color: red;
}
</style>