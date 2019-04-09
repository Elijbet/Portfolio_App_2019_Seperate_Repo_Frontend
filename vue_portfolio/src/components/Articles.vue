<template>
	<div>
		<ArticlesHeader></ArticlesHeader>
		<v-layout id="article">
	    <v-flex xs2 sm3 offset-sm1 v-for="article in articles" class="spacing">
	      <v-card>
					
	        <v-card-title primary-title>
	          <div class="full-width">
	            <h3 class="headline mb-0">{{article.title | truncate(23, '...')}}</h3>
	            <v-flex class="text-align">
						    <div v-html="truncatedArticleText(article.text)">
						    </div>
						    <div v-if="imgTag" v-html="imgTag"></div>
						    <img v-else src="../assets/picture_not_available.png"></img>
						  </v-flex>
	          </div>
	        </v-card-title>

	        <v-card-actions>
	          <v-btn flat color="orange">Share</v-btn>
	          <v-btn flat color="orange">
	          	<router-link 
			          :to="{ path: `/articles/${article.id}` }">
			          Explore
			        </router-link>
	        	</v-btn>
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
	   errors: [],
	   imgTag: '',
	  }
	 },
	 created() {
    this.$http.plain.get('/articles')
      .then(response => { this.articles = response.data })
      .catch(error => this.setError(error, 'Something went wrong'))
	  },
	  methods: {
	    setError (error, text) {
	      this.error = (error.response && error.response.data && error.response.data.error) || text
	    },
	    truncatedArticleText(html){
	    	if(html !== null){
	    		this.imgTag = ''
	    		//Retrieve image from the html content
	    		let regex = /<img([\w\W]+?)[\/]?>/;
          let imgTagArray = html.match(regex)
          if (imgTagArray) {
          	this.imgTag = imgTagArray[0]
          	console.log('this.imgTag', this.imgTag)
          }
          
		    	let text = html.replace(/(<([^>]+)>)/ig,"")
		    	let value = this.$options.filters.truncate(text, 70)
		    	if (value.length < 30) {
		    		let styledValue =  value + "<br/>" + "&nbsp;"
		    		console.log('styledValue', styledValue)
		    		return styledValue
		    	} else {
		    		return value
		    	}
			  }
	    }
	  },
	  filters: {
      truncate: function (text, length, suffix) {
      	if(text !== null){
        	return text.substring(0, length) + suffix;
        }
      },
    },
	  components: { ArticlesHeader }
	}
</script>
<style scoped>
	.full-width {
		width: 100%;
	}
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
	.headline {
		text-align: left;
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
	  width: 260px;
	  height: 260px;
  }
  iframe { width: 100%; }
</style>