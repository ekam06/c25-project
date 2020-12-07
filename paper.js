class Paper{

constructor(x,y){

    var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:0.09
    }

this.body=Bodies.circle(x,y,70,options)
this.r=70
this.bodyImage=loadImage("paper.png")

World .add(world,this.body)
}
display(){

var pos=this.body.position
imageMode(RADIUS)
//fill("purple")
image(this.bodyImage,pos.x,pos.y,this.r,this.r)

}


}