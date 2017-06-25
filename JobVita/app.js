var app = angular.module("jobApp",[]);

//this function is called when user clicks get news button
app.controller("jobAppController",function($scope,$http){
	$scope.fetchJobs= function() {
		$http.get("http://www.mocky.io/v2/594f91c41000000018af3fd4")
		.then(function(response){			
			$scope.myArray=response.data;
		},
		function(response){
			console.log("error");
		});
	}

	$scope.setVal=function(title){		
		$scope.postApplied=title;
	}

	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.location = position.coords.latitude+","+position.coords.longitude;        
      });
    });
  }
})
