<template>
	<div id="kefu">
		<div class="container">
			<p class="p1">联系客服</p>
			<textarea name="" placeholder="请输入留言……"></textarea>
			<img src="../assets/images/ps/提交@2x.png" class="submit" @click="leavePost()"/>
			<div class="btn">
				<img src="../assets/images/ps/电话@2x.png"/>
				<p>客服热线</p>
			</div>
		</div>
	</div>
</template>

<script>
	import url from '../components/url'
	
	export default {
		name: 'kefu',
		data() {
			return {
				content:""
			}
		},
		methods:{
			leavePost:function(){
				let _this = this;
				var cont = $("textarea").val()
				axios.post(url.leaveUrl)
				.then(function(data) {
					console.log(data.data)
					_this.content = cont;
					console.log(_this.content)
					$("textarea").val("")
					alert(data.data.message)
				})
			}
		}
	}

</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
	list-style: none;
	font-family: "方正兰亭黑简体";
}
html,body{
	width: 100%;
	height: 100%;
}
#kefu{
	width: 100%;
	height: 100%;
}

.container{
	width: 100%;
	height:100%;
	background:url(../assets/images/ps/背景@2x.png) no-repeat 0px 0px;
	background-size: 100% 100%;
	text-align: center;
}
.container .p1{
	width: 100%;
	color: #323232;
	text-align: center;
	font-size: 36px;
 	padding-top:63px;
 	padding-bottom:48px;
}
textarea{
	width:72%;
	height:560px;
	font-size:31px;
	padding: 33px 32px;
}
.submit{
	width:25%;
	margin-left:55%;
	margin-top:33px;
}
.btn{
	width: 60%;
	margin:100px auto;
	background: url(../assets/images/ps/客服按钮@2x.png) no-repeat 50% 0px;
	background-size: 100% 100%;
	display: flex;
	padding:5% 0;
	align-items: center;
	justify-content:center;
	margin-top:13%;
}
.btn img{
	width:8%;
}
.btn p{
	font-size:28px;
	color: #FFFFFF;
	padding-left:22px;
}
</style>