addEventListener("DOMContentLoaded", function(){
'use strict';// TODO уточнить где писать

	;(function(){ //   =======================    № 1    input

		const inp_text = document.querySelector("#inp_some_text");
		const current_val = 'zzz';

		inp_text.addEventListener("input", function (){	 
			if (inp_text.value !== current_val)
				inp_text.className = "red";				
			else if (inp_text.value === current_val)
				inp_text.className = "";
			else  
				console.log(" упс " );
		});

	})(); 

	// () => { //   =======================    № 1    input

	// 	const inp_text = document.querySelector("#inp_some_text");
	// 	const current_val = 'zzz';

	// 	inp_text.addEventListener("input", function (){	 
	// 		if (inp_text.value !== current_val)
	// 			inp_text.className = "red";				
	// 		else if (inp_text.value === current_val)
	// 			inp_text.className = "";
	// 		else  
	// 			console.log(" упс " );
	// 	});

	// } 



	;(function(){ //   =======================    № 2 

		
	})(); 


});