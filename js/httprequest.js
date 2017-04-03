// Load Box value on start

function initJeedomValue() {
localStorage.setItem("IP", "192.168.1.x");
localStorage.setItem("KEY", "2ycN5TGJasfakjghPaK8");
}

// Basic HTTP request to launch command

function requestsite(jeedomcmd)
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

