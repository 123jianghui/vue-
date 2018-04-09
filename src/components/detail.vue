<template>
	<div id="detail">
		<ul class="container">
			<li v-for="(list,index) in data">
				<div class="top">
					<div class="img">
						<!--<img src="../assets/images/detail/android/drawable-hdpi/shangpin.png" />-->
						<img :src="list.img"/>
					</div>
					<p>{{list.name}}</p>
					<div class="math">
						<div class="price">
							￥<span>{{list.price}}</span>
						</div>
						<div class="num">
							<div class="del" v-on:click="del(index)">
								<img src="../assets/images/detail/android/drawable-xhdpi/jianshao.png" />
							</div>
							<span class="number">{{list.quantity}}</span>
							<div class="add" @click="add(index)">
								<img src="../assets/images/detail/android/drawable-xhdpi/tianjia.png" />
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div class="bottom">
					<p class="xiangq"><span>|   </span>图文详情</p>
					<p class="txt" v-html="list.introduce"></p>
					<img src="../assets/images/detail/android/drawable-hdpi/tuwen.png" />
				</div>
				<div class="position">
					<router-link tag="div" class="l" to="/shoppingCar">
						<span style="position: absolute;top: 18%;left: 76%;font-size: 14px;" id="span"></span>
					</router-link>
					<div class="r" @click="pay()">
						<p class="price">￥<span>{{list.price * list.quantity | money}}</span></p>
						<p class="yes">立即支付</p>
					</div>
				</div>
			</li>
		</ul>
		<div class="zhez" style="display: none;">
			<div class="content">
				<p>您本次的消费金额：</p>
				<label></label><br /><br>
				<hr />
				<span class="btn_n" @click="btn_n">取消</span>
				<span class="btn_y" @click="btn_y">确认支付</span>
			</div>
		</div>
	</div>
</template>

<script>
	import url from '../components/url'

	export default {
		name: 'detail',
		data() {
			return {
				data: {

				},
				num: 0
			}
		},
		filters:{
			money:function(value){
				value = Number(value)
				return value.toFixed(2)
			}
		},
		methods: {
			pay: function() {
				var productids = sessionStorage.getItem("productid")
				var productcounts = $(".number").html()
				var orderPrice = $(".r .price span").html()

				$.ajax({
					type: "post",
					url: url.createOrder,
					dataType: "json",
					data: {
						"productids": productids,
						"productcounts": productcounts,
						"orderPrice": orderPrice
					},
					success: function(data) {
						if(data.message == "成功") {
							var timestam;
							var pack;
							var non;
							var sign;
							var appId;
							$.ajax({
								type: "post",
								url: "http://dc.iq234.com/nomanshop/testController.do?create",
								data: {
									"ordersIds": data.data.ordersIds,
									"ordersAllMoney": data.data.ordersAllMoney
								},
								dataType: "json",
								success: function(succ) {

									if(succ.respCode == 200) {
										timestam = succ.data.timeStamp;
										pack = succ.data.package;
										non = succ.data.nonceStr;
										appId = succ.data.appId;
										sign = succ.data.paySign;
										$(".hhhh").html(succ.data);


										function onBridgeReady() {
											WeixinJSBridge.invoke(
												'getBrandWCPayRequest', {
													appId: appId, //公众号名称，由商户传入
													timeStamp: timestam, //时间戳，自1970年以来的秒数
													nonceStr: non, //随机串
													package: pack,
													signType: "MD5", //微信签名方式：
													paySign: sign //微信签名
												},
												function(res) {
													if(res.err_msg == "get_brand_wcpay_request:ok") {
														window.location.href = "http://dc.iq234.com/nomanshop/dist/index.html#/history";
													} // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
													else {}
												}
											);
										}
										if(typeof WeixinJSBridge == "undefined") {
											if(document.addEventListener) {
												document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
											} else if(document.attachEvent) {
												document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
												document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
											}
										} else {
											onBridgeReady();
										}
									} else {
										console.log("数据加载失败")
									}
								},
								error: function(err) {
									console.log(err)
								}
							})
						}
					}
				})

			},
			btn_n: function() {
				$(".zhez").css("display", "none")
			},
			btn_y: function() {
				$(".zhez").css("display", "none")
			},
			//点击实现购物车数量的减少
			del: function(index) {
				var productid = sessionStorage.getItem("productid")
				var _this = this;
				$.ajax({
					type: "post",
					data: {
						"productid": productid
					},
					url: url.reduceUrl,
					async: true,
					success: function(data) {
						data = JSON.parse(data)

						if(data.data == "SUCCESS") {

							let num = $(".number").html();
							let totalNum = $("#span").html()
							let total = Number($(".position .r .price span").html());
							let price = Number($(".math .price span").html())
							console.log(total, price)
							total -= price;
							if(total <= 0){
								total = 0
							}
							$(".position .r .price span").html(total)
							num--;
							totalNum--;
							if(num <= -1) {
								num = 0
							}
							$(".number").html(num)
							$.ajax({
								type: "post",
								url: url.shoppingCarUrl,
								async: true,
								success: function(data) {
									//
									data = eval(data)
									var num = 0;

									for(var i = 0; i < data.length; i++) {
										num += Number(data[i].quantity)

									}
									$("#span").html(num);

								}
							});

						}

					}
				});

			},
			//点击实现购物车数量的增加
			add: function(index) {
				var productid = sessionStorage.getItem("productid")
				console.log()
				var _this = this
				$.ajax({
					type: "post",
					url: url.addUrl,
					data: {
						"productid": productid
					},
					success: function(data) {
						//						console.log(data)
						data = JSON.parse(data)

						if(data.data == "SUCCESS") {
							let num = $(".number").html();
							let totalNum = $("#span").html()
							num++;
							$(".number").html(num)
							totalNum++;

							$("#span").html(totalNum)
							let total = Number($(".position .r .price span").html());
							let price = Number($(".math .price span").html())
							console.log(total, price)
							total += price;
							$(".position .r .price span").html(total)
							$.ajax({
								type: "post",
								url: url.shoppingCarUrl,
								async: true,
								success: function(data) { //
									data = eval(data)
									var num = 0;

									for(var i = 0; i < data.length; i++) {
										num += Number(data[i].quantity)

									}
									$("#span").html(num);

								}
							});

						} else {
							alert(data.message)
						}
					}
				})

			}
		},
		mounted: function() {
			let _this = this
			var productid = sessionStorage.getItem("productid")
//			console.log(productid)
			$.ajax({
				type: "post",
				url: url.detailUrl,
				async: true,
				data: {
					"productid": productid
				},
				success: function(data) {
					_this.data = eval("[" + data + "]");
					console.log(data)
				}
			});
			$.ajax({
				type: "post",
				url: url.shoppingCarUrl,
				async: true,
				success: function(data) {
					//
					data = JSON.parse(data)
					for(var i = 0; i < data.length; i++) {
						_this.num += Number(data[i].quantity)
					}
					console.log(_this.num)
					$("#span").text(_this.num);

				}
			});
		}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		font-family: "方正兰亭中黑简体";
	}

	html,
	body {
		width: 100%;
		height: 100%;
	}

	#detail {
		width: 96%;
		padding: 0 2%;

		background: url(../assets/images/detail/android/drawable-hdpi/dabeijing.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}

	.container {
		width: 90%;
		padding: 4% 5%;
		height: 92%;
		background: url(../assets/images/detail/android/drawable-xhdpi/beijing.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}

	.top {
		width: 100%;
	}

	.top .img {
		width: 100%;
	}

	.top .img img {
		width: 100%;
	}

	.top p {
		color: #101010;
		font-weight: bold;
		font-size: 34px;
		margin: 14px 19px;
	}

	.top .math {
		display: flex;
		width: 100%;
		margin: 0 19px 20px 10px;
		align-items: center;
		justify-content: space-between;
		font-size: 36px;
	}

	.top .math .price {
		width: 50%;
		color: red;
		font-size: 46px;
		font-weight: bold;
	}

	.top .math .num {
		width: 50%;
		display: flex;
		align-items: center;
		text-align: center;
		margin-left: 25%;
	}

	.top .math .num img {
		width: 55%;
	}

	.bottom .xiangq {
		font-size: 32px;
		margin: 29px 19px 20px 19px;
		font-weight: 550;
		color: #3F3F3F;
	}

	.bottom .xiangq span {
		color: red;
	}

	.bottom .txt {
		color: #A2A2A2;
		margin-left: 19px;
		font-size: 28px;
		letter-spacing: 2px;
		line-height: 40px;
	}

	.bottom img {
		width: 100%;
		margin-top: 19px;
	}

	.position {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}

	.position .l {
		width: 122px;
		height: 120px;
		position: fixed;
		padding: 2%;
		bottom: 1%;
		left: 0;
		background: url(../assets/images/ps/购物车提示@2x.png) no-repeat;
		background-size: 100% 100%;
	}

	.position .r {
		width: 158px;
		position: fixed;
		bottom: 0%;
		right: 4%;
		padding: 5% 1%;
		background: url(../assets/images/detail/android/drawable-xhdpi/querenzhifu.png) no-repeat;
		background-size: 100% 100%;
		text-align: center;
	}

	.position .r .price {
		font-size: 38px;
		color: yellow;
	}

	.position .r .yes {
		font-size: 32px;
		color: #fff;
		margin-top: 2%;
	}

	.zhez {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
	}

	.zhez .content {
		width: 520px;
		height: 215px;
		background: #fff;
		margin: 60% auto;
		border-radius: 10px;
		text-align: center;
		font-size: 32px;
		padding-top: 8%;
	}

	.zhez label {
		font-size: 36px;
	}

	.btn_y,
	.btn_n {
		display: inline-block;
		width: 48%;
		height: 80px;
		/*border: 1px solid #ccc;*/
		line-height: 80px;
	}

	.btn_y {
		color: red;
	}

</style>
