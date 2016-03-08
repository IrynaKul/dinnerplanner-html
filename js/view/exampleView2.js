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
		document.getElementById("starter").innerHTML = "";
		document.getElementById("main_dish").innerHTML = "";
		document.getElementById("dessert").innerHTML = "";
		numberOfGuests.html(model.getNumberOfGuests());
		var output= new Array();
		var total_price=0;
		
		for (var i = 0; i < model.getFullMenu().length; i++){
			if (model.getFullMenu()[i]!==0) {
				if (typeof model.getFullMenu()[i] !== 'undefined') {
					var dishArray=model.getDishArray();
					
						for(var j =0; j<dishArray.length; j++){
							if(model.getFullMenu()[i]==dishArray[j].id&&dishArray[j].category=="Appetizers"){
								document.getElementById("starter").innerHTML = dishArray[j].title+"<span>"+model.getNumberOfGuests()
								+"X "+ dishArray[j].price+"</span>";
							}
							if(model.getFullMenu()[i]==dishArray[j].id&&dishArray[j].category=="Main Dish"){
								document.getElementById("main_dish").innerHTML = dishArray[j].title+"<span>"+model.getNumberOfGuests()
								+"X "+ dishArray[j].price+"</span>";
							}
							if(model.getFullMenu()[i]==dishArray[j].id&&dishArray[j].category=="Desserts"){
								document.getElementById("dessert").innerHTML = dishArray[j].title+"<span>"+model.getNumberOfGuests()
								+"X "+ dishArray[j].price+"</span>";
							}

						}
					total_price=model.getNumberOfGuests()*model.getTotalMenuPrice();
					totalPrice.html("<div style='float:right;'>SEK   "+total_price+"</div>");
					
				}
			}
			else{
				totalPrice.html("<div style='float:right;'>SEK   "+total_price+"</div>");
			}
		}
	}


	// The observer update function, triggered by the model when there are changes
	this.update = function(data) {
		console.log("view2 ",data, typeof data, data.length);
		if(data!==undefined){
			if(data=="priceChange"||data=="remove"||data=="num"){
				loadView();
			}
			else if(data.length>=1){
				console.log("don't update");
			}
			else if(data=="error"){
				alert("Error");
			}
			
			else if(data =="dish"){
				console.log("dish view2");
			}
		}
	}
	
	model.addObserver(this);
	loadView();
}