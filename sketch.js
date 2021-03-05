var dog,sadDog,happyDog;
var database;
var feedthedog,addFood;
var foodObj,foodStock,foodS;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food = new Food();

  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add the Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  food.display();
  drawSprites();
}

//function to read food Stock
function readfood(){
  var reference = database.ref("foodStock");
  //this is a listener listening the change in value made to the foodstock in the database to stock in order for updation
  reference.on("value",(data)=>{stock = data.val()});
}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage("Images/happyDog.png");

  if(foodObj.readfood()<=0){
    foodObj.updateFoodStock(foodObj.readfood()*0);
  }else{
    foodObj.updateFoodStock(foodObj.readfood()-1);
  }
  
}
function addFoods(){
  //new value of the increase in the food and the original Food changed to new foodS which is an updation
  foodS++
  database.ref("foodStock").update({
    Food:foodS++
  });
}

//function to add food in stock
