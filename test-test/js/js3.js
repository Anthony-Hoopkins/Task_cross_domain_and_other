addEventListener("DOMContentLoaded", function(){
'use strict';

	

	const selectItems ={};
	selectItems.url_first = 'https://api.github.com/emojis';
	selectItems.url_all = 'https://api.github.com/emojis';

	console.log('Start');

	  	// () => {	 

		getTend ();

	  	function getTend (){
	        $.ajax({         

		        url: selectItems.url_first,	      	
		        type: "GET",
		        dataType: "json",       
		        success: function (data) { 
		        	console.dir(data);
		            getAllTend ();  

	        	}  

	    	});  

	    }  


	    function getAllTend (){

	    	$.ajax({         

		        url: selectItems.url_all,	      	
		        type: "GET",
		        dataType: "json",       
		        success: function (data) {

		          	console.dir(data);
		            console.log("success - 2 request got");		            
            		                         
	        	}  

	    	});  

	    }

});