// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x1 = 90, y1 = 60, dx1 = 5, dy1 = 5, r1 = 30, color1 = "#BDC2BB";
let x2 = 10, y2 = 50, dx2 = -50, dy2 = -10, r2 = 30, color2 = "#C9BA91";
                  //速度
//r1:r2=3:1 => v1:v2=27:1=m1:m2

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); 
     // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}


// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x1 = x1 + dx1;
    y1 = y1 + dy1;

    x2 = x2 + dx2;
    y2 = y2 + dy2;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...

    //球球1 碰牆壁改方向
    if(x1<0 || x1>canvas.width)
    {
        dx1=-dx1;
    }

    if(y1<0 || y1>canvas.height)
    {
        dy1=-dy1;
    }

    

    //球球2 碰牆壁改方向
    if(x2<0 || x2>canvas.width)
    {
        dx2=-dx2;
    }

    if(y2<0 || y2>canvas.height)
    {
        dy2=-dy2;
    }
  
    //球球1是否撞到球球2
    if((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2) <(r1+r2)*(r1+r2)) //撞到球球
    {
        let orig_dx1=dx1, orig_dy1=dy1, orig_dx2=dx2, orig_dy2=dy2 ;
        let m1=r1*r1*r1, m2=r2*r2*r2
        dx1=((m1-m2)*orig_dx1 + 2*m2*orig_dx2)/(m1+m2);
        dy1=((m1-m2)*orig_dy1 + 2*m2*orig_dy2)/(m1+m2);

        dx2=((m1-m2)*orig_dx2 + 2*m2*orig_dx1)/(m1+m2);
        dy2=((m1-m2)*orig_dy2 + 2*m2*orig_dy1)/(m1+m2);
    }

    drawBall(x1, y1, r1, color1);
    drawBall(x2, y2, r2, color2);
  
    requestAnimationFrame(draw);
}
draw();