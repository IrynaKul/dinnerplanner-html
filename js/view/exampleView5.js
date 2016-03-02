var ExampleView5 = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests_view5");
	this.food=container.find("#food_view5");
	this.display_money=container.find("#display_money");

	this.numberOfGuests.html("<div id='third_header'><h9>My Dinner: "+model.getNumberOfGuests()+" people"
		+"</h9><div style='float: right;'><button id='goBackBtn'>Go back and edit dinner</button></div>");

	var output= new Array();
	var total_price = 0;

	var menuDishes = model.getFullMenu();
	var dish;
	for (var i = 0; i < menuDishes.length; i++){
		dish = model.getDish(model.getFullMenu()[i]);
		console.log(dish);

		if (dish !== undefined) {
			console.log("inuti if ",dish);
			var div = document.createElement('div');
			div.className = 'dish_display';

			output.push("<img src="+"images/"+dish.image+
				" height='140' width='140'/><div id='food_name'>"+dish.name+"</div><div>"
				+model.getNumberOfGuests()*model.getTotalMenuPrice()[i]+"</div>");
			div.innerHTML=output[i];
			document.getElementById("food_view5").appendChild(div);
			total_price += model.getNumberOfGuests()*model.getTotalMenuPrice()[i];
		}
	}

	this.display_money.html("<div> Total:<br/>"+total_price+" SEK</div>");

}