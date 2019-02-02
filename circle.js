class Circle{
    constructor(x,y,vx,vy,c,r){
        this.position = createVector(x,y);
        this.speed = createVector(vx,vy);
        this.color = c;
        this.radius= r;
    }
    display(){
        fill(this.color);
        noStroke();
        circle(this.position.x,this.position.y,this.radius);
    }
    update_width(){
        this.width.add(w);
    }
    //update_arrow
    update_speed(){
        this.position.add(this.speed);
    }
    collideEdge(){
        //truc Ox
        if(this.position.x>width) this.position.x=0;
        else{
            if(this.position.x<0) this.position.x=width;
        }
        //truc Oy
        if(this.position.y>height) this.position.y=0;
        else{
            if(this.position.y<0) this.position.y=height;
        }
    }
}