<html>

    <canvas id="gamecanvas" width="1200" height="600"></canvas>
    	<script>
    		var canvas;
    		var canvascontext;
            var ballx= 10;
            var ballspeedx = 5;
            var bally= 10;
            var ballspeedy = 5;
            var paddle1y= 200;
            var paddle2y= 290;
            var paddle_height= 100;
            var player1score=0;
            var player2score=0;

    		window.onload= function()
    		{  
    			
    			canvas= document.getElementById("gamecanvas");
    			canvascontext= canvas.getContext('2d');
                setInterval(callboth,30);

                canvas.addEventListener('mousemove',
                function(evt)
                  {
                   var mousePos= CalculateMousePos(evt);
                   
                   paddle1y= mousePos.y- (paddle_height/2);
            

                  } 
                );
                
    		}
            function callboth()
            {
                moveevery();
                drawevery();
                computermovement();
                
                
                
            }

            function CalculateMousePos(evt)
            {
                 var rect= canvas.getBoundingClientRect();
                 var root= document.documentElement;
                 var mouseX= evt.clientX- rect.left- root.scrollLeft;
                 var mouseY= evt.clientY- rect.top- root.scrollTop;
                return {
                    x:mouseX,
                    y:mouseY
                };

            }

            function ballreset()
            {
                ballspeedx= -ballspeedx;
                ballx= canvas.width/2;
                bally= canvas.height/2;
            }


            function computermovement()
            {  var paddle2ycenter = paddle2y+ (paddle_height/2);
                if(bally-35 > paddle2ycenter)
                {
                    paddle2y += 6;

                }
                else if(paddle2ycenter > bally+35)
                {
                    paddle2y -= 6;
                }
            }


            function moveevery()
            {

                computermovement();

                ballx= ballx + ballspeedx;
              
                if (ballx > 1178) 
             {
                if(bally> paddle2y && bally< paddle2y + paddle_height)
                   {ballspeedx = -ballspeedx;
                   player2score += 1;
                   var deltay= bally-(paddle2y+ padddle_height/2);
                   ballspeedy = (deltay)*(0.35);
               }
               else
               {
                   ballreset();
                     

               }
                
             }

             if (ballx < 80) 
             
             {
                if(bally> paddle1y && bally< paddle1y+ paddle_height)
                    {ballspeedx = -ballspeedx;
                        player1score += 1;
                      var deltay= bally- (paddle2y+ paddle_height/2);
                      ballspeedy= deltay* 0.35;



                    }
                else
                {
                    ballreset();
                    
                 }
             }
            
             

                 bally= bally + ballspeedy;
                
                if (bally > canvas.height) 
             {
                   ballspeedy = -ballspeedy;
             }

             if (bally < 20) 
             {
                    ballspeedy = -ballspeedy;
             }

           
         }

        
            function drawevery()
            {
                
                
                //canvas color
                colorRect(50,0,1200,600,' lightblue');

                
                //left player paddle
                colorRect(52,paddle1y,15,paddle_height,'black');

                //right player pADDLE
                colorRect(1182,paddle2y,15,120,'black');
                //ball becomes moves in green color
                colorcircle(ballx, bally, 10, 'green');
                
                canvascontext.fillText(player1score,100,200);
                canvascontext.fillText(player2score,1000, 200);
                  
            }

            function colorcircle(centerx, centery, redius, color)
            {
                canvascontext.fillstyle= color;
                canvascontext.beginPath();
                canvascontext.arc(ballx, bally, 10, 0, Math.PI*2, true );
                canvascontext.fill();
            }

          function colorRect(left, right, top, bottom, color)  
            {
                canvascontext.fillStyle= color;
                canvascontext.fillRect(left, right,top, bottom);
            }




    	</script>
    
</html>