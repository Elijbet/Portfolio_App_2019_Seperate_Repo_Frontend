<template>
 <div id="article">
 	<ArticlesHeader></ArticlesHeader>
  <div v-for="article in articles">
   <p>{{article.title}}</p>
   <p>{{article.text}}</p>
   <!-- {{article.image.url}} -->
   <img :src="article.image.url"></img>
  </div>
 </div>
</template>

<script>
	// import axios from 'axios'
	import ArticlesHeader from '@/components/Articles/ArticlesHeader'

	export default {
	 data() {
	  return {
	   articles: [],
	   errors: []
	  }
	 },
	 created() {
    this.$http.secured.get('/articles')
      .then(response => { this.articles = response.data })
      .catch(error => this.setError(error, 'Something went wrong'))
	  },
	  methods: {
	    setError (error, text) {
	      this.error = (error.response && error.response.data && error.response.data.error) || text
	    },
	  },
	  components: { ArticlesHeader }
	}
</script>