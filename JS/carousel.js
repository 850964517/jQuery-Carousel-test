/* 
* @Author: Anle
* @Date:   2016-02-24 17:05:22
* @Last Modified by:   Anle
* @Last Modified time: 2016-02-25 17:59:52
*/

'use strict';

//匿名自执行函数,开头加分号是为了防止前面js没有合并而报错.
;(function($){
	//定义一个Carousel的方法
   var  Carousel=function(poster){
       //获取配置参数
       //var set=poster.attr("data-setting");//获取属性节点的配置参数
       
	   //设置默认参数
	   this.setting={
	     "width":1000,
         "height":270,
         "posterWidth":640,
         "posterHeight":270,
         "scale":0.9,
         "speed":500,
         "verticalAlign":"middle"
	   }
	   //使用jquery.extend方法去扩展对象
	   $.extend(this.setting,{width:900});
	   console.log(this.setting);//width:900 配置参数如果默认有相同的属性,那么会覆盖掉默认配置参数
   };
   //将公共方法添加到Carousel.prototype上面
   Carousel.prototype={
	   // 用来获取人工配置参数

   };
   //初始化方法页面所以旋转木马的集合(传递集合类)
   Carousel.init=function(posters){
       var  _this=this;//这里的this会指向Carousel类,Carousel接收一个单个的要执行的集合(指针传递)
       //循环遍历集合
       posters.each(function(){
            // posters.each(function(index,item){}),这里也可以传递new _this的时候也可以把item传递进来,也是代表循环的当前对象
           //实例化一个Carousel类
           new _this($(this));//这里的this会指向循环posters类的当前对象(会是一个dom节点,转换成dom节点)

       });

   }


   //将Carousel类暴露到全局上
   window["Carousel"]=Carousel;
})(jQuery);