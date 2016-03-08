$(function() {
	//console.log("i app.js");
	$("#side_menu").hide();
	$("#second_header").hide();
	$("#view3").hide();
	$("#view4").hide();
	$("#view5").hide();
	$("#view6").hide();
	


	var model = new DinnerModel();
	model.setAllDishes(document.getElementById("dishtype").value,"");
	

	$("#createNewDinnerBtn").click(function(){
		$("#home_page").hide();
		$("#second_header").show();
		$("#side_menu").show();
		$("#view3").show();
		var exampleView2 = new ExampleView2($("#side_menu"),model);
		var exampleView3 = new ExampleView3($("#view3"),model);
		var exampleView4 = new ExampleView4($("#view4"),model);
		var exampleView5 = new ExampleView5($("#view5"),model);
		var exampleView6 = new ExampleView6($("#view6"),model);
		var view2Controller = new View2Controller(exampleView2,model);
		var view3Controller1 = new View3Controller1(exampleView3,exampleView4, model);
		var view4Controller = new View4Controller(exampleView4,model);
		var view5Controller=new View5Controller(exampleView5, view3, model);
		var view6Controller = new View6Controller(exampleView6, model);

	});
});