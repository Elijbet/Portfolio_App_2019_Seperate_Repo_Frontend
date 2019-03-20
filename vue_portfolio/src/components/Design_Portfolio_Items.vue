<!-- <template>
 <div id="contacts">
  <div v-for="design_portfolio_item in design_portfolio_items">
   <p>{{design_portfolio_item.title}}</p>
   <p>{{design_portfolio_item.text}}</p>
   <p>{{design_portfolio_item.date}}</p>
  </div>
 </div>
</template>

<script>
	import axios from 'axios'

	export default {
	 data() {
	  return {
	   design_portfolio_items: [],
	   title: [],
	   text: [],
	   date: [],
	   errors: []
	  }
	 },
	 created() {
	  axios.get('localhost:3000/design_portfolio_items') 
	  .then(response => {
	   this.design_portfolio_itemss = response.data
	  })
	 .catch(e => {
	  this.error.push(e)
	  })
	 },
	}
</script> -->