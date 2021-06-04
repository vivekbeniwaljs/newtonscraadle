class Bob{
 constructor(x,y){
    var option = {
    isStatic: false,
    restitution: 1,
    friction: 0,
    density: 7.8,
    }
    this.body = Bodies.circle(x,y,25,option)
    World.add(world,this.body)
 }

  display(){
  push()
  ellipseModee(RADIUS)
  fill(254,0,255)
  ellipse(this.body.position.x,this.body.position.y,25,25)
  pop();
  }

}