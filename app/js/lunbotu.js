onload = function(){				
				var oList = document.getElementById("list"); //获取移动的ul
				var aLi = oList.getElementsByTagName("li");  //图片
				
				var oList2 = document.getElementById("list2") //按钮
				var aLi2 = oList2.getElementsByTagName("li");
				
				//自动轮播
				oList.innerHTML += oList.innerHTML;  //赋值并添加这三张图片
				//根据图片数量设置我ul的宽度
				oList.style.width = aLi[0].offsetWidth * aLi.length + "px";
				
				var iWidth = aLi[0].offsetWidth;   //获取图片的宽度
				
				var i = 0;                           //设置初始位图片下标
				
				var timer = setInterval(move,3000);  //每隔3秒来是实现图片切换
				
				//每一次的图片切换
				function move(){
					
					i++;     //切换到下一张图片的下标
					var iLeft = -i * iWidth;   //图片要移动到的目标位置
					startMove(oList,"left",iLeft,next);  //开始移动（切换图片)  next为预留的回调函数
					
					for(var j=0; j<aLi2.length; j++){
						if(j == i){					//当前显示的图片		 
							aLi2[j].className = "active";  //按钮高亮显示
						}else{							
							aLi2[j].className = "";   //去掉其他按钮高亮显示
						}	
					}
					if(i == aLi.length/2){   //当最后一张图片（下标是3)的时候，按钮要设置为高亮
						aLi2[0].className = "active";
					}
	
				}
				
				//每次运动时检查是否是最后一张图片
				function next(){
					if(i >= aLi.length/2){  //当是最后一张图片时迅速把图片位置设为第一张图片，（非动画）
						oList.style.left = 0;
						i = 0;						
					}
					
				}
				
				//给按钮来添加事件
				for(var j=0; j<aLi2.length; j++){
					aLi2[j].index = j;  // 设置按钮的下标
					aLi2[j].onclick = function(){
						i = this.index - 1;  //这里-1是因为move函数里已有i++
						btnMove();	//点击切换图片					
					}					
				}
				//点击切换图片			
				function btnMove(){
					move(); //调用move 执行移动
					
					//点击之后，让图片间隔3秒后再进行切换
					clearInterval(timer);
					timer = setInterval(move,3000);
				}
				//翻页
				var preBtn = document.getElementsByTagName("a")[0];  //上一页
				var nextBtn = document.getElementsByTagName("a")[1]; //下一页

				//上一页
				preBtn.onclick = function(){				
					if(i == 0){        //第一张图片
						//第四张图片的前一张再前一张的下标  // i=1,调到move()函数中，经过i++，变为i=2,就是第三张图片的下标
						i = aLi.length/2 - 2;    
						//瞬间移动到第四张图片的位置
						oList.style.left = -aLi.length / 2  * iWidth + "px"; 
					}else{
						i = i - 2;  //如果i=1,则i=-1,进过i++，i=0，则是第一张图片的下标
					}
					btnMove();					
				}
				//下一页
				nextBtn.onclick = function(){
					next();   //检查是否到最后一张
					btnMove();   //执行移动操作
				}
				
				//鼠标移入,移出事件
				oList.onmouseover = function() {
					clearInterval(timer); //关闭定时器
				}
				oList.onmouseout = function() {
					clearInterval(timer);
					timer = setInterval(move, 3000); //开启定时器, 继续自动轮播
				}
				
				//失去焦点事件
				window.onblur = function() {
					console.log("onblur");
					clearInterval(timer); //关闭定时器
				}
				//获取焦点事件
				window.onfocus = function() {
					console.log("onfocus");
					clearInterval(timer);
					timer = setInterval(move, 3000); //开启定时器
				}
				
			}			
			
			
			
			
			
			