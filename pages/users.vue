
<template>
  <div id = "infosection">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <Nav />
	<th>name</th>
	<th>username</th>
	<th>email</th>
	<th>phone</th>
	<th>website</th>
	<th>More info</th>
	
    <tr v-for="user in users">
	<td>{{user.name}}</td>
	<td>{{user.username}}</td>
	<td>{{user.email}}</td>
	<td>{{user.phone}}</td>
	<td>{{user.website}}</td>
	  <button v-on:click="greet">More info</button>

	</tr>
	
  </div>
</template>
require ("./assets/mystyles.scss")

<script>
  import axios from 'axios'
  import Nav from '~/components/Nav.vue'
  
  export default {
    components: {
      Nav
    },
	
	data() {
	
	return {
	users: [],
	numberofusers:0,
	
	};
	},
	
	methods:{
	
	getUsers(){
		axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
		
		this.users = data.data;
		this.numberofusers = data.count;
		});
	},
	greet: function (event) {
      alert(
	<tr v-for="user in users">
	<td>{user.address.street}</td>
	</tr>
	)
      // `event` is the native DOM event
      //if (event) {
        //alert(event.target.tagName)
      //}
    },
	

  },
  
  mounted(){
  this.getUsers();
  },
  }
</script>

<style type = "text/css">
#infosection{
 width: 1200px;
  height: 1500px;
  background-color: #FFFFFF;
  overflow: visible;
}
</style>

