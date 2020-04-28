<template>
  <!-- <div class="profile" >
    <div class="left">
      <img :src="dress.imageLink" height="200px" />
    </div>
    <div class="right">
      <p>{{dress.name}}</p>
      <small>{{dress.price}}</small>
         
             <router-link class="nav-link" to="/productDesc">buy now </router-link>
  
  
    </div>
  </div> -->
  <div>
    <div id="car-container">
	<div id="top-left"> <div id="top-left-inner"></div></div>
    <div id="top-right"><div id="top-right-inner"></div></div>
    <div id="left-side"></div>
	<div id="car-body"> 
    <div id="text-display">JSS one</div>    
    </div>
    <div id="right-side"></div>
    <div id="fender-cover"></div>
    <div id="right-tyre" class="tyre"></div>
    <div id="left-tyre" class="tyre"></div>
    <div id="fender" ></div>
    <div id="front-light" class="car-light"></div>
    <div id="back-light" class="car-light"></div>

</div>
  </div>
</template>

<script>
export default {
  props: ["gradeclass"]
};
</script>

<style>
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
#car-cover{
  display: inline-block;
  position: relative;
 width: 29%;
  height: 300px;
  margin: 5% 0 0 3%;
}
#car-container{
   height: 100%;
   width: 100%;
   border-top: 5px solid rgb(201, 204, 199);	
   border-bottom: 5px solid rgb(201, 204, 199);	
   border-left: 5px solid rgb(201, 204, 199);	
   border-right: 5px solid rgb(178, 182, 197);	
   color: rgb(244, 245, 243);
   /* margin: 50px; */
   position: absolute;
   background: tomato;
   background: radial-gradient( rgb(230, 214, 206) 10%, 30%, antiquewhite 51%, white 100%);
   background-size: 1% 1%;
   background-repeat: repeat;
   box-shadow: 5px 5px 10px rgb(139, 132, 130),-5px -5px 10px rgb(167, 163, 162);
   border-radius: 20px;
   
}	
#top-right{
	height: 30%;
	width: 30%;
	position: absolute;
	z-index: 2;
	background:  rgb(35, 84, 148);
    left: 45%;
    top: 5%;
    border-top-right-radius: 400%;
    border-top: 5px solid antiquewhite;
    border-right: 5px solid antiquewhite;
    box-shadow: 1px 0  rgb(58, 59, 75),0 -1px  rgb(58, 59, 75);
    box-shadow: 2px 0 5px rgb(58, 59, 75),0 -2px 5px rgb(58, 59, 75);
  
}
#top-left{
	height: 30%;
	width: 30%;
	position: absolute;
	z-index: 2;
	background:  rgb(35, 84, 148);
    left: 15%;
    top: 5%;
    border-top-left-radius: 200px;
    border-top: 5px solid antiquewhite;
    border-left: 5px solid antiquewhite;
    box-shadow: -1px -1px  rgb(58, 59, 75);
    box-shadow: -2px -2px 5px rgb(58, 59, 75);
    
}
#top-left-inner{
    position: absolute;
    height: 70%;
width: 80%;
background-color: rgba(34, 34, 70, 0.63);
top: 15%;
left: 15%;
border: 0.5px solid rgba(10, 10, 24, 0.63);
border-top-left-radius: 200px;
}

#top-right-inner{
    position: absolute;
    height: 70%;
width: 80%;
background-color: rgba(40, 40, 97, 0.63);
top: 15%;
left: 5%;
border: 0.5px solid rgba(10, 10, 24, 0.63);
border-top-right-radius: 400%;
z-index: 120;
overflow:hidden;
}
#car-body{
    width: 60%;
    height:50% ;
    background-color:  rgb(35, 84, 148);
    position: absolute;
    top: 35%;
    left: 15%;
    z-index: 100;
    border-top-left-radius: 3%;
    border-top-right-radius: 3%;
    
}
#left-side{
    width: 10%;
    height:50% ;
    background-color:  rgb(35, 84, 148);
    position: absolute;
    top: 35%;
    left: 5%;
    border-top: 5px solid antiquewhite;
    border-left: 5px solid antiquewhite;
    border-top-left-radius: 300px;
    box-shadow: -1px -1px  rgb(58, 59, 75);
    box-shadow: -2px -2px 5px rgb(58, 59, 75);
  
}

#right-side{
    width: 25%;
    height:50% ;
    background-color:  rgb(35, 84, 148);
    position: absolute;
    top: 35%;
    left: 73%;
    border-top: 5px solid antiquewhite;
    border-right: 5px solid antiquewhite;
    border-top-right-radius: 300%;
    box-shadow: 1px 0  rgb(58, 59, 75),0 -1px  rgb(58, 59, 75);
    box-shadow: 2px 0 5px rgb(58, 59, 75),0 -2px 5px rgb(58, 59, 75);
  
}
#text-display{
    color: tomato;
    background-color: antiquewhite;
    text-align: center;
    /* letter-spacing: 13px; */
    padding: 7px;
    font-size: 30px;
    font-weight: bold;
    border-radius: 20px;
    border: 5px ridge white;
    margin-top: 7%;

}
#fender{
    top: 80%;
    height: 10%;
    position: absolute;
    background-color:  rgb(35, 84, 148);
    width: 98%;
    left: 2%;
     z-index: inherit;
    border-radius: 30%;
    border: 5px solid antiquewhite;
    border-top: none;
    box-shadow: 1px 1px  rgb(58, 59, 75),0 -1px  rgb(58, 59, 75);
    box-shadow: 2px 2px 5px rgb(58, 59, 75),0 -2px 5px rgb(58, 59, 75);
    background: rgb(0, 0, 0);
background: radial-gradient( rgb(248, 246, 246) 10%,rgb(0, 0, 0) 30%, rgb(65, 65, 63) 51%, rgb(0, 0, 0) 100%);

}
#fender-cover{
    top: 75%;
    height: 10%;
    left:  20%;
    width: 70%;
    background:  rgb(35, 84, 148);
    position: absolute;
    z-index: 150;
}
.tyre{
    top: 70%;
    height: 30%;
    width: 25%;
    border-radius: 50%;
    border: 1px solid transparent;
    background-color: black;
    background: rgb(0, 0, 0);
background: radial-gradient( rgb(248, 246, 246) 10%,rgb(0, 0, 0) 30%, rgb(65, 65, 63) 51%, rgb(0, 0, 0) 100%);
position: absolute;
   z-index: 200;
   animation-name: tyre;
   animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

    
}
.tyre:after {
      position: absolute;
      content: "";
      top: 15%;
      right: 15%;
      width: 33%;
      height: 33%;
      border: 3px solid;
      border-color:rgba(82, 81, 83, 0.8) transparent transparent transparent;
      border-radius: 50%;
      transform: rotate(45deg);
      }
#left-tyre{
   left: 15%;
}
#right-tyre{
    left: 65%;

}
.car-light{
    width: 10%;
    height: 17%;
    position: absolute;
    z-index: 200;
    border: 3px ridge rgb(231, 231, 219);
    background: yellow;
background: radial-gradient( rgb(235, 216, 216) 10%,rgb(179, 172, 134) 30%, rgb(240, 239, 236) 51%, rgb(226, 226, 191) 100%);
animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

 }
 #front-light{
    width: 10%;
    height: 17%;
    border-radius: 50%  90% 20% 50%;
    top: 55%;
    left: 85%;
    box-shadow: 10px 10px 20px rgb(231, 231, 219),
                 20px 20px 30px rgb(231, 231, 219) ,
                 30px 30px 50px rgb(231, 231, 219),
                 -1px -1px 4px rgb(231, 231, 219),
                 -2px -2px 10px rgb(231, 231, 219),
                 -3px -3px 20px rgb(231, 231, 219);
    animation-name: front-light;
}
#back-light{
    width: 7%;
    height: 17%;
    border-radius: 20%  90% 50% 20%;
    top: 55%;
    left: 5%;
    box-shadow: -10px -10px 20px rgb(233, 233, 197),
                 -20px -20px 30px rgb(231, 231, 219) ,
                 -30px -30px 50px rgb(231, 231, 219),
                   1px   1px 4px rgb(231, 231, 219),
                   2px   2px 10px rgb(231, 231, 219),
                   3px   3px 20px rgb(231, 231, 219);
    border-left: none;
    animation-name: back-light;
 
}
@keyframes back-light {
    0%{
        box-shadow: -10px -10px 20px rgb(231, 231, 219),
                 -20px -20px 30px rgb(231, 231, 219) ,
                 -30px -30px 50px rgb(231, 231, 219),
                   1px   1px 4px rgb(231, 231, 219),
                   2px   2px 10px rgb(231, 231, 219),
                   3px   3px 20px rgb(231, 231, 219);
   
    }
    50% {
        box-shadow: -2px -2px 2px rgb(216, 216, 173),
                 -3px -3px 30px rgb(202, 202, 165) ,
                 -4px -4px 50px rgb(230, 230, 185),
                   1px   1px 4px rgb(207, 207, 189),
                   0px   0px 10px rgb(165, 165, 136),
                   0px   0px 20px rgb(211, 211, 159);
   
    }
    100%{
        box-shadow: -10px -10px 20px rgb(231, 231, 219),
                 -20px -20px 30px rgb(231, 231, 219) ,
                 -30px -30px 50px rgb(231, 231, 219),
                   1px   1px 4px rgb(231, 231, 219),
                   2px   2px 10px rgb(231, 231, 219),
                   3px   3px 20px rgb(231, 231, 219);
   
    }
}


@keyframes front-light {
    0%{
        box-shadow:  10px  10px 20px rgb(231, 231, 219),
                  20px  20px 30px rgb(231, 231, 219) ,
                  30px  30px 50px rgb(231, 231, 219),
                   -1px   -1px 4px rgb(231, 231, 219),
                   -2px   -2px 10px rgb(231, 231, 219),
                   -3px   -3px 20px rgb(231, 231, 219);
   
    }
    50% {
        box-shadow: 2px 2px 2px rgb(216, 216, 173),
                 3px 3px 30px rgb(202, 202, 165) ,
                 4px 4px 50px rgb(230, 230, 185),
                   -1px   -1px 4px rgb(207, 207, 189),
                   -0px   -0px 10px rgb(165, 165, 136),
                   -0px   -0px 20px rgb(211, 211, 159);
   
    }
    100%{
        box-shadow: 10px 10px 20px rgb(231, 231, 219),
                 20px 20px 30px rgb(231, 231, 219) ,
                 30px 30px 50px rgb(231, 231, 219),
                   -1px   -1px 4px rgb(231, 231, 219),
                   -2px   -2px 10px rgb(231, 231, 219),
                   -3px   -3px 20px rgb(231, 231, 219);
   
    }
}
#driver{
  width:80%;
  height: 180%;
  margin-top: 10%;
  background-color: rgba(6, 73, 219, 0);
 background-image: url('./../assets/left-dummy.png');
   background-size: 100% 100%;
   position: absolute;
     z-index: 100;
 
  }
  @keyframes tyre{
    0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(360deg);
      }
  }
     @media only screen and (max-width: 1100px) {
  #car-cover{
    width:40%;

  
  }
  
  }
  @media only screen and (max-width: 600px) {
  #car-cover{
    width:100%;
    height:150px;
  }
  
.tyre{
      animation: none;
   
    
}

#text-display{
      padding: 4px;
    font-size: 20px;
    font-weight: bold;
  
}
  
  }


</style>