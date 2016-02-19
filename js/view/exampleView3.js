var ExampleView3 = function (container,model) {

	this.food=container.find("#food");
	var output= new Array();
	
	
	for (var i = 0; i < model.getAllDishes("main dish").length; i++){
		var div = document.createElement('div');
		div.className = 'dish_display';

		output.push("<img src="+"images/"+model.getAllDishes('main dish')[i].image+" height='140' width='140'/><div id='food_name'>"+model.getAllDishes("main dish")[i].name+"</div><div id='description'>"+model.getAllDishes("main dish")[i].description+"</div>");
		div.innerHTML=output[i];
		document.getElementById("food").appendChild(div);
	}

	model.addObserver(this);
	
}