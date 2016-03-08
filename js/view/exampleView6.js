var ExampleView6 = function (container,model) {

	var numberOfGuests= this.numberOfGuests = container.find("#numberOfGuests_view6");
	var loadView = function() {
		document.getElementById("food_view6").innerHTML="";
		numberOfGuests.html("<div id='third_header'><h9>My Dinner: "+model.getNumberOfGuests()+" people"+"</h9><div style='float: right;'><button id='goBackBtn2'>Go back and edit dinner</button></div>");
		
		var output;
		var preparation_output;
		var menuDishes = model.getFullMenu();
		var dishes = model.getDishArray();
		for(var i=0;i <dishes.length; i++){
			for (var j = 0; j < menuDishes.length; j++){
				if (menuDishes[j]!==0) {
					if (typeof menuDishes[j] !== 'undefined') {	
						var div = document.createElement('div');
				 		div.className = 'output';
				 		if(menuDishes[j]==dishes[i].id&&dishes[i].category=="Appetizers"){
							preparation_output="<div id='preparation_box2'><h8><b>Preparation</b></h8><br/><br/>"+dishes[i].instructions+"</div>";
							output="<div id='dish_content2'><img src="+dishes[i].image+" height='140' style='float:left; margin-right:25px;'/><h9>"
								+dishes[i].title+"</h9><br/><h8>"+dishes[i].description+"</h8></div>";
							div.innerHTML=preparation_output+output;
							document.getElementById("food_view6").appendChild(div);
						}
						if(menuDishes[j]==dishes[i].id&&dishes[i].category=="Main Dish"){
							preparation_output="<div id='preparation_box2'><h8><b>Preparation</b></h8><br/><br/>"+dishes[i].instructions+"</div>";
							output="<div id='dish_content2'><img src="+dishes[i].image+" height='140' style='float:left; margin-right:25px;'/><h9>"
								+dishes[i].title+"</h9><br/><h8>"+dishes[i].description+"</h8></div>";
							div.innerHTML=preparation_output+output;
							document.getElementById("food_view6").appendChild(div);
						}
						if(menuDishes[j]==dishes[i].id&&dishes[i].category=="Desserts"){
							preparation_output="<div id='preparation_box2'><h8><b>Preparation</b></h8><br/><br/>"+dishes[i].instructions+"</div>";
							output="<div id='dish_content2'><img src="+dishes[i].image+" height='140' style='float:left; margin-right:25px;'/><h9>"
								+dishes[i].title+"</h9><br/><h8>"+dishes[i].description+"</h8></div>";
							div.innerHTML=preparation_output+output;
							document.getElementById("food_view6").appendChild(div);
						}
					}
				}	
			}
		}
	}

	this.update = function(data){
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