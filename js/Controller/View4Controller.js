var View4Controller = function(view4, model ) {
	console.log("i View4Controller");

	$("#back_to_select_dish").click(function(event){
		event.preventDefault();
		$("#view4").hide();
		$("#second_header").show();
		$("#view3").show();
		document.getElementById("ingredients_view4").innerHTML = "";
		console.log("fuck life");

	})

	$("#confirmDishBtn").click(function(){
		document.getElementById("starter").innerHTML = "";
		document.getElementById("main_dish").innerHTML = "";
		document.getElementById("dessert").innerHTML = "";
		// $("#starter_inside").remove();
		// $("#main_dish_inside").remove();
		// $("#dessert_inside").remove();
		model.addDishToMenu(model.getSelectedDish().id);

	})

	$("#starter").on("click", function(){
		document.getElementById("starter").innerHTML = "";
		document.getElementById("main_dish").innerHTML = "";
		document.getElementById("dessert").innerHTML = "";
		model.removeDishFromMenu("starter");
	})
	$("#main_dish").on("click",function(){
		document.getElementById("starter").innerHTML = "";
		document.getElementById("main_dish").innerHTML = "";
		document.getElementById("dessert").innerHTML = "";
		model.removeDishFromMenu("main dish");
	})
	$("#dessert").on("click",function(){
		document.getElementById("starter").innerHTML = "";
		document.getElementById("main_dish").innerHTML = "";
		document.getElementById("dessert").innerHTML = "";
		model.removeDishFromMenu("dessert");
	})

}