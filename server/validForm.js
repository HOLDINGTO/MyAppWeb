angular.module('app')
     .factory('validForm', function(){

       	return{

       		// 验证手机号码
       		validPhone: function (phone){
       			var reg = /^1[35678]\d{9}$/;
       			return reg.test(phone);
       		},

           //验证输入域不能为空
           isNotEmpty: function (val){
                return val == '' ? false : true ;
           },

           //验证长度
           validLength: function (val, min, max){
                return val.length <= max && val.length >= min ? true : false;
           },

           //两值相等
           equal: function  (val1, val2){
               return val1 == val2 ? true : false;
           },

           //验证邮箱格式
           validEmail: function (email){
            var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            return reg.test(email);
           }
       	}
     })