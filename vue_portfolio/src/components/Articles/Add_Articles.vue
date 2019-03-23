<template>
	<div>
		<v-app id="inspire">
      <v-form>
        <v-container>
          <v-layout column wrap form-style fill-height>
            <v-flex class="form-width">
              <div class="font-2">Add New Blog Post</div>
            </v-flex>
            <label class="form-title-font">Blog Title</label>
            <v-flex class="form-width">
              <v-text-field
                label="Outline"
                outline
                v-model.lazy="blog.title"
              ></v-text-field>
            </v-flex>
            <label class="form-title-font">Blog Content</label>
            <v-flex class="form-width">
              <v-textarea
                outline
                name="input-7-4"
                label="Outline textarea"
                value="This blog post is going to make me world popular. And also, notorious."
                v-model.lazy="blog.content"
              ></v-textarea>
            </v-flex>
            <v-flex class="form-width btn-alignment">
              <v-btn  outline 
                      color="indigo"
                      @click="submitArticle(blog)">
                Submit Blog Post
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-app>
	</div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        blog: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      submitArticle(blog) {
        axios.post('http://localhost:3000/articles', {
          title: blog.title,
          text: blog.content
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
  
</script>

<style>
  .form-style {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-width {
    width: 50%;
    padding: 0 !important;
  }
  .form-title-font {
    font-weight: bold;
    text-align: left;
    width: 50%;
    color: #737373;
  }
  .btn-alignment {
    display: flex;
    justify-content: flex-end; 
  }
  form, .container {
    height: 100%;
  }
  .font-2 {
    font-family: 'Cabin Sketch', cursive;
    font-size: 4rem;
  }
</style>