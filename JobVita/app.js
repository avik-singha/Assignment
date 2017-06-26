var app = angular.module("jobApp",['LocalStorageModule']);

//this function is called when user clicks get news button
app.controller("jobAppController",function($scope,$http, localStorageService){
	$scope.fetchJobs= function() {
		$http.get("http://www.mocky.io/v2/594f91c41000000018af3fd4")
		.then(function(response){			
			$scope.myArray=response.data;
		},
		function(response){
			console.log("error");
		});
	}





	// $scope.getPlace=function(){
	try
	{
		if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position){
	      $scope.$apply(function(){
	        // $scope.location = position.coords.latitude+","+position.coords.longitude;  
	           $scope.lat = position.coords.latitude;
	           $scope.lang = position.coords.longitude;
	           getPlace($scope.lat,$scope.lang);
	           // console.log($scope.location);

	      });
	    });
	  }
	}
	catch(err)
	{
		console.log(err);
	}



		function getPlace(lat,lang)
	{
		var placeName;
		var geocoder = new google.maps.Geocoder;
        var latlng = {lat: $scope.lat, lng:$scope.lang};
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
            	 place=results[1].formatted_address; 
            	 var place2=place.split(',', 4);
            	 placeName=place2[1].trim();
            	 // console.log(placeName);
            	 setPlaceName(placeName);         	            	             
            } 
            else 
            {
              window.alert('No results found');
            }       
            // console.log(placeName);           
          } 
          else {
            window.alert('Geocoder failed due to: ' + status);
          }
          // console.log(placeName);
          return placeName;    
        })      

	}


	$scope.setVal=function(title){		
		$scope.postApplied=title;
	}


	

	function setPlaceName(placeName)
	{
		$scope.location=placeName;
		// console.log($scope.location);
	}

	
	app.config(function (localStorageServiceProvider) {
  	localStorageServiceProvider
    .setPrefix('Candidates')
    .setStorageType('localStorage');
	})

	function submit(key, val) {
   	return localStorageService.set(key, val);
  	}

  
	$scope.submitData=function(){

				     fn=document.getElementById('Fname').value,
				     ln=document.getElementById('Lname').value,
				     ap=document.getElementById('appliedPost').value,
				     loc=document.getElementById('locationBox').value
					
					var myObj = 
					{
						'firstname':fn,
						'lastname':ln,
						'appliedPost':ap,
						'location':loc
					}

					
		// window.localStorage.setItem("firstname",document.getElementById('Fname') );
					submit('candidate', JSON.stringify(myObj));
					
	}





})
