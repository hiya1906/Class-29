class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1Image = loadImage("sprites/sling1.png");
        this.sling2Image = loadImage("sprites/sling2.png");
        this.sling3Image = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#47210D");
            strokeWeight(4);
            line(pointA.x-15, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+25, pointB.y);
            image(this.sling3Image,pointA.x-18,pointA.y);
        }
        image(this.sling1Image,200,20);
        image(this.sling2Image,170,10);
    }
    
}