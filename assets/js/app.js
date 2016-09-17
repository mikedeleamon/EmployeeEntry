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
  var todaysDate = new Date();
  var currentMonth = todaysDate.getMonth()+1;
  var currentYear = todaysDate.getFullYear();

  var database = firebase.database();

 $('#employeeInfo').on('click', function(){

  var empName = $('#eName').val().trim();
  var empRole = $('#role').val().trim();
  var empStartDate = moment($('#sDate').val().trim(), "MM/DD/YYYY");
  var empRate = $('#rate').val().trim();

  var newEmp {
   Name: empName,
    Role: empRole,
    StartDate: empStartDate,
    Rate: empRate
  };

  //calculates months worked
  var empStartYear = empStartDate.getFullYear();
  var empStartMonth = empStartDate.getMonth();
  var monthsWorked = 0;

  if(empStartYear === currentYear){
    monthsWorked = currentMonth - empStartMonth;
  } else{
    var years = currentYear - empStartYear;
    monthsWorked = (years*12)+ (currentMonth - empStartMonth)
  }
  console.log(monthsWorked);
  
  //total billed
  var totalBilled = empRate * monthsWorked;

  database.ref().push(newEmp);

  $('#eName').val("");
  $('#role').val("");
  $('#sDate').val("");
  $('#rate').val("");
  
  return false
 });
}); 
