<template>
 <div id="contacts">
  <div v-for="article in articles">
   <p>{{article.title}}</p>
   <p>{{article.text}}</p>
  </div>
 </div>
</template>

<script>
	import axios from 'axios'

	export default {
	 data() {
	  return {
	   articles: [],
	   title: [],
	   text: [],
	   errors: []
	  }
	 },
	 created() {
	  axios.get('localhost:3000/articles') 
	  .then(response => {
	   this.articles = response.data
	  })
	 .catch(e => {
	  this.error.push(e)
	  })
	 },
	}
</script>