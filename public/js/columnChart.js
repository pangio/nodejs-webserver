'use strict';

var maleQty = 0;
var femaleQty = 0;

var maleSalaryBand1 = 0;
var maleSalaryBand2 = 0;
var maleSalaryBand3 = 0;

var femaleSalaryBand1 = 0;
var femaleSalaryBand2 = 0;
var femaleSalaryBand3 = 0;

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawVisualization);
function drawVisualization() {

  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Female', 'Male'],
    ['00-20k',  femaleSalaryBand1,      maleSalaryBand1],
    ['20-50k',  femaleSalaryBand2,      maleSalaryBand2],
    ['50-100k',  femaleSalaryBand3,      maleSalaryBand3]
  ]);

  var options = {
    title : 'Salary Distribution Chart',
    vAxis: {title: "Quantity"},
    hAxis: {title: "Annual Salary/Gender"},
    seriesType: "bars",
    series: {3: {type: "line"}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

$(function(){

var socket = io.connect();

socket.on('message', function(person){
  	
if(person.gender === 'female')
  if(person.salary < 20000) 
    femaleSalaryBand1++;
  else if(person.salary < 50000 )
    femaleSalaryBand2++;
  else
    femaleSalaryBand3++;
else if(person.gender === 'male') 
  if(person.salary < 20000) 
    maleSalaryBand1++;
  else if(person.salary < 50000 )
    maleSalaryBand2++;
  else
    maleSalaryBand3++;
  
  	drawVisualization();

  });
});