class Launcher
{
    constructor(body1,point2)
    {
        var options={
         bodyA:body1,
         pointB:point2,
         stiffnes:0.04,
         length:10
        }

        this.Launcherobj=Matter.Constraint.create(options)
        World.add(world,this.Launcherobj)
        this.pointB = point2
    }

    display(){
        if(this.Launcherobj.bodyA)
        {
        var pointA = this.Launcherobj.bodyA.position
        var pointB = this.pointB
        push()
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
        }
    }
     

    detach(){
      this.Launcherobj.bodyA=null  
    }

}