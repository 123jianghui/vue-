<template>
</template>

<script>
//	const baseUrl="http://gxcs.iq234.com"
	//判断是否注册
	const isregist="../usersController.do?fronttz"
	//获取商品列表
	const indexUrl = "../productController.do?productListGetDate"
	//判断验证码是否正确
	const passUrl = "../usersController.do?register"
	//注册验证码路径
	const telUrl = "../usersController.do?resSendCode"
	//用户同意注册协议
	const userUrl = "../usersController.do?userAgreement"
	//留言地址
	const leaveUrl = "../leaveWordController.do?saveLeaveWord"
	//获取商品详情
	const detailUrl ="../productController.do?getProductInfo"
	//获取购物车商品
	const shoppingCarUrl = "../cartController.do?myCart"
	//输入框改变搜索商品
	const searchUrl = "../productController.do?productQueryGetDate"
	//获取申诉标签地址
	const labelUrl = "../appealsTabController.do?getTabList"
	//用户发起申诉
	const shensuUrl = "../appealsController.do?saveAppeals"
	//用户删除购物车商品
	const delUrl = "../cartController.do?delete"
	//加入购物车
	const addUrl = "../cartController.do?add"
	//减少购物车商品的数量
	const reduceUrl = "../cartController.do?reduce"
	//获取商品类型标签
	const addListUrl = "../productTypeController.do?frontGetList"
	//用户购物历史
	const historyUrl="../ordersController.do?userOrdersGetData"
	//下订单
	const createOrder="../testController.do?createOrder"
	 //支付
	 const payUrl="../testController.do?create"
	export default{
		isregist,
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
		historyUrl,
		createOrder
		
	}
</script>

<style>
</style>