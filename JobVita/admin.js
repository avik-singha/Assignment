var app = angular.module("adminApp",['LocalStorageModule']);

app.controller("adminAppController",function($scope,localStorageService,$http){
$scope.checkAdmin=function()
{
	// function myFunction() {
    var txt;
    var person = prompt("Please enter your password:", "");
    if (person == "a") {
        $scope.showValue();
        $scope.txt=null;
    } else {
        $scope.txt="You are not Admin";
    }
    // document.getElementById("demo").innerHTML = txt;

}

$scope.showValue=function(){
	var a=getItem();
	console.log(a);
	var b=JSON.parse(a);
	console.log(b);
	$scope.ca=b;
	
	// var bb=b.split('/n',4);
	// console.log(bb[1]);
}


function getItem() {
   return localStorageService.get('candidate');
  }


})