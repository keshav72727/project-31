class Drop{
    constructor(x,y){
        var options={
          restitution:0.1,
          friction:0.002  
        }
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill(67,176,177);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }
    update(){
        if (this.body.position.y>400){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random
            (-10,0)});
        }
    }
}