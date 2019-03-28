<template>
 <div id="design_portfolio_item">
  <div v-for="design_portfolio_item in design_portfolio_items">
   <p>{{design_portfolio_item.title}}</p>
   <p>{{design_portfolio_item.text}}</p>
   <p>{{design_portfolio_item.date}}</p>
   <p>{{design_portfolio_item.user.email}}</p>
  </div>
 </div>
</template>

<script>
	import axios from 'axios'

	export default {
	 data() {
	  return {
	   design_portfolio_items: [],
	   title: [],
	   text: [],
	   date: [],
	   errors: []
	  }
	 },
	 created() {
		 	if (!localStorage.signedIn) {
	      this.$router.replace('/')
	    } else {
	      this.$http.secured.get('/design_portfolio_items')
	        .then(response => { this.design_portfolio_items = response.data })
	        .catch(error => this.setError(error, 'Something went wrong'))
	    }
	  },
	  methods: {
	    setError (error, text) {
	      this.error = (error.response && error.response.data && error.response.data.error) || text
	    },
	  },
	}
</script>