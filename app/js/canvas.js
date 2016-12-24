 document.addEventListener("DOMContentLoaded",function(){
			  	   //1)获取canvas节点
			  	   var canvas=document.querySelector('canvas');
			  	   canvas.width=160;
			  	   canvas.height=80;
			  	   
			  	   //2)获取画布对象（上下文）
			  	   var ctx=canvas.getContext('2d');
			  	   console.log(ctx);
			  	   
			  	   //3)绘制路径 
			  	   //3.1)设置起点
			
			  	   ctx.moveTo(10,10);
			  	   
			  	   //3.2)画线：lineTo(x,y)
			  	   ctx.lineTo(70,10);
			  	   ctx.lineTo(70,35);
			  	   ctx.lineTo(10,35);
			  	   ctx.closePath();
			
			  	   ctx.moveTo(70,35);
			  	   ctx.lineTo(140,65);
			  	   ctx.lineTo(150,55);
			  	   ctx.lineTo(160,65);
			  	   ctx.lineTo(150,75);
			  	   ctx.lineTo(140,65);
			  	   ctx.closePath();
			  	   
			  	    //4）设置样式
			  	   //设置线宽
			  	   ctx.lineWidth=1;
			  	   
			  	   //设置描边样式
			  	   ctx.strokeStyle='red';
			  	   
			  	   //设置填充样式
//			  	   ctx.fillStyle='white';
			  	   
			  	   //5)描边填充
			  	   ctx.stroke();
//			  	   ctx.fill();
			  	   //
			  	   ctx.beginPath();
			  	   ctx.moveTo(150,65);
			  	   ctx.arc(150,65,1,0,2*Math.PI,false);
                 
			  	   //4）设置样式
			  	   //设置线宽
			  	   ctx.lineWidth=1;
			  	   
			  	   //设置描边样式
			  	   ctx.strokeStyle='red';
			  	   
			  	   //设置填充样式
//			  	   ctx.fillStyle='white';			  	   
			  	   //5)描边填充
			  	   ctx.stroke();
//			  	   ctx.fill();
                   /*画点左上*/
                    ctx.beginPath();
                    ctx.moveTo(10,10);
                    ctx.arc(10,10,2,0,2*Math.PI,false);
                    
                    ctx.lineWidth = 2;
                    ctx.strokeStyle="green";
                    ctx.stroke();
                    /*画点右上*/
                    ctx.beginPath();
                    ctx.moveTo(70,10);
                    ctx.arc(70,10,2,0,2*Math.PI,false);
                    
                    ctx.lineWidth=2;
                    ctx.strokeStyle="green";
                    ctx.stroke();
                    /*画点左下*/
                    ctx.beginPath();
                    ctx.moveTo(10,35);
                    ctx.arc(10,35,2,0,2*Math.PI,false);
                    
                    ctx.lineWidth=2;
                    ctx.strokeStyle="green";
                    ctx.stroke();
                    /*画点右下*/
                    ctx.beginPath();
                    ctx.moveTo(70,35);
                    ctx.arc(70,35,2,0,2*Math.PI,false);
                    
                    ctx.lineWidth=2;
                    ctx.strokeStyle="green";
                    ctx.stroke();
                    
			  	     ctx.font="18px 微软雅黑";
			  	     ctx.textBaseline="top";
			  	     ctx.textAlign="left";
			  	     ctx.fillText("锐捷",22,10);
			  	     
			  	     
			  })