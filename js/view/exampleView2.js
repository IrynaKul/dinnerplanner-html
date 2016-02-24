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

		for (var i = 0; i < model.getFullMenu().length; i++){
			starter.html("<td>"+model.getDish(model.getFullMenu()[0]).name+"</td><td>"+model.getNumberOfGuests()*model.getTotalMenuPrice()[0]+"</td>");
			mainDish.html("<td>"+model.getDish(model.getFullMenu()[1]).name+"</td><td>"+model.getNumberOfGuests()*model.getTotalMenuPrice()[1]+"</td>");
			dessert.html("<td>"+model.getDish(model.getFullMenu()[2]).name+"</td><td>"+model.getNumberOfGuests()*model.getTotalMenuPrice()[2]+"</td>");
			total_price += model.getNumberOfGuests()*model.getTotalMenuPrice()[i];
			totalPrice.html("<div style='float:right;'>SEK   "+total_price+"</div>");
		}
		//table = "<tr><td>Pending</td><td>0.00</td></tr>";
		//document.getElementById("list_of_dishes").innerHTML += table;
	}


	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		loadView();
	}
	loadView();
	model.addObserver(this);
}