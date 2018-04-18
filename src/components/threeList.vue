<template>
	<div id="threeList">
		<div class="container">
			<div class="container2">
					<div class="header" style="display:none">
						<div class="ss">
							<input type="text" placeholder="请输入商品名称" @input="search()" />
						</div>
						<p>设备：天河一号</p>
						<div class="nav">
							<div class="swiper-container">
								<div class="swiper-wrapper" @touchstart="touchStart()" @touchmove="touchMove()" @touchend="touchEnd()">
									<div class="swiper-slide">
										<ul style="flex-wrap: wrap;">
											<li v-for="(list , index) in arr" :id="list.id">
												<router-link :to="{path:'/'+list}" @click.native="routerTo(index)">{{list.name}}</router-link>
											</li>
											<!-- <li>优质水果</li>
											<li>坚果类</li>
											<li>零食类</li>
											<li>饮料类</li> -->
										</ul>
									</div>
									<div class="swiper-slide">
										<ul style="flex-wrap: wrap;">
											<li v-for="(list , index) in arr" :id="list.id">
												<router-link :to="{path:'/'+list}" @click.native="routerTo(index)">{{list.name}}</router-link>
											</li>
											<!-- <li>优质水果</li>
											<li>坚果类</li>
											<li>零食类</li>
											<li>饮料类</li> -->
										</ul>
									</div>
									<div class="swiper-slide">
										<ul style="flex-wrap: wrap;">
											<li v-for="(list , index) in arr" :id="list.id">
												<router-link :to="{path:'/'+list}" @click.native="routerTo(index)">{{list.name}}</router-link>
											</li>
											<!-- <li>优质水果</li>
											<li>坚果类</li>
											<li>零食类</li>
											<li>饮料类</li> -->
										</ul>
									</div>
							</div>

						</div>
						<div class="pagation1">
							<div class="on" @click="move1()"></div>
							<div @click="move2()"></div>
							<div @click="move3()"></div>
						</div>
						<div class="fix">预定商品</div>
					</div>
				</div>
				<div class="container-t wrapper" @touchstart="touchStart2()" @touchmove="touchMove2()" @touchend="touchEnd2()">
						<div class="l">
							<!--<img src="../assets/images/ps/宁夏优品@2x.gif" />-->
						</div>
						<div class="m">
							<img src="../assets/images/ps/下拉@2x.png" @click="show()" />
						</div>
						<!--<div class="r">

			</div>-->
						<router-link class="r" tag="div" to="/history">
							<img src="../assets/images/ps/个人中心-@2x.png" />
						</router-link>
					</div>
				<ul class="con">
					<li v-for="(list , index) in data">
						<div>
							<p class="price">￥{{list.price}}</p>
							<img :src="list.img" />
							<!-- <p class="name">{{list.name}}</p> -->
							<router-link tag="li" :to="{ name: 'detail'}" @click.native="idBtn(index)" class="name">{{list.name}}</router-link>
						</div>
						<div class="box">
							<div class="del" @click="del(index)">
								<img src="../assets/images/ps/mobile/减@2x.png" />
							</div>
							<div class="add" @click="add(index)">
								<img src="../assets/images/ps/加-@2x.png" />
							</div>
						</div>
					</li>
					<!-- <router-link class="name" tag="li" :to="{name:'detail'}" @click.native="idBtn(index)" v-for="(list , index) in data">
						<div>
							<p class="price">￥{{list.price}}</p>
							<img :src="list.img" />
							<p class="name">{{list.name}}</p>
							<p class="span1">返古归真番茄 约1.25kg</p>
						</div>
						<div class="box">
							<div class="del" @click="del(index)">
								<img src="../assets/images/ps/mobile/减@2x.png" />
							</div>
							<div class="add" @click="add(index)">
								<img src="../assets/images/ps/加-@2x.png" />
							</div>
						</div>
					</router-link> -->

				</ul>
			</div>
		</div>
		<router-link class="shoppingCar" tag="div" to="/history">
			<img src="../assets/images/ps/购物车提示@2x.png" />
			<p>0</p>
		</router-link>
		<div class="txt" @click="pay()">
			<p class="price">￥0</p>
			<p class="yes">确认支付</p>
		</div>
		<!--<router-link class="txt" tag="div" to="/pay">
			<p class="price">￥30</p>
			<p class="yes">确认支付</p>
		</router-link>-->
		<div class="zhez2" style="display: none;">
			<div>
				<p>您本次的消费金额</p>
				<label><span class="money"></span></label><br /><br><hr />
				<span class="btn_n" @click="btn_n">取消</span>
				<span class="btn_y" @click="btn_y">确认支付</span>
			</div>
		</div>
	  <router-view></router-view>
	</div>
</template>

<script>
function stopPro (evt) {
	var e=evt||window.event;
	if (e.stopPropagation) {
		e.stopPropagation();//w3c阻止冒泡方法
	} else{
		e.cancelBubble=true;//IE阻止冒泡方法
	}
}
	import url from '../components/url'

	export default {
		name: 'threeList',
		data() {
			return {
				bool: false,
				data: {

				},
				arr: {

				},
				startX1: 0,
				moveX1: 0,
				endX1: 0,
				index1: 0,
				startX2: 0,
				moveX2: 0,
				endX2: 0,
				index2: 3
			}
		},
		methods: {
			//点击传递当前点击的商品
			idBtn:function(index){
				var productid = $('.con li').eq(index).attr('id')
				sessionStorage.setItem("productid", productid)
			},
			//点击商品类型跳转相对应的页面
			routerTo: function(index) {

				this.index2 = index
				productTypeId = $(".swiper-slide ul li").eq(index).attr('id')
				if(this.index2 == 0) {
					this.$router.push({
						path: "/lingshiList"
					});
				} else if(this.index2 == 1) {
					this.$router.push({
						path: "/fruitList"
					});

				} else if(this.index2 == 2) {
					this.$router.push({
						path: "/riceList"
					});

				} else if(this.index2 == 3) {
					this.$router.push({
						path: "/milkList"
					});
				}
				var _this = this;
				$.ajax({
					type: "post",
					url: url.indexUrl,
					async: true,
					data: {
						"rows": 0,
						"productTypeId": productTypeId
					},
					success: function(data) {
						//						$(".con ol").empty();

						_this.data = eval(data)
						console.log(_this.data)

					}
				});
			},
			//点击实现商品数量的加减
			del: function(index) {
				stopPro()
				var productid = $(".con ol li").eq(index).attr('id')
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

							let num = $(".position .num").html();
							num--;
							$(".position .num").html(num)
							let total = Number($(".footer .l span").html());
							total -= Number(_this.data[index].price);
							total = total.toFixed(2)
							$(".footer .l span").html(total)
							console.log($(".footer .l span").html(total))

						} else {
							console.log(111)
						}

					}
				});

			},
			add: function(index) {
				stopPro()
				var productid = $(".con ol li").eq(index).attr('id')
				var _this = this
				$.ajax({
					type: "post",
					url: url.addUrl,
					data: {
						"productid": productid
					},
					success: function(data) {
						data = JSON.parse(data)

						if(data.data == "SUCCESS") {
							let num = $(".position .num").html();
							num++;
							$(".position .num").html(num)
							let total = Number($(".footer .l span").html());
							total += Number(_this.data[index].price);
							total = total.toFixed(2)
							$(".footer .l span").html(total.toFixed(2))
							console.log($(".footer .l span").html(total))

						} else {
							console.log(data.message)
						}
					}
				})

			},
			//点击让头部信息显示或隐藏
			show: function() {
				var flag = $(".header").css("display")
				if(flag == "none") {
					$(".header").slideDown()
					$(".container-t .m img").addClass("roteta")
				} else {
					$(".header").slideUp()
					$(".container-t .m img").removeClass("roteta")
				}
			},
			//点击确认支付进入支付界面
			pay:function(){
				$(".zhez2").css("display","block")
				$(".zhez2 .money").html($(".txt .price").html())
			},
			btn_n:function(){
				$(".zhez2").css("display","none")
			},
			btn_y:function(){
				$(".zhez2").css("display","none")
			},
			//搜索商品接口
			search: function() {
				var queryContent = $(".header input").val()
				var _this = this;
				$.ajax({
					type: "post",
					url: url.searchUrl,
					data: {
						"queryContent": queryContent
					},
					success: function(data) {
						//						console.log(data)
						$(".con ol").empty();

						_this.data = eval(data)
					}
				})
			},
			//让导航栏可以滑动
			touchStart: function(ev) {
				ev = ev || event;

				this.startX1 = ev.targetTouches[0].clientX
				//				console.log(this.startX)
			},
			touchMove: function(ev) {
				ev = ev || event;
				//				ev.preventDefault();
				let btnWidth = $(".swiper-slide").width()
				//				console.log(ev.targetTouches);//打印鼠标当前的位置

			},
			touchEnd: function(ev) {
				//				this.index = 0;//申明一个索引值，代表当前所在位置
				ev = ev || event;
				//				ev.preventDefault();
				let btnWidth = $(".swiper-slide").width()
				let endX1 = ev.changedTouches[0].clientX;
				this.disX = endX1 - this.startX1;
				//				console.log(this.disX)//显示鼠标滑动的距离
				if(this.disX < -40) {
					this.index1++;
					if(this.index1 >= 3) {
						this.index1 = 0
					}
					$(".swiper-wrapper").animate({
						"margin-left": this.index1 * (-btnWidth)
					}, 500);
					$(".pagation1 div").eq(this.index1).addClass("on").siblings().removeClass('on')

				} else if(this.disX > 40) {
					this.index1--;
					if(this.index1 < 0) {
						this.index1 = 2
					}
					$(".swiper-wrapper").animate({
						"margin-left": this.index1 * (-btnWidth)
					}, 500);
					$(".pagation1 div").eq(this.index1).addClass("on").siblings().removeClass('on')
				}
			},
			//可以滑动的列表页
			touchStart2: function(ev) {
				ev = ev || event;

				this.startX2 = ev.targetTouches[0].clientX
				//				console.log(this.startX)
			},
			touchMove2: function(ev) {
				ev = ev || event;
				//				ev.preventDefault();
				let btnWidth = $(".wrapper").width()
				//				console.log(ev.targetTouches);//打印鼠标当前的位置

			},
			touchEnd2: function(ev) {
				//				this.index = 0;//申明一个索引值，代表当前所在位置
				ev = ev || event;
				//				ev.preventDefault();
				let btnWidth = $(".wrapper").width()
				let endX2 = ev.changedTouches[0].clientX;

				this.disX = endX2 - this.startX2;
				if(this.disX < -60) {
					this.index2--;
					if(this.index2 <= 0) {
						this.index2 = 0
					}

					if(this.index2 == 0) {
						this.$router.push({
							path: "/lingshiList"
						});
					} else if(this.index2 == 1) {
						this.$router.push({
							path: "/fruitList"
						});

					} else if(this.index2 == 2) {
						this.$router.push({
							path: "/riceList"
						});

					} else if(this.index2 == 3) {
						this.$router.push({
							path: "/milkList"
						});
					}
					productTypeId = $(".swiper-slide ul li").eq(this.index2).attr('id')
					console.log(productTypeId)
					console.log("向左滑动")

					var _this = this;
					$.ajax({
						type: "post",
						url: url.indexUrl,
						async: true,
						data: {
							"rows": 0,
							"productTypeId": productTypeId
						},
						success: function(data) {
							//						$(".con ol").empty();

							_this.data = eval(data)
							console.log(_this.data)

						}
					});
				} else if(this.disX > 60) {
					this.index2++;
					if(this.index2 > 3) {
						this.index2 = 3
					}
					if(this.index2 == 0) {
						this.$router.push({
							path: "/lingshiList"
						});
					} else if(this.index2 == 1) {
						this.$router.push({
							path: "/fruitList"
						});

					} else if(this.index2 == 2) {
						this.$router.push({
							path: "/riceList"
						});

					} else if(this.index2 == 3) {
						this.$router.push({
							path: "/milkList"
						});
					}
					productTypeId = $(".swiper-slide ul li").eq(this.index2).attr('id')
					console.log(productTypeId)
					console.log("向右滑动")
					var _this = this;
					$.ajax({
						type: "post",
						url: url.indexUrl,
						async: true,
						data: {
							"rows": 0,
							"productTypeId": productTypeId
						},
						success: function(data) {
							//						$(".con ol").empty();

							_this.data = eval(data)
							console.log(_this.data)

						}
					});
				}
			}
		},
		mounted: function() {
			let _this = this;
			var total = 0;
			//获取商品信息
			$.ajax({
					type: 'post',
					url: url.indexUrl,
					data: {
						'rows': 0,
						"productTypeId": ""
					},
					success: function(data) {
						_this.data = eval(data)
					}
				}),
				//获取购物车的商品数量

				$.ajax({
					type: "post",
					url: url.shoppingCarUrl,
					async: true,
					success: function(data) {
						//
						data = eval(data)
						var num = 0;
						var total = 0;
						for(var i = 0; i < data.length; i++) {
							num += Number(data[i].quantity)
							total += Number(data[i].quantity) * Number(data[i].price)
						}
						$(".position .num").html(num);
						$(".footer .l span").html(total.toFixed(2))
					}
				});
			//获取商品类型标签
			$.ajax({
				type: "post",
				url: url.addListUrl,
				async: true,
				success: function(data) {
					_this.arr = eval(data)

				}
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		font-family: "方正兰亭中黑简体";
	}

	html,
	body {
		width: 100%;
		height: 100%;
	}

	.roteta {
		transform: rotate(180deg);
	}

	.big {
		width: 100%;
		height: 40px;
		position: absolute;
	}

	.big img {
		width: 7%;
		margin-left: 85%;
	}

	#shopping {
		width: 100%;
		height: 100%;
	}
	a {
		text-decoration: none;
		color: #000;
	}

	.swiper-box {
		width: 100%;
	}

	.roteta {
		transform: rotate(180deg);
	}

	.addImg {
		z-index: 999;
		position: absolute;
		width: 50px;
		height: 50px;
		border: 1px solid #A30304;
		border-radius: 50%;
		opacity: 0.8;
	}

	.swiper-wrapper {
		width: 300%;
		display: flex;
	}

	.box-container {
		width: 300%;
		overflow: hidden;
		display: flex;
		align-items: center;
		position: relative;
	}

	.swiper-slide {
		width: 100%;
	}

	.img {
		width: 100%;
		height: 80%;
	}

	#list {
		width: 100%;
		height: 100%;
	}

	input::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #999;
		font-size: 28px;
	}

	input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #999;
		font-size: 28px;
	}

	input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #999;
		font-size: 28px;
	}

	input:-ms-input-placeholder {
		/* Internet Explorer 10+ */
		color: #999;
		font-size: 28px;
	}

	.img img {
		width: 100%;
		height: 100%;
	}
	/*header的样式*/

	.header {
		background: #F9A7BE;
		width: 96%;
		padding: 2% 0%;
	}

	.header .ss {
		width: 100%;
		text-align: center;
	}

	.header .ss input {
		width: 84%;
		margin-top: 22px;
		height: 81px;
		border-radius: 5px;
		color: #B3B3B3;
		padding-left: 80px;
		border: 0;
		background: url(../assets/images/ps/搜索@2x.png) no-repeat 28px;
		background-size: 5%;
		background-color: #fff;
	}

	.pagation1 {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pagation1 div {
		width: 62px;
		margin: 0px 5px 24px 0px;
		height: 5px;
		background: #FFFFFF;
	}

	.fix {
		width: 96%;
		height: 82px;
		line-height: 82px;
		background: #FFFFFF;
		font-size: 28px;
		color: #000000;
		border-radius: 5px;
		margin: 3px 2% 10px;
		text-align: center;
	}

	.header p {
		font-size: 26px;
		color: #FFFFFF;
		margin: 27px 0px 27px 20px;
	}

	.nav {
		width: 100%;
		overflow: hidden;
	}

	.nav ul {
		display: flex;
		width: 96%;
		padding: 0% 2%;
		align-items: center;
		justify-content: space-between;
		text-align: center;
	}

	.nav ul li {
		width: 23%;
		background: url(../assets/images/ps/休闲零食按钮@3x.png) no-repeat 100% 0%;
		background-size: 100% 100%;
		font-size: 26px;
		color: #000000;
		padding: 2% 0%;
		margin-bottom: 22px;
	}

	.nav .on {
		background: #FFFFFF;
	}

	.header .on {
		background: #000000;
	}


	.show {
		width: 100%;
		text-align: center;
		margin-top: 3%;
	}

	.show img {
		width: 10%;
		padding: 2% 0;
	}

	.container {
		width: 100%;
		height: 100%;
		background: url(../assets/images/ps/渐变背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		overflow: auto;
		padding-bottom: 3%;
	}

	.container2 {
		width:100%;
		background: url(../assets/images/ps/背景白色@2x.png) no-repeat 12px 45px;
		background-size: 100% 100%;
		padding-bottom: 2%;
	}

	.container .header {
		width: 100%;
		text-align: center;
	}

	.container .header img {
		width: 25%;
		margin-top: 4%;
	}

	.container-t {
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.container-t .l {
		width: 25%;
		margin-top: 50px;
		z-index: 11;
	}

	.container-t .l img {
		width: 80%;
	}

	.container-t .r {
		width: 25%;
		text-align: right;
	}

	.container-t .m {
		width: 50%;
		text-align: center;
	}

	.container-t .m img {
		width: 10%;
	}

	.container-t .r img {
		width: 25%;
		margin-right: 29px;
	}

	.container2 .con {
		display: flex;
		width: 100%;
		justify-content: center;
		flex-wrap: wrap;
		margin: 0 auto;
	}

	.container2 .con div {
		width: 100%;
		position: relative;
	}

	.container2 .con div img {
		width: 100%;
	}

	.container2 .con div .price {
		width: 32%;
		position: absolute;
		padding-left: 68%;
		margin-top: 10%;
		font-size: 28px;
		color: #FF9800;
	}

	.container2 .con div .name {
		width: 100%;
		position: absolute;
		text-align: center;
		margin-top: -35%;
		font-weight: bold;
		font-size: 28px;
		color: #000;
	}

	.container2 .con div .span1 {
		width: 100%;
		position: absolute;
		text-align: center;
		margin-top: -22%;
		font-size: 16px;
		color: #AFAFAF;
	}

	.container2 .con li {
		width: 328px;
		height: 328px;
		margin-top: 4%;
		margin-bottom: 6%;
	}

	.container2 .con li .box {
		width: 90%;
		padding: 0% 5%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		z-index: 1;
		margin-top: -75%;
		/*display: none;*/
	}

	.container2 .con li .box :hover {
		display: block;
	}

	.container2 .con li .box .del {
		width: 35%;
	}

	.del img {
		width: 80%;
	}

	.container .con li .box .add {
		width: 35%;
	}

	.add img {
		width: 50%;
	}

	.user img {
		width: 18%;
		position: absolute;
		top: 0%;
		right: 0%;
	}

	.shoppingCar {
		position: relative;
		top: -16%;
		z-index: 33;
	}

	.shoppingCar img {
		width: 20%;
		position: fixed;
		top: 89%;
	}

	.shoppingCar p {
		position: fixed;
		top: 91%;
		font-size: 30px;
		left: 14.5%;
	}

	.txt {
		position: fixed;
		width: 120px;
		height: 75px;
		bottom: 0%;
		right: 1%;
		padding: 45px 30px;
		text-align: center;
		background: url(../assets/images/detail/android/drawable-xhdpi/querenzhifu.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		z-index: 33;
	}

	.txt .price {
		color: #FFF100;
		font-size: 32px;
	}

	.txt .yes {
		color: #fff;
		margin-top: 20px;
		font-size: 26px;
	}

	.click {
		width: 100%;
		text-align: center;
		background: #FE89A6;
		padding: 1% 0;
		display: block;
	}

	.click img {
		width: 10%;
	}
	.zhez2{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
		z-index: 999;
		position: absolute;
		top: 0;
		left: 0;
	}
	.zhez2 div{
		width: 520px;
		height: 215px;
		background: #fff;
		margin: 60% auto;
		border-radius:10px;
		text-align: center;
		font-size:32px;
		padding-top: 8%;
	}
	.zhez2 label{
		font-size:36px;
	}
	.btn_y  , .btn_n{
		display: inline-block;
		width: 48%;
		height:80px;
		/*border: 1px solid #ccc;*/
		line-height: 80px;
	}
	.btn_y{
		color: red;
	}
</style>
