angular.module('app')
       .controller('registerController',  ['$scope','$state','validForm', 'tip', 'API', 'formatTime', function($scope, $state, validForm, tip, API, formatTime){
             

            $scope.userInfo = {
                phone : '',
                pwd : '',
                respwd : '',
                code : '',
                registerTime:'',
                agree:100
            };
            
            $scope.code = '',

            


           
            //获取验证码
           $scope.getCode = function () {
              if(!validPhone()){return}
                tip.loadTips.showLoading();
                API.fetchGet('http://127.0.0.1:9096/message', {phone: $scope.userInfo.phone})
                    .then(function(data){
                      console.log(data)
                      $scope.code = data.data.code;
                      console.log($scope.code);
                      tip.loadTips.hideLoading();
                    })
           }
           

           //注册事件
           $scope.register = function (){
               // console.log(typeof(tip.loadTips.hideLoading ))
                if(!valid()){return}
                
                // var time = formatTime.format(new Date(), 'yyyy-MM-dd hh:mm:ss' )
                // console.log(time);
                $scope.userInfo.registerTime = formatTime.format(new Date(), 'yyyy-MM-dd hh:mm:ss');

                tip.loadTips.showLoading();
                

           	    API.fetchPost('http://127.0.0.1:9096/register', $scope.userInfo)
                    .then(function (data){
                         tip.loadTips.hideLoading();
                         console.log('data ==>',data);
                         if(data.data.statusCode == 201 || data.data.statusCode == 202){
                          tip.showTip(data.data.msg);
                         }else{
                              tip.showTip("注册成功");
                              $state.go('login');
                         }   
                    })
                    .catch(function (err){
                        console.log(err);
                        tip.loadTips.hideLoading();
                        tip.showTip("注册失败");
                    })
                    
                
           };


           //验证手机号
           function validPhone (){
              if (!validForm.isNotEmpty($scope.userInfo.phone)){
                    tip.showTip('手机号码不能为空');
                    return false;
                }else if(!validForm.validLength($scope.userInfo.phone, 11, 11)){
                  tip.showTip('手机号码长度有误');
                  return false;
                }else if(!validForm.validPhone($scope.userInfo.phone)){
                  tip.showTip('无效手机号码')
                  return false;
                }
              return true;
           }

           //验证密码 验证码框有效值
           function valid (){
              if(!validForm.isNotEmpty($scope.userInfo.pwd)){
                  tip.showTip('密码不能为空');
                  return false;
              }else if(!validForm.isNotEmpty($scope.userInfo.respwd)){
                  tip.showTip('再次密码不能为空');
                  return false;
              }else if(!validForm.equal($scope.userInfo.pwd, $scope.userInfo.respwd)){
                  tip.showTip('二次密码不一致');
                  return false;
              }else if(!validForm.equal($scope.userInfo.code, $scope.code)){
                  tip.showTip('验证码不正确');
                  return false;
              }

           return true;
           }



          

       }])