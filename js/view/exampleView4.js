var ExampleView4 = function (container,model) {
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests_view4");
	var show_dish = this.show_dish = container.find("#show_dish");
	var preperation =this.preperation= container.find("#preperation");
	var total_price = this.total_price= container.find("#total_price_view4");
	var btnId=this.btnId;
	console.log("i ExampleView4 btnId "+this.btnId);
	// var btnIdArray=[0];

	
	var loadView = function() {
		document.getElementById("ingredients_view4").innerHTML="";
		console.log("Selected dish", model.getSelectedDish());
		numberOfGuests.html("INGREDIENTS FOR "+model.getNumberOfGuests()+" PEOPLE"+"<hr class='style'/>");
		if (typeof model.getSelectedDish() !== 'undefined') {
		// 	var btnIdArray=[0];
		// 	btnIdArray.splice(0,1,btnId);
		// 	console.log(btnIdArray);
		console.log(model.getSelectedDish());
			show_dish.html("<h9>"+model.getSelectedDish().name +"</h9><br/><img src="+"images/"+
							model.getSelectedDish().image+" height='240' width='240'/><br/>Blaaaa bla cbskjs SDA,GDAWSD NSGDy hgaysgd hsdlSDG dcshgiwrl	 DYRYTELDGASD EHR	gd");
			preperation.html(model.getSelectedDish().description+"<br/>");
			var ingr_price=0;
			for (var i = 0; i < model.getSelectedDish().ingredients.length; i++){
				var table = "<tr><td>"+model.getNumberOfGuests()*model.getSelectedDish().ingredients[i].quantity+
					"</td><td>"+model.getSelectedDish().ingredients[i].unit+
					"</td><td>"+model.getSelectedDish().ingredients[i].name+
					"</td><td>SEK</td><td>"+model.getNumberOfGuests()*model.getSelectedDish().ingredients[i].price+
					"</td></tr>";
				document.getElementById("ingredients_view4").innerHTML += table;
				ingr_price +=model.getNumberOfGuests()*model.getSelectedDish().ingredients[i].price;
				total_price.html("SEK "+ ingr_price);
			}
		}
		// if(btnIdArray[0]!==0){
		// 	loadView(btnIdArray[0]);
		// }
		//selected_dish.html(output);
	//this.total_price.html("SEK "+model.getTotalMenuPrice()[model.getFullMenu().indexOf(model.getSelectedDish("main dish").id)]);
	}
	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		loadView();
	}
	
	model.addObserver(this);
	loadView();
}