class Cannon {
    constructor(x,y,w,h,angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.img = loadImage("imagen/canon.png");
        this.img2 = loadImage("imagen/cannonBase.png");
    }


    display(){
        push();
        imageMode(CENTER);
        image(this.img,this.x,this.y,this.w,this.h);
        pop();

        image(this.img2,70,20,200,200);
        noFill();




        
    }
}