<template>
    <div>
      <ul class="list-group" id="ul">
        <li class="list-group-item" v-for="comment in comments" :key="comment" id="li"> 
          <div id="users">
           <!-- <p> id: {{comment.id}}</p> -->
       <p id="name1">{{comment.name}}</p>
       <p id="name2" >@{{comment.name}}</p>
       <p>{{comment.body}}</p>
      <div id="like">
         <button id="span1" class="span">like</button>
          <button id="span2" class="span">comment</button>
          <button id="span3" class="span">share</button>
      </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
import axios from "axios";

export default {
  data(){
    return{
      comments: []
    }
  },
   async created(){
        // get all useers by making a get request to /users

      let fetchComments = await axios.get("https://jsonplaceholder.typicode.com/comments");

     console.log(fetchComments);

     this.comments = fetchComments.data

     }
}

</script>
<style  scoped>
p{
  font-weight: bold;
  text-align: left;
}
.span{
    /* border:2px solid rgb(43, 102, 94); */
    /* width: 30vw; */
    margin-right: 200px;
    text-align: left;
    padding: 5px;
    border-radius: 15px;
    letter-spacing: 4px;
}
/* #span2{
    border:2px solid rgb(43, 102, 94);
    min-width: 30%;
    text-align: left;
}
#span3{
    border:2px solid rgb(43, 102, 94);
    min-width: 30%;
    text-align: left;
} */
#name1{
    font-weight: 900;
    text-decoration: underline;
    margin-left: 20px;
}
#name2{
    font-weight: 100;
    color:blue
 }
#users{
  /* background: rgb(57, 57, 66);
color: white; */
padding:20px;
margin-top: 10px;
}
#li:nth-child(odd){
   color: rgb(57, 57, 66);
background: rgb(182, 218, 216);

}
#li:nth-child(even){
   background: rgb(57, 57, 66);
color: white;

}
/* #li:nth-child(even){
    background: rgb(121, 115, 115);

} */
</style>