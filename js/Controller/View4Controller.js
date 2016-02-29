var View4Controller = function(view4, view3, view2, image_id, model ) {
	$("#back_to_select_dish").click(function(){
		$("#view4").hide();
		$("#second_header").show();
		$("#view3").show();
		document.getElementById("ingredients_view4").innerHTML = "";
		view3.update();

	})

	$("#confirmDishBtn").click(function(){
		document.getElementById("list_of_dishes").innerHTML= "";
		console.log(image_id);
		model.addDishToMenu(image_id);
		console.log(model.getFullMenu());
		
		view2.update();
	})

	for(var i=0; i<3; i++){
		console.log('#'+300+i);
		$("#dishBtn").on("click",function(){
			console.log("in dishBtn");
			alert("vg "+ this.value);
			model.removeDishFromMenu(this.value);
			//view.update();
		})
	}
}