'use strict';

var maleQty = 0;
var femaleQty = 0;

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
	    ['Gender', 'Quantity'],
	    ['Male', maleQty],
	    ['Female', femaleQty]
	]);

	var options = {
		title: 'Gender Pie Chart',
		is3D: true,
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
	chart.draw(data, options);
}

$(function(){

var socket = io.connect();

socket.on('message', function(person){
  	console.log('New person... >' +person.gender);
  	if(person.gender === 'female') femaleQty++;
	if(person.gender === 'male') maleQty++;
	
  	drawChart();

  });
});