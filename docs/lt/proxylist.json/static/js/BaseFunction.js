function confirmServerPort() {
	//清空文本框内容
	document.getElementById("IPAdrressWithServerPort").innerHTML = "";
	//按行获取源数据
	var IPAdrr = document.getElementById("IPAdrress").value.split('\n');
	for (i = 0; i < IPAdrr.length; i++) {
		document.getElementById("IPAdrressWithServerPort").innerHTML += IPAdrr[i] + "\:" + document.getElementById("ServerPort").value +"\n";
	}
}
function confirmJson() {
	var IPServer = document.getElementById("IPAdrressWithServerPort").value.split('\n');
	//清空文本框内容
	document.getElementById("JsonResult").innerHTML = "";
	//生成json文件
	document.getElementById("JsonResult").innerHTML += "{\n\t\"configs\" \: \[";
	for (i = 0; i < IPServer.length; i++) {
		var temp = IPServer[i].split('\:');
		document.getElementById("JsonResult").innerHTML += "\n\t\t\{";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"AdditionalRoute\": \"\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"ConnectedTimes\": 0,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"Download_traffic\": 0,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"FailureTimes\": 0,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"Latency\": 0,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"Upload_traffic\": 0,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"charge_type\": 0,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"enable\": true,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"group\": \"myServer\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"iplocation\": \"\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"ipregion\": \"\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"method\": \"none\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"obfs\": \"plain\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"obfsparam\": \"\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"password\": \"" + document.getElementById("password").value + "\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"protocol\": \"origin\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"protocolparam\": \"\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"remarks\": \"\",";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"server\"\:\"" + temp[0].value + "\"\," ;
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"server_port\"\:"+ temp[1] + "\," ;
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"server_udp_port\": 0,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"type\": 5,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"udp_over_tcp\": 0,";
		document.getElementById("JsonResult").innerHTML += "\n\t\t\t\"username\": \"" + document.getElementById("username").value + "\"";
		if( i == IPServer.length -1 ){
			document.getElementById("JsonResult").innerHTML += "\n\t\t\}";
		}else{
			document.getElementById("JsonResult").innerHTML += "\n\t\t\},";		
		}
	}
	document.getElementById("JsonResult").innerHTML += "\n\t\]," + "\n\t\"idInUse\": 0";
	document.getElementById("JsonResult").innerHTML += "\n\}";
}