var View5Controller = function(view, view3, model ) {
	view.numberOfGuests.on("click", "#goBackBtn", function(){
		$("#view5").hide();
		$("#side_menu").show();
		$("#second_header").show();
		$("#view3").show();
	})

	$("#fullRecipeBtn").click(function(){
		$("#view5").hide();
		$("#view6").show();
	})
}