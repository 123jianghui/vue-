<template>
	<div id="reg">
		<div class="box">
			<div class="top">
				<img src="../assets/images/ps/mobile/下拉@2x.png" />
			</div>
			<div class="container">
				<div class="header">
					<img src="../assets/images/ps/mobile/宁夏优品@2x.png" />
				</div>
				<div class="con">
					<p>欢迎注册智能无人售货系统</p>
					<div class="shadow">
						<div class="name">
							<!--<img src="../assets/images/reg/065用户.png" />
							<p>请填写真实姓名</p>-->
							<input type="text" placeholder="请填写真实的姓名" @blur="regName()" />
						</div>
						<div class="tel">
							<input type="text" placeholder="请填写手机号" @blur="regTel()" />
							
							<span v-show="show" @click="subTel()">获取验证码</span>
        					<span v-show="!show" class="count">{{count}} s</span>
						</div>
						<div class="password">
							<!--<img src="../assets/images/reg/060密码、锁.png" />
							<p>请填写验证码</p>-->
							<input type="tel" placeholder="请填写验证码" />
						</div>
					</div>
				</div>
				<div class="nextBtn">
					<router-link to="" @click.native="submitFun(index)" class="rou">
						<img src="../assets/images/reg/图层2.png" />
					</router-link>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import url from '../components/url'
	const TIME_COUNT = 60;
	
	export default {
		name: 'reg',
		data() {
			return {
				formData: {
					phone: '',
					code: '',
				},
				show: true,
				count: '',
				timer: null,
			}
		},
		methods: {
			submitFun: function(a) {
				var _this = this;
				//				console.log($('router-link').props('to'))
				var username = $(".name input").val();
				var id = $(".id input").val();
				var tel = $(".tel input").val();
				var codenumber = $(".password input").val();
				var openids = sessionStorage.getItem("openids");
				var facilityid =sessionStorage.getItem("facilityid") ;
				//				sessionStorage.setItem('nickname', username);
				//				sessionStorage.setItem('phone', tel);
				$.ajax({
					type: "post",
					url: url.passUrl,
					async: true,
					data: {
						"nickname": username,
						"phone": tel,
						"codenumber": codenumber,
						"openids": openids,
						"facilityid": facilityid
					},
					success: function(data) {
						console.log(data)
						data = JSON.parse(data)
						var respCode = Number(data.respCode)
						if(respCode == 200) {
							console.log(respCode)
							window.location.href = '/nomanshop/dist/index.html#/user'
						} else {
							alert("验证码错误")
						}
					}
				});

			},
			regName: function() {
				var username = /^[\u4E00-\u9FA5A-Za-z]+$/;
				if(!username.test($(".name input").val())) {
					alert("请输入正确的姓名")
					$(".name input").val("")
				}
			},
			regId: function() {
				var idCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
				if(!idCard.test($(".id input").val())) {
					alert("身份不合法")
					$(".id input").val("")
				}
			},
			regTel: function() {
				var tel = /(^[1][3578][0-9]{9}$)/
				if(!tel.test($(".tel input").val())) {
					alert("请输入正确的手机号")
					$(".tel input").val("")
				}
			},
			reg: function() {
				var tel = $(".tel input").val();
				$.ajax({
					type: "post",
					url: url.telUrl,
					async: true,
					data: {
						"phone": tel
					},
					success: function(data) {

						if(data.respCode == 200) {
							var phone = $(".tel input").val()
							this.phone = phone
							alert(data.message)
						} else if(data.respCode == 300) {
							alert(data.message)
						} else if(data.respCode == 301) {
							alert(data.message)
						}
					}
				})
			},
			subTel: function() {
				if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000)
              }
			}
		},
		created() {
			var _this = this;
			var url = window.location.href;
			if(url.indexOf("?") != -1) {
				var str = url.substr(1); //去掉?号
				var strs = str.split("&");
				for(var i = 0; i < strs.length; i++) {
					if(i = 0) {
						var openids = Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1])
					} else {
						var facilityid = Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1])
					}

				}
			}
		}
	}
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
	}
	
	input::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #999;
		font-size: 22px;
	}
	
	input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #999;
		font-size: 22px;
	}
	
	input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #999;
		font-size: 22px;
	}
	
	input:-ms-input-placeholder {
		/* Internet Explorer 10+ */
		color: #999;
		font-size: 22px;
	}
	
	#reg {
		width: 100%;
		height: 100%;
	}
	
	.box {
		width: 100%;
		height: 100%;
		background: url(../assets/images/ps/mobile/渐变背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}
	
	.container {
		width: 100%;
	}
	
	.container .header {
		width: 100%;
		text-align: center;
	}
	
	.container .header img {
		width: 20%;
		/*margin-top:4%;*/
		padding: 3% 0;
	}
	
	.top {
		width: 100%;
		text-align: center;
		background: #FE89A6;
		padding: 2% 0 1%;
	}
	
	.top img {
		width: 8%;
	}
	
	.container .con {
		width: 90%;
		margin: 0 auto;
		background: url(../assets/images/ps/白色背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		padding: 8% 0;
	}
	
	.container .con p:nth-child(1) {
		font-size: 32px;
		color: #FBB450;
		text-align: center;
	}
	
	.container .con .shadow {
		width: 70%;
		height: 70%;
		margin: 5% auto;
		padding: 15% 5%;
		box-shadow: 0px 0px 15px 1px #ccc;
	}
	
	.shadow .name,
	.id,
	.tel,
	.password {
		width: 100%;
		background: #E8E8E8;
		display: flex;
		align-items: center;
		font-size: 26px;
		color: #BFBFBF;
		margin-bottom: 10%;
	}
	
	.name input {
		width: 100%;
		background: url(../assets/images/reg/065用户.png) no-repeat 5% 50%;
		background-size: 9%;
		border: 0;
		padding: 5% 20%;
	}
	
	.id input {
		width: 100%;
		background: url(../assets/images/reg/012身份证.png) no-repeat 5% 50%;
		background-size: 10%;
		border: 0;
		padding: 5% 20%;
	}
	
	.tel input {
		width: 30%;
		background: url(../assets/images/reg/058手机.png) no-repeat 8% 50%;
		background-size: 9%;
		border: 0;
		padding: 5% 20%;
	}
	
	.tel span {
		color: #999999;
		font-size: 22px;
		margin-left: 10px;
	}
	
	.password input {
		width: 100%;
		background: url(../assets/images/reg/060密码、锁.png) no-repeat 5% 50%;
		background-size: 8%;
		border: 0;
		padding: 5% 20%;
	}
	
	.shadow .name img {
		width: 10%;
		padding: 4%;
	}
	
	.shadow .tel img {
		width: 8%;
		padding: 4%;
	}
	
	.shadow .id img {
		width: 10%;
		padding: 7% 5%;
	}
	
	.shadow .password img {
		width: 10%;
		padding: 4%;
	}
	
	.nextBtn {
		width: 100%;
		text-align: center;
		margin: 6% auto;
	}
	
	.nextBtn img {
		width: 50%;
	}
</style>