function confirmServerPort() {
	//清空文本框内容
	document.getElementById("IPAdrressWithServerPort").innerHTML = "";
	//按行获取源数据
	const IPAdrr = document.getElementById("IPAdrress").value.split('\n');
	for (let i = 0; i < IPAdrr.length; i++) {
		document.getElementById("IPAdrressWithServerPort").innerHTML += IPAdrr[i] + "\:" + document.getElementById("ServerPort").value ;
		if( i !== IPAdrr.length -1){
			document.getElementById("IPAdrressWithServerPort").innerHTML +="\n";
		}
	}
}
function confirmJson() {
	const IPServer = document.getElementById("IPAdrressWithServerPort").value.split('\n');
	//清空文本框内容
	document.getElementById("JsonResult").innerHTML = "";
	//生成json文件
	document.getElementById("JsonResult").innerHTML += "{\n\t\"configs\" \: \[";
	for (let i = 0; i < IPServer.length; i++) {
		const temp = IPServer[i].split('\:');
		document.getElementById("JsonResult").innerHTML += ( "\n\t\t\{"
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
																	+ "\n\t\t\t\"server\"\:\"" + temp[0] + "\"\,"
																	+ "\n\t\t\t\"server_port\"\:"+ temp[1] + "\,"
																	+ "\n\t\t\t\"server_udp_port\": 0,"
																	+ "\n\t\t\t\"type\": 5,"
																	+ "\n\t\t\t\"udp_over_tcp\": 0,"
																	+ "\n\t\t\t\"username\": \"" + document.getElementById("username").value + "\"")
																	+ "\n\t\t\}";
		if( i !== IPServer.length -1 ){
			document.getElementById("JsonResult").innerHTML += ",";
		}
	}
	document.getElementById("JsonResult").innerHTML += "\n\t\],\n\t\"idInUse\": 0\n\}";
}