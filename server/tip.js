angular.module('app')
       .factory('tip', ['$ionicPopup', '$ionicLoading', function($ionicPopup, $ionicLoading){
       
        return {
            //提示框
        	showTip: function ( msg){
                $ionicPopup.show({
                	template: '<div class="text-center">'+ msg +'</div>',
                	buttons:[
                	   {
                         text:'<span>确定</span>',
                         type:'button-positive'                        
                	  }
                	]
                })
        	},

            loadTips: {
                showLoading: function (){
                    $ionicLoading.show({
                        template:'<ion-spinner icon="spiral"  class=""></ion-spinner>'
                    });
                },

                hideLoading: function (){
                    $ionicLoading.hide();
                }
            }
                
            





        }

      
    }])