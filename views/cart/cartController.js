angular.module('app')
       .controller('cartController', ['$scope', function($scope){
       	 
         $scope.show = true;

         $scope.shows = function(){
              $scope.show = !$scope.show;

         }
       	 $scope.goodsData = [
              {
              	show:'false',
              	imgUrl:'./images/shopping_picture1@2x.png',
              	headText:'奥迪 Q3尼龙簇绒脚垫',
              	num:'1',
              	price:'150.00'
              },
             {
             	show:'false',
              	imgUrl:'./images/shopping_picture2@2x.png',
              	headText:'韩国丝汽车脚垫',
              	num:'1',
              	price:'250.00'
              },
              {
              	show:'false',
              	imgUrl:'./images/shopping_picture3@2x.png',
              	headText:'热压汽车脚垫',
              	num:'1',
              	price:'350.00'
              },
              {
              	show:'false',
              	imgUrl:'./images/shopping_picture1@2x.png',
              	headText:'奥迪 Q3尼龙簇绒脚垫',
              	num:'1',
              	price:'150.00'
              },
             {
             	show:'false',
              	imgUrl:'./images/shopping_picture2@2x.png',
              	headText:'韩国丝汽车脚垫',
              	num:'12',
              	price:'250.00'
              },
              {
              	show:'false',
              	imgUrl:'./images/shopping_picture3@2x.png',
              	headText:'热压汽车脚垫',
              	num:'1',
              	price:'350.00'
              },

       	 ];


         $scope.rece = function (index){
            console.log(index)
             var data = $scope.goodsData;
             var len = $scope.goodsData.length; 
             if (data[index].num === 0){
                  data[index].num = 0;
             }else{
              data[index].num --;
             }
              // for(var i = 0; i < len; i++){
              //     data[index].num --;
  
              // }

         };

         $scope.add = function (index){
              var data = $scope.goodsData;
              var len = $scope.goodsData.length;
              data[index].num ++;
              // for(var i = 0; i < len; i++){
                  
  
              // }
         }

         

         //    $scope.show = function (){
         //    	console.log($scope.goodsData);
         //    	for (var i = 0; i < $scope.goodsData.length; i++){
         //    		 $scope.goodsData[i].show = 'true';
         //    	}
         	 
         // }
       }])