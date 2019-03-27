<template>
  <v-layout row>
	  <v-flex
        xs12
        md6
        lg4
        v-for="article in articles"
      >
      <v-card class="card-style">
        <img
          :src="article.image.url"
          height="200px">
        <img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{article.title}}</div>
            <span class="grey--text">{{article.text}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
        </v-card-actions>
      </v-card>
	  </v-flex>
  </v-layout>
</template>

<script>
	import axios from 'axios'

	export default {
	 data() {
	  return {
	   articles: [],
	   title: [],
	   text: [],
	   errors: [],
	  }
	 },
	 created() {	  
	  axios.get('http://localhost:3000/articles', {
	    headers: {
	      'Content-Type': 'application/json'
	      // 'Content-Type': 'multipart/form-data'
	    }
	  })
	  .then(response => {
	  	console.log('response.data', response.data)
	   	this.articles = response.data
	   	console.log('this.articles[38].image.url', this.articles[37].image.url)
	  })
	 .catch(e => {
	  // this.error.push(e)
	  })
	 }
	}
</script>

<style>
	.layout.row {
		flex-wrap: wrap;
	}
	.card-style {
		margin: 10px;
	}
</style>