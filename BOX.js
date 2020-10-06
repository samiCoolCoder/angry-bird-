class box
{
    constructor(x,y,width,height)
    {
        var option=
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        this.boxobject=Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.boxobject)
        this.width=width;
        this.height=height;
        this.image=loadImage("wood1.png")
        
    }

    display()
    {
        push()
        translate(this.boxobject.position.x,this.boxobject.position.y)
       rotate(this.boxobject.angle)
       fill("white")
       stroke("green")
       strokeWeight(4)
        //rectMode(CENTER)
       // rect(0,0,this.width,this.height)
       imageMode(CENTER)
      image(this.image,0,0,this.weight,this.height)
        pop()
    }
    

}