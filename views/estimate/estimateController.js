angular.module('app')
   .controller('estimateController', ['$scope', function($scope){

   		$scope.classifyInfo = [
  			{
  				text:'车型专用正面',
  				num:'12'
  			},
  			{
  				text:'服务好',
  				num:'12'
  			},
  			{
  				text:'物流快',
  				num:'12'
  			},
  			{
  				text:'质量好',
  				num:'12'
  			},
  			{
  				text:'不划算',
  				num:'12'
  			}
   		];


   		$scope.glanData = [
   			{
   				imgUrl:'./images/icons/person-img.gif',
   				name:'b*4',
   				esti:'严实合缝的没话说 感叹科技的发达 最满意的网购之一 原谅我手懒不上图了 买之前根本没有担心质量问题 就担心不严实不匹配 看来担心多余了 而且速度非常快 一天加工 一天半物流真是快',
   				explain:'',
   				time:'2017-04-21',
   				color:'A款黑色全包围+灰黑色丝圈双层',
   				num:'100',
   				glanNum:'7'

   			},
   			{
   				imgUrl:'./images/icons/person-img.gif',
   				name:'w*h',
   				esti:'把脚垫钱给你家买ya0吃，坑人玩意谁买谁上当，大伙一定注意。别买他家脚垫，尺寸不合适，还有异味。安装一个小时就扔了',
   				explain:'解释：您好，说话能不能不信口开河随意一说的，您说安装一小时就把产品扔了，谁会相信。脚垫都是4s店实车打版的，非常合适，你要是觉得产品不满意都是可以退货的，而且你也联系咱们的客服了，客服也是答应给你办理退货，你还要百般刁难，看了下你的好评率，一个不折不扣的恶意差评师，淘宝所有商家都会抵制你这样的差评师。',
   				time:'2017-04-21',
   				color:'颜色分类：黑色（红线）',
   				num:'200',
   				glanNum:'20'

   			},
   			{
   				imgUrl:'./images/icons/person-img.gif',
   				name:'黄*成',
   				esti:'一般吧，价格在这，还满意吧',
   				explain:'',
   				time:'2017-04-21',
   				color:'黑色（米线）',
   				num:'150',
   				glanNum:'10'

   			}
   		]
   }])