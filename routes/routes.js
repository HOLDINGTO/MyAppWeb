angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        	$urlRouterProvider.otherwise('login');
        	$stateProvider

            //启动页 start
            .state('start', {
                 url:'/start',
                 templateUrl:'./views/start/start.html',
                           controller:'startController',
                           resolve:{
                                des:['$ocLazyLoad', function($ocLazyLoad){
                                        return $ocLazyLoad.load('start');
                                }]
                           }
             })



            //登录 注册页面
             .state('register', {
                 url:'/register',
                 templateUrl:'./views/register/register.html',
                           controller:'registerController',
                           resolve:{
                                des:['$ocLazyLoad', function($ocLazyLoad){
                                        return $ocLazyLoad.load('register');
                                }]
                           }
             })
             .state('login', {
                 url:'/login',
                 templateUrl:'./views/login/login.html',
                           controller:'loginController',
                           resolve:{
                                des:['$ocLazyLoad', function($ocLazyLoad){
                                        return $ocLazyLoad.load('login');
                                }]
                           }
             })

             //找回密码
             .state('retrieve_pwd', {
                 url:'/retrieve_pwd',
                 templateUrl:'./views/retrieve_pwd/retrieve_pwd.html',
                           controller:'retrieve_pwdController',
                           resolve:{
                                des:['$ocLazyLoad', function($ocLazyLoad){
                                        return $ocLazyLoad.load('retrieve_pwd');
                                }]
                           }
             })

             //搜索页 search
             .state('search', {
                 url:'/search',
                 templateUrl:'./views/search/search.html',
                           controller:'searchController',
                           resolve:{
                                des:['$ocLazyLoad', function($ocLazyLoad){
                                        return $ocLazyLoad.load('search');
                                }]
                           }
             })




          //底部导航页面
        	   .state('layout', {
        	   	   url:'',
        	   	   abstruct:true,
        	   	   templateUrl:'./views/layout/layout.html'
        	   })
        	   .state('layout.home', {
        	   	   url:'/home',
        	   	   templateUrl:'./views/home/home.html',
                           controller:'homeController',
                           resolve:{
                                des:['$ocLazyLoad', function($ocLazyLoad){
                                        return $ocLazyLoad.load('home');
                                }]
                           }
        	   })
             .state('layout.classify', {
                     url:'/classify',
                     templateUrl:'./views/classify/classify.html',
                     controller:'classifyController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('classify');
                          }]
                     }
             })
             .state('layout.cart', {
                     url:'/cart',
                     templateUrl:'./views/cart/cart.html',
                     controller:'cartController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('cart');
                          }]
                     }
             })


             .state('layout.user', {
                     url:'/user',
                     templateUrl:'./views/user/user.html',
                     controller:'userController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('user');
                          }]
                     }
             })

             //用户 user_order
             .state('user_order', {
                     url:'/user_order',
                     templateUrl:'./views/user_order/user_order.html',
                     controller:'user_orderController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('user_order');
                          }]
                     }
             })

             //产品详情页  details  pro_details
             .state('details', {
                     url:'/details',
                     templateUrl:'./views/details/details.html',
                     controller:'detailsController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('details');
                          }]
                     }
             })
             .state('pro_details', {
                     url:'/pro_details',
                     templateUrl:'./views/pro_details/pro_details.html',
                     controller:'pro_detailsController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('pro_details');
                          }]
                     }
             })



             //我的订单 order_await order_details order_eval order_pay order_rece order_refund
             .state('order_await', {
                     url:'/order_await',
                     templateUrl:'./views/order_await/order_await.html',
                     controller:'order_awaitController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('order_await');
                          }]
                     }
             })
             .state('order_details', {
                     url:'/order_details',
                     templateUrl:'./views/order_details/order_details.html',
                     controller:'order_detailsController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('order_details');
                          }]
                     }
             })
             .state('order_eval', {
                     url:'/order_eval',
                     templateUrl:'./views/order_eval/order_eval.html',
                     controller:'order_evalController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('order_eval');
                          }]
                     }
             })
             .state('order_pay', {
                     url:'/order_pay',
                     templateUrl:'./views/order_pay/order_pay.html',
                     controller:'order_payController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('order_pay');
                          }]
                     }
             })
             .state('order_rece', {
                     url:'/order_rece',
                     templateUrl:'./views/order_rece/order_rece.html',
                     controller:'order_receController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('order_rece');
                          }]
                     }
             })
             .state('order_refund', {
                     url:'/order_refund',
                     templateUrl:'./views/order_refund/order_refund.html',
                     controller:'order_refundController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('order_refund');
                          }]
                     }
             })



             //物流详情 fre_details 
             .state('fre_details', {
                     url:'/fre_details',
                     templateUrl:'./views/fre_details/fre_details.html',
                     controller:'fre_detailsController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('fre_details');
                          }]
                     }
             })




             //评价 estimate
             .state('estimate', {
                     url:'/estimate',
                     templateUrl:'./views/estimate/estimate.html',
                     controller:'estimateController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('estimate');
                          }]
                     }
             })

             //发表评价 estimate_publi
             .state('estimate_publi', {
                     url:'/estimate_publi',
                     templateUrl:'./views/estimate_publi/estimate_publi.html',
                     controller:'estimate_publiController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('estimate_publi');
                          }]
                     }
             })



             //确认订单
             .state('confirm_order', {
                     url:'/confirm_order',
                     templateUrl:'./views/confirm_order/confirm_order.html',
                     controller:'confirm_orderController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('confirm_order');
                          }]
                     }
             })

             //付款 paid pay_fail
             .state('paid', {
                     url:'/paid',
                     templateUrl:'./views/paid/paid.html',
                     controller:'paidController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('paid');
                          }]
                     }
             })
             .state('pay_fail', {
                     url:'/pay_fail',
                     templateUrl:'./views/pay_fail/pay_fail.html',
                     controller:'pay_failController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('pay_fail');
                          }]
                     }
             })

             //退货申请 return_request
             .state('return_request', {
                     url:'/return_request',
                     templateUrl:'./views/return_request/return_request.html',
                     controller:'return_requestController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('return_request');
                          }]
                     }
             })


             //修改密码 change_pwd
             .state('change_pwd', {
                     url:'/change_pwd',
                     templateUrl:'./views/change_pwd/change_pwd.html',
                     controller:'change_pwdController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('change_pwd');
                          }]
                     }
             })

            //音效与通知页
             .state('audio_inform', {
                     url:'/audio_inform',
                     templateUrl:'./views/audio_inform/audio_inform.html',
                     controller:'audio_informController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('audio_inform');
                          }]
                     }
             })

             //通用
             .state('common', {
                     url:'/common',
                     templateUrl:'./views/common/common.html',
                     controller:'commonController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('common');
                          }]
                     }
             })

             //消息 information
             .state('information', {
                     url:'/information',
                     templateUrl:'./views/information/information.html',
                     controller:'informationController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('information');
                          }]
                     }
             })


             //个人资料 person_datum
             .state('person_datum', {
                     url:'/person_datum',
                     templateUrl:'./views/person_datum/person_datum.html',
                     controller:'person_datumController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('person_datum');
                          }]
                     }
             })

             //设置 set set_ser
             .state('set', {
                     url:'/set',
                     templateUrl:'./views/set/set.html',
                     controller:'setController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('set');
                          }]
                     }
             })
             .state('set_ser', {
                     url:'/set_ser',
                     templateUrl:'./views/set_ser/set_ser.html',
                     controller:'set_serController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('set_ser');
                          }]
                     }
             })

             //隐私设置 privacy_set
             .state('privacy_set', {
                     url:'/privacy_set',
                     templateUrl:'./views/privacy_set/privacy_set.html',
                     controller:'privacy_setController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('privacy_set');
                          }]
                     }
             })


             //关于 regard
             .state('regard', {
                     url:'/regard',
                     templateUrl:'./views/regard/regard.html',
                     controller:'regardController',
                     resolve:{
                          des:['$ocLazyLoad', function($ocLazyLoad){
                                  return $ocLazyLoad.load('regard');
                          }]
                     }
             })



                   
        }])