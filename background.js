var DEFAULT_IMG_SEARCH_URL = "http://images.yandex.ru/yandsearch?rpt=imagecbir&img_url=";
var DEFAULT_TEXT_SEARCH_URL = "http://yandex.ru/yandsearch?text=";

function openTabAfterCurrent(url){
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
	chrome.tabs.create({'url':url, 'index':tabs[0].index + 1,  'selected': false});
  });
}

function searchYandex(info){
  var searchstring = info.selectionText;
  var url = DEFAULT_TEXT_SEARCH_URL + encodeURIComponent(searchstring);
  openTabAfterCurrent(url);
}

function searchYandexImg(info){
  var searchstring = info.srcUrl;
  var url = DEFAULT_IMG_SEARCH_URL + searchstring;
  openTabAfterCurrent(url);
}

chrome.contextMenus.create({title:"Искать в Яндексе", contexts:["selection"], onclick:searchYandex});
chrome.contextMenus.create({title:"Искать в Яндексе", contexts:["image"], onclick:searchYandexImg});