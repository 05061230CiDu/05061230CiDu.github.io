// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 10, dy = 10, r = 10, color = "#0095DD";
let canmove=false ; // 初始值是1(true) 一進入網頁就會跟著移動 故用false
// 畫圓形
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

// 按下按鍵時觸發             動作        呼叫___函式
document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) 
{
	if(e.key == "ArrowRight")        x += dx;
	else if(e.key == "ArrowLeft")    x -= dx;
    else if(e.key == "ArrowUp")      y -= dy;
	else if(e.key == "ArrowDown")    y += dy;
}

// TODO: 滑鼠移動(mousemove)時觸發，改變位置(x, y)為滑鼠目前位置(e.clientX, e.clientY)
// ...
document.addEventListener("mousemove", mousemovehandler);
function mousemovehandler(e)
{
  if(canmove)
  {
    //x=e.clientX;
    //y=e.clientY; //目前是滑鼠相對於畫布位置 故有偏差
    x=e.clientX - canvas.offsetLeft ;
    y=e.clientY - canvas.offsetTop ;
    //連貫性 如果沒有 每次按下滑鼠只剩一個點
  }   
  
}

document.addEventListener("mousedown", mousedownhandler);
//當按下滑鼠 會叫mousedownhandler函式開始執行
document.addEventListener("mouseup", mouseuphandler);
//當按下滑鼠 會叫mousedownhandler函式開始執行

function mousedownhandler(e) 
{
  canmove=true; // 當滑鼠按下時，可以移動
  x=e.clientX - canvas.offsetLeft ; 
  y=e.clientY - canvas.offsetTop ;
  //replit會先執行此函式再執行canmove 所以要先強制拉到現在位置再執行
  color="#" + Math.floor(Math.random()*16777215).toString(16);

  
}

function mouseuphandler(e) 
{
  canmove=false; // 當滑鼠放開時，不可以移動
}


// 更新畫布
function draw() 
{	
	//ctx.clearRect(0, 0, canvas.width, canvas.height); 
  //更新畫面 如果有 無法留下舊軌跡
    drawBall();
    requestAnimationFrame(draw); 
}
draw();
