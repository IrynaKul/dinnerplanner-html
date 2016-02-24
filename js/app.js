$(function() {
	$("#side_menu").hide();
	$("#second_header").hide();
	$("#view3").hide();
	$("#view4").hide();
	$("#view5").hide();
	$("#view6").hide();
	
	var model = new DinnerModel();
	$("#createNewDinnerBtn").click(function(){
		$("#first_box").hide();
		$("#second_header").show();
		$("#side_menu").show();
		$("#view3").show();
		var exampleView2 = new ExampleView2($("#side_menu"),model);
		var view2Controller = new View2Controller(exampleView2,model);
		var exampleView3 = new ExampleView3($("#view3"),model);
		var view3Controller = new View3Controller(exampleView3,model);

		for (var i = 0; i < 3; i++){
			$("#"+i).click(function(){
				//$("#side_menu").hide();
				$("#view3").hide();
				$("#view4").show();
				var exampleView4 = new ExampleView4($("#view4"),this.value,model);
			});
		}

	});

	
	// // ---------------------------------- select_dish.html ---------------------------------------- 
	// var exampleView2 = new ExampleView2($("#side_menu"),model);
	// var view2Controller = new View2Controller(exampleView2,model);
	// var exampleView3 = new ExampleView3($("#view3"),model);
	// var view3Controller = new View3Controller(exampleView3,model);
	// //alert(exampleView3.btn);
	// // ---------------------------------- selected_dish.html -------------------------------------
	// //var exampleView2 = new ExampleView2($("#side_menu"),model);
	// var exampleView4 = new ExampleView4($("#view4"),model);

	// // ---------------------------------dinner_overview.html --------------------------------------
	// var exampleView5 = new ExampleView5($("#view5"),model);

	// // --------------------------------dinner_preparation.html -------------------------------------
	// var exampleView6 = new ExampleView6($("#view6"),model);
	
	// //if $("#submitInput").click(function(){});
	

});