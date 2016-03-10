// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {
	console.log("i DinnerCtrl");

	$scope.numberOfGuests = Dinner.getNumberOfGuests();


	$scope.setNumberOfGuest = function(number){
	Dinner.setNumberOfGuests(number);
	}

	$scope.getNumberOfGuests = function() {
	return Dinner.getNumberOfGuests();
	}

	
	// TODO in Lab 5: Implement the methods to get the dinner menu
	// add dish to menu and get total menu price

	$scope.addDishToMenu = function(){
		Dinner.addDishToMenu("nånting");
	}

	//Returns all the dishes on the menu.
	// $scope.getFullMenu = function() {
	// 	return menu;
	// }

	// $scope.addDishToMenu = function(id) {
	// 	//console.log("Category ",this.getDish().Category);
	// 	if(this.getDish().Category==="Appetizers"){
			
	// 		menu.splice(0, 1, id);
	// 	}
	// 	if(this.getDish().Category==="Main Dish"){
			
	// 		menu.splice(1, 1, id);
			
	// 	}
	// 	if(this.getDish().Category==="Desserts"){
	// 		menu.splice(2, 1, id);
	// 	}
	// 	console.log($scope.getFullMenu());
		
	// }

});