class Drops{
    constructor(x,y,radius){
        var options ={
            friction:0.1,
            
        }
      this.rain =Bodies.circle(x,y,radius,options);
      this.radius = 5;
      World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y >height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
        }
    
    }
    showDrop(){
        //pendiente el color
        fill("blue");
        ellipse(this.rain.position.x,this.rain.position.y,this.rain.radius);
        
    }
  
}