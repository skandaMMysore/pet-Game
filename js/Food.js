class Food{
    constructor(){
        this.foodStock;
        this.image = loadImage("Milk.png");
    }
    display(){
        var x = 80; var y =100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        //if value of foodstock is not 0
        if(this.foodStock!=0){
            for(var i = 0; i< this.foodStock;i++){
                if(i%10==0){
                    x = 80;
                    y = y+50;
                }
                image(this.image,x,y,50,50);
                
            }
        }
    }
}