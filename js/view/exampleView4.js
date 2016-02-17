var ExampleView4 = function (container,model) {
	this.numberOfGuests = container.find("#numberOfGuests");
	this.selected_dish = container.find("#selected_dish");
	this.total_price= container.find("#total_price");


	this.numberOfGuests.html("INGREDIENTS FOR "+model.setNumberOfGuests()+" PEOPLE"+"<hr class='style'/>");
	var output= "<h9>"+model.getSelectedDish("main dish").name +"</h9><br/><img src="+"images/"+model.getSelectedDish("main dish").image+" height='240' width='240'/><br/>Blaaaa bla cbskjs SDA,GDAWSD NSGDy hgaysgd hsdlSDG dcshgiwrl	 DYRYTELDGASD EHR	gd<br/><br/><button id='back_to_select_dish'>Back to select dish</button><br/><br/><br/><br/><h9>Prepreation</h9><br/>"+model.getSelectedDish("main dish").description+"<br/>";
	for (var i = 0; i < model.getAllIngredients().length; i++){
		var table = "<tr><td>"+model.getAllIngredients()[i].quantity+"</td><td>"+model.getAllIngredients()[i].unit+"</td><td>"+model.getAllIngredients()[i].name+"</td><td>SEK</td><td>"+model.getAllIngredients()[i].price+"</td></tr>";
		document.getElementById("ingredients").innerHTML += table;
	}

	this.selected_dish.html(output);
	this.total_price.html("SEK "+model.getTotalMenuPrice()[model.getFullMenu().indexOf(model.getSelectedDish("main dish").id)]);

}