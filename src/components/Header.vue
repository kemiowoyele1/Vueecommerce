<template>

       <div class="header">
             <router-link to="/" class="home" ><span ></span></router-link> 
      
         <div class="name-container">
            <div id="left-dummy" class="dummy"></div>
           <div id="name"> edu-power
           </div>
              <div id="right-dummy" class="dummy"></div>
         </div>
         <div class="sign">
             <router-link class="nav-link" to="/register" id="signup">sign up </router-link>
               <router-link class="nav-link" to="/login" id="signin">  sign in  </router-link>
     
         </div>
            </div>

</template>
<script>

export default {
  props: ["header"]
};

</script>


<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header{
   background-color: rgb(46, 241, 20);
   padding:  4px;
   width: 100vw;
   background-image: url('./../assets/head.jpg');
   background-size: 100% 100%;
   /* position: fixed; */
  z-index: 200;
  box-shadow: 0 10px 10px rgb(212, 214, 196);
  
}
.home{
    background-image: url('./../assets/home.png');
   background-size: 100% 100%;
   height: 100px;
   width: 10vw;
   position: fixed;
   display: inline-block;
   position: absolute; 
   left: 2px;
 }
.name-container{
   background-image: url('./../assets/name.png');
   background-size: 100% 100%;
  display: inline-block;
  padding: 10px;
  height: 100%;
  border: 8px solid rgb(57, 135, 238);
  border-radius: 10px; 
  }

  .sign{
    width: 10vw;
    height: 100%;
    display: inline-block;
    position: absolute;
    left: 86vw;
   
  }
  #signup, #signin{
    display: block;
     padding: 10px;
    background-color: tomato;
    color:antiquewhite;
    font-weight: bold;
    font-size: 18px;
    margin-top:7px;
    border:2px solid antiquewhite;
    border-radius: 5px;
    box-shadow: 2px 2px rgb(207, 186, 157),-2px -2px rgb(207, 186, 157);
    text-decoration: none;
  }
.dummy{
   height: 50px;
width: 100px;
display: inline-block;
  background-size: 100% 100%;
   letter-spacing: 6px;
  animation-name: dummy;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

}
#left-dummy{
    background-image: url('./../assets/left-dummy.png');
  }
  #right-dummy{
    background-image: url('./../assets/right-dummy.png');
  }
#name{
font-size:60px;
font-weight: 800;
margin:auto;
  color: rgb(236, 15, 100);
  letter-spacing: 6px;
  animation-name: name;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: .5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  display: inline-block;

}
@keyframes name {
   0% {color: rgb(226, 55, 120);
   text-shadow: 1px 1px rgb(243, 242, 242),-1px -1px rgb(245, 234, 240);
}
   100% {color:rgb(236, 103, 15);
        text-shadow: 2px 2px rgb(233, 218, 199),-2px -2px rgb(231, 223, 212);

   }
} 
@keyframes dummy {
  0%{
    width:100px;
    height: 50px;
  }
  50%{
    width:90px;
    height: 45px;
  }
   100%{
    width:100px;
    height: 50px;
  }
  } 
#name:hover{
  color: rgb(46, 241, 20);

 }
@media only screen and (max-width: 900px) {
  
.home{
  height: 50px;
   width: 10vw;
   display: inline-block;
   position: absolute; 
   left: 2px;
 }
  
     #name{

font-size:30px;
font-weight: 400;
  color: rgb(35, 34, 49);
  letter-spacing: 2px;
 }
 #app{
   width: 100vw;
 }
 
.dummy{
  display:none;
   }
 
   .sign{
    width: fit-content;
    height: 100%;
    display: inline-block;
    position: absolute;
    left: 76vw;
   
  }
  #signup, #signin{
    display: block;
     padding: 5px;
    background-color: tomato;
    color:antiquewhite;
    font-weight: bold;
    font-size: 12px;
    margin-top:5px;
    border:2px solid antiquewhite;
    border-radius: 5px;
    box-shadow: 2px 2px rgb(207, 186, 157),-2px -2px rgb(207, 186, 157);
    text-decoration: none;
  }
}

</style>
