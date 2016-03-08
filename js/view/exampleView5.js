var ExampleView5 = function (container,model) {

	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests_view5");
	this.food=container.find("#food_view5");
	var display_money= this.display_money=container.find("#display_money");
	this.go_back = container.find("#goBackBtn");

	var loadView = function() {
		document.getElementById("food_view5").innerHTML="";
		numberOfGuests.html("<div id='third_header'><h9>My Dinner: "+model.getNumberOfGuests()+" people"
			+"</h9><div style='float: right;'><button id='goBackBtn'>Go back and edit dinner</button></div>");
		var total_price = 0;

		var menuDishes = model.getFullMenu();
		var dishes = model.getDishArray();
		for(var i=0;i <dishes.length; i++){
			for (var j = 0; j < menuDishes.length; j++){
				if (menuDishes[j]!==0) {
					if (typeof menuDishes[j] !== 'undefined') {
						var div = document.createElement('div');
				 		div.className = 'dish_display';
						if(menuDishes[j]==dishes[i].id&&dishes[i].category=="Appetizers"){

							var output = "<img src="+dishes[i].image+
				 			" height='140' width='140'/><div id='food_name'>"+dishes[i].title+"</div><div>"
			 				+model.getNumberOfGuests()*dishes[i].price+"</div>";
			 				div.innerHTML=output;
			 				document.getElementById("food_view5").appendChild(div);
						}
						if(menuDishes[j]==dishes[i].id&&dishes[i].category=="Main Dish"){

							var output = "<img src="+dishes[i].image+
				 			" height='140' width='140'/><div id='food_name'>"+dishes[i].title+"</div><div>"
			 				+model.getNumberOfGuests()*dishes[i].price+"</div>";
			 				div.innerHTML=output;
			 				document.getElementById("food_view5").appendChild(div);
						}
						if(menuDishes[j]==dishes[i].id&&dishes[i].category=="Desserts"){

							var output = "<img src="+dishes[i].image+
				 			" height='140' width='140'/><div id='food_name'>"+dishes[i].title+"</div><div>"
			 				+model.getNumberOfGuests()*dishes[i].price+"</div>";
			 				div.innerHTML=output;
			 				document.getElementById("food_view5").appendChild(div);
						}
						
					}
				}
			}
			
		}
		total_price = model.getNumberOfGuests()*model.getTotalMenuPrice();
		display_money.html("<div> Total:<br/>"+total_price+" SEK</div>");
	}
	this.update = function(data){
		console.log("view5 ",data);
		if(data!==undefined){
			if(data == "priceChange"||data=="remove"||data=="num"){

				loadView();

			}
			
			else if(data=="error"){
				alert("Error");
			}

		}
	}
	model.addObserver(this);

}