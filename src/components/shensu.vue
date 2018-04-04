<template>
	<div id="shensu">
		<div class="container">
			<p>选择申诉内容</p>
			<ul>
				<!--<li :class="[isTrue1?'li':'active']" @click="toggleClass1()">商品过期</li>
				<li :class="[isTrue2?'li':'active']" @click="toggleClass2()">假冒伪劣</li>
				<li :class="[isTrue3?'li':'active']" @click="toggleClass3()">假冒伪劣</li>
				<li :class="[isTrue4?'li':'active']" @click="toggleClass4()">商品过期</li>
				<li :class="[isTrue5?'li':'active']" @click="toggleClass5()">假冒伪劣</li>
				<li :class="[isTrue6?'li':'active']" @click="toggleClass6()">商品过期</li>-->
				<li class="li" @click="toggleClass1(index)" v-for="(list,index) in data">{{list.tab_name}}</li>
			</ul>
			<textarea name="" placeholder="具体内容"></textarea>

			<img id="pic" src="../assets/images/ps/添加图片@2x.png">
			<input id="upload" name="file" accept="image/*" type="file" style="display: none" />
			<p class="addImage" @click="getFile()">添加图片</p>
			<div class="submit1">
				<p style="color:#fff;" @click="sub()">提交</p>
			</div>
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
					
				}
			}
		},
		methods: {
			toggleClass1: function(index) {
				if($("ul li").eq(index).attr("class")=="active"){
					$("ul li").eq(index).attr("class","li")
				}else{
					$("ul li").eq(index).attr("class","active")
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
			sub:function(){
				var txt = $("textarea").val()
				$("textarea").val("")
				$.ajax({
					type:"post",
					url:url.shensuUrl,
					async:true,
					data:{
						order_id:'',
						station_id:'',
						appeals_tab:'',
						appeals_img:'',
						contents:txt
					},
					success:function(data){
						
						console.log(this.data)
					}
				});
			}
		},
		created(){
			var _this=this
			$.ajax({
				type:"post",
				url:url.labelUrl,
				async:true,
				data:{
					configId:''
				},
				success:function(data){
					_this.data=data.rows
					console.log(data.rows)
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