class bird
{
    constructor(x,y,width,height)
    {
        var option=
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        this.birdobject=Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.birdobject)
        this.width=width;
        this.height=height;
        this.image=loadImage("bird.png")
        
    }

    display()
    {

        this.birdobject.position.x=mouseX;
        this.birdobject.position.y=mouseY;
        push()
        translate(this.birdobject.position.x,this.birdobject.position.y)
       rotate(this.birdobject.angle)
       fill("white")
       stroke("green")
       strokeWeight(4)
      //  rectMode(CENTER)
       // rect(0,0,this.width,this.height)
       imageMode(CENTER)
       image(this.image,0,0,this.width,this.height) 
        pop()
    }
    

}