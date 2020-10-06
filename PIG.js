class pig
{
    constructor(x,y)
    {
        var option=
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        this.pigobject=Bodies.rectangle(x,y,40,40,option)
        World.add(world,this.pigobject)
        this.width=40;
        this.height=40;
        this.image=loadImage("enemy.png")
        
    }

    display()
    {
        push()
        translate(this.pigobject.position.x,this.pigobject.position.y)
       rotate(this.pigobject.angle)
       fill("green")
      
     //   rectMode(CENTER)
      //  rect(0,0,this.width,this.height)
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height);
        pop()
    }
}