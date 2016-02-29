var View3Controller2 = function(view3, view2, model, imageBtn)  {
	$("#searchBtn").click(function(){
		console.log("i searchBtn");
		var children=document.getElementById("food_view3");
		children.innerHTML="";
		var specific_dish = document.getElementById("specific_dish").value;
		var dishtype = document.getElementById("dishtype").value;
		view3.update(dishtype,specific_dish);
		imageBtn(view3,view2);
		// for (var i = 0; i < 3; i++){
		// 	console.log("i forloop");
		// 	$("#"+i).click(function(){
		// 		console.log("i view3 click2 "+ this.value);
		// 		$("#second_header").hide();
		// 		$("#view3").hide();
		// 		$("#view4").show();
		// 		var exampleView4 = new ExampleView4($("#view4"),this.value,model);
		// 		var view4Controller = new View4Controller(exampleView4,view3, view2, this.value,model);
		// 	})
		// }
		//model.addObserver(this);

	})
	imageBtn(view3,view2);
	// for (var i = 0; i < 3; i++){
	// 		console.log("i forloop");
	// 		$("#"+i).click(function(){
	// 			console.log("i view3 click3 "+ this.value);
	// 			$("#second_header").hide();
	// 			$("#view3").hide();
	// 			$("#view4").show();
	// 			var exampleView4 = new ExampleView4($("#view4"),this.value,model);
	// 			var view4Controller = new View4Controller(exampleView4,view3,view2, this.value,model);
	// 		})
	// 	}
}