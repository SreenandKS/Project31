class Plinko{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{isStatic:true});
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}