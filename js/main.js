requirejs.config({
	paths:{
		jquery:'jquery-2.1.4.min'
	}
});

requirejs(['jquery','searchName'],function($,searchName){
	var Scroll = function(e){
		e=e || window.event;
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
	
		var dataInt={
			'data1':[{'Inner':'<div class="goods"><a class="exam"><div class="top"><img src="img/xiaomi.jpg" ></div> <div class="bottom"><p>基本全新小米平板2</p><span>华科</span><span class="price">￥750</span></div></a></div>'},{'Inner':'<div class="goods"><a class="exam"><div class="top"><img src="img/xiaomi.jpg" ></div> <div class="bottom"><p>基本全新小米平板2</p><span>华科</span><span class="price">￥750</span></div></a></div>'},{'Inner':'<div class="goods"><a class="exam"><div class="top"><img src="img/xiaomi.jpg" ></div> <div class="bottom"><p>基本全新小米平板2</p><span>华科</span><span class="price">￥750</span></div></a></div>'},{'Inner':'<div class="goods"><a class="exam"><div class="top"><img src="img/xiaomi.jpg" ></div> <div class="bottom"><p>基本全新小米平板2</p><span>华科</span><span class="price">￥750</span></div></a></div>'}]
		}

		if(checkscrollside()){
			 var oParent = document.getElementById('Gwrapper');
			 for(var i=0;i<dataInt.data1.length;i++){
			 	oParent.innerHTML += dataInt.data1[i].Inner;
			 } 
		}
	}

	var checkscrollside = function (){
    	var oParent=document.getElementById('Gwrapper');
    	var getClass = new searchName.GetClass({
			Oparent: oParent,
			OclassName: 'goods'
		});
    	var goods=getClass.getclass();
    	var lastPinH=goods[goods.length-1].offsetTop+Math.floor(goods[goods.length-1].offsetHeight/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    	var documentH=document.documentElement.clientHeight;
    	return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
	}

	window.onscroll = Scroll;
})