class GROUND
{
    constructor(x,y,width,height)
    {
        var option=
        {
          isStatic :true

        }
        this.groundobject=Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.groundobject)
        this.width=width;
        this.height=height;
      //  this.image=loadImage("base.png")
        
    }

    display()
    {
        push()
       translate(this.groundobject.position.x,this.groundobject.position.y)
     rotate(this.groundobject.angle)
     fill("brown")
     //  stroke("green")
      // strokeWeight(4)
        rectMode(CENTER)
     rect(0,0,this.width,this.height)
     //  imageMode(CENTER)
    //  image(this.image,0,0,this.weight,this.height)
        pop()
    }
    

}