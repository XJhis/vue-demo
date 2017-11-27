<template>
	<div>
		<my-head></my-head>
		<div class="content">
			<ul>
				<li v-for="(value, key) in list">
					<span>{{value.create_at}}</span>&nbsp;&nbsp;<a href="javascript:void(0)">{{value.title}}</a>
					<br>
					<!-- <div v-html="value.content"></div> -->
				</li>
			</ul>
		</div>
		<my-foot></my-foot>
	</div>
</template>
<script>
import Hello from '../components/HelloWorld.vue'
import  myHead from '../components/Header.vue'
import  myFoot from '../components/Footer.vue'
export default {
  components: {myHead, myFoot},
  data() {
  	return {
  		list:[]
  	}
  },
  created () {
    this.getData();
  },
  methods: {
  	getData() {
  		this.$api.get('topics', null, res => {
  			console.log(res.data)
  			this.list = res.data
  		})
  	}
  }
}

</script>
<style>
	h3.title {
		background-color: #ff6b00;
		color: #fff;
		font-size: 16px;
		line-height: 30px;
		display: inline-block;
		padding:0 10px;
	}
</style>