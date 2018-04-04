<template>
	<div id="user">

		<div class="container">
			<p>请仔细阅读智能无人售货协议</p>
			<div class="text"></div>
			<div class="inp">
				<img src="../assets/images/ps/user/未选中@2x.png" @click="fun()" />
				<img src="../assets/images/ps/user/选中@2x.png" @click="fun()" />
				<!--<input type="checkbox"  />-->
				<span>我已阅读并同意该协议</span>
			</div>
			<div class="success">
				<router-link tag="span" to="/list">完成</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import url from '../components/url'
	export default {
		name: 'user',
		data() {
			return {
				bool: false,
				nickname:'',
				idcard:'',
				phone:''
			}
		},
		methods: {
			fun: function() {
				if(this.bool == true) {
					$(".inp img:nth-child(1)").css("display", "block")
					$(".inp img:nth-child(2)").css("display", "none")
					this.bool = false
				} else {
					$(".inp img:nth-child(1)").css("display", "none")
					$(".inp img:nth-child(2)").css("display", "block")
					this.bool = true
					var _this = this
					axios.post(url.userUrl)
						.then(function(data) {
							var nickname = sessionStorage.getItem('nickname');
							_this.nickname = nickname
							var idcard = sessionStorage.getItem('idcard');
							_this.idcard = idcard
							var phone = sessionStorage.getItem('phone');
							_this.phone = phone
							console.log(data)
						})
				}
			}
		}

	}
	//
	//	$(document).ready(function() {
	//		var flag = $(".inp img:nth-child(1)").css("display")
	//		if(flag == "none") {
	//			$.ajax({
	//				type: "post",
	//				url: url.userUrl,
	//				async: true,
	//				success: function(data) {
	//					console.log(data)
	//				}
	//			});
	//		}
	//
	//	})
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		font-family: "方正兰亭黑简体";
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
		padding: 0;
	}
	
	.inp img:nth-child(1) {
		display:block;
	}
	
	.inp img:nth-child(2) {
		display: none;
	}
	
	#user {
		width: 100%;
		height: 100%;
	}
	
	.container {
		width: 80%;
		height:90%;
		background: url(../assets/images/ps/背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		padding: 8% 10%;
	}
	
	.container p:nth-child(1) {
		color: black;
		font-size: 36px;
		margin-bottom: 42px;
		margin-top: 32px;
		text-align: center;
	}
	
	.text {
		width: 100%;
		height: 785px;
		border: 2px solid #ccc;
		margin: 2% 0;
	}
	
	.container span {
		font-size: 26px;
		color: #1D1C1C;
		margin-left: 24px;
	}
	
	.inp {
		display: flex;
		align-items: center;
	}
	
	.inp img {
		width: 38px;
		height: 38px;
	}
	
	.success {
		width: 80%;
		text-align: center;
		background: url(../assets/images/ps/提交按钮@2x.png) no-repeat 0px 0px;
		margin: 40px auto;
		padding: 5% 0;
		background-size: 100% 100%;
	}
	
	.success span {
		color: #ffffff;
		font-size: 28px;
	}
</style>