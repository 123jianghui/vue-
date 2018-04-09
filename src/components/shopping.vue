<template>
<div id="shopping">
  <div class="pull-down">
    <div class="big">
      <img src="../assets/images/reg/搜索@2x.png" />
    </div>
    <input type="text" placeholder="请输入检索内容" />
    <p class="sheb">设备：天河一号</p>
    <p class="fen">商品分类</p>
    <div class="nav">
      <ul>
        <li>休闲零食</li>
        <li>米面粮油</li>
        <li>优质水果</li>
        <li>肉禽奶蛋</li>
        <li>宁夏特产</li>
      </ul>
    </div>
    <div class="yuding">
      <img src="../assets/images/ps/预订商品@2x.png" />
    </div>
    <div class="show">
      <img src="../assets/images/ps/展开@2x.png" v-on:click="show()" />
    </div>
  </div>
  <div class="click">
    <img src="../assets/images/ps/mobile/下拉@2x.png" v-on:click="show()" />
  </div>
  <div class="container">
    <div class="container2">
      <div class="header">
        <img src="../assets/images/ps/mobile/宁夏优品@2x.png" />
        <!--<p>宁夏优品</p>-->
      </div>
      <ul class="con">
        <li v-for="list in data">
          <div>
            <p class="price">￥{{list.price}}</p>
            <img :src="list.img" />
            <p class="name">{{list.name}}</p>
            <p class="span1">返古归真番茄 约1.25kg</p>
          </div>
          <div class="box">
            <div class="del" @click="del()">
              <img src="../assets/images/ps/mobile/减@2x.png" />
            </div>
            <div class="add" @click="add()">
              <img src="../assets/images/ps/加-@2x.png" />
            </div>
          </div>

        </li>
      </ul>
    </div>
  </div>
  <div class="user">
    <img src="../assets/images/ps/个人中心@2x.png" />

  </div>
  <!--<div class="shoppingCar">
 				<img src="../assets/images/ps/购物车提示@2x.png"/>
 			</div>-->
  <router-link class="shoppingCar" tag="div" to="/history">
    <img src="../assets/images/ps/购物车提示@2x.png" />
    <p>5</p>
  </router-link>
  <!--<div class="txt">
			<p class="price">￥30</p>
			<p class="yes">确认支付</p>
		</div>-->
  <router-link tag="div" to="/pay" class="txt">
    <p class="price">￥30</p>
    <p class="yes">确认支付</p>
  </router-link>
</div>
</template>

<script>
import url from '../components/url'

export default {
  name: 'shopping',
  data() {
    return {
      bool: false,
      data: {

      }
    }
  },
  methods: {
    show: function() {
      var flag = $(".pull-down").css("display")
      if (flag == "none") {
        $(".pull-down").slideDown()
        $(".click").css("opacity", 0)
        $(".user").css("display", "none")
      } else {
        $(".pull-down").slideUp()
        $(".click").css("opacity", 1)
        $(".user").css("display", "block")

      }
    },
    del: function() {
      var num = parseInt($('.shoppingCar p').html())
      num--;
      $('.shoppingCar p').html(num)
      if (num < 0) {
        $('.shoppingCar p').html(0)
      }

    },
    //点击实现购物车数量的增加
    add: function() {
      var num = parseInt($('.shoppingCar p').html())
      num++;
      $('.shoppingCar p').html(num)

    },
  },
  mounted: function() {
    let _this = this;
    axios.post(url.indexUrl)
      .then(function(data) {
        console.log(data.data.data)
        _this.data = data.data.data
        console.log(_this.data)
      })
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

.pull-down {
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.18);
  z-index: 1;
  padding-top: 37px;
  display: none;
  z-index: 999;
}

.pull-down input {
  width: 80%;
  height: 34px;
  padding: 26px 50px;
  margin-left: 27px;
  font-size: 28px;
  border-radius: 10px;
  margin-top: -2%;
  color: #6A6A6A;
  background: #FFFFFF;
  /*background: url(../../../商品列表切、标/切图/手机4-导航/搜索@2x.png) no-repeat 94%;*/
  background-size: 8%;
  border: 1px solid #FFFFFF;
}

.pull-down .sheb {
  font-size: 28px;
  margin-top: 38px;
  margin-left: 77px;
  font-weight: 540;
  color: #E00025;
}

.pull-down .fen {
  text-align: center;
  font-size: 28px;
  color: #FFFFFF;
  padding: 6% 0;
}

.pull-down .nav {
  width: 100%;
  padding: 2% 0;
}

.pull-down .nav ul {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
  text-align: center;
  color: #FFFFFF;
}

.pull-down .nav ul li {
  width: 16%;
  height: 75px;
  line-height: 75px;
  background: url(../assets/images/ps/休闲零食@2x.png) no-repeat 0px 0px;
  background-size: 100% 100%;
  padding: 4% 0 2%;
  margin-left: 24px;
}

.yuding {
  width: 100%;
  text-align: center;
  margin: 60px 0 50px;
}

.yuding img {
  width: 45%;
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
  width: 90%;
  padding: 0% 5%;
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
</style>
