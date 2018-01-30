angular.module('app')
    .controller('retrieve_pwdController', ['$scope', 'API', 'tip', 'validForm','$state', function($scope, API, tip, validForm, $state){
         
        $scope.userControl = {
        	isControl:true,
        	isEmail:true,
        }

        // $scope.disabled ={
        //     bool:true,
        //     commitBool:true
        // }

        $scope.userInfo = {
        	phone:'',
        	email:'',
        	pwd:'',
        	respwd:'',
        	code:''
        }

        //用于保存服务器返回的验证码
        $scope.code = '',

         $scope.phone = function (){
         	for(key in $scope.userControl){
         		// console.log(key);
         		$scope.userControl[key] = false;
         	}
         }

         $scope.email = function (){
         	$scope.userControl.isControl = false;
        	$scope.userControl.isEmail = true;
         }

         $scope.cancel = function (){
           
           $scope.userControl.isControl = true;
         }
         
         //获取验证码
         $scope.getCode = function (){
            if(!validEmail()){return};
            tip.loadTips.showLoading();
            API.fetchGet('http://127.0.0.1:9096/emailCode',{email:$scope.userInfo.email})
              .then(function(data){
              	tip.loadTips.hideLoading();
                    $scope.code = data.data.code;
                    tip.showTip(data.data.msg);
                    console.log(data.data);
              })
              .catch(function(data){
              	tip.loadTips.hideLoading();
                console.log(data)
                    tip.showTip('获取验证码失败!');
              })
        

        //    

         }


        //提交密码修改信息 
        $scope.commit = function (){
            if(!valid()){return};
            tip.loadTips.showLoading();
            console.log('$scope.userInfo ==>' ,$scope.userInfo)
            API.fetchPost("http://127.0.0.1:9096/modifypwd", $scope.userInfo)
                .then(function (data){
                    tip.loadTips.hideLoading();
                    console.log(data)
                    tip.showTip('密码修改成功，点击返回登陆')
                    $state.go('login');
                })
                .catch(function (err){
                    tip.loadTips.hideLoading();
                })
            // if($scope.code == $scope.userInfo.code){
            //     tip.showTip('修改密码成功!');
            //     console.log($scope.userInfo)
            // }else{
            //     tip.showTip('验证码有误!');
            // }
            
        }
         
         //验证邮箱是否有效
         function validEmail(){
         	if(!validForm.isNotEmpty($scope.userInfo.email)){
                tip.showTip('邮箱不能为空');
                return false;
         	}else if(!validForm.validEmail($scope.userInfo.email)){
             	tip.showTip('邮箱格式不正确');
             	return false;
            }
            return true;
            $scope.disabled.bool=false;    
         }
         

         //验证整个表单是否有效
         function valid() {
         	if(!validEmail()){
         		return ;
         	}
         	if(!validForm.isNotEmpty($scope.userInfo.code)) {
				tip.showTip('验证码不能为空');
				return false;
			}else if (!validForm.equal($scope.userInfo.code, $scope.code)) {
				tip.showTip('验证码有误');
				return false;
			} else if (!validForm.isNotEmpty($scope.userInfo.pwd)) {
				tip.showTip('新密码不能为空');
				return false;
			} else if (!validForm.validLength($scope.userInfo.pwd, 6, 16)) {
				tip.showTip('新密码长度不正确');
				return false;
			} else if (!validForm.equal($scope.userInfo.pwd, $scope.userInfo.respwd)) {
				tip.showTip('两次密码不一致');
				return false;
			}
			return true;
         }

    }])