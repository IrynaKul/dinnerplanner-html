var ExampleView2 = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishName= container.find("#dish");
	this.totalPrice=container.find("#totalPrice");

	this.numberOfGuests.html(model.setNumberOfGuests()+"<button id='minusGuest' class='glyphicon glyphicon-minus' style='float:right;'></button><button id='plusGuest' class='glyphicon glyphicon-plus' style='float:right;'></button>");

	var output= new Array();
	var total_price = 0;

	for (var i = 0; i < model.getFullMenu().length; i++){
		table = "<tr><td>"+model.getDish(model.getFullMenu()[i]).name+"</td><td>"+model.getTotalMenuPrice()[i]+"</td></tr>";
		document.getElementById("list_of_dishes").innerHTML += table;
		total_price += model.getTotalMenuPrice()[i];
	}
	table = "<tr><td>Pending</td><td>0.00</td></tr>";
	document.getElementById("list_of_dishes").innerHTML += table;
	this.totalPrice.html("<div style='float:right;'>SEK   "+total_price+"</div>");



}