var View3Controller1 = function(view, model ) {
	
	$("#dishtype").change(function(){
		console.log("i dishtype");
		var children=document.getElementById("food_view3");
		children.innerHTML="";
		dishtype = this.value;
		view.loadView3(dishtype,specific_dish);
		for (var i = 0; i < 3; i++){
			$("#"+i).click(function(){
				console.log("i view3 click1");
				$("#second_header").hide();
				$("#view3").hide();
				$("#view4").show();
				var exampleView4 = new ExampleView4($("#view4"),this.value,model);
			})
		}

	})

}