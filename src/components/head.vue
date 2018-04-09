<template>
	<div id="head">
		<router-link to="" tag="div" @click.native="isreg()" style="margin-bottom: 12%;">
			<div class="top">
				<img src="../assets/images/head/qirtu/gongxiangchaoshi.png" />
			</div>
			<div class="container">
				<p>夜深了</p>
				<h1>爱在美食美刻</h1>
				<p class="txt">GOOD NIGHT</p>
				<p class="txt2">早点睡吧</p>
			</div>
		</router-link>
		<!--<div class="footer">
			<img src="../assets/images/head/qirtu/gengduoxuanze.png" />
		</div>-->

		<a href="https://h5.youzan.com/v2/showcase/homepage?alias=oyvammgj&sf=wx_menu&redirect_count=1&oid=51023172&reft=1522632855450_1522632866825&spm=f69780093_mid730248">
			<img src="../assets/images/head/qirtu/gengduoxuanze.png" style="width: 30%;" />
		</a>
	</div>
</template>

<script>
	import url from '../components/url'

	export default {
		name: 'head',
		methods: {
			isreg: function() {
				$.ajax({
					type: "post",
					url: url.isregist,
					success: function(data) {
						data = JSON.parse(data);
						if(data.message == "false") {

							var openids = data.data.openids;
							var facilityid = data.data.facilityid;
							sessionStorage.setItem("openids", openids)
							sessionStorage.setItem("facilityid", facilityid)
							window.location.href = '/nomanshop/dist/index.html#/reg'
						} else {
							window.location.href = '/dist/index.html#/list'
						}
					}
				})
			},
			timer: function() {
				$.ajax({
					type: "post",
					url: url.isregist,
					success: function(data) {
						data = JSON.parse(data);
						if(data.message == "false") {
							var openids = data.data.openids;
							var facilityid = data.data.facilityid;
							sessionStorage.setItem("openids", openids)
							sessionStorage.setItem("facilityid", facilityid)
							window.location.href = '/nomanshop/dist/index.html#/reg'
						} else {
							window.location.href = '/dist/index.html#/list'
						}
					}
				})
			}
		},
		mounted:function(){
			setTimeout(function(){
				$.ajax({
					type: "post",
					url: url.isregist,
					success: function(data) {
						data = JSON.parse(data);
						if(data.message == "false") {
							var openids = data.data.openids;
							var facilityid = data.data.facilityid;
							sessionStorage.setItem("openids", openids)
							sessionStorage.setItem("facilityid", facilityid)
							window.location.href = '/nomanshop/dist/index.html#/reg'
						} else {
							window.location.href = '/dist/index.html#/list'
						}
					}
				})
			},2000)
		}

	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	html,
	body {
		width: 100%;
		height: 100%;
	}

	#head {
		width: 100%;
		height: 100%;
		background: url(../assets/images/head/qirtu/bg.jpg) no-repeat 0px 0px;
		background-size: 100%;
		text-align: center;
	}

	.rout {
		width: 100%;
		height: 100%;
	}

	a {
		text-decoration: none;
	}

	.top {
		width: 100%;
	}

	.top img {
		width: 40%;
		margin-top: 12%;
	}

	.container {
		width: 100%;
		height: 65%;
	}

	p:nth-child(1) {
		font-size: 32px;
		color: #EF3F32;
		display: inline-block;
		border: 1px solid #EF3F32;
		margin-top: 75%;
	}

	h1 {
		color: #EF3F32;
		font-size: 60px;
	}

	.txt {
		font-size: 32px;
		color: #EF3F32;
		opacity: 0.7;
	}

	.txt2 {
		font-size: 32px;
		color: #EF3F32;
		opacity: 0.7;
	}

	.footer {
		width: 100%;
	}

	.footer img {
		width: 32%;
	}
</style>
