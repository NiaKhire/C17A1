var b1, b2 ;

function setup() 
{
  createCanvas(400, 400);
  b1 = new Box(200,200,30,40,2,1);
  b2 = new Box(135,100,40,40,2,1);
}

function draw() 
{
  background(220);

  b1.show()
  b1.move_up();

  b2.show()
  b2.move_right();


}

