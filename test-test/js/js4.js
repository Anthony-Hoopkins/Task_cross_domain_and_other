addEventListener("DOMContentLoaded", function(){
'use strict';//  


	// targetWindow.postMessage ('Hello World!', 'http://example.com');

	window.addEventListener ('message', function (e) {

	  let message = e.data;

	});

	localStorage.setItem('1','Nhekzkz');
	localStorage.setItem('2','GGGGGG');

	console.log(localStorage.getItem('1'));
	console.log(localStorage.getItem('2'));


	  const receiver = document.getElementById('receiver').contentWindow;

	  const send = document.getElementById('send');
	  const remove = document.getElementById('remove');
	  const read = document.getElementById('read');

	  const objMessage = {};
	  objMessage.color = ' зеленый';	  
	  objMessage.createText	= "localStorage.setItem('3','fffffff')";	
	  

	  

	  function sendMessage(e) {	    
	    e.preventDefault();
	    objMessage.action = 'send';
	    objMessage.key	= '3';
	  	objMessage.val = 'TextForLocalStorage';
	    objMessage.callb = "alert('it gogogo')";
	    receiver.postMessage(objMessage, 'http://test-domain-two/receiver.html');	
	  }

	  function removeMessage(e) {	    
	    e.preventDefault();
	    objMessage.action = 'remove';
	    objMessage.key	= '3';
	  	objMessage.val = '';
	    receiver.postMessage(objMessage, 'http://test-domain-two/receiver.html');
	  }

	  function readMessage(e) {	    
	    e.preventDefault();
	    objMessage.action = 'read';
	    objMessage.key	= '3';
	  	objMessage.val = '';
	    receiver.postMessage(objMessage, 'http://test-domain-two/receiver.html');
	  }

	  send.addEventListener('click', sendMessage);
	  remove.addEventListener('click', removeMessage);
	  read.addEventListener('click', readMessage);




});