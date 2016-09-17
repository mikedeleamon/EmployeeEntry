$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAG6j0jeREC6hVuwaealGPgtWc4X_lgbU8",
    authDomain: "timesheet-1ebc8.firebaseapp.com",
    databaseURL: "https://timesheet-1ebc8.firebaseio.com",
    storageBucket: "timesheet-1ebc8.appspot.com",
    messagingSenderId: "613125752136"
  };
  firebase.initializeApp(config);

  database = firebase.database();

 $('#employeeInfo').on('click', function(){

 	var empName = $('#eName').val().trim();
 	var empRole = $('#role').val().trim();
 	var empStartDate = moment($('#sDate').val().trim(), "MM/DD/YY");
 	var empRate = $('#rate').val().trim();

 	var newEmp {
 		Name: empName,
 		Role: empRole,
 		StartDate: empStartDate,
 		Rate: empRate
 	};

 	database.ref().push(newEmp);

 	$('#eName').val("");
 	$('#role').val("");
 	$('#sDate').val("");
 	$('#rate').val("");
 	
 	return false
 });
});