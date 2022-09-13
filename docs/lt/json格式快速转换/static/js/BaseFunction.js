function confirm() {
	document.getElementById("JsonResult").innerHTML = "";
	const myObj = JSON.parse(document.getElementById("text").value);
	document.getElementById("JsonResult").innerHTML += "{\n\t\"configs\" \: \[";
	for (i = 0; i < myObj.data.length; i++) {
		document.getElementById("JsonResult").innerHTML +=	( "\n\t\t\{"
																	+ "\n\t\t\t\"AdditionalRoute\": \"\","
																	+ "\n\t\t\t\"ConnectedTimes\": 0,"
																	+ "\n\t\t\t\"Download_traffic\": 0,"
																	+ "\n\t\t\t\"FailureTimes\": 0,"
																	+ "\n\t\t\t\"Latency\": 0,"
																	+ "\n\t\t\t\"Upload_traffic\": 0,"
																	+ "\n\t\t\t\"charge_type\": 0,"
																	+ "\n\t\t\t\"enable\": true,"
																	+ "\n\t\t\t\"group\": \"myServer\","
																	+ "\n\t\t\t\"iplocation\": \"\","
																	+ "\n\t\t\t\"ipregion\": \"\","
																	+ "\n\t\t\t\"method\": \"none\","
																	+ "\n\t\t\t\"obfs\": \"plain\","
																	+ "\n\t\t\t\"obfsparam\": \"\","
																	+ "\n\t\t\t\"password\": \"" + document.getElementById("password").value + "\","
																	+ "\n\t\t\t\"protocol\": \"origin\","
																	+ "\n\t\t\t\"protocolparam\": \"\","
																	+ "\n\t\t\t\"remarks\": \"\","
																	+ "\n\t\t\t\"server\"\:\"" + myObj.data[i].ip + "\"\,"
																	+ "\n\t\t\t\"server_port\"\:"+ myObj.data[i].port + "\,"
																	+ "\n\t\t\t\"server_udp_port\": 0,"
																	+ "\n\t\t\t\"type\": 5,"
																	+ "\n\t\t\t\"udp_over_tcp\": 0,"
																	+ "\n\t\t\t\"username\": \"" + document.getElementById("username").value + "\"");
		if( i === myObj.data.length -1 ){
			document.getElementById("JsonResult").innerHTML += "\n\t\t\}";
		}else{
			document.getElementById("JsonResult").innerHTML += "\n\t\t\},";
		}
	}
	document.getElementById("JsonResult").innerHTML += "\n\t\]," + "\n\t\"idInUse\": 0" + "\n\}";
}