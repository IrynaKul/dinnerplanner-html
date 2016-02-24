var ExampleView3 = function (container,model) {

	//var food = this.food=container.find("#food");
	var imageId=this.imageId;
	var chosen_dish=document.getElementById("dishtype").value;
	alert(typeof chosen_dish);
	//alert(chosen_dish.value);
	//var dishtype = chosen_dish.options[chosen_dish.selectedIndex].value;
	//alert(dishtype);
	//var specific_dish= document.getElementById("specific_dish").value;
	//alert(specific_dish);
	var dishtype="starter";
	alert("hårdkod "+ typeof dishtype);
	//alert(model.getAllDishes(chosen_dish).length);
	this.loadView3 = function(specific_dish) {
		var output= new Array();
		//alert(typeof specific_dish);
		alert(model.getAllDishes(dishtype).length);
		alert(model.getAllDishes(chosen_dish).length);
		alert(model.getAllDishes(specific_dish).length);
		
		for (var i = 0; i < model.getAllDishes(dishtype).length; i++){
			var div = document.createElement('div');
			div.className = 'dish_display';
			alert(typeof specific_dish);
			if(typeof specific_dish != undefined){
				if (model.getAllDishes(dishtype, specific_dish)[0] == undefined){
					alert(specific_dish + " is not a " + dishtype + " try another dishtype\nOtherwise it doesn't exist in our database")
					break;
				}
				else{

					//output.push("<input id='"+model.getAllDishes('main dish')[i].id+"' value='"+model.getAllDishes('main dish')[i].id+"' type='image' src='"+"images/"+model.getAllDishes('main dish')[i].image+"' height='140' width='140' /><div id='food_name'>"+model.getAllDishes("main dish")[i].name+"</div><div id='description'>"+model.getAllDishes("main dish")[i].description+"</div>");
					output.push("<input id='"+i+"' value='"+model.getAllDishes('main dish')[i].id+"' type='image' src='"+"images/"+model.getAllDishes('main dish')[i].image+"' height='140' width='140' /><div id='food_name'>"+model.getAllDishes("main dish")[i].name+"</div><div id='description'>"+model.getAllDishes("main dish")[i].description+"</div>");
					div.innerHTML=output[i];
					document.getElementById("food_view3").appendChild(div);
					//$(''+i+'').click(function(){alert("sghgd");});
					//document.getElementById(i).addEventListener("click", function(){imageId=this.value;imageBtn(imageId);}, false);	
				}
			}
			else{
				output.push("<img src="+"images/"+model.getAllDishes(dishtype)[i].image+" height='140' width='140'/><div id='food_name'>"+model.getAllDishes(dishtype)[i].name+"</div><div id='description'>"+model.getAllDishes(dishtype)[i].description+"</div>");
				div.innerHTML=output[i];
				document.getElementById("food").appendChild(div);
			}
		}
		
		
		// function imageBtn(i) {
		// 	//var hej=document.getElementById(id);
		// 	imageId=document.getElementById(model.getAllDishes('main dish')[i].id);

		// 	alert('hej.value '+imageId.value);
		// 	//imageId=model.getAllDishes('main dish')[i].id;
		// 	//alert(imageId);
		// }
	
	}
	//loadView3();
	//this.btn=container.find('.btnImage');
	//alert(this.btn);
	var imageBtn=this.btn= function(img){
		return img;
	}
	//var btn=this.btn= new imageBtn();
	// var update= this.update = function() {
	//  	loadView();
	 	
	// }

	//loadView3();
	

	//this.oj=function(addId){return addId};
	//alert(imageId);
	
	
	//var image = this.image = container.find(".view3Image");
	//alert(this.image.html());

	//this.image.click()
	
	//model.addObserver(this);
	
}