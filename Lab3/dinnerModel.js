//DinnerModel Object constructor
var DinnerModel = function() {
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

	var menu=[2,100,200];
	var menu2= new Array(3);
	var dishMenu= new Array();
	var menu_temp=[,100,];
	var guests= 4;
	var start="dessert";
	var dishPriceArray = new Array();	
	
	this.setNumberOfGuests = function(num) {
		//num=this.setNumberOfGuests();
		num= guests;
		return num;
	};

	// should return 
	this.getNumberOfGuests = function() {
		return num;
	};
	
	this.getSelectedDish = function(type) {
		//type = start;
		for(var a = 0; a <= menu.length; a++){
			for (var b = 0; b < $(dishes).length; b++) {

				if(menu[a] == dishes[b].id){
					if(type == dishes[b].type){
						return dishes[b];
					}
				}	
			}
		}
	}
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		if(id==1||id==2||id==3){
			menu2.splice(0, 1, id);
		}
		if(id==100||id==101||id==102){
			menu2.splice(1, 1, id);
		}
		if(id==200||id==201||id==202){
			menu2.splice(2, 1, id);
		}
		
	}

	var jj1=this.addDishToMenu(1);
	//alert("add "+jj1);
	var jj2=this.addDishToMenu(2);
	//alert("add "+jj2);
	var jj3=this.addDishToMenu(108);
	//alert("add "+jj3);
	var jj4=this.addDishToMenu(101);
	//alert("add "+jj4);
	var jj5=this.addDishToMenu(202);
	//alert("add "+jj5);

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//id=2;
		var index = menu2.indexOf(id);
		if (index > -1) {
    		menu2.splice(index, 1, "");
		}
		return menu2;
	}

	var jjb=this.removeDishFromMenu();
	//alert(jjb);
	//alert("remove "+menu2);
	var jj6=this.addDishToMenu(1);
	//alert("add "+jj6);

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//return menu2;
		for (var a = 0; a < menu.length; a++) {
			for (var b = 0; b < $(dishes).length; b++) {
				if (menu[a]== $(dishes)[b].id) {
					dishMenu.splice(a, 1, $(dishes)[b].id);
				}
			}
		}
		return dishMenu;	
	}
	//alert(this.getFullMenu());


	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredArray= new Array();
		for (var a = 0; a < menu_temp.length; a++) {
			for (var b = 0; b < $(dishes).length; b++) {
				if (menu_temp[a]== $(dishes)[b].id) {
					for (var c = 0; c < $(dishes)[b].ingredients.length; c++){
						var ingredient = $(dishes)[b].ingredients[c];
						ingredArray.push(ingredient);
					}
				}
			}
		}
		return ingredArray;

	}
	//alert(this.getAllIngredients());
	

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
		//var totalPrice=0;
		
		for (var a = 0; a < menu.length; a++) {
			for (var b = 0; b < $(dishes).length; b++) {
				if (menu[a]==$(dishes)[b].id) {
					//alert("in if");
					var dishPrice=0;
					for (var c = 0; c < $(dishes)[b].ingredients.length; c++){
						dishPrice= dishPrice+ parseFloat(dishes[b].ingredients[c].price);
						//alert("dishPrice" + dishPrice);
					}
					dishPriceArray.splice(a, 1, dishPrice);
					//totalPrice= totalPrice + dishPrice;
					//alert(totalPrice);
					//return dishPrice;
				}
				
			}
		}
		return dishPriceArray;
		//return totalPrice;
	}
	//var bla=this.getTotalMenuPrice();
	//alert(bla);

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	
}