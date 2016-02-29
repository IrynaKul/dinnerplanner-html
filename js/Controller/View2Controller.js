//ExampleViewController Object constructor
var View2Controller = function(view, view3, model, ImageBtn) {
 
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		document.getElementById("list_of_dishes").innerHTML= "";
		view.update();
	});
 
	view.minusButton.click(function(){
		if(model.getNumberOfGuests()>0){
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
			document.getElementById("list_of_dishes").innerHTML= "";
			view.update();
			//ImageBtn.view4Value.update();
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
		var exampleView5 = new ExampleView5($("#view5"),model);
		var view5Controller=new View5Controller(exampleView5, view3, model);
	})


}