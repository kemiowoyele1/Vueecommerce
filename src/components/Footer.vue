<template>
<!-- Footer -->
<footer class="footer-container" >
<div id="footer">
  TEAM AWESOME ©
</div>
 
</footer>
<!-- Footer -->
</template>

<script>



export default {
  
    props: ["footer"]


}
</script>

<style>
#footer{
background-color: rgb(35, 84, 148);
color: antiquewhite;
width: 100%;
margin: 0;
font-size: 100px;
font-weight: bold;
padding: 100px;
text-shadow: 0.5px 0.5px tomato, -0.5px -0.5px tomato;
}


@media only screen and (max-width: 600px) {
#footer{
font-size: 50px;
padding: 50px;

}
}
</style>