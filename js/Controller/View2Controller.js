//ExampleViewController Object constructor
var View2Controller = function(view, model) { 
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
 
	view.minusButton.click(function(){
		if(model.getNumberOfGuests()>0){
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);

		}
		else{
			alert("False, you morot!");
		}
		
	});


	$("#confirmDinnerBtn").click(function(){
		$("#side_menu").hide();
		$("#second_header").hide();
		$("#view3").hide();
		$("#view4").hide();
		$("#view5").show();
	})


}