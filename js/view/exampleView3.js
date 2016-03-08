var ExampleView3 = function (container,model) {
	var dataArray=new Array();

	
	var loadView3=function() {
	
		document.getElementById("food_view3").innerHTML="";
		var output= new Array();
		var dishes=model.getAllDishes();
			for (var i = 0; i < dishes.length; i++){
				var div = document.createElement('div');
				div.className = 'dish_display';
				
				output.push("<input type='image' id='"+i+"' value='"+dishes[i].RecipeID+"' src='"+dishes[i].ImageURL
							+"' height='140' width='140' /><div id='food_name'>"+dishes[i].Title
							+"</div><div id='rating'>StarRating "+Math.round(dishes[i].StarRating*10)/10+"</div>");
				div.innerHTML=output[i];
				document.getElementById("food_view3").appendChild(div);
			}		
	}
	this.update = function(data) {
		this.dataThatIShow=[0];
		if(data!==undefined){
			if(data.length && data.length!=this.dataThatIShow.length){
				console.log("hahahaha");
				this.dataThatIShow=data;
				loadView3();
			}
			else if(data=="num"){
				loadView3();
			}
			
			else if(data=="error"){
				alert("Error");
			}
		
		}
	}
	
	model.addObserver(this);
	loadView3();
}