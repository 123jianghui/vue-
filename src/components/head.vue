<template>
	<div id="head">
		<div class="top">
			<img src="../assets/images/head/qirtu/gongxiangchaoshi.png" />
		</div>
		<div class="container">
			<p>夜深了</p>
			<h1>爱在美食美刻</h1>
			<p class="txt">GOOD NIGHT</p>
			<p class="txt2">早点睡吧</p>
		</div>
		<!--<div class="footer">
			<img src="../assets/images/head/qirtu/gengduoxuanze.png" />
		</div>-->
		<router-link tag="div" class="footer" to="/reg">
			<img src="../assets/images/head/qirtu/gengduoxuanze.png" />
		</router-link>
	</div>
</template>

<script>
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