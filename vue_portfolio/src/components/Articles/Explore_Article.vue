<template>
    <div>
        <h3 class="headline mb-0">{{article.title}}</h3>
            <v-flex class="form-width text-align">
                <div v-html="article.text"></div>
            </v-flex>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                id: 0,
                article: {}
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.$http.secured.get(`/articles/${this.id}`)
              .then(response => { this.article = response.data })
              .catch(error => this.setError(error, 'Something went wrong'))
        },
          methods: {
            setError (error, text) {
            this.error = (error.response && error.response.data && error.response.data.error) || text
        },
      },
    }
</script>