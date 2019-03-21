<template>
 <div id="code_portfolio_item">
  <div v-for="code_portfolio_item in code_portfolio_items">
   <p>{{code_portfolio_item.title}}</p>
   <p>{{code_portfolio_item.text}}</p>
   <p>{{code_portfolio_item.date}}</p>
  </div>
 </div>
</template>

<script>
	import axios from 'axios'

	export default {
	 data() {
	  return {
	   code_portfolio_items: [],
	   title: [],
	   text: [],
	   date: [],
	   errors: []
	  }
	 },
	 created() {
	  axios.get('http://localhost:3000/code_portfolio_items') 
	  .then(response => {
	   this.code_portfolio_items = response.data
	  })
	 .catch(e => {
	  this.error.push(e)
	  })
	 },
	}
</script>