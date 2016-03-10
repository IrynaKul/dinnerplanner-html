// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
	console.log("i DishCtrl",$routeParams.dishId);
	console.log($routeParams.dishId);

	$scope.numberOfGuests = Dinner.getNumberOfGuests();

	$scope.status = "Loading dish...";
	Dinner.Dish.get({id:$routeParams.dishId},function(data){
    	$scope.selectedDish = data;
    	$scope.status = "";
    	console.log("data ",data);
    	Dinner.setDish(data);
    	Dinner.setDishArray(data);
	},function(data){
     	$scope.status = "There was an error";
   	});

   	// $scope.comfirm_dish= function(dish_id){
   	// 	console.log("hej");
   	// 	Dinner.addDishToMenu(dish_id);
   	// }

	

  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  
});