addEventListener("DOMContentLoaded", function(){
'use strict';  // TODO  


	//   =======================    №2

	let url = (window.location.href); 

	function getUrlVars() {
	 
	    let vars = {};	 
	    let parts =  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { 
	        vars[key] = value;	 
	    });	 
	    return vars;

	}

	url = 'http://somesite.com/filter?size=M&color=1,2&manufacturer=aaa,eee';

	console.log(`Start Url: ${url}`);	

	let size = getUrlVars()["size"]; 
	let color = getUrlVars()["color"]; 
	let manufacturer = getUrlVars()["manufacturer"]; 
	
	const form = document.forms.first

	form.elements.size.value = size;

	if (color){
		const colorArr = color.split(",");
		for (let i = 0 ; i<form.elements.color.length ; i++){
			for (let j=0; j<colorArr.length; j++){
				if (form.elements.color[i].value === colorArr[j]) 
					form.elements.color[i].checked = 'true';				
			}
		}
	}	

	const manufArr = manufacturer.split(","); 


	let manuf = document.querySelector('#manufacturer');

	// let manuf = $('#manufacturer');      
	// manuf.val(manufArr); //так быстрее сделал
	
	console.log(manufArr);
	
	for (let i=0 ; i < manuf.length; i++) {
		for (let j=0; j<manufArr.length; j++){
		    if (manuf[i].value === manufArr[j] ) 
		    	manuf[i].selected = 'true';	 
		}
	}


	// ===== part 2


	document.getElementById('all_color').addEventListener('input', createNewUrl);		 
	document.getElementById('all_size').addEventListener('input', createNewUrl);	 
	document.getElementById('manufacturer').addEventListener('input', createNewUrl);

	const urlObj = {};
	urlObj.first_part_url = `http://somesite.com/filter?`;
	urlObj.size_part_url = 'size=';
	urlObj.color_part_url = '&color=';
	urlObj.manufacturer_part_url = '&manufacturer=';


	function createNewUrl(){

		let let_size = form.elements.size.value;
//----------

		let z = '';

		for (let i = 0 ; i<form.elements.color.length ; i++){	
			if (form.elements.color[i].checked) 
				z += `${form.elements.color[i].value},`;		 
		}

		if (z.length > 1)
			z  = z.substring(0, z.length-1);	 

		let let_color = z;
//-----------

		let result = '';

		for (let i=0 ; i < manuf.length; i++) {
		    if (manuf[i].selected) 
		      result += `${manuf[i].value},`;  
		}

		if (result.length > 1)
			result  = result.substring(0, result.length-1);

		let let_manuf = result;

		urlObj.size_part_url=`size=${let_size}`;
		urlObj.color_part_url=`&color=${let_color}`;
		urlObj.manufacturer_part_url=`&manufacturer=${let_manuf}`;
		urlObj.full_url = urlObj.first_part_url + urlObj.size_part_url + urlObj.color_part_url + urlObj.manufacturer_part_url;
		consoleLog(urlObj.full_url);
	}	

	function consoleLog(url){
		console.log(url);
	}


});