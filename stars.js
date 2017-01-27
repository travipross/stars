
var n = 400;
var stars = [];
var speed;

function setup() {
  createCanvas(600,600);
  for (var i=0;i<n;i++)
	stars.push(new Star());

  slider = createSlider(0,50,10);
}

function draw() {
	//speed = map(mouseX,0,width,0,50);
	speed = slider.value();
	background(0);
	translate(width/2, height/2);
	for (var i=0; i<n; i++){
		stars[i].update();
		stars[i].show();
		//if(i==0)
			//console.log(stars[i].z)
	}
}

function Star(){
	this.x = random(-width/2,width/2);
	this.y = random(-height/2,height/2);
	this.z = random(width/2);
	this.pz = this.z;
	
	
	this.update = function(){
		this.z = this.z-speed;
		if(this.z<1){
			this.x = random(-width/2,width/2);
			this.y = random(-height/2,height/2);
			this.z = width/2;
			this.pz=this.z;
		}
	}
	
	this.show = function(){
		fill(255);
		noStroke();
		
		this.sx = map(this.x/this.z,0,1,0,width/2);
		this.sy = map(this.y/this.z,0,1,0,height/2);
		this.r = map(this.z,0,width/2,10,0);
		
		ellipse(this.sx,this.sy,this.r,this.r);
		
		this.px = map(this.x/this.pz,0,1,0,width/2);
		this.py = map(this.y/this.pz,0,1,0,height/2);
		
		this.pz = this.z;
		stroke(255);
		line(this.px,this.py,this.sx,this.sy);
	}
}