class Particle{
    constructor(x,y,radius){
        var options = {
            restitutuion:0.4,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,radius,options);
        this.radius = radius/2;
        
        // this.color=color (random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(255);
        ellipseMode(RADIUS);
        
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}