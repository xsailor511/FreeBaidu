//var baiduAdsLeft = $('div.BAIDU_EXP_UNION__wrapper_u972322_0_left');
//baiduAdsLeft.removeChild()
//document.body.removeChild('BAIDU_EXP_UNION__wrapper_u972322_0_left');
//document.getElementById('BAIDU_EXP_UNION__wrapper_u972322_0_left').innerHTML = '';


//console.log(chrome.extension.getURL);
//console.log("readyState = " + document.readyState);



var bodyString = document.body.innerHTML;
//console.log('body string = '+bodyString);
var regex2 = /\"BAIDU([^\"]*)\"/gi;
var matched = bodyString.match(regex2);
if(matched!=null){
	console.log('the matched is not null');
	for (var i = 0; i < matched.length; i++) {
	
		var idString = matched[i].slice(1,matched[i].length-1);
	//	console.log('idString = '+idString);
		var nodeChild = document.getElementById(idString);
		if(nodeChild!=undefined){
			nodeChild.innerHTML = "";
		}
	}
}else{
	console.log('the matched is null haha');
}

window.onload = function(){
	console.log('window onload');
	chrome.extension.sendRequest({action: "checkURL"}, function(response) {
  	console.log("domainURL = "+response.domainURL);
  	if(response.domainURL=="blog.sina.com.cn"){
  		setTimeout(freeSinaAds,2000);
  		document.onclick = hideSina;
  	}
	});
}




function freeSinaAds(){
	console.log('after 5 seconds');
	var sinaadToolkitBox0 = document.getElementById("sinaadToolkitBox0");
	if(sinaadToolkitBox0){
		sinaadToolkitBox0.remove();
	}
	var sinaadToolkitBox1 = document.getElementById("sinaadToolkitBox1");
	if(sinaadToolkitBox1){
		sinaadToolkitBox1.remove();
	}
	var sinaadToolkitBox2 = document.getElementById("sinaadToolkitBox2");
	if(sinaadToolkitBox2){
		sinaadToolkitBox2.remove();
	}
	var sinaadToolkitBox3 = document.getElementById("sinaadToolkitBox0");
	if(sinaadToolkitBox3){
		sinaadToolkitBox3.remove();
	}
	
	var ins = document.getElementsByTagName('ins');
	
	if(ins!=null){
		
		for(var i=0;i<ins.length;i++){
			if(ins[i]!=null){
				console.log('ins remove ' +i);
				//ins[i].style.height = 0;
				ins[i].remove();
			}
		}
	}

}

function hideSina(){
	var bodyString = document.body.innerHTML;
//	console.log('body string = '+bodyString);
	setTimeout(function(){
		var regex2 = /\"([^\"]*)_content\"/;
		var matched = bodyString.match(regex2);
		if(matched!=undefined&&matched[0]!=null){
		var idString = matched[0].slice(1,matched[0].length-1);
	//	console.log('idString = '+idString);
		var nodeChild = document.getElementById(idString);
		if(nodeChild!=undefined){
			nodeChild.innerHTML = "";
		}
	}
		
//		console.log('matched 0 = '+matched[0]);
	},1000);
	
}

