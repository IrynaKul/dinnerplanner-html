var View5Controller = function(view, view3, model ) {
	console.log("i view5Controller");
	$("#goBackBtn").click(function(){
		$("#view5").hide();
		$("#side_menu").show();
		$("#second_header").show();
		$("#view3").show();
		document.getElementById("food_view5").innerHTML ="";
		//view3.update();
	})

	$("#fullRecipeBtn").click(function(){
		$("#view5").hide();
		$("#view6").show();
		document.getElementById("food_view6").innerHTML ="";
		var exampleView6 = new ExampleView6($("#view6"),model);
		var view6Controller = new View6Controller(exampleView6, model);
	})
}