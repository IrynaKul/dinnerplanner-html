var View3Controller1 = function(view3,view2, model, imageBtn) {
	
	$("#dishtype").change(function(){
		console.log("i dishtype");
		var children=document.getElementById("food_view3");
		children.innerHTML="";
		dishtype = this.value;
		//var specific_dish = document.getElementById("specific_dish").value;
		view3.update(dishtype);
		imageBtn(view3,view2);
		// for (var i = 0; i < 3; i++){
		// 	$("#"+i).click(function(){
		// 		console.log("i view3 click1 "+ this.value + "" + typeof this.value);
		// 		var image_id= this.value;
		// 		console.log(typeof image_id);
		// 		$("#second_header").hide();
		// 		$("#view3").hide();
		// 		$("#view4").show();
		// 		var exampleView4 = new ExampleView4($("#view4"),image_id,model);
		// 		var view4Controller = new View4Controller(exampleView4,view3,view2,this.value,model);
		// 	})
		// }

	})
}