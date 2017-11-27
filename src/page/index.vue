<template>
	<div>
		<h4>
			{{msg}}
		</h4>
	</div>
</template>
<script>
	export default {
	  data () {
	    return {
	      msg: '我是index页面，不是写死的哦'
	    }
	  },
	  created () {
	    this.$api.get('topics', null, r => {
	      console.log(r)
	    })
	  }
	}
</script>
<style>
	h4 {
		height: 30px;
		line-height: 30px;
		font-size: 16px;
	}
</style>
