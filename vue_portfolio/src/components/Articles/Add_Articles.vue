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
            <div class="form-width submit-row">
              <label class="file-select">
                <div  class="select-button">
                    <i class="material-icons">
                      add_a_photo
                    </i>
                </div>
                <input  type="file" 
                        id="file" 
                        ref="myFiles" 
                        class="custom-file-input" 
                        @change="takeFile" multiple>
              </label>
              <v-btn  outline 
                      color="#1976d2"
                      @click="submitArticle(blog)"
                      >
                Submit Blog Post
              </v-btn>
            </div>
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
          content: '',
          link: ''
        }
      }
    },
    methods: {
      submitArticle(blog) {
        let formData = new FormData()
        formData.append("article[title]", blog.title)
        formData.append("article[text]", blog.content)
        formData.append("article[image]", blog.link)
        axios.post('http://localhost:3000/articles', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
      },
      takeFile(event) { 
        this.blog.link = this.$refs.myFiles.files[0]
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
  .v-btn.v-btn--outline {
    border: 2px solid;
  }
  .select-button {
    padding: 1rem;
    width: 60px;
    height: 60px;
    color: #1976d2;
    border-radius: 50%;
    border: 2px solid #1976d2;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .file-select > input[type="file"] {
    display: none;
  }
  .submit-row {
    flex-direction: row;
    justify-content: space-between;
  }
</style>