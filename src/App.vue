<template>
  <div id="app">
       <!-- <div class="header">
             <router-link to="/" class="home" ><span ></span></router-link> 
      
         <div class="name-container">
            <div id="left-dummy" class="dummy"></div>
           <div id="name">fun mathematics
           </div>
              <div id="right-dummy" class="dummy"></div>
         </div>
         <div class="sign">
             <router-link class="nav-link" to="/register">sign up </router-link>
               <router-link class="nav-link" to="/login">  sign in  </router-link>
     
         </div>
            </div> -->
    <router-view/>
    <!-- </div> -->
  </div>
</template>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* min-height: 100vh; */
    background: radial-gradient( rgb(230, 214, 206) 10%, 30%, antiquewhite 51%, white 100%);
   background-size: 3px 3px;
   background-repeat: repeat;
  
 
}
</style>
