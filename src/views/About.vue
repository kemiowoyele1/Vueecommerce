<template>
  <div>
    <p>{{sitename}}</p>
 
   </div>
</template>
<script>
export default {
   name:"About",

 computed: {
    sitename(){
     return this.$store.state.siteName;
    }
  }
}

</script>