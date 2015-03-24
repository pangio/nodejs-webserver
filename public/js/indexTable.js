'use strict';

$(function(){

	var socket = io.connect();

	socket.on('message', function(person){
	  	var newRow = '<tr><td>'+person.pid+'</td>'
				  		+'<td>'+person.name+'</td>'
				  		+'<td>'+person.gender+'</td>'
				  		+'<td>$'+person.salary+'</td></tr>';
	    $('tbody').prepend(newRow);
	});
});