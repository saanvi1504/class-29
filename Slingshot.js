class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 30,
            stiffness: 0.2
        }
        this.pointB = pointB
        this.chain = Matter.Constraint.create(options)
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")

        World.add(world, this.chain)
    }
    display() {
        image(this.sling1, 150, 50, 50, 175)
        image(this.sling2, 120, 45, 50, 110)

        if (this.chain.bodyA !== null) {
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            stroke("#301608")
            push()
            if (this.chain.bodyA.position.x > 150) {
                strokeWeight(4)
                line(pointA.x + 25, pointA.y, pointB.x, pointB.y)
                line(pointA.x + 25, pointA.y, pointB.x + 60, pointB.y)
                image(this.sling3, pointA.x +25, pointA.y-10, 15, 30)
            }
            else {
                strokeWeight(7)
                line(pointA.x - 15, pointA.y, pointB.x, pointB.y)
                line(pointA.x - 15, pointA.y, pointB.x + 60, pointB.y)
                image(this.sling3, pointA.x - 25, pointA.y - 10, 15, 30)
            }
            pop()
        }
    }
    birdRelease() {
        this.chain.bodyA = null
    }
}