angular.module('app')
    .controller('startController', ['$scope', '$state', function($scope, $state){
                $scope.imgData = [
                   {imgUrl:'./images/start/0.0001guide4.jpg',
                   	userf:''
           		   },
                   {imgUrl:'./images/start/0.0001guide1.jpg',
                   	userf:''
           		   },
                   {imgUrl:'./images/start/0.0001guide2.jpg',
                    userf:''
           		   },
                   {imgUrl:'./images/start/0.0001guide3.jpg',
                    userf:'layout.home'
           		   }
                ];

                $scope.skip = function (){


                }	

    }])