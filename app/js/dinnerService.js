// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {
  console.log("i DinnerService");
  
  var numberOfGuest = 1;
  var menu =[0,0,0];
  var dishId;
  var dishArray=[];
  var dish;
  var returnDish;
  var menuPrice;

  //var api_keys=[sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox, 8vtk7KykflO5IzB96kb0mpot0sU40096,r02x0R09O76JMCMc4nuM0PJXawUHpBUL,81mo405ZMQ5DCZT5M35ltt6xL8mFsMfT};

  this.setNumberOfGuests = function(num) {
    numberOfGuest = num;
  }

  this.getNumberOfGuests = function() {
    return numberOfGuest;
  }


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

  //function that returns a dish of specific ID
  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'r02x0R09O76JMCMc4nuM0PJXawUHpBUL'});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'r02x0R09O76JMCMc4nuM0PJXawUHpBUL'});
  
  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return menu;
  }
  
  this.setDish= function(dishVar){
    dish=dishVar;
  }

  this.getDish= function(){
    return dish;
  }

  this.setDishArray=function(dish){
    var dishPrice=0;
    for(var j=0; j<dish.Ingredients.length; j++){
      dishPrice=dishPrice+dish.Ingredients[j].Quantity;
    }
    
    dishArray.push({id:dish.RecipeID,
            title:dish.Title,
            category: dish.Category,
            image:dish.ImageURL,
            description:dish.Description,
            instructions:dish.Instructions,
            price:dishPrice});
    //console.log("dishArray ",dishArray);
  }

  this.getDishArray = function(){
    return dishArray;
  }

  this.setSelectedDish= function(dishVar){
    for(var i=0; i<dishArray.length; i++){
      if(dishVar==dishArray[i].id){
        returnDish=dishArray[i];
        //console.log("returnDish ",returnDish);
      }
    }
  }

  this.getSelectedDish=function(){
    return returnDish;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(id) {
    //console.log("Category ",this.getDish().Category);
    if(this.getDish().Category==="Appetizers"){
      
      menu.splice(0, 1, id);
    }
    if(this.getDish().Category==="Main Dish"){
      
      menu.splice(1, 1, id);
      
    }
    if(this.getDish().Category==="Desserts"){
      menu.splice(2, 1, id);
    }
    console.log(this.getFullMenu());
    
  }
    //console.log("Category ",this.getDish().Category);
    
    // if(menu.length<=3 && menu.indexOf(id)==-1){
    //   menu.push(id);
    // }
    // console.log(this.getFullMenu());
  // this.addDishToMenu(530115);
  // this.addDishToMenu(530114);
  // this.addDishToMenu(530115);
  // this.setSelectedDish(530115);
  // this.dishArrayReturn();

  


  //Removes dish from menu
  this.removeDishFromMenu = function(type) {
    if (type == "starter"){
      menu[0]=0;
    }
    if (type == "main dish"){
      menu[1]=0;
    }
    if (type == "dessert"){
      menu[2]=0;
    }
  }


  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var menuPrice =0;
    for (var i = 0; i<dishArray.length; i++) {
      for(var j=0; j<menu.length; j++){
        if(menu[j]!==0 && menu[j]==dishArray[i].id){
          menuPrice += dishArray[i].price;
        }

      }
      
    }
    return menuPrice;
  }

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});