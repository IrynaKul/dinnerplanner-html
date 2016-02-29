var ExampleView4 = function (container,btnId,model) {
	this.numberOfGuests = container.find("#numberOfGuests_view4");
	var selected_dish = this.selected_dish = container.find("#selected_dish");
	var total_price = this.total_price= container.find("#total_price_view4");

	this.numberOfGuests.html("INGREDIENTS FOR "+model.getNumberOfGuests()+" PEOPLE"+"<hr class='style'/>");
	var loadView = function() {
		var output= "<h9>"+model.getDish(btnId).name +"</h9><br/><img src="+"images/"+
						model.getDish(btnId).image+" height='240' width='240'/><br/>Blaaaa bla cbskjs SDA,GDAWSD NSGDy hgaysgd hsdlSDG dcshgiwrl	 DYRYTELDGASD EHR	gd<br/><br/><button id='back_to_select_dish'>Back to select dish</button><br/><br/><br/><br/><h9>Prepreation</h9><br/>"+
						model.getDish(btnId).description+"<br/>";
		var ingr_price=0;
		for (var i = 0; i < model.getDish(btnId).ingredients.length; i++){
			var table = "<tr><td>"+model.getNumberOfGuests()*model.getDish(btnId).ingredients[i].quantity+
				"</td><td>"+model.getDish(btnId).ingredients[i].unit+
				"</td><td>"+model.getDish(btnId).ingredients[i].name+
				"</td><td>SEK</td><td>"+model.getNumberOfGuests()*model.getDish(btnId).ingredients[i].price+
				"</td></tr>";
			document.getElementById("ingredients_view4").innerHTML += table;
			ingr_price +=model.getNumberOfGuests()*model.getDish(btnId).ingredients[i].price;
			total_price.html("SEK "+ ingr_price);
		}

		selected_dish.html(output);
	//this.total_price.html("SEK "+model.getTotalMenuPrice()[model.getFullMenu().indexOf(model.getSelectedDish("main dish").id)]);
	}
	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		loadView();
	}
	loadView();
	model.addObserver(this);

}