<template>
<div id="list">
  <div class="header" style="display: none;">
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
              <!--<li v-for="(list , index) in arr" :id="list.id">
									<router-link to="/list" @click.native="prodFun(index)">{{list.name}}</router-link>
								</li>-->
            </ul>
          </div>
          <div class="swiper-slide">
            <ul style="flex-wrap: wrap;">
              <!--<li v-for="(list , index) in arr" :id="list.id">
									<router-link to="/list" @click.native="prodFun(index)">{{list.name}}</router-link>
								</li>-->
              <li v-for="(list , index) in arr" :id="list.id">
                <router-link :to="{path:'/'+list}" @click.native="routerTo(index)">{{list.name}}</router-link>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul style="flex-wrap: wrap;">
              <!--<li v-for="(list , index) in arr" :id="list.id">
									<router-link to="/list" @click.native="prodFun(index)">{{list.name}}</router-link>
								</li>-->
              <li v-for="(list , index) in arr" :id="list.id">
                <router-link :to="{path:'/'+list}" @click.native="routerTo(index)">{{list.name}}</router-link>
              </li>
            </ul>
          </div>
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

  <!--中间内容-->
  <div class="container-t">
    <div class="l">
      <img src="../assets/images/ps/宁夏优品@2x.gif" />
    </div>
    <div class="m">
      <img src="../assets/images/ps/下拉@2x.png" @click="show()" />
    </div>
    <router-link class="r" tag="div" to="/history">
      <img src="../assets/images/ps/个人中心-@2x.png" />
    </router-link>
  </div>
  <div class="container wrapper" @touchstart="touchStart2()" @touchmove="touchMove2()" @touchend="touchEnd2()">

    <ul>
      <li></li>
      <li class="on"></li>
      <li></li>
    </ul>
    <div class="con">
      <ol>
        <!-- <li v-for="(list , index) in data" :id="list.id">
          <div class="img" v-on:click="fun(index)">
            <img :src="list.img" />
          </div>
          <p class="price">￥<span>{{list.price}}</span></p>
          <router-link class="name" tag="p" :to="{name:'detail'}" @click.native="idBtn(index)">
            {{list.name}}
          </router-link>

          <div class="zhez">
            <p class="del" @click="del(index)"><img src="../assets/images/ps/减@2x.png" /></p>
            <p class="add" @click="add(index)"><img src="../assets/images/ps/+-@2x.png" /></p>
          </div>
        </li> -->

        <li v-for="(list , index) in data" :id="list.id">
          <div class="img" v-on:click="fun(index)">
            <img :src="list.img" />
          </div>
          <router-link class="name" tag="p" :to="{name:'detail'}" @click.native="idBtn(index)">
            <p class="price" style="display:inline-block;text-align:center;width:30%;">￥<span>{{list.price}}</span></p>
            <p class="name" style="display:inline-block;text-align:centerl;width:65%">{{list.name}}</p>
          </router-link>

          <div class="zhez">
            <p class="del" @click="del(index)"><img src="../assets/images/ps/减@2x.png" /></p>
            <p class="add" @click="add(index)"><img src="../assets/images/ps/+-@2x.png" /></p>
          </div>
        </li>
      </ol>
    </div>
    <router-link class="position" tag="div" to="/shoppingCar">
      <p class="num">0</p>
    </router-link>

  </div>
  <div class="footer">
    <div class="l">
      <p>总价：<span>0元</span></p>
    </div>
    <div class="r" @click="pay()">
      <p>确认支付</p>
    </div>
  </div>
  <div class="zhez2" style="display: none;">
    <div>
      <p>您本次的消费金额</p>
      <label>￥：<span class="money"></span></label><br /><br>
      <hr />
      <span class="btn_n" @click="btn_n">取消</span>
      <span class="btn_y" @click="btn_y">确认支付</span>
    </div>
  </div>
  <router-view></router-view>
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
var productTypeId = ""
export default {

  name: 'list',
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
      index2: 0
    }
  },
  filters: { //数据过滤器
    format: function(value) {
      var html, _val;
      value = Number(value).toFixed(2);
      if (value == 0) {
        value = 0;
        return html = "￥<span>0</span>";
      } else if (value.split('.')[1].substring(1) == 0) {
        value = Number(value).toFixed(1);
      }
      _val = value.split('.');
      return html = '￥<span>' + _val[0] + '</span><em>.' + _val[1] + '</em>';
    }
  },
  methods: {
    routerTo: function(index) {

      this.index2 = index
      productTypeId = $(".swiper-slide ul li").eq(index).attr('id')
      sessionStorage.setItem("productTypeId",productTypeId)
      if (this.index2 == 0) {
        this.$router.push({
          path: "/lingshiList"
        });
      } else if (this.index2 == 1) {
        this.$router.push({
          path: "/fruitList"
        });

      } else if (this.index2 == 2) {
        this.$router.push({
          path: "/riceList"
        });

      } else if (this.index2 == 3) {
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
          // console.log(_this.data)

        }
      });
    },
    //点击实现购物车数量的减少
    del: function(index) {
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
          console.log(data)
          if (data.data == "SUCCESS") {

            let num = $(".position .num").html();
            num--;
            $(".position .num").html(num)
            let total = Number($(".footer .l span").html());
            total -= Number(_this.data[index].price);
            total = total.toFixed(2)
            $(".footer .l span").html(total)
            // console.log($(".footer .l span").html(total))

          } else {
            // console.log(111)
          }

        }
      });

    },
    //点击实现购物车数量的增加
    add: function(index) {
      var productid = $(".con ol li").eq(index).attr('id')
      var _this = this
      $.ajax({
        type: "post",
        url: url.addUrl,
        data: {
          "productid": productid
        },
        success: function(data) {
          // console.log(data)
          data = JSON.parse(data)

          if (data.data == "SUCCESS") {
            let num = $(".position .num").html();
            num++;
            $(".position .num").html(num)
            let total = Number($(".footer .l span").html());
            total += Number(_this.data[index].price);
            total = total.toFixed(2)
            $(".footer .l span").html(total)
            // console.log($(".footer .l span").html(total))

          } else {
            // console.log(data.message)
          }
        }
      })

    },
    //点击商品图片显示加减按钮
    fun: function(a) {
      if (this.bool == false) {
        $(".zhez").eq(a).fadeToggle(1000)
        hide()
      }
    },
    show: function() {
      var flag = $(".header").css("display")
      if (flag == "none") {
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
      if (this.disX < -40) {
        this.index1++;
        if (this.index1 >= 3) {
          this.index1 = 0
        }
        $(".swiper-wrapper").animate({
          "margin-left": this.index1 * (-btnWidth)
        }, 500);
        $(".pagation1 div").eq(this.index1).addClass("on").siblings().removeClass('on')

      } else if (this.disX > 40) {
        this.index1--;
        if (this.index1 < 0) {
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
      if (this.disX < -60) {
        this.index2--;
        if (this.index2 <= 0) {
          this.index2 = 0
        }

        if (this.index2 == 0) {
          this.$router.push({
            path: "/lingshiList"
          });
        } else if (this.index2 == 1) {
          this.$router.push({
            path: "/fruitList"
          });

        } else if (this.index2 == 2) {
          this.$router.push({
            path: "/riceList"
          });

        } else if (this.index2 == 3) {
          this.$router.push({
            path: "/milkList"
          });
        }
        productTypeId = $(".swiper-slide ul li").eq(this.index2).attr('id')
        sessionStorage.setItem("productTypeId",productTypeId)
        // console.log(productTypeId)
        // console.log("向左滑动")

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
            // console.log(_this.data)

          }
        });
      } else if (this.disX > 60) {
        this.index2++;
        if (this.index2 > 3) {
          this.index2 = 3
        }
        if (this.index2 == 0) {
          this.$router.push({
            path: "/lingshiList"
          });
        } else if (this.index2 == 1) {
          this.$router.push({
            path: "/fruitList"
          });

        } else if (this.index2 == 2) {
          this.$router.push({
            path: "/riceList"
          });

        } else if (this.index2 == 3) {
          this.$router.push({
            path: "/milkList"
          });
        }
        productTypeId = $(".swiper-slide ul li").eq(this.index2).attr('id')
        sessionStorage.setItem("productTypeId",productTypeId)
        // console.log(productTypeId)
        // console.log("向右滑动")
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
            // console.log(_this.data)

          }
        });
      }
    },

    //
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
    //点击确认支付进入支付界面
    pay: function() {
      window.location.href = '/nomanshop/dist/index.html#/shoppingCar';
      /*	var productids = ""; //商品ids
      	var productcounts = ""; //购买数量s
      	var orderPrice = $(".footer .l span").text();
      	$.ajax({
      		type: "post",
      		url: url.shoppingCarUrl,
      		success: function(data) {
      			data = JSON.parse(data)
      			for(let i = 0; i < data.length; i++) {
      				productids += data[i].id + ',';
      				productcounts += data[i].quantity + ',';
      			}

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
      							data: {
      								"ordersIds": data.data.ordersIds,
      								"ordersAllMoney": data.data.ordersAllMoney
      							},
      							dataType: "json",
      							success: function(succ) {
      								alert(succ.respCode);
      								if(succ.respCode == 200) {
      									timestam = succ.data.timeStamp;
      									pack = succ.data.package;
      									non = succ.data.nonceStr;
      									appId = succ.data.appId;
      									sign = succ.data.paySign;
      									$(".hhhh").html(succ.data);
      									alert("paySign=" + succ.data.paySign + "--package  " + succ.data.package + "--appId  " + succ.data.appId + "--nonceStr  " + succ.data.nonceStr);

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
      												alert(res.err_msg);
      												if(res.err_msg == "get_brand_wcpay_request:ok") {
      													window.location.href = "http://dc.iq234.com/nomanshop/dist/index.html#/list";
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
      	})*/

    },
    btn_n: function() {
      $(".zhez2").css("display", "none")
    },
    btn_y: function() {
      $(".zhez2").css("display", "none")
    },
    prodFun: function(index) {
      productTypeId = $(".swiper-slide ul li").eq(index).attr('id')
      //				console.log(productTypeId)
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
          // console.log(_this.data)

        }
      });
    }
  },
  mounted: function() {
    let _this = this;
    var total = 0;
    //获取商品信息
    productTypeId = sessionStorage.getItem("productTypeId")
    $.ajax({
        type: 'post',
           url: url.indexUrl,
//      url:"http://www.sosoapi.com/pass/mock/9159//productController.do?productListGetDate",
        data: {
          'rows': 0,
          "productTypeId": productTypeId
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
          for (var i = 0; i < data.length; i++) {
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
    //加减按钮显示3秒后隐藏
    setTimeout(function() {
      $(".zhez").fadeOut(1000)

    }, 3000);

  }
  //		created(){
  //			$.ajax({
  //				type: "post",
  //				url: url.shoppingCarUrl,
  //				async: true,
  //				success: function(data) {
  //					this.total = 0 ;
  //					for(let i=0;i<data.length;i++){
  //						this.total += data.data[i].quantity*data.data[i].price;
  //					}
  //					$(".footer .l span").html(this.total+"元")
  //				}
  //			});
  //		}
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
  height:80%;
  display: flex;
  align-items: flex-end;
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
  width: 96%;
  height: 98%;
  margin-left: 1%;
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
  height: 60px;
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
  margin-bottom: 15%;
  background: url(../assets/images/ps/背景粉@2x.png) no-repeat center center;
  background-size: 100% 100%;
  overflow: scroll;
}

.scroll {
  width: 100%;
  height: 100%;
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
}

.container .con ol {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.container .con ol li {
  width: 328px;
  height: 358px;
  margin-top: 20px;
  background: url(../assets/images/ps/商品背景@2x.png) no-repeat 0px 0px;
  background-size: 100% 100%;
  position: relative;
  margin-left: 32px;
}

.con .price {
  /* position: absolute; */
  top: 60%;
  left: 10%;
  color: red;
}

.con .price span {
  font-size:32px;
}

.zhez {
  width: 100%;
  height:100%;
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

.zhez2 {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
}

.zhez2 div {
  width: 520px;
  height: 215px;
  background: #fff;
  margin: 60% auto;
  border-radius: 10px;
  text-align: center;
  font-size: 32px;
  padding-top: 8%;
}

.zhez2 label {
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
</style>·
