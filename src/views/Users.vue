<template>
    <div>
      <ul class="list-group" id="ul">
        <li class="list-group-item" v-for="user in users" :key="user" id="li"> 
          <div id="users">
           <p> id: {{user.id}}</p>
       <p>Username:{{user.username}}</p>
       <p>Email:{{user.email}}</p>
       <p>Address:{{user.address}}</p>
       <p>Phone no: {{user.phone}}</p>
       <p>website: {{user.website}}</p>
      <p> company: {{user.company}}</p>
     
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
      users: []
    }
  },
   async created(){
        // get all useers by making a get request to /users

      let fetchUsers = await axios.get("https://jsonplaceholder.typicode.com/users");

     console.log(fetchUsers);

     this.users = fetchUsers.data

     }
}

</script>
<style  scoped>
p{
  font-weight: bold;
  text-align: left;
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