var View3Controller = function(view, model ) {
	var loadView = view.loadView3();

	$("#searchBtn").click(function(){
		var chosen_dish=document.getElementById("dishtype");
		alert(typeof chosen_dish.value);
		var dishtype1 = chosen_dish.options[chosen_dish.selectedIndex].value;
		alert(typeof dishtype1);
		var specific_dish = document.getElementById("specific_dish").value;
		alert(typeof specific_dish);
		var dishtype="starter";
		alert("dishtype "+model.getAllDishes(dishtype1, specific_dish).length);
		//alert("specific_dish "+model.getAllDishes(chosen_dish, specific_dish).length);
		//specific_dish= view.specific_dish;
		//alert("i searchBtn "+ specific_dish);
		//var dishtype="starter";
		//alert("dishtype "+ model.getAllDishes(dishtype,specific_dish).length);
		//alert("specific_dish "+model.getAllDishes(specific_dish).length);
		loadView(specific_dish);	
	})

	for (var i = 0; i < 3; i++){
		$("#"+i).click(function(){
			//$("#side_menu").hide();
			$("#view3").hide();
			$("#view4").show();
			var exampleView4 = new ExampleView4($("#view4"),this.value,model);
		});
	}

	
	// alert(view.btn());
	// $("#0").click(function(){
	// 	(this.value);
	// });
	// $("#1").click(function(){
	// 	alert(this.value);
	// });
	// $("#2").click(function(){
	// 	alert(this.value);
	// });
	//alert("hhhh");

	// view.btn.click(function(){
	// 	alert("hej");
	// })
}