angular.module('app')
   .controller('confirm_orderController', ['$scope','$ionicActionSheet', function($scope, $ionicActionSheet){
        $scope.openSheet = function () {
            var hideSheet = $ionicActionSheet.show({
            titleText: '确认付款',
            buttons: [

                { text: `
                    <span class="way">支付宝帐号：<span class="account">145******17</span></span>
                    ` 
                },
                { text: '<div class="ways">付款方式：</div>' },
                { text: `<div class="paid">立即付款</div>` }
            ],
            buttonClicked: function(index) {
              return true;
            }
        });

        }

   }])