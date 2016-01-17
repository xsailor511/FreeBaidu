function getDomainFromUrl(url){
     var host = "null";
     if(typeof url == "undefined" || null == url)
          url = window.location.href;
     var regex = /.*\:\/\/([^\/]*).*/;
     var match = url.match(regex);
     if(typeof match != "undefined" && null != match)
          host = match[1];
     return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
     if(getDomainFromUrl(tab.url).toLowerCase()=="www.cnblogs.com"){
          //chrome.pageAction.show(tabId);
          console.log("the site is www.cnblog.com");
     }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
  	if(request.action==null){
  		console.log("the action is null....");
  	}else if(request.action=="checkURL"){
  		var domainURL = getDomainFromUrl(sender.tab.url);
  		sendResponse({domainURL:domainURL});
  	}
  	
//  console.log(sender.tab ?
//              "from a content script:" + sender.tab.url :
//              "from the extension");
//  if (request.greeting == "hello")
//    sendResponse({farewell: "goodbye"});
//  else
//    sendResponse({}); // snub them.
  });
  
chrome.windows.onFocusChanged.addListener(function(windowId) {
	
	console.log('windowId = '+ windowId);
	
});