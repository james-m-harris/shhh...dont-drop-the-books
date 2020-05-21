//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;
let mySound;
var librarian;
var resetSketch;
let hit = false;
let img;
let booki;


function preload() {
  img = loadImage('bookshelves.png');
booki = loadImage('book.png');

  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('levelup.wav');
  librarian = loadAnimation('sprites/librarian001.png', 'sprites/librarian033.png');
}

function setup() {
  createCanvas(900, 800);

  background(50);
  me = new Avatar(width/2, 700, 10);
  earth = ellipse(100,100)

   // let button = createButton("reset");
   //
   // button.mousePressed(startAgain)

}


function draw(){
	background("white");
  //earth
image(img, 10, 10, 900, 700);
  me.drawMe();
  me.moveMe();

  if (frameCount < 150) {
    fill("black");
    textSize(20);
    textFont('Verdana-Bold');
    text('Use arrow keys to move the character, dont drop the books!', 140, 60);
    }

  if (frameCount % 100 == 0) {
      let  b = new Ball(random(50,700), 50, random(1,3));
      balls.push(b);
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
          balls[i].dropBook();
	  }

}


// function startAgain(){ 
// location.reload(); 
// } 


class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;

	}

	drawMe(){  // draw the running person
if (hit == false){
    		stroke("gold");
        strokeWeight(1);
    		fill("red");
		    ellipse(this.x,this.y,40,40);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
      }

}

	moveMe(){

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(LEFT_ARROW )) {
      this.x -= this.speed;
}
}
  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;


	}

	drawBall(){

    if (hit == false) {
    	image(booki, this.x, this.y, 50, 50);
    }
	}


	moveBall(){
if (hit==false){
		this.y = this.y+this.speed;

	}

}
  	bounceBall(){
    		if (this.x >= me.x-25 && this.x <= me.x+25 && this.y > me.y-70 && this.y < me.y+70){
      			this.x=-10;
            this.y=100;
            mySound.play();


    		}
  	}

    dropBook(){
      if(this.y>=height){
        hit = true;
        animation(librarian, 400, 420);
        fill("black");
        textSize(100);
        textFont('GillSans-Bold ');
        text('SHHHHHHH!!', 100, 100);
        fill("orange");
        textSize(30);
        textFont('Verdana-Bold');
        text('refresh to try again',270,150);
      }
    }


}
