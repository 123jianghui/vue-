<template>
</template>

<script>
	//获取商品列表
	const indexUrl = "http://www.sosoapi.com/pass/mock/9159//productController.do?productListGetDate"
	//判断验证码是否正确
	const passUrl = "http://www.sosoapi.com/pass/mock/9159//usersController.do?register"
	//注册验证码路径
	const telUrl = "http://www.sosoapi.com/pass/mock/9159//usersController.do?resSendCode"
	//用户同意注册协议
	const userUrl = "http://www.sosoapi.com/pass/mock/9159//usersController.do?userAgreement"
	//留言地址
	const leaveUrl = "http://www.sosoapi.com/pass/mock/9159//leaveWordController.do?saveLeaveWord"
	//获取商品详情
	const detailUrl ="http://www.sosoapi.com/pass/mock/9159//productController.do?getProductInfo"
	//获取购物车商品
	const shoppingCarUrl = "http://www.sosoapi.com/pass/mock/9159//cartController.do?myCart"
	//输入框改变搜索商品
	const searchUrl = "http://www.sosoapi.com/pass/mock/9159/productController.do?productQueryGetDate"
	//获取申诉标签地址
	const labelUrl = "http://www.sosoapi.com/pass/mock/9159//cgAutoListController.do?datagrid"
	//用户发起申诉
	const shensuUrl = "http://www.sosoapi.com/pass/mock/9159/appealsController.do?saveAppeals"
	//用户删除购物车商品
	const delUrl = "http://www.sosoapi.com/pass/mock/9159//cartController.do?delete"
	//加入购物车
	const addUrl = "http://www.sosoapi.com/pass/mock/9159/cartController.do?add"
	//减少购物车商品的数量
	const reduceUrl = "http://www.sosoapi.com/pass/mock/9159//cartController.do?reduce"
	//获取商品类型标签
	const addListUrl = "http://www.sosoapi.com/pass/mock/9159/productTypeController.do?frontGetList"
	//用户购物历史
	const historyUrl="http://www.sosoapi.com/pass/mock/9159/ordersController.do?userOrdersGetData"
	export default{
		indexUrl,
		passUrl,
		telUrl,
		userUrl,
		leaveUrl,
		detailUrl,
		shoppingCarUrl,
		labelUrl,
		shensuUrl,
		searchUrl,
		delUrl,
		addUrl,
		reduceUrl,
		addListUrl,
		historyUrl
		
	}
</script>

<style>
</style>