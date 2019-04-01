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
            <!-- <div class="quill-code">
              <code class="hljs" v-html="contentCode"></code>
            </div> -->
            
            <label class="form-title-font">Blog Content</label>
            <v-flex class="form-width">
              <quill-editor ref="myTextEditor"
                      v-model.lazy="blog.content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
              </quill-editor>
            </v-flex>
            <!-- <label class="form-title-font">Blog Content</label> -->
            <!-- <v-flex class="form-width">
              <v-textarea
                outline
                name="input-7-4"
                label="Outline textarea"
                value="This blog post is going to make me world popular. And also, notorious."
                v-model.lazy="blog.content"
              ></v-textarea>
            </v-flex> -->
            <v-layout justify-end>
              <div class="align-buttons">
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
          </v-layout>
        </v-container>
      </v-form>
    </v-app>
	</div>
</template>

<script>
  import hljs from 'highlight.js'
  hljs.configure({
    languages: ['javascript', 'python', 'vue']
  })
  import 'highlight.js/styles/monokai-sublime.css';

  export default {
    data() {
      return {
        blog: {
          title: '',
          content: '',
          link: ''
        },
        content: '<h2>I am Example</h2>',
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          },
          theme: 'snow'
        }
      }
    },
    mounted() {
      console.log('this is my editor', this.editor)
      setTimeout(() => {
        this.blog.content = `<h1 class="ql-align-center">
                          <span class="ql-font-serif" style="background-color: rgb(240, 102, 102); color: rgb(255, 255, 255);"> I am Example 1! </span>
                        </h1>
                        <p><br></p>
                        <p><span class="ql-font-serif">W Can a man still be brave if he's afraid? That is the only time a man can be brave. </span></p>
                        <p><br></p>
                        <p><strong class="ql-font-serif ql-size-large">Courage and folly is </strong><strong class="ql-font-serif ql-size-large" style="color: rgb(230, 0, 0);">always</strong><strong class="ql-font-serif ql-size-large"> just a fine line.</strong></p>
                        <p><br></p>
                        <p><u class="ql-font-serif">There is only one God, and his name is Death. And there is only one thing we say to Death: "Not today."</u></p>
                        <p><br></p>
                        <p><em class="ql-font-serif">Fear cuts deeper than swords.</em></p>
                        <p><br></p>
                        <pre class="ql-syntax" spellcheck="false">const a = 10;<br>const editorOption = { highlight: text => hljs.highlightAuto(text).value };</pre>
                        <p><br></p>
                        <p><span class="ql-font-serif">Every flight begins with a fall.</span></p>
                        <p><br></p>
                        <p><a href="https://surmon.me/" target="_blank" class="ql-font-serif ql-size-small" style="color: rgb(230, 0, 0);"><u>A ruler who hides behind paid executioners soon forgets what death is. </u></a></p>
                        <p><br></p>
                        <iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" height="238" width="560"></iframe>
                        <p><br></p>
                        <p><span class="ql-font-serif">Hear my words, and bear witness to my vow. Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come.</span></p>
                        <p><br></p>
                        <p><span class="ql-font-serif">We are born to suffer, to suffer can make us strong.</span></p>
                        <p><br></p>
                        <p><span class="ql-font-serif">The things we love destroy us every time.</span></p>
                        `
      }, 1300)
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      },
      contentCode() {
        return hljs.highlightAuto(this.blog.content).value
      }
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      submitArticle(blog) {
        let formData = new FormData()
        formData.append("article[title]", blog.title)
        formData.append("article[text]", blog.content)
        formData.append("article[image]", blog.link)
        this.$http.secured.post('http://localhost:3000/articles', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          console.log(response)
        }).catch(error => this.setError(error, 'Cannot create article'))
      },
      setError (error, text) {
        this.error = (error.response && error.response.data && error.response.data.error) || text
      },
      takeFile(event) { 
        this.blog.link = this.$refs.myFiles.files[0]
      }
    }
  }
  
</script>

<style scoped>
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
  .align-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .quill-code {
    border: none;
    height: auto;
  }
  .text-align {
    text-align: left;
  }
  code {
    width: 100%;
    margin: 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0;
    height: 10rem;
    overflow-y: auto;
    resize: vertical;
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
</style>