(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [

	 			//启动页 start
	 			{
			 		name: 'start',
			 		files: [
			 			'./views/start/startController.js'
			 			// './views/register/register.css'
			 		]
			 	},



	 			//注册 登录页面
	 		     {
			 		name: 'register',
			 		files: [
			 			'./views/register/registerController.js',
			 			'./views/register/register.css'
			 		]
			 	},
			 	{
			 		name: 'login',
			 		files: [
			 			'./views/login/loginController.js',
			 			'./views/login/login.css'
			 		]
			 	},

	            //找回密码
	            {
			 		name: 'retrieve_pwd',
			 		files: [
			 			'./views/retrieve_pwd/retrieve_pwdController.js',
			 			'./views/retrieve_pwd/retrieve_pwd.css'
			 		]
			 	},

			 	//搜索页 search
			 	{
			 		name: 'search',
			 		files: [
			 			'./views/search/searchController.js',
			 			'./views/search/search.css'
			 		]
			 	},

	 		//导航分页页面
		 		{
			 		name: 'home',
			 		files: [
			 			'./views/home/homeController.js',
			 			'./views/home/home.css'
			 		]
			 	},
			 	{
			 		name: 'classify',
			 		files: [
			 			'./views/classify/classifyController.js',
			 			'./views/classify/classify.css'
			 		]
			 	},
			 	{
			 		name: 'cart',
			 		files: [
			 			'./views/cart/cartController.js',
			 			'./views/cart/cart.css'
			 		]
			 	},



			 	{
			 		name: 'user',
			 		files: [
			 			'./views/user/userController.js',
			 			'./views/user/user.css'
			 		]
			 	},


			 	//用户 user_order
			 	{
			 		name: 'user_order',
			 		files: [
			 			'./views/user_order/user_orderController.js',
			 			'./views/user_order/user_order.css'
			 		]
			 	},

			 	//产品详情页   details pro_details
			 	{ 
			 		name: 'details',
			 		files: [
			 			'./views/details/detailsController.js',
			 			'./views/details/details.css'
			 		]
			 	},
			 	{ 
			 		name: 'pro_details',
			 		files: [
			 			'./views/pro_details/pro_detailsController.js',
			 			'./views/pro_details/pro_details.css'
			 		]
			 	},


			 	//我的订单 order_await, order_details, order_eval order_pay order_rece order_refund
			 	{
			 		name: 'order_await',
			 		files: [
			 			'./views/order_await/order_awaitController.js',
			 			'./views/order_await/order_await.css'
			 		]
			 	},
			 	{
			 		name: 'order_details',
			 		files: [
			 			'./views/order_details/order_detailsController.js',
			 			'./views/order_details/order_details.css'
			 		]
			 	},
			 	{
			 		name: 'order_eval',
			 		files: [
			 			'./views/order_eval/order_evalController.js',
			 			'./views/order_eval/order_eval.css'
			 		]
			 	},
			 	{
			 		name: 'order_pay',
			 		files: [
			 			'./views/order_pay/order_payController.js',
			 			'./views/order_pay/order_pay.css'
			 		]
			 	},
			 	{
			 		name: 'order_rece',
			 		files: [
			 			'./views/order_rece/order_receController.js',
			 			'./views/order_rece/order_rece.css'
			 		]
			 	},
			 	{
			 		name: 'order_refund',
			 		files: [
			 			'./views/order_refund/order_refundController.js',
			 			'./views/order_refund/order_refund.css'
			 		]
			 	},



			 	//物流详情 fre_details
			 	{
			 		name: 'fre_details',
			 		files: [
			 			'./views/fre_details/fre_detailsController.js',
			 			'./views/fre_details/fre_details.css'
			 		]
			 	},

			 	//评价 estimate
			 	{
			 		name: 'estimate',
			 		files: [
			 			'./views/estimate/estimateController.js',
			 			'./views/estimate/estimate.css'
			 		]
			 	},
			 	 //发表评价 estimate_publi
			 	 {
			 		name: 'estimate_publi',
			 		files: [
			 			'./views/estimate_publi/estimate_publiController.js',
			 			'./views/estimate_publi/estimate_publi.css'
			 		]
			 	},



			 	//确认订单
			 	{
			 		name: 'confirm_order',
			 		files: [
			 			'./views/confirm_order/confirm_orderController.js',
			 			'./views/confirm_order/confirm_order.css'
			 		]
			 	},

			 	//付款 paid pay_fail
			 	{
			 		name: 'paid',
			 		files: [
			 			'./views/paid/paidController.js',
			 			'./views/paid/paid.css'
			 		]
			 	},
			 	{
			 		name: 'pay_fail',
			 		files: [
			 			'./views/pay_fail/pay_failController.js',
			 			'./views/pay_fail/pay_fail.css'
			 		]
			 	},

			 	//退货申请 return_request
			 	{
			 		name: 'return_request',
			 		files: [
			 			'./views/return_request/return_requestController.js',
			 			'./views/return_request/return_request.css'
			 		]
			 	},

			 	//修改密码 change_pwd
			 	{
			 		name: 'change_pwd',
			 		files: [
			 			'./views/change_pwd/change_pwdController.js',
			 			'./views/change_pwd/change_pwd.css'
			 		]
			 	},


			 	//音效与通知页
			 	{
			 		name: 'audio_inform',
			 		files: [
			 			'./views/audio_inform/audio_informController.js',
			 			'./views/audio_inform/audio_inform.css'
			 		]
			 	},

			 	//通用
			 	{
			 		name: 'common',
			 		files: [
			 			'./views/common/commonController.js',
			 			'./views/common/common.css'
			 		]
			 	},

			 	//消息 information
			 	{
			 		name: 'information',
			 		files: [
			 			'./views/information/informationController.js',
			 			'./views/information/information.css'
			 		]
			 	},


			 	//个人资料 person_datum
			 	{
			 		name: 'person_datum',
			 		files: [
			 			'./views/person_datum/person_datumController.js',
			 			'./views/person_datum/person_datum.css'
			 		]
			 	},

			 	//设置 set set_ser
			 	{
			 		name: 'set',
			 		files: [
			 			'./views/set/setController.js',
			 			'./views/set/set.css'
			 		]
			 	},
			 	{
			 		name: 'set_ser',
			 		files: [
			 			'./views/set_ser/set_serController.js',
			 			'./views/set_ser/set_ser.css'
			 		]
			 	},

 

			 	//隐私设置 privacy_set
			 	{
			 		name: 'privacy_set',
			 		files: [
			 			'./views/privacy_set/privacy_setController.js',
			 			'./views/privacy_set/privacy_set.css'
			 		]
			 	},


			 	//关于 regard
			 	{
			 		name: 'regard',
			 		files: [
			 			'./views/regard/regardController.js',
			 			'./views/regard/regard.css'
			 		]
			 	}


			 	
	 		]
 		});
	}]);
	
})();