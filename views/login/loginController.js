angular.module('app')
    .controller('loginController', ['$rootScope', '$scope','$state', 'API', 'tip', 'validForm','$timeout', function($rootScope, $scope, $state, API, tip, validForm, $timeout){
       	
       	$scope.userInfo = {
       		phone:'',
       		pwd:''
       	}
        
       	$scope.login = function (){
          if (!valid()) {return}
          tip.loadTips.showLoading();
	
         //  console.log($scope.userInfo);
       	 // console.log($timeout);
         API.fetchPost('http://127.0.0.1:9096/login', $scope.userInfo)
              .then(function(data){
                //关闭加载动画
                tip.loadTips.hideLoading();
                console.log('data ==>',data);
                console.log('phone ==>',data.data.phone);
                if(data.data.statusCode == 301 || data.data.statusCode == 302){
                  tip.showTip(data.data.msg);
                }else{
                  $rootScope.userInfo.phone = data.data.phone;
                  $rootScope.userInfo.nickname = data.data.nickname == null ? '' : data.data.nickname;
                  $state.go('layout.home');
                }
              })
              .catch(function(err){
                //关闭加载动画
                tip.loadTips.hideLoading();
                console.log(err);
              })

    
       	}


       	//验证表单是否合法
           function valid (){
            if (!validForm.isNotEmpty($scope.userInfo.phone)){
                    tip.showTip('手机号码不能为空');
                    return false;
                }else if(!validForm.validLength($scope.userInfo.phone, 11, 11)){
                  tip.showTip('手机号码长度有误');
                  return false;
                }else if(!validForm.validPhone($scope.userInfo.phone)){
                  tip.showTip('手机号格式不正确')
                  return false;
                }else if (!validForm.isNotEmpty($scope.userInfo.pwd)) {
          				tip.showTip('密码不能为空');
          				return false;
          			} else if (!validForm.validLength($scope.userInfo.pwd, 6, 16)) {
          				tip.showTip('密码长度不正确');
          				return false;
          			}else if (!validForm.isNotEmpty($scope.userInfo.pwd)) {
                  tip.showTip('密码不能为空');
                  return false;
                }
              return true;
            }


    }])