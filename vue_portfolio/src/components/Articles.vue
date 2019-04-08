<template>
	<div>
		<ArticlesHeader></ArticlesHeader>
		<v-layout id="article">
	    <v-flex xs2 sm3 offset-sm1 v-for="article in articles" class="spacing">
	      <v-card>
	        <v-img
	          :src="article.image.url"
	          aspect-ratio="2.75"
	        ></v-img>

	        <v-card-title primary-title>
	          <div>
	            <h3 class="headline mb-0">{{article.title}}</h3>
	            <v-flex class="form-width text-align">
						    <div v-html="article.text"></div>
						  </v-flex>
	          </div>
	        </v-card-title>

	        <v-card-actions>
	          <v-btn flat color="orange">Share</v-btn>
	          <v-btn flat color="orange">Explore</v-btn>
	        </v-card-actions>
	      </v-card>
	    </v-flex>
	  </v-layout>
	</div>
</template>

<script>
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
<style scoped>
	.form-width {
    width: 50%;
    padding: 0 !important;
  }
  .text-align {
    text-align: left;
  }
  .spacing {
  	height: 20%;
  	margin-bottom: 3%;
  }
  .layout {
  	flex-wrap: wrap;
  	justify-content: center;
  	align-items: center;
  }
  .flex.offset-sm1 {
    margin-left: 2%;
	}
</style>
<style>
  .ql-align-center {
    text-align: center;
  }
  iframe.ql-video.ql-align-center {
    margin: 0 auto !important;
  }
  .ql-align-right {
    text-align: right;
  }
  img {
	  object-fit: cover;
	  width: 460px;
	  height: 460px;
  }
</style>