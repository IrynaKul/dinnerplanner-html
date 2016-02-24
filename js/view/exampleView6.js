var ExampleView6 = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests_view6");
	this.numberOfGuests.html("<div id='third_header'><h9>My Dinner: "+model.setNumberOfGuests()+" people"+"</h9><div style='float: right;'><button id='goBackBtn'>Go back and edit dinner</button></div>");

	var output= new Array();
	var preparation_output = new Array();
	
	
	for (var i = 0; i < model.getFullMenu().length; i++){
		var div = document.createElement('div');
		div.className = 'output';

		preparation_output.push("<div id='preparation_box2'><h8><b>Preparation</b></h8><br/><br/>"+model.getDish(model.getFullMenu()[i]).description+"</div>");
		output.push("<div id='dish_content2'><img src="+"images/"+model.getDish(model.getFullMenu()[i]).image+" style='float:left; margin-right:25px;'/><h9>"+model.getDish(model.getFullMenu()[i]).name+"</h9><br/><h8>Blaaaa bla cbskjs SDA,GDAWSD NSGDy hgaysgd hsdlSDG dcshgiwrl	 DYRYTELDGASD EHR	gd</h8></div>");
		div.innerHTML=preparation_output[i]+output[i];
		document.getElementById("food_view6").appendChild(div);
	}

}