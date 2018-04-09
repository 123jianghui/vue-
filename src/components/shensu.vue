<template>
	<div id="shensu">
		<div class="container">
			<p>选择申诉内容</p>
			<form method="post" action="../appealsController.do?saveAppeals" enctype="multipart/form-data">
				<ul>
					<li class="li" @click="toggleClass1(index)" v-for="(list,index) in data">{{list.tabName}}</li>
				</ul>
				<textarea name="contents" placeholder="具体内容" ></textarea>
		        <img id="pic" src="../assets/images/ps/添加图片@2x.png">
				<input id="upload" name="file" accept="image/*" type="file" style="display: none" />

				<p class="addImage" @click="getFile()">添加图片</p>
				<div class="submit1">
					<input type="submit" @click="sub()" value="提交" />
					<!--<p style="color:#fff;" @click="sub()">提交</p>-->
				</div>
				<input type="text" name="orderId" id="orderId" value="" style="display: none;"/>
				<input type="text" name="appealsTab"  id="appealsTab" value=""  style="display: none;"/>
		    </form>
		</div>
	</div>
</template>

<script>
	import url from '../components/url'

	//建立一個可存取到該file的url
		function getObjectURL(file) {
			var url = null;
			if(window.createObjectURL != undefined) { // basic
				url = window.createObjectURL(file);
			} else if(window.URL != undefined) { // mozilla(firefox)
				url = window.URL.createObjectURL(file);
			} else if(window.webkitURL != undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file);
			}
			return url;
		}

	export default {
		name: "shensu",
		data() {
			return {
				data:{

				},
			}
		},
		methods: {
			toggleClass1: function(index) {
				if($("ul li").eq(index).attr("class")=="active"){

					$("ul li").eq(index).attr("class","li")
				}else{
					$("ul li").eq(index).attr("class","active")
					var txt = $("ul li").eq(index).html();
					//$("textarea").val(txt)
				}
			},
			getFile:function(){
				$("#upload").click(); //隐藏了input:file样式后，点击头像就可以本地上传
				$("#upload").on("change", function() {
					var objUrl = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
					if(objUrl) {
						$("#pic").attr("src", objUrl); //将图片路径存入src中，显示出图片
					}
				});
			},
			content:function(){
				var txt = $("textarea").val()
			},
			sub:function(){
				//标签
				var appealsTab ="";
				for(let i=0;i<$("ul li").length;i++){
					if($("ul li").eq(i).attr("class")=="active"){
					   appealsTab += $("ul li").eq(i).html()+","
					}
				}
				$("#appealsTab").val(appealsTab)

				//订单id
				var order_id = sessionStorage.getItem("order_id");
				$("#orderId").val(order_id);

				return true;
//				$.ajax({
//					type:"post",
//					url:url.shensuUrl,
//					async:true,
//					data:{
//						"orderId":order_id,
//						"appealsTab":appealsTab,
//						"contents":txt
//					},
//					success:function(data){
//						$("textarea").val("")
//						alert("申诉成功")
//					}
//				});
			}
		},
		created(){
			var _this=this
			$.ajax({
				type:"post",
				url:url.labelUrl,
				async:true,
				success:function(data){
					_this.data=JSON.parse(data)
					console.log(_this.data)
				}
			});
		}
	}


</script>

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

	img {
		border: 0;
	}
	#shensu {
		width: 100%;
		height: 100%;
	}

	.container {
		width: 80%;
		height: 90%;
		background: url(../assets/images/ps/背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		margin: 0 auto;
		padding: 10%;
		padding-bottom:7.5%;
	}

	.container p:nth-child(1) {
		color: black;
		font-size: 36px;
		font-weight: inherit;
		margin: 1% 0;
	}

	.container ul {
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		text-align: center;
		margin-bottom: 8%;
	}

	.container ul .li {
		width: 33%;
		background: url(../assets/images/ps/未选中@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		padding: 2% 0;
		margin-top: 29px;
		font-size: 28px;
		color: #FF6A7F;
	}

	.active {
		width: 33%;
		background: url(../assets/images/ps/选中@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		padding: 2% 0;
		margin-top: 29px;
		font-size: 28px;
		color: #FFFFFF;
	}

	textarea {
		width: 94%;
		height: 378px;
		color: #949494;
		font-size: 31px;
		border: 2px solid #ccc;
		padding: 3%;
	}

	.addImage {
		color: black;
		font-size: 31px;
		margin-left: 5%;
		margin-top: 19px;
		margin-bottom: 5%;
	}

	.submit1 {
		width: 80%;
		text-align: center;
		background: url(../assets/images/ps/提交按钮@2x.png) no-repeat 0px 0px;
		margin: auto;
		padding: 3% 0;
		margin-top: 15%;
		background-size: 100% 100%;
		/*margin-top: 5%;*/
	}

	.submit1 p {
		font-size: 20px;
		color: #fff;
	}

	#pic {
		cursor: pointer;
		width: 200px;
		height: 170px;
		margin-top: 3%;
		background: url(../assets/images/ps/添加图片@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}
</style>
