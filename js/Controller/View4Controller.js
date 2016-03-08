var View4Controller = function(view4, model ) {
	//console.log("i View4Controller");

	$("#back_to_select_dish").click(function(event){
		event.preventDefault();
		$("#view4").hide();
		$("#second_header").show();
		$("#view3").show();
		document.getElementById("ingredients_view4").innerHTML = "";

	})

	$("#confirmDishBtn").click(function(){
		model.addDishToMenu(model.getSelectedDish());
		model.setDishArray();
	})

	$("#starter").on("click", function(){
		model.removeDishFromMenu("starter");
	})
	$("#main_dish").on("click",function(){
		model.removeDishFromMenu("main dish");
	})
	$("#dessert").on("click",function(){
		model.removeDishFromMenu("dessert");
	})

}