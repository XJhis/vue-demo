<template>
	<div>
		<div class="header">
			<div class="logo"><img src="../../static/imgs/phone.jpg" alt=""></div>
			<ul class="header-tab">
				<li v-for="(value, key) in tabList">
					<!-- <a href="javascript:void(0)">{{value.name}}</a> -->
					<router-link :to="value.url+'/:'+value.id" tag="a" append="true" replace="true">{{value.name}}</router-link>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
	 // '', '', '简历'
	export default {
		data() {
			return {
				tabList: [
					{name: '首页', url: '/home'},
					{name: '职位', url: '/job'},
					{name: '公司', url: '/company'},
					{name: '简历', url: '/resume'}
				]
			}
		},

	}
</script>
<style>	
	.header {
		height: 60px;
		background-color: #ff6b00;		
	}

	.header .logo {
		float: left;
	}

	.header .header-tab {
		float: left;
		margin-left: 20px;
	}
	.header .logo img {
		width: 120px;
		height: 60px;
	}
	.header-tab li {
		float: left;		
	}
	.header-tab li a {
		display: block;;
		line-height: 60px;
		height: 60px;
		font-size: 16px;
		padding: 0 20px;
		color: #fff;
		text-decoration: none
	}
</style>
