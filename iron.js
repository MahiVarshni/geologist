class Iron{
	constructor(x,y,)
	{
	// assign options to the rubber ball
	var options={
     restitution:0.8,
	 friction:3,
	 density:30
	}
     this.body = Bodies.rectangle(x,y,50,50,options);
		  this.width = 50;
		  this.height = 50;
		  World.add(world, this.body);
	}
	
		display(){
		  var pos =this.body.position;
		  rectMode(CENTER);
		  fill("brown");
		  rect(pos.x, pos.y, this.width, this.height);
		}
	  };