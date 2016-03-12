// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource,$cookieStore) {
  console.log("i DinnerService");

  //var api_keys=[sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox, 8vtk7KykflO5IzB96kb0mpot0sU40096,r02x0R09O76JMCMc4nuM0PJXawUHpBUL,81mo405ZMQ5DCZT5M35ltt6xL8mFsMfT};

  //function that returns a dish of specific ID
  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'r02x0R09O76JMCMc4nuM0PJXawUHpBUL'});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'r02x0R09O76JMCMc4nuM0PJXawUHpBUL'});
  
  //$cookieStore.remove("totalPrice");
  var dishId;
  var dishArray=[];
  var dish;
  var returnDish;

  $cookieStore.remove('menuPrice');

  //var menuPrice= $cookieStore.get('totalPrice');

  // if(typeof menuPrice == 'undefined'){
  //   menuPrice=0;
  //   $cookieStore.put('totalPrice', menuPrice);
  // }

  //setting default values of numberOfGuests if cookies not exist yet
  var numberOfGuests = $cookieStore.get('numberOfGuests');
  if(typeof numberOfGuests== 'undefined'){
    numberOfGuests=1;
    $cookieStore.put('numberOfGuests',numberOfGuests);
    console.log(numberOfGuests);
  }

  //function that fill the dishArray with needed values
  var setDishArray= this.setDishArray=function(dish){
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
            price: Math.round(dishPrice)});
    
    
    console.log("dishArray ", dishArray, dishArray.length);
    
    
  }

  this.getDishArray = function(){
    return dishArray;
  }


  


  var menu=[];
  var starter = $cookieStore.get('starter');
  var main_dish = $cookieStore.get('main_dish');
  var dessert = $cookieStore.get('dessert');
  console.log("starter ", typeof starter, "main_dish ", typeof main_dish, "dessert", typeof dessert);

  if(typeof starter == 'undefined'){
    console.log("in if starter ",starter);
    starter=0;
    $cookieStore.put('starter',0);
  }
  if(typeof main_dish == 'undefined'){
    console.log("in if main_dish ",main_dish);
    main_dish=0;
    $cookieStore.put('main_dish',0);
  }
  if(typeof dessert == 'undefined'){
    console.log("in if dessert ",dessert);
    dessert=0;
    $cookieStore.put('dessert',0);
  }
  else{
    menu=[starter,main_dish,dessert];
    for(key in menu) {
      if(menu[key]!=0){
        this.Dish.get({id:menu[key]},function(data){
        setDishArray(data);
        });
      }
      
    }
  }
  console.log(menu); 

  this.setNumberOfGuests = function(num) {
    if(num>0){
      numberOfGuests = num;
      $cookieStore.put('numberOfGuests',numberOfGuests);
    }
    else{
      alert("You can't have negative amount guests");
    }
    
  }

  this.getNumberOfGuests = function() {
    return numberOfGuests;
  }


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

  
  
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

  this.getDishPrice =function(id){
    for(key in dishArray){
      if(id==dishArray[key].id){
        return dishArray[key].price;
      }
    }

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
      $cookieStore.put('starter',id);
    }
    if(this.getDish().Category==="Main Dish"){
      
      menu.splice(1, 1, id);
      $cookieStore.put('main_dish',id);
      
    }
    if(this.getDish().Category==="Desserts"){
      menu.splice(2, 1, id);
      $cookieStore.put('dessert',id);
    }
    console.log(this.getFullMenu());
    
    
  }
    
  //Removes dish from menu
  this.removeDishFromMenu = function(type) {
    if (type == "Appetizers"){
      menu[0]=0;
      $cookieStore.remove('starter');
    }
    if (type == "Main Dish"){
      menu[1]=0;
      $cookieStore.remove('main_dish');
    }
    if (type == "Desserts"){
      menu[2]=0;
      $cookieStore.remove('dessert');
    }

  }

//Returns the total price of the menu (all the ingredients multiplied by number of guests).
  var getTotalMenuPrice= this.getTotalMenuPrice = function() {
    menuPrice =0;
    for(i in menu){
      for(j in dishArray){
        if(menu[i]!==0 && menu[i]==dishArray[j].id){
          console.log(dishArray);
          menuPrice += dishArray[j].price;
          break;
        }
      }
    }
    console.log("menuPrice ",menuPrice);
    return menuPrice;
    //$cookieStore.put('menuPrice',menuPrice),;
    
  }
  

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});