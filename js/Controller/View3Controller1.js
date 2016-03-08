var View3Controller1 = function(view3,view4,model) {

	var ImageBtn = function(){
		for (var i = 0; i < model.getAllDishes().length; i++){
			$("#food_view3").on("click", "#"+i, function(){
				$("#second_header").hide();
				$("#view3").hide();
				$("#view4").show();
				model.setDish(this.value);
				model.setSelectedDish(this.value);
			})
		}
	}
	$("#dishtype").change(function(){
		model.setAllDishes(this.value,"");
		ImageBtn();
	})
	$("#searchBtn").click(function(){
		var specific_dish = document.getElementById("specific_dish").value;
		var dishtype = document.getElementById("dishtype").value;
		model.setAllDishes(dishtype,specific_dish);
		ImageBtn();
	})
	
	ImageBtn();
}