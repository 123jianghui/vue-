<template>
	<div class="shoppingCar">
		<div class="container">
			<ul style="margin-bottom: 30%;">
				<li v-for="(list,index) in data" :id="list.id">
					<!--<p class="title">菲农旗舰店</p>-->
					<div class="content">
						<div class="l">
							<!--<img src="../assets/images/shopping/check.png" v-if="bool2" @click="toggle(index)"/>
							<img src="../assets/images/shopping/checked.png" v-if="bool1" @click="toggle(index)"/>-->
							<input type="checkbox" class="check" name="" value="" @click="check(index)" />
						</div>
						<div class="m">
							<div>
								<img src="../assets/images/shopping/图层4@2x.png" />
							</div>
							<div>
								<p class="name">{{list.name}}</p>
								<p class="num">
									单价<span>￥</span><span class="price">{{list.price}}</span>&nbsp;&nbsp; 数量&nbsp;
									<button class="del" @click="reduce(index)">-</button><input type="text" :value="list.quantity" /><button @click="add(index)" class="add">+</button>
								</p>
							</div>
						</div>
						<div class="r" @click="del(index)">
							<img src="../assets/images/shopping/删除@2x.png" />
						</div>
					</div>
				</li>
			</ul>
			<div class="bottom" style="background:#FF8856;padding-top: 4%;z-index: 333;">
				<div>
					<p>合计：￥<span class="total_price">0</span></p>
				</div>
				<div @click="pay()">
					<img src="../assets/images/shopping/去结算@2x.png" />
				</div>
				<!--<router-link tag="div" to="/pay">
					<img src="../assets/images/shopping/去结算@2x.png"/>
				</router-link>-->
			</div>
		</div>
		<div class="box">
			<div>
				<p>确定删除这件商品吗？</p>
				<button class="yes" @click="delData()">确定</button>
				<button class="off" @click="cancel()">取消</button>
			</div>
		</div>
		<!--<div class="zhez" style="display: none;">
			<div>
				<p>您本次的消费金额</p>
				<label>￥：<span class="money"></span></label><br /><br><hr />
				<span class="btn_n" @click="btn_n">取消</span>
				<span class="btn_y" @click="btn_y">确认支付</span>
			</div>
		</div>-->
	</div>
</template>

<script>
	import url from '../components/url'
	var flag = 0
	var total = 0;
	export default {
		name: 'shoppingCar',
		data() {
			return {
			/*	num: 0,*/
				data: {

				},
				product_id: 0
			}
		},
		methods: {
			toggle: function(index) {
				this.bool1 = !this.bool1
				this.bool2 = !this.bool2
				if(this.bool1 || this.bool2) {
					var num = parseInt($("li input").eq(index).val())
					var price = parseInt($(".price").eq(index).html())
					console.log(num * price)
				}
			},
			del: function(index) {
				var _this = this;
				$(".box").css('display', 'block');
				_this.num = index;
				_this.product_id = $('.container ul li').eq(index).attr('id')

			},
			delData: function() {
				var productid = this.product_id
				var num = this.num
				console.log(this.product_id)
				$(".box").css('display', 'none')
				$.ajax({
					type: "post",
					url: url.delUrl,
					async: true,
					data: {
						"product_id": productid
					},
					success: function(data) {
						window.location.reload();
					}
				});
			},
			reduce: function(index) {
				var productid = $(".container ul li").eq(index).attr('id');
				var num = parseInt($(".m input").eq(index).val())
//				var _this = this;
				var inp = $(".check").length;
				num--;
				if(num<=0){
					num =1 ;
				}
				var totals = 0;
				$(".m input").eq(index).val(num)
				for(let i = 0; i < inp; i++) {
					//获取所有复选框是否为选中状态
					flag = $(".l input").eq(i).prop("checked")
					//console.log(flag)
					if(flag) {
						$.ajax({
							type: "post",
							data: {
								"productid": productid
							},
							url: url.reduceUrl,
							async: true,
							success: function(data) {
								//data = JSON.parse(data)
//								data="SUCCESS"
//								if(data == "SUCCESS") {
									$(".m input").eq(index).val(num)
									var totalNum = Number($(".num").eq(i).find(".price").html()) * Number($(".num").eq(i).find("input").val());
									console.log(totalNum)
									totals += totalNum;
									console.log(totals)
									$(".total_price").html(totals.toFixed(2))
									
									total = totals
									
//								} else {
//									console.log("err")
//								}

							}
						});

					}
				}

			},
			add: function(index) {
//				var productid = $(".container ul li").eq(index).attr('id')
//				var _this = this
//				$.ajax({
//					type: "post",
//					url: url.addUrl,
//					data: {
//						"productid": productid
//					},
//					success: function(data) {
//						console.log(data)
//						data = JSON.parse(data)
//
//						if(data.data == "SUCCESS") {
//							var num = parseInt($(".m input").eq(index).val())
//							num++;
//							$(".m input").eq(index).val(num)
//
//						} else {
//							console.log(err)
//						}
//					}
//				})
//				this.total = 0;
//				var inp = $(".check").length;
//
//				for(let i = 0; i < inp; i++) {
//					flag = $(".l input").eq(i).prop("checked")
//
//					if(flag) {
//						this.total += $(".num").eq(i).find(".price").html() * $(".num").eq(i).find("input").val();
//
//					}
//				}
//				this.total += Number($(".num").eq(index).find(".price").html())
//				$(".total_price").html(this.total.toFixed(2))
//				total = this.total

				var productid = $(".container ul li").eq(index).attr('id');
				var num = parseInt($(".m input").eq(index).val())
//				var _this = this;
				var inp = $(".check").length;
				num++;
				var totals = 0;
				$(".m input").eq(index).val(num)
				for(let i = 0; i < inp; i++) {
					//获取所有复选框是否为选中状态
					flag = $(".l input").eq(i).prop("checked")
					//console.log(flag)
					if(flag) {
						$.ajax({
							type: "post",
							data: {
								"productid": productid
							},
							url: url.addUrl,
							async: true,
							success: function(data) {
								data = JSON.parse(data)
								console.log(data)
								//console.log(data)
								if(data.data == "SUCCESS") {
									$(".m input").eq(index).val(num)
									var totalNum = Number($(".num").eq(i).find(".price").html()) * Number($(".num").eq(i).find("input").val());
									console.log(totalNum)
									totals += totalNum;
									console.log(totals)
									$(".total_price").html(totals.toFixed(2))
									
									total = totals
									
								} else {
									console.log("err")
								}

							}
						});

					}
				}
			},
			cancel: function() {
				$(".box").css('display', 'none')
			},
			//点击复选框，计算商品总价
			check: function(index) {
				//				var inp = $("ul li").length;
				//				var flag = $(".l input").prop("checked")
				//			
				//				total = $(".num").eq(index).find(".price").html()*$(".num").eq(index).find("input").val();
				//
				//				$(".total_price").html(total)	
				this.total = 0;
				var inp = $("ul li").length;

				for(let i = 0; i < inp; i++) {
					flag = $(".l input").eq(i).prop("checked")

					if(flag) {
						this.total += $(".num").eq(i).find(".price").html() * $(".num").eq(i).find("input").val();
					}
				}
				$(".total_price").html(this.total.toFixed(2))
				total = this.total
			},
			btn_n: function() {
				$(".zhez").css("display", "none")
			},
			btn_y: function() {
				$(".zhez").css("display", "none")

			},
			pay: function() {

				var productids = ""; //商品ids
				var productcounts = ""; //购买数量s
				$(":checkbox").each(function() {
					if(this.checked == true) {
						productids += $(this).parent().parent().parent().attr("id") + ",";
						productcounts += $(this).parent().siblings().find("input").val() + ",";

					}
				});

				//订单总价
				var orderPrice = $(".total_price").html();

				//生成订单
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
//								url: "http://127.0.0.1/nomanshop/testController.do?create",
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

			}
		},
		mounted: function() {
			let _this = this
			$.ajax({
				type: "post",
				url: url.shoppingCarUrl,
				async: true,
				success: function(data) {
					_this.data = eval(data);

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
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
	}
	
	.shoppingCar {
		width: 100%;
		height: 100%;
	}
	
	.container {
		width: 100%;
		height: -webkit-fill-available;
		background: url(../assets/images/shopping/圆角矩形2@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}
	
	ul {
		width: 94%;
		padding: 4% 3% 0%;
	}
	
	ul li {
		width: 96%;
		padding: 3% 2%;
		height: 100%;
		background: url(../assets/images/shopping/beijing@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		margin-bottom: 4%;
	}
	
	ul li .title {
		width: 100%;
		font-size: 30px;
		font-family: "黑体";
		color: #333333;
	}
	
	.content {
		width: 100%;
		background: url(../assets/images/shopping/xiaobeijing@2x.png) no-repeat 0px 0px;
		background-size: 100% 99%;
		margin: 2% 0%;
		min-height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.content .l {
		width: 15%;
		text-align: center;
	}
	
	.content .m {
		width: 70%;
		height: 100%;
	}
	
	.content .r {
		width: 15%;
	}
	
	.content .l img {
		width: 40px;
		height: 40px;
	}
	
	.content .r img {
		width: 100%;
	}
	
	.content .m {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.content .m .name {
		font-size: 28px;
		font-family: "黑体";
		color: #333333;
		margin-bottom: 6%;
		font-weight: lighter;
	}
	
	.content .m div:nth-child(1) {
		width: 40%;
	}
	
	.content .m div img {
		width: 80%;
	}
	
	.content .m div:nth-child(2) {
		font-size: 24px;
		color: #CCCCCC;
		font-family: "黑体";
	}
	
	.content .m .num span {
		color: #fb4c41;
	}
	
	.content .m .num input {
		width: 20%;
		text-align: center;
		border: 2px solid #ccc;
		height: 31px;
	}
	
	.content .m .num .add {
		width: 10%;
		background: #fff;
		border: 2px solid #ccc;
		border-left: 0;
		height: 35px;
	}
	
	.content .m .num .del {
		width: 10%;
		background: #fff;
		border: 2px solid #ccc;
		border-right: 0;
		height: 35px;
	}
	
	.bottom {
		width: 94%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0% 3% 4%;
		position: fixed;
		bottom: 0;
	}
	
	.bottom div {
		width: 50%;
	}
	
	.bottom p {
		color: #fff;
		font-size: 30px;
		font-family: "黑体";
	}
	
	.bottom span {
		color: yellow;
	}
	
	.bottom div:nth-child(2) {
		text-align: right;
	}
	
	.bottom img {
		width: 60%;
	}
	
	.box {
		width: 100%;
		height: 100%;
		z-index: 999;
		position: fixed;
		top: 0;
		display: none;
		background: rgba(0, 0, 0, 0.4);
	}
	
	.box div {
		width: 450px;
		padding: 8% 0;
		margin: 50% auto;
		background: #fff;
		border-radius: 30px;
		text-align: center;
		font-size: 30px;
	}
	
	.box div p {
		margin-bottom: 5%;
	}
	
	.box button {
		width: 30%;
		padding: 2% 0;
		background: deepskyblue;
		border: 0;
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
	
	.zhez div {
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