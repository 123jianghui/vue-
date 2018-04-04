<template>
	<div id="pay">
		<div class="Div">
			<p class="txt">您此次的消费金额是</p>
			<p class="price">$<span>111</span></p>
			<div class="btn">立即支付</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	#pay{
		width:90%;
		height: 95%;
		padding: 5%;
		padding-bottom:4%;
		background: url(../assets/images/detail/android/drawable-hdpi/dabeijing.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}
	.txt{
		text-align: center;
		padding-top: 25%;
		font-size: 50px;
	}
	.price{
		text-align: center;
		padding-top: 25%;
		font-size: 60px;
	}
	.btn{
		width: 80%;
		
		padding: 3% 0;
		text-align: center;
		background: limegreen;
		font-size: 36px;
		color: #fff;
		position: fixed;
		bottom: 25%;
		left:9%;
	}
	.Div{
		width: 80%;
		height:60%;
		margin-top: 25%;
		padding: 10%;
		background: url(../assets/images/detail/ios/beijing@3x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}
</style>