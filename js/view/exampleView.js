//ExampleView Object constructor

var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.textInput= container.find("#textInput");

	//alert(this.textInput.val());

	//alert(this.hidden.html());
	//alert(document.getElementById("number").value);

	//alert(this.hidden.html());
	
	
	//this.numberOfGuests.html(this.hidden);
	//this.numberOfGuests.html("<div><input class='numberGuest' typ='text'></input><button id='bla' class='btnNumberGuest'>Click</button></div>");
	//alert(this.numberOfGuests.html);
	//alert(this.numberGuest);
	//alert(document.forms["myForm"]["number"].value);



	//alert("hhhhh"+typeof document.getElementById("number").value);
	//alert(typeof $(".numberGuest").innerHTML);
	
	/*if(typeof this.numberOfGuests=='object'){
		alert("ojj");
		//alert($(this.numberOfGuests).find('#abcd').value);
	}*/
	//alert(this.numberOfGuests.innerHTML);
	
	//return this.numberOfGuests;
}
 
