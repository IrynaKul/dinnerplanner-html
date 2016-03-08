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
		numberOfGuests.html("INGREDIENTS FOR "+model.getNumberOfGuests()+" PEOPLE"+"<hr class='style'/>");
		if (typeof model.getSelectedDish() !== 'undefined') {
			var dish=model.getDish();
			show_dish.html("<h9>"+dish.Title +"</h9><br/><img src="+dish.ImageURL+" height='240' width='240'/><br/><div id='dish_description'>"+dish.Description+"</div>");
			preperation.html(dish.Instructions+"<br/>");
			var ingr_price=0;

			for (var i = 0; i < dish.Ingredients.length; i++){
				var table = "<tr><td>"+model.getNumberOfGuests()*dish.Ingredients[i].Quantity+
					"</td><td>"+dish.Ingredients[i].Unit+
					"</td><td>"+dish.Ingredients[i].Name+
					"</td><td>SEK</td><td>"+model.getNumberOfGuests()*dish.Ingredients[i].Quantity+
					"</td></tr>";
				document.getElementById("ingredients_view4").innerHTML += table;
				ingr_price +=model.getNumberOfGuests()*dish.Ingredients[i].Quantity;
				total_price.html("SEK "+ ingr_price);
			}
		}
	}

	// The observer update function, triggered by the model when there are changes
	this.update = function(data) {
		this.dataThatIShow=[0];
		if(data!==undefined){
			if(data.length==undefined && data.length!=this.dataThatIShow.length||data=="dish"){
				this.dataThatIShow=data;
				loadView();
			}
			else if(data.length>this.dataThatIShow.length){

			}
			else if(data.length==this.dataThatIShow.length){
				console.log("view 4 ska inte uppdateras");
			}
			else if(data=="error"){
				alert("Error");
			}
		}
	}
	
	model.addObserver(this);
	loadView();
}