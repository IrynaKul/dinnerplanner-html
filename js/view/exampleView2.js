var ExampleView2 = function (container,model) {
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var dishName = this.dishName= container.find("#dish");
	var totalPrice = this.totalPrice=container.find("#totalPrice");
	var plusButton = this.plusButton = container.find("#plusGuest");
	var minusButton = this.minusButton = container.find("#minusGuest");
	var starter = this.starter =container.find("#starter");
	var mainDish = this.mainDish =container.find("#main_dish");
	var dessert = this.dessert =container.find("#dessert");
	this.container = container;

	var loadView = function() {
		numberOfGuests.html(model.getNumberOfGuests());
		var output= new Array();
		var total_price = 0;
		var output = new Array();
		for (var i = 0; i < model.getFullMenu().length; i++){
			if (model.getFullMenu()[i]!==0) {
				if (typeof model.getFullMenu()[i] !== 'undefined') {
					if(model.getDish(model.getFullMenu()[i]).type=="starter"){
						document.getElementById("starter").innerHTML = model.getDish(model.getFullMenu()[0]).name+"<span>"+model.getNumberOfGuests()+"X "+ model.getTotalMenuPrice()[0]+"</span>";
					}
					if(model.getDish(model.getFullMenu()[i]).type=="main dish"){
						document.getElementById("main_dish").innerHTML = model.getDish(model.getFullMenu()[1]).name+"<span>"+model.getNumberOfGuests()+"X "+ model.getTotalMenuPrice()[1]+"</span>";
					}
					if(model.getDish(model.getFullMenu()[i]).type=="dessert"){
						document.getElementById("dessert").innerHTML = model.getDish(model.getFullMenu()[2]).name+"<span>"+model.getNumberOfGuests()+"X "+ model.getTotalMenuPrice()[2]+"</span>";
					}
					total_price += model.getNumberOfGuests()*model.getTotalMenuPrice()[i];
					totalPrice.html("<div style='float:right;'>SEK   "+total_price+"</div>");
				}
			}
			else{
				totalPrice.html("<div style='float:right;'>SEK   "+total_price+"</div>");
			}
		}
	}


	// The observer update function, triggered by the model when there are changes
	this.update = function() {
	 	loadView();
	}
	
	model.addObserver(this);
	loadView();
}