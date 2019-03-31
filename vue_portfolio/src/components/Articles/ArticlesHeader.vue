<template>
  <nav class="navbar rounded">
    <ul class="navbar">
      <v-btn flat class="link-size">
        <router-link  class="design-link" 
                      to="/">
                    Home
        </router-link>
      </v-btn>
      <v-btn flat class="link-size">
        <router-link 
          class="design-link"
          :to="{ path: 'Add_Articles' }">
          Add a new Blog Post
        </router-link>
      </v-btn>
    </ul>
    <ul class="navbar ml-auto">
      <v-btn flat class="link-size">
        <router-link 
            v-if="showAdminLink()"
            class="design-link"
            :to="{ name: 'UsersList' }">
            Admin
          </router-link>
      </v-btn>
      <v-btn flat class="link-size">
        <router-link
                class="design-link"
                :to="{ name: 'Signin' }">
              Signin
        </router-link>
      </v-btn>
      <v-btn flat class="link-size">
        <a class="nav-link" @click="signOut">Sign out</a>
      </v-btn>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ArticlesHeader',
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    signOut () {
      this.$http.secured.delete('/signin')
        .then(response => {
          this.$store.commit('unsetCurrentUser')
          this.$router.replace('/')
        })
        .catch(error => this.setError(error, 'Cannot sign out'))
    },
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    showAdminLink () {
      return this.$store.getters.isAdmin || this.$store.getters.isManager
    }
  }
}
</script>

<style>
  .design-link {
    text-decoration: none;
    color:  #2c3e50;
  }
  .link-size {
    font-size: 1rem;
  }
</style>