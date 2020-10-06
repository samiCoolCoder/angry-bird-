class log
{
    constructor(x,y,height,angle)
    {
        var option=
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        this.logobject=Bodies.rectangle(x,y,20,height,option)
        Matter.Body.setAngle(this.logobject,angle)
        World.add(world,this.logobject)
        this.width=20;
        this.height=height;
        this.image=loadImage("wood2.png")
        
    }

    display()
    {
        push()
        translate(this.logobject.position.x,this.logobject.position.y)
       rotate(this.logobject.angle)
       fill("green")
      
       // rectMode(CENTER)
      //  rect(0,0,this.width,this.height)
      imageMode(CENTER);
     image(this.image,0,0,this.width,this.height);
        pop()
    }
}