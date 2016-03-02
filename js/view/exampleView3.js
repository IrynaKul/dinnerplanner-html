var ExampleView3 = function (container,model) {
	var chosen_dish=document.getElementById("dishtype");
	var dishtype = chosen_dish.options[chosen_dish.selectedIndex].value;
	var specific_dish = document.getElementById("specific_dish").value;
	
	var loadView3=function(dishtype,specific_dish) {
		var output= new Array();
		if(specific_dish != ""){
			for (var i = 0; i < model.getAllDishes(dishtype,specific_dish).length; i++){
				var div = document.createElement('div');
				div.className = 'dish_display';
				var dishes=model.getAllDishes(dishtype,specific_dish)[i];
				output.push("<input id='"+i+"' value='"+dishes.id+"' type='image' src='"+"images/"+dishes.image
							+"' height='140' width='140' /><div id='food_name'>"+dishes.name
							+"</div><div id='description'>"+dishes.description+"</div>");
				//output.splice(i,1,"<input id='"+i+"' value='"+dishes.id+"' type='image' src='"+"images/"+dishes.image+"' height='140' width='140' /><div id='food_name'>"+dishes.name+"</div><div id='description'>"+dishes.description+"</div>");
				div.innerHTML=output[i];
				document.getElementById("food_view3").appendChild(div);
			}		
		}
		else{
			for (var i = 0; i < model.getAllDishes(dishtype).length; i++){
				var div = document.createElement('div');
				div.className = 'dish_display';
				var dishes=model.getAllDishes(dishtype)[i];
				output.push("<input id='"+i+"' value='"+dishes.id+"' type='image' src='"+"images/"+dishes.image+"' height='140' width='140' /><div id='food_name'>"+dishes.name+"</div><div id='description'>"+dishes.description+"</div>");
				div.innerHTML=output[i];
				document.getElementById("food_view3").appendChild(div);
			}
		}

	}
	this.update = function(dishtype,specific_dish) {
		loadView3(dishtype,specific_dish);
	}
	
	model.addObserver(this);
	loadView3(dishtype,specific_dish);
}