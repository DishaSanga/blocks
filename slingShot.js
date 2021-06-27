class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
     
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
   
    }

}