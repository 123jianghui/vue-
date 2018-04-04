<template>
	<div id="twoList">
		<div class="container-t">
			<div class="l">
				<img src="../assets/images/ps/宁夏优品@2x.gif" />
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
		<div class="container wrapper">
			<ul>
				<li></li>
				<li class="on"></li>
				<li></li>
			</ul>
			<div class="con">
				<ol>
					<li v-for="(list , index) in data" :id="list.id">
						<!--<img v-bind:src="list.img"/>-->
						<div class="img" v-on:click="fun(index)">
							<img :src="list.img" />
						</div>
						<p class="price">￥<span>{{list.price}}</span></p>

						<!--<router-link class="name" tag="p" :to="{name:'detail',params:{id:list.id}}">
							{{list.name}}
						</router-link>-->

						<router-link class="name" tag="p" :to="{name:'detail'}" @click.native="idBtn(index)">
							{{list.name}}
						</router-link>

						<div class="zhez">
							<p class="del" @click="del()"><img src="../assets/images/ps/减@2x.png" /></p>
							<p class="add" @click="add()"><img src="../assets/images/ps/+-@2x.png" /></p>
						</div>
					</li>
				</ol>
			</div>
			<router-link class="position" tag="div" to="/shoppingCar">
				<!--<img src="../assets/images/ps/购物车3@2x.png" />-->
				<p class="num">5</p>
			</router-link>
		</div>
		<div class="footer" @click="pay()"> 
			<div class="l">
				<p>总价：<span>0元</span></p>
			</div>
			<div class="r">
				<p>确认支付</p>
			</div>
		</div>
		<!--<router-link tag="div" class="footer" to="/pay">
			<div class="l">
				<p>总价：<span>30元</span></p>
			</div>
			<div class="r">
				<p>确认支付</p>
			</div>
		</router-link>-->
		<div class="zhez2" style="display: none;">
			<div>
				<p>您本次的消费金额</p>
				<label>￥：<span class="money"></span></label><br /><br><hr />
				<span class="btn_n" @click="btn_n">取消</span>
				<span class="btn_y" @click="btn_y">确认支付</span>
			</div>
		</div>
	</div>
</template>
<script>
	import url from '../components/url'
		
	function hide() {
		setTimeout(function() {
			$(".zhez").fadeOut(1000)
		}, 2000)
	}
	var i = 0;

	export default {

		name: 'twoList',
		data() {
			return {
				bool: false,
				data: {
					
				},
				arr:{
					
				},
				startX:0,
				moveX:0,
				endX:0,
				index:0

			}
		},
		methods: {
			//点击实现购物车数量的减少
			del: function() {
				var num = parseInt($('.position .num').html())
				num--;
				$('.position .num').html(num)
				if(num < 0) {
					$('.position .num').html(0)
				}

			},
			//点击实现购物车数量的增加
			add: function() {
				var num = parseInt($('.position .num').html())
				num++;
				$('.position .num').html(num)

			},
			//点击商品图片显示加减按钮
			fun: function(a) {
				if(this.bool == false) {
					$(".zhez").eq(a).fadeToggle(1000)
					hide()
				}
			},
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
			idBtn: function(index) {
				var productid = $('.con li').eq(index).attr('id')
				sessionStorage.setItem("productid", productid)
			},
			//点击确认支付进入支付界面
			pay:function(){
				$(".zhez2").css("display","block")
				$(".zhez2 .money").html($(".footer .l span").html())
			},
			btn_n:function(){
				$(".zhez2").css("display","none")
			},
			btn_y:function(){
				$(".zhez2").css("display","none")
			}
			
		},
		mounted: function() {
			let _this = this;
			//获取商品信息
			$.ajax({
				type:'post',
				url:url.indexUrl,
				data:{
					'rows':0,
					'page':1,
					"productTypeId":0
				},
				success:function(data){
					_this.data = data.data

					
				}
			}),
			//获取购物车的商品数量
			axios.post(url.shoppingCarUrl)
				.then(function(data) {
					console.log(data.data.data)
					for(var i = 0; i < data.data.data.length; i++) {
						_this.num = parseFloat(data.data.data[i].quantity) + parseFloat(data.data.data[i + 1].quantity)
						
					}
					$(".position .num").html(_this.num)
				}),
				setTimeout(function() {
			$(".zhez").fadeOut(1000)
		}, 2000)
		

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		font-family: "方正兰亭悠黑简体";
	}
	
	html,
	body {
		width: 100%;
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
		padding: 2% 2%;
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
	/*z中间的样式*/
	
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
	
	.container {
		width: 100%;
		height: 100%;
		overflow: auto;
		background: url(../assets/images/ps/背景粉@2x.png) no-repeat center center;
		background-size: 100% 100%;
		margin-bottom: 15%;
	}
	
	.container ul {
		width: 100%;
		display: flex;
		padding-top: 5%;
		align-content: center;
		justify-content: center;
	}
	
	.container ul li {
		width: 15px;
		height: 15px;
		border-radius: 10px;
		border: 1px solid #FFFFFF;
		margin-left: 15px;
	}
	
	.container ul .on {
		background: #FFFFFF;
	}
	
	.container .con {
		width: 100%;
	}
	
	.con .name {
		color: #000000;
		font-size: 30px;
		text-align: center;
		line-height: 65px;
	}
	
	.container .con ol {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	
	.container .con ol li {
		width: 328px;
		height: 328px;
		margin-top: 20px;
		background: url(../assets/images/ps/商品背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		position: relative;
		margin-left: 32px;
	}
	
	.con .price {
		position: absolute;
		top: 60%;
		left: 10%;
		color: red;
	}
	
	.con .price span {
		font-size: 64px;
	}
	
	.zhez {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		position: absolute;
		top: -10%;
		left: 0;
	}
	
	.container .position {
		width: 110px;
		height: 113px;
		position: fixed;
		left: 10px;
		top: 80%;
		padding: 2%;
		background: url(../assets/images/ps/购物车3@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}
	
	.container .position .num {
		font-size: 30px;
		position: fixed;
		top: 80%;
		left: 13.5%;
		color: #000;
	}
	
	.con .del {
		width: 50%;
		height: 80%;
		background: rgba(0, 0, 0, 0.2);
		text-align: center;
		line-height: 328px;
	}
	
	.con .del img {
		width: 55%;
	}
	
	.con .add {
		width: 50%;
		height: 80%;
		/*background: rgba(0,0,0,0.2);*/
		text-align: center;
		line-height: 328px;
	}
	
	.con .add img {
		width: 55%;
	}
	
	.footer {
		width: 94%;
		padding: 2% 3%;
		display: flex;
		justify-content: space-between;
		text-align: center;
		align-items: center;
		position: fixed;
		opacity: 0.86;
		background: #FFFFFF;
		bottom: 0;
		color: #000000;
	}
	
	.footer .l {
		width: 50%;
	}
	
	.footer .l p {
		font-size: 28px;
		text-align: left;
	}
	
	.footer .l p span {
		color: red;
		font-size: 34px;
		font-weight: bold;
	}
	
	.footer .r {
		width: 50%;
		height: 73px;
		line-height: 73px;
		margin-right: 16px;
		background: url(../assets/images/ps/确认支付@2x.png) no-repeat 100% 50%;
		background-size: 50%;
	}
	
	.footer .r p {
		margin-left: 50%;
		color: #000000;
		font-size: 26px;
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