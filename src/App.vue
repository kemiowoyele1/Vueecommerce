<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

       <!-- <div class="container">
          <div id="overlay"></div>
   -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
  <a class="navbar-brand" href="/"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
         <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span> </router-link>

      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About  </router-link>
      </li>
    </ul>
    <span id ='name'>Chris-Mart</span>
    <form class="form-inline my-2 my-lg-0">
      <router-link class="nav-link" to="/login">Login  </router-link>
      <router-link class="btn btn-outline-primary my-2 my-sm-0" type="submit" to="/register"> Register</router-link>
    </form> 
  </div>
</nav>
    <router-view/>
    <!-- </div> -->
  </div>
</template>

<style>
/* #overlay{
  position: absolute;
  left:0;
  top:0;
  width: 100%;
  height: 100%;
  background-color: red;
  z-index: 50;
  margin: 0;
  padding: 0;
} */
#app{
  /* background-image: url('https://cdn.pixabay.com/photo/2014/04/04/14/55/silver-313347_960_720.jpg'); */
  background-color: rgba(199, 209, 209, 0.253);
}
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
#nav {
    width: 100vw;
   position: fixed;
   margin-bottom: 200px;
   z-index: 100;
   
}
#name{
font-size:40px;
font-weight: bold;
margin:auto;
  color: gray;
  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: linear;
 animation-name: name;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: .5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}
@keyframes name {
   0% {opacity: 0;}
   100% {opacity: 1;}
} 
 
#name:hover{
  color: rgb(47, 48, 75);

 }

/* 
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}  */
</style>
