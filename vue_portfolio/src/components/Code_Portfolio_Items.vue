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
	  this.$http.secured.get('/code_portfolio_items')
	    .then(response => { this.code_portfolio_items = response.data })
	    .catch(error => this.setError(error, 'Something went wrong'))
	  },
	  methods: {
	    setError (error, text) {
	      this.error = (error.response && error.response.data && error.response.data.error) || text
	    },
	  },
	}
</script>