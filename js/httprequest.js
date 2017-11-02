// Load Box value on start
// Indiquer l'adresse IP/url et la clé jeedom

function initJeedomValue() {
	localStorage.setItem("IP", "192.168.1.x");
	localStorage.setItem("KEY", "2xcN5TGJ1fXAkjghPaK8");
}

// Save Box value

function saveJeedomValue() {
	var addressValue = document.getElementById("addressValue").value;
	var keyValue = document.getElementById("keyValue").value;
	localStorage.setItem("SavedAddress",addressValue);
	localStorage.setItem("SavedKey",keyValue);
}

//Load Box JSON value on start
//Indiquer l'adresse IP/url et la clé jeedom

function initJeedomJsonValue() {
	
var myKeyValue, myIPValue;
	
myKeyValue =  localStorage.getItem("KEY");
myIPValue =  localStorage.getItem("IP");
console.log("KEY Value: " + myKeyValue);
console.log("IP Value: " + myIPValue);

var xhttp1;
var xhttp2;
var xhttp3;

xhttp1=new XMLHttpRequest();
xhttp1.open("POST", "http://" + myIPValue + "/core/api/jeeApi.php");
xhttp1.setRequestHeader("Content-Type", "application/text/plain");
xhttp1.send(JSON.stringify({"jsonrpc": "2.0", "method":"object::all","params":{"apikey": "2xcN5TGJ1fXAkjghPaK8"}, "id":1}));
// curl -d '{"jsonrpc": "2.0", "method":"object::all","params":{"apikey": "2xcN5TGJ1fXAkjghPaK8"}, "id":1}' http://192.168.1.x/core/api/jeeApi.php


		xhttp1.onreadystatechange = function() {
			if (xhttp1.readyState == 4 && xhttp1.status == 200) {
				var data = JSON.parse(xhttp1.responseText);
				console.log(JSON.stringify(data));
				localStorage.setItem("JSON-Objects", JSON.stringify(data));
			}
		}

xhttp2=new XMLHttpRequest();

xhttp2.open("POST", "http://" + myIPValue + "/core/api/jeeApi.php");
xhttp2.setRequestHeader("Content-Type", "application/text/plain");
xhttp2.send(JSON.stringify({"jsonrpc": "2.0", "method":"cmd::all","params":{"apikey": "2xcN5TGJ1fXAkjghPaK8"}, "id":1}));
// curl -d '{"jsonrpc": "2.0", "method":"object::all","params":{"apikey": "2xcN5TGJ1fXAkjghPaK8"}, "id":1}' http://192.168.1.x/core/api/jeeApi.php


		xhttp2.onreadystatechange = function() {
			if (xhttp2.readyState == 4 && xhttp2.status == 200) {
				var data = JSON.parse(xhttp2.responseText);
				console.log(JSON.stringify(data));
				localStorage.setItem("JSON-Commands", JSON.stringify(data));
			}
		}
				
xhttp3=new XMLHttpRequest();

xhttp3.open("POST", "http://" + myIPValue + "/core/api/jeeApi.php");
xhttp3.setRequestHeader("Content-Type", "application/text/plain");
xhttp3.send(JSON.stringify({"jsonrpc": "2.0", "method":"scenario::all","params":{"apikey": "2xcN5TGJ1fXAkjghPaK8"}, "id":1}));
// curl -d '{"jsonrpc": "2.0", "method":"object::all","params":{"apikey": "2xcN5TGJ1fXAkjghPaK8"}, "id":1}' http://192.168.1.x/core/api/jeeApi.php


		xhttp3.onreadystatechange = function() {
			if (xhttp3.readyState == 4 && xhttp3.status == 200) {
				var data = JSON.parse(xhttp3.responseText);
				console.log(JSON.stringify(data));
				localStorage.setItem("JSON-Scenario", JSON.stringify(data));
			}
		}
}


// Basic HTTP request to launch command
// Les commandes sont en http. On peut mettre https si besoin.


function requestcommand(jeedomcmd)
 {
	
var myKeyValue, myIPValue;
	
myKeyValue =  localStorage.getItem("KEY");
myIPValue =  localStorage.getItem("IP");
console.log("KEY Value: " + myKeyValue);
console.log("IP Value: " + myIPValue);
	
var client = new XMLHttpRequest();
client.open("GET", "http://" + myIPValue + "/core/api/jeeApi.php?apikey=" + myKeyValue + "&type=cmd&id=" + jeedomcmd );
console.log("http://" + myIPValue + "/core/api/jeeApi.php?apikey=" + myKeyValue + "&type=cmd&id=" + jeedomcmd);
client.onreadystatechange = function() {
    if (client.readyState == 4) {
        if(client.status == 200) {
           console.log(client.responseText);
           navigator.vibrate([500, 500, 500]);
        }
    }
};
client.send();
};

//Basic HTTP request to launch command
//Les commandes sont en http. On peut mettre https si besoin.


function requestscenario(jeedomscenario)
{
	
	var myKeyValue, myIPValue;
		
	myKeyValue =  localStorage.getItem("KEY");
	myIPValue =  localStorage.getItem("IP");
	console.log("KEY Value: " + myKeyValue);
	console.log("IP Value: " + myIPValue);
		
	var client = new XMLHttpRequest();
	client.open("GET", "http://" + myIPValue + "/core/api/jeeApi.php?apikey=" + myKeyValue + "&type=scenario&id=" + jeedomscenario + "&action=start");
	console.log("http://" + myIPValue + "/core/api/jeeApi.php?apikey=" + myKeyValue + "&type=scenario&id=" + jeedomscenario + "&action=start" );
	client.onreadystatechange = function() {
	    if (client.readyState == 4) {
	        if(client.status == 200) {
	           console.log(client.responseText);
	           navigator.vibrate([500, 500, 500]);
	        }
	    }
	};
	client.send();
	};

	
function requestvoice()
{	
	var appControlData = new tizen.ApplicationControlData('http://tizen.org/appcontrol/data/input_type', ['input_voice']);
	var myKeyValue, myIPValue;
	
	myKeyValue =  localStorage.getItem("KEY");
	myIPValue =  localStorage.getItem("IP");
	console.log("KEY Value: " + myKeyValue);
	console.log("IP Value: " + myIPValue);
	
	var appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/get_input", null, null, null, [appControlData], null);
	var appControlReplyCallback = {
		    onsuccess: function(data) {
		        for (var i = 0; i < data.length; i++) {
		            console.log('ret: ' + data[i].key);
		            console.log('result: ' + data[i].value[0]);
		            var client = new XMLHttpRequest();
		        	client.open("GET", "http://" + myIPValue + "/core/api/jeeApi.php?apikey=" + myKeyValue + "&type=interact&query=" + data[i].value[0] + "&utf8=1");
		        	console.log("http://" + myIPValue + "/core/api/jeeApi.php?apikey=" + myKeyValue + "&type=interact&query=" + data[i].value[0] + "&utf8=1" );
		        	client.onreadystatechange = function() {
		        	    if (client.readyState == 4) {
		        	        if(client.status == 200) {
		        	           console.log(client.responseText);
		        	           navigator.vibrate([500, 500, 500]);
		        	        }
		        	    }
		        	};
		        	client.send();
		        }
		    },
		    onfailure: function() {
		        console.log('The launch application control failed');
		    }
		}
	tizen.application.launchAppControl(appControl, null, function() {console.log("launch application control succeed");}, function(e) {console.log("launch application control failed. reason: " + e.message);}, appControlReplyCallback);
	console.log('launch application done');
};


function requesttext()
{	
	var appControlData = new tizen.ApplicationControlData('http://tizen.org/appcontrol/data/input_type', ['input_voice']);
	var myKeyValue, myIPValue;
	
	myKeyValue =  localStorage.getItem("KEY");
	myIPValue =  localStorage.getItem("IP");
	console.log("KEY Value: " + myKeyValue);
	console.log("IP Value: " + myIPValue);
	
	var appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/get_input", null, null, null, null, null);
	var appControlReplyCallback = {
		    onsuccess: function(data) {
		        for (var i = 0; i < data.length; i++) {
		            console.log('ret: ' + data[i].key);
		            console.log('result: ' + data[i].value[0]);
				
		            var client = new XMLHttpRequest();
		        	client.open("GET", "http://" + myIPValue + "/core/api/jeeApi.php?apikey=" + myKeyValue + "&type=interact&query=" + data[i].value[0] + "&utf8=1");
		        	console.log("http://" + myIPValue + "/core/api/jeeApi.php?apikey=" + myKeyValue + "&type=interact&query=" + data[i].value[0] + "&utf8=1" );
		        	client.onreadystatechange = function() {
		        	    if (client.readyState == 4) {
		        	        if(client.status == 200) {
		        	           console.log(client.responseText);
		        	           navigator.vibrate([500, 500, 500]);
		        	        }
		        	    }
		        	};
		        	client.send();
		        }
		    },
		    onfailure: function() {
		        console.log('The launch application control failed');
		    }
		}
	tizen.application.launchAppControl(appControl, null, function() {console.log("launch application control succeed");}, function(e) {console.log("launch application control failed. reason: " + e.message);}, appControlReplyCallback);
	console.log('launch application done');	
};
