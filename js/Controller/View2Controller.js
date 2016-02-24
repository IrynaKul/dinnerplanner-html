//ExampleViewController Object constructor
var View2Controller = function(view, model ) {
 
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		view.update();
	});
 
	view.minusButton.click(function(){
		if(model.getNumberOfGuests()>0){
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
			view.update();
		}
		else{
			alert("False, you morot!");
		}
		
	});
}