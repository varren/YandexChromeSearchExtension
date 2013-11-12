var DEFAULT_IMG_SEARCH_URL = "http://images.google.com/searchbyimage?image_url=";
var DEFAULT_TEXT_SEARCH_URL = "https://www.google.com/search?q=";

function openTabAfterCurrent(url){
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
	chrome.tabs.create({'url':url, 'index':tabs[0].index + 1,  'selected': false});
  });
}

function searchYandexText(info){
  var searchstring = info.selectionText;
  var url = DEFAULT_TEXT_SEARCH_URL + encodeURIComponent(searchstring);
  openTabAfterCurrent(url);
}

function searchYandexImg(info){
  var searchstring = info.srcUrl;
  var url = DEFAULT_IMG_SEARCH_URL + searchstring;
  openTabAfterCurrent(url);
}

chrome.contextMenus.create({title:"Искать Текст в Google", contexts:["selection"], onclick:searchYandexText});
chrome.contextMenus.create({title:"Искать Изображение в Google", contexts:["image"], onclick:searchYandexImg});