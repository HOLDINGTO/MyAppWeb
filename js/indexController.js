angular.module('app')
    .controller('indexController', ['$rootScope', '$state', function ($rootScope, $state){


         //保存登录信息
         $rootScope.userInfo = {
         	phone:'',
         	isLogin: false,
         	nickname:''
         };


         $rootScope.goState = function(stateName){
         	$state.go(stateName);
         }


         $rootScope.goBack = function (){
         	history.go(-1);
         }


    }])