var View3Controller1 = function(view3,view4,model) {
	console.log("i view4Controller");
	
	$("#dishtype").change(function(){
		console.log("i dishtype");
		var children=document.getElementById("food_view3");
		children.innerHTML="";
		dishtype = this.value;
		view3.update(dishtype);
		ImageBtn();

	})
	$("#searchBtn").click(function(){
		console.log("i searchBtn");
		var children=document.getElementById("food_view3");
		children.innerHTML="";
		var specific_dish = document.getElementById("specific_dish").value;
		var dishtype = document.getElementById("dishtype").value;
		view3.update(dishtype,specific_dish);
		ImageBtn();
	})
	var ImageBtn = this.ImageBtn = function(){
		for (var i = 0; i < 3; i++){
			console.log("i forloop");
			$("#"+i).click(function(){
				$("#second_header").hide();
				$("#view3").hide();
				$("#view4").show();
				console.log("i click av Image");
				console.log(this.value);
				model.setSelectedDish(this.value);
				// view4.btnId=this.value;
				// view4.update(view4.btnId);
			})
		}
	}
	ImageBtn(view4);
}