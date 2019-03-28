<template>
	<div class="landing-container">
		<v-app id="inspire">
	    <v-toolbar>
	      <v-toolbar-title class="font-3">Eliza Khachatryan</v-toolbar-title>
	      <v-spacer></v-spacer>
	      <v-toolbar-items class="hidden-sm-and-down">
	      	<v-btn flat class="link-size">
	      		<router-link 
							class="design-link"
							:to="{ name: 'About' }">
							About
						</router-link>
	      	</v-btn>
	        <v-btn flat class="link-size">
	        	<router-link 
							class="design-link"
							:to="{ name: 'Design_Portfolio_Items' }">
							DESIGN
						</router-link>	
	       	</v-btn>
	        <v-btn flat class="link-size">
	        	<router-link 
							class="design-link"
							:to="{ name: 'Code_Portfolio_Items' }">
							{CODE}
						</router-link>
	        </v-btn>
	        <v-btn flat class="link-size special">
	        	<router-link 
							class="design-link"
							:to="{ name: 'Articles' }">
							BLOG
						</router-link>
	        </v-btn>
	        <!-- <v-btn flat class="link-size"> -->
<!-- 	        	<router-link 
							class="design-link"
							:to="{ path: 'Signin' }">
							Signin
						</router-link> -->
	        <!-- </v-btn> -->
	        <!-- <v-btn flat class="link-size">
	        	<div class="sign-out float-right">
						  <span @click="signOut">Sign out</span>
						</div>
	        </v-btn> -->
	        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
	      </v-toolbar-items>
	    </v-toolbar>
	  </v-app>
		<div class="background">
			<div class="landing-flex font-2">
				<div class="dimensions column-flex">
					<router-link 
						class="design-link"
						:to="{ path: 'Design_Portfolio_Items' }">
						DESIGN
					</router-link>
					<div class="font-1">
						"Life is short, art is long." Hippocrates
					</div>
				</div>
				<div class="dimensions column-flex">
					<router-link 
						class="design-link"
						:to="{ path: 'Code_Portfolio_Items' }">
						{CODE}
					</router-link>
					<div class="font-1">
						"The best spice is hunger." Unknown
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			// signOut () {
			//   this.$http.secured.delete('/signin')
			//     .then(response => {
			//       delete localStorage.csrf
			//       delete localStorage.signedIn
			//       this.$router.replace('/')
			//      })
			//      .catch(error => this.setError(error, 'Cannot sign out'))
			// }
		}
	}
</script>
<style scoped>
	.landing-container {
		display: flex;
		flex-direction: column;
	}
	.background {
		background-image: url('../assets/alarm-clock-art-background-1037993.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100%;
		width: 100%;
		position: absolute;
		top: 65px;
		bottom: 0;
	}
	.font-2 {
		font-family: 'Cabin Sketch', cursive;
		font-size: 4rem;
	}
	.font-1 {
		font-family: 'Kristi', cursive;
		font-size: 2rem;
	}
	.font-3 {
		font-family: 'Kristi', cursive;
		font-size: 3rem;
		color:  #2C3E50 !important;
	}
	.landing-flex {
		display: flex;
		flex-direction: row;
		height: 100%;
	}
	.dimensions {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.column-flex {
		display: flex;
		flex-direction: column;
	}
	.design-link {
		text-decoration: none;
		color:  #2c3e50;
	}
	.link-size {
		font-size: 1rem;
	}
	.special {
		background-color: #EBCFCB
	}
</style>