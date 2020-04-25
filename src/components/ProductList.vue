<template>
<div class="value">
   {{value.name}}
    

  </div>
   
 </template>

<script>
export default {
  props: ["value"]
};
</script>
<style>
.value{
  background-color: rgb(35, 84, 148);
  box-shadow: 2px 4px 2px grey;
  text-shadow: 1px 1px tomato;
  padding: 10px 2px;
  color: antiquewhite;
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 2px;
  border: 2px solid antiquewhite;
  border-radius: 5px;

}
</style>
