//캐릭터 위치
let xPos;
let yPos;
//당근 위치
let foodOx;
let foodPx;
let foodRx;
let foodSx;
let foodQx;
let foodOy;
let foodPy;
let foodRy;
let foodSy;
let foodQy;
//불 위치
let firePx;
let fireQx;
let fireRx;

let k;
let l;
let r;
let s;

let mouseLc;

var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;


let score;
let die;


//이미지를 모두 로드하기
function preload(){
img5 = loadImage("right.png");
img1 = loadImage("rightGo.png");
img3 = loadImage("rightStop.png");

img2 = loadImage("left.png");
img6 = loadImage("leftGo.png");
img4 = loadImage("leftStop.png");

img7 = loadImage("fire.png");
img8 = loadImage("knife.png");
img9 = loadImage("carrot.png");
img10 = loadImage("brick.png");
img11 = loadImage("ready.png");

img12 = loadImage("stone1.png")

}

function setup(){
    createCanvas(640, 480);
    background(0);
//캐릭터 처음 위치
    xPos = 0;
    yPos = 0;

    enemyX = 0;
    enemyY = 0;

    foodOx = 0;
    foodPx = 0;
    foodRx = 0;
    foodSx = 0;
    foodQx = 0;
    foodOy = 0;
    foodPy = 0;
    foodRy = 0;
    foodSy = 0;
    foodQy = 0;


    k = 0;
    l = 0;
    r = 0;
    s = 0;

    score = 200;
    die = 3;



}

//캐릭터 움직이는 함수
function keyPressed(){
    if (die === 0){
        if (key === 'd'){
            background(0);
            image(img1, 30 + xPos, 30+ yPos, 30 , 60);
            image(img5, 45 + xPos, 25+ yPos, 30 , 60);
            xPos = xPos + 20;
            score = score -1;
            }

        if (key === 'a'){
            background(0);
            image(img2, 30 + xPos, 30+ yPos, 30 , 60);
            image(img6, 15 + xPos, 25+ yPos, 30 , 60);
            xPos = xPos - 20;
            score = score -1;
            }

        if (key === 'w'){
            background(0);
            image(img1, 30 + xPos, 30+ yPos, 30 , 60);
            yPos = yPos - 20;
            score = score -1;
            }

        if (key === 's'){
            background(0);
            image(img2, 30 + xPos, 30+ yPos, 30 , 60);
            yPos = yPos + 20;
            score = score -1;
            }
    }
}

function keyReleased(){
    if (die === 0){

        if (key === 'd'){
            background(0);
            image(img3, 30 + xPos, 30+ yPos, 30 , 60);
        }

        if (key === 'a'){
            background(0);
            image(img4, 30 + xPos, 30+ yPos, 30 , 60);
        }

        if (key === 'w'){
            background(0);
            image(img3, 30 + xPos, 30+ yPos, 30 , 60);
            }

        if (key === 's'){
            background(0);
            image(img4, 30 + xPos, 30+ yPos, 30 , 60);
            }
    }

}


function draw(){

    if (die === 3){
    image(img10, 30 +k , 0, 30, 30);
    k = k + 30;

    image(img10, 0+l , 450, 30, 30);
    l = l + 30;

    image(img10, 0 , 0+r, 30, 30);
    r = r + 30;

    image(img10, 610 , 0+s, 30, 30);
    s = s + 30;

    image(img11, 100, 80, 440 , 310);

        if (keyIsPressed){
            if (key === 'w'||'a'||'s'||'d'){
                die = 0;
            }

        }
    }
    
    if (die === 0){
        mouseLc = console.log(30 + xPos, 30+ yPos);
        text("hp: " + score, 540, 55);
        rect (440,30,int(score),10);
        textSize(15);

        image(img10, 0 , 0, 30, 30);
        image(img10, 30 , 0, 30, 30);
        image(img10, 60 , 0, 30, 30);
        image(img10, 90 , 0, 30, 30);
        image(img10, 120 , 0, 30, 30);
        image(img10, 150 , 0, 30, 30);
        image(img10, 180 , 0, 30, 30);
        image(img10, 210 , 0, 30, 30);
        image(img10, 240 , 0, 30, 30);
        image(img10, 270 , 0, 30, 30);
        image(img10, 300 , 0, 30, 30);
        image(img10, 330 , 0, 30, 30);
        image(img10, 360 , 0, 30, 30);
        image(img10, 390 , 0, 30, 30);
        image(img10, 420 , 0, 30, 30);
        image(img10, 450 , 0, 30, 30);
        image(img10, 480 , 0, 30, 30);
        image(img10, 510 , 0, 30, 30);
        image(img10, 540 , 0, 30, 30);
        image(img10, 570 , 0, 30, 30);
        image(img10, 600 , 0, 30, 30);
        image(img10, 630 , 0, 30, 30);
        image(img10, 660 , 0, 30, 30);

        image(img10, 0 , 450, 30, 30);
        image(img10, 30 , 450, 30, 30);
        image(img10, 60 , 450, 30, 30);
        image(img10, 90 , 450, 30, 30);
        image(img10, 120 , 450, 30, 30);
        image(img10, 150 , 450, 30, 30);
        image(img10, 180 , 450, 30, 30);
        image(img10, 210 , 450, 30, 30);
        image(img10, 240 , 450, 30, 30);
        image(img10, 270 , 450, 30, 30);
        image(img10, 300 , 450, 30, 30);
        image(img10, 330 , 450, 30, 30);
        image(img10, 360 , 450, 30, 30);
        image(img10, 390 , 450, 30, 30);
        image(img10, 420 , 450, 30, 30);
        image(img10, 450 , 450, 30, 30);
        image(img10, 480 , 450, 30, 30);
        image(img10, 510 , 450, 30, 30);
        image(img10, 540 , 450, 30, 30);
        image(img10, 570 , 450, 30, 30);
        image(img10, 600 , 450, 30, 30);
        image(img10, 630 , 450, 30, 30);
        image(img10, 660 , 450, 30, 30);

        image(img10, 0 , 0, 30, 30);
        image(img10, 0 , 30, 30, 30);
        image(img10, 0 , 60, 30, 30);
        image(img10, 0 , 90, 30, 30);
        image(img10, 0 , 120, 30, 30);
        image(img10, 0 , 150, 30, 30);
        image(img10, 0 , 180, 30, 30);
        image(img10, 0 , 210, 30, 30);
        image(img10, 0 , 240, 30, 30);
        image(img10, 0 , 270, 30, 30);
        image(img10, 0 , 300, 30, 30);
        image(img10, 0 , 330, 30, 30);
        image(img10, 0 , 360, 30, 30);
        image(img10, 0 , 390, 30, 30);
        image(img10, 0 , 420, 30, 30);
        image(img10, 0 , 450, 30, 30);
        image(img10, 0 , 480, 30, 30);

        image(img10, 610 , 0, 30, 30);
        image(img10, 610 , 30, 30, 30);
        image(img10, 610 , 60, 30, 30);
        image(img10, 610 , 90, 30, 30);
        image(img10, 610 , 120, 30, 30);
        image(img10, 610 , 150, 30, 30);
        image(img10, 610 , 180, 30, 30);
        image(img10, 610 , 210, 30, 30);
        image(img10, 610 , 240, 30, 30);
        image(img10, 610 , 270, 30, 30);
        image(img10, 610 , 300, 30, 30);
        image(img10, 610 , 330, 30, 30);
        image(img10, 610 , 360, 30, 30);
        image(img10, 610 , 390, 30, 30);
        image(img10, 610 , 420, 30, 30);
        image(img10, 610 , 450, 30, 30);
        image(img10, 610 , 480, 30, 30);


        if( 30+xPos >= 580){
            xPos = 550;
        }
        if (30+xPos < 30){
            xPos = 0;
        }
        if (30 + yPos >= 390){
            yPos = 360;
        }
        if (30 + yPos < 30){
            yPos = 0;
        }

        if (30 + xPos >= 210 && 30 + xPos <=230 && 30 + yPos >= 370 && 30 + yPos <= 390){
            xPos = 180;
        }
        if (30 + xPos >= 270 && 30 + xPos <= 290 && 30 + yPos >= 370 && 30 + yPos <= 390){
            xPos = 260;
        }
        if (30 + xPos >= 230 && 30 + xPos <= 270 && 30 + yPos >= 350){
            yPos = 320;
        }


        fill(225,0,0);
        image(img8, 70, 270, 30 , 60);
        image(img8, 350, 150, 30, 60);

        image(img7, 80, 390, 45 , 60 );
        image(img7, 350, 320, 45 , 60 );
        image(img7, 550, 150, 45 , 60 );

        image(img9, 150+ foodOx, 50+ foodOy, 30, 60);
        image(img9, 480, 90, 30+ foodRx, 60+ foodRy);
        image(img9, 150, 350, 30+ foodPx, 60+ foodPy);
        image(img9, 400, 390, 30+ foodSx, 60+ foodSy);
        image(img9, 570, 300, 30+ foodQx, 60+ foodQy);

        image(img12, 240, 410, 50, 40);

    }

    if ( 30 + xPos >= 350 && 30+ yPos >= 110
        && 30 + xPos <= 370 && 30+ yPos <= 190) {
            console.log("DIE")
            die = 1;
            if (die ===1){
                background(0);
                fill(225,0,0);
                rect(140,160,20,100);
                rect(160,160,10,10);
                rect(170,160,10,10);
                rect(180,170,10,10);
                rect(190,180,10,10);
                rect(200,190,10,40);
                rect(190,230,10,10);
                rect(180,240,10,10);
                rect(170,250,10,10);
                rect(160,250,10,10);
            
                rect(290,160,20,100);
                rect(270,160,60,10);
                rect(270,250,60,10);
            
                rect(410,160,60,10);
                rect(410,250,60,10);
                rect(410,200,60,10);
                rect(400,160,20,100);

                text(" You were stabbed ", 90, 350);
                textSize (50);
                image(img8, 30 + random(0, 480) , 0 + random(0,480), 30, 60);


            }
        }
        

    if(30 + xPos >= 70 && 30+ yPos >=230
        && 30 + xPos <= 90 && 30+ yPos <= 310){
            console.log("DIE");
            die = 1;
            if (die ===1){
                background(0);
                fill(225,0,0);
                rect(140,160,20,100);
                rect(160,160,10,10);
                rect(170,160,10,10);
                rect(180,170,10,10);
                rect(190,180,10,10);
                rect(200,190,10,40);
                rect(190,230,10,10);
                rect(180,240,10,10);
                rect(170,250,10,10);
                rect(160,250,10,10);
            
                rect(290,160,20,100);
                rect(270,160,60,10);
                rect(270,250,60,10);
            
                rect(410,160,60,10);
                rect(410,250,60,10);
                rect(410,200,60,10);
                rect(400,160,20,100);

                text(" You were stabbed ", 90, 350);
                textSize (50);
                image(img8, 30 + random(0, 480) , 0 + random(0,480), 30, 60);
                }
        }

    if(30 + xPos >= 130 && 30+ yPos >=30
        && 30 + xPos <= 170 && 30+ yPos <= 90){
            console.log("FOOD");
            die = 0;
            if (die ===0){
                foodOx = 9999;
                foodOy = 9999;
                }
        }

    if(30 + xPos >= 130 && 30+ yPos >=310
        && 30 + xPos <= 170 && 30+ yPos <= 390){
            console.log("FOOD");
            die = 0;
            if (die ===0){
                foodPx = 9999;
                foodPy = 9999;
                }
        }

    if(30 + xPos >= 390 && 30+ yPos >=350
        && 30 + xPos <= 410 && 30+ yPos <= 390){
            console.log("FOOD");
            die = 0;
            if (die ===0){
                foodSx = 9999;
                foodSy = 9999;
                }
        }

    if(30 + xPos >= 560 && 30+ yPos >=250
        && 30 + xPos <= 580 && 30+ yPos <= 350){
            console.log("FOOD");
            die = 0;
            if (die ===0){
                foodQx = 9999;
                foodQy = 9999;
                }
        }

    if(30 + xPos >= 470 && 30+ yPos >=50
        && 30 + xPos <= 490 && 30+ yPos <= 130){
            console.log("FOOD");
            die = 0;
            if (die ===0){
                foodRx = 9999;
                foodRy = 9999;
                }
        }

    if (foodOx=== 9999 && foodPx === 9999 && foodQx === 9999 
        && foodRx === 9999 && foodSx === 9999){
            die = 1;
            if (die ===1){
                background(0);
                fill(255);
                rect(290,160,20,100);
                rect(270,160,60,10);
                rect(270,250,60,10);
            
                rect(100,160,30,10);
                rect(110,170,10,30);
                rect(120,200,10,30);
                rect(140,200,10,30);
            
                rect(190,160,30,10);
                rect(200,170,10,30);
                rect(190,200,10,30);
                rect(170,200,10,30);
            
                rect(130, 230, 10, 20);
                rect(180, 230, 10, 20);
            
                rect(120,250,30,10);
                rect(170,250,30,10);
                rect(150,190,20,10);
            
                rect(410,160,20,100);
            
                rect(430,180,10,10);
                rect(440,190,10,10);
                rect(450,200,10,10);
                rect(460,210,10,10);
                rect(470,220,10,10);
                rect(480,230,10,10);
                rect(490,160,20,100);

                text("socre: " + score, 210, 350);
                textSize (50);
            }
        }

    if(30 + xPos >= 70  && 30+ yPos >=350
        && 30 + xPos <= 110 && 30+ yPos <= 390){
            console.log("Fire");
            die = 0;
            score = score - 3;
        }

    if(30 + xPos >= 330  && 30+ yPos >=270
        && 30 + xPos <= 390 && 30+ yPos <= 370){
            console.log("Fire");
            die = 0;
            score = score - 3;

        }

    if(30 + xPos >= 530  && 30+ yPos >=110
        && 30 + xPos <= 580 && 30+ yPos <= 190){
            console.log("Fire");
            die = 0;
            score = score - 3;

        }

    if(score <= 0){
        console.log("DIE")
        die = 1;
        if (die ===1){
            background(0);
            fill(225,0,0);
            rect(140,160,20,100);
            rect(160,160,10,10);
            rect(170,160,10,10);
            rect(180,170,10,10);
            rect(190,180,10,10);
            rect(200,190,10,40);
            rect(190,230,10,10);
            rect(180,240,10,10);
            rect(170,250,10,10);
            rect(160,250,10,10);
        
            rect(290,160,20,100);
            rect(270,160,60,10);
            rect(270,250,60,10);
        
            rect(410,160,60,10);
            rect(410,250,60,10);
            rect(410,200,60,10);
            rect(400,160,20,100);

            text(" You are exhausted ", 110, 350);
            textSize (50);
        }
}
}