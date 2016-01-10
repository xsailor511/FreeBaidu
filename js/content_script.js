//var baiduAdsLeft = $('div.BAIDU_EXP_UNION__wrapper_u972322_0_left');
//baiduAdsLeft.removeChild()
//document.body.removeChild('BAIDU_EXP_UNION__wrapper_u972322_0_left');
//document.getElementById('BAIDU_EXP_UNION__wrapper_u972322_0_left').innerHTML = '';

var bodyString = document.body.innerHTML;
//console.log('body string = '+bodyString);
var regex2 = /\"BAIDU([^\"]*)\"/gi;
var matched = bodyString.match(regex2);
for (var i = 0; i < matched.length; i++) {
	
	var idString = matched[i].slice(1,matched[i].length-1);
//	console.log('idString = '+idString);
	var nodeChild = document.getElementById(idString);
	if(nodeChild!=undefined){
		nodeChild.innerHTML = "";
	}
}