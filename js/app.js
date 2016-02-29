$(function() {
	//console.log("i app.js");
	$("#side_menu").hide();
	$("#second_header").hide();
	$("#view3").hide();
	$("#view4").hide();
	$("#view5").hide();
	$("#view6").hide();
	
	var model = new DinnerModel();
	var ImageBtn= this.ImageBtn= function(view3,view2){
		var view4Value=this.view4Value;
		for (var i = 0; i < 3; i++){
			console.log("i forloop");
			$("#"+i).click(function(){
				//console.log("i view3 click3 "+ this.value);
				$("#second_header").hide();
				$("#view3").hide();
				$("#view4").show();
				var exampleView4 = new ExampleView4($("#view4"),this.value,model);
				view4Value=exampleView4;
				var view4Controller = new View4Controller(exampleView4,view3,view2,this.value,model);
			})
		}
	}

	$("#createNewDinnerBtn").click(function(){
		console.log("i click");
		$("#home_page").hide();
		$("#second_header").show();
		$("#side_menu").show();
		$("#view3").show();
		var exampleView2 = new ExampleView2($("#side_menu"),model);
		var exampleView3 = new ExampleView3($("#view3"),model);
		var view2Controller = new View2Controller(exampleView2, exampleView3, model,ImageBtn);
		var view3Controller1 = new View3Controller1(exampleView3,exampleView2, model,ImageBtn);
		var view3Controller2 = new View3Controller2(exampleView3,exampleView2, model,ImageBtn);
	});
	//var exampleView = new ExampleView($("#home_page"));
	
	// var ImageBtn= function(view3,view2){
	// 	var view4Value=this.view4Value;
	// 	for (var i = 0; i < 3; i++){
	// 		console.log("i forloop");
	// 		$("#"+i).click(function(){
	// 			//console.log("i view3 click3 "+ this.value);
	// 			$("#second_header").hide();
	// 			$("#view3").hide();
	// 			$("#view4").show();
	// 			var exampleView4 = new ExampleView4($("#view4"),this.value,model);
	// 			view4Value=exampleView4;
	// 			console.log("view4Value "+view4Value.update());
	// 			var view4Controller = new View4Controller(exampleView4,view3,view2,this.value,model);
	// 		})
	// 	}
	// }
	//var view1Controller = new View1Controller(exampleView,model);
	
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