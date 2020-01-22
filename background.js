console.log('Background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: "Truckstop Env"
  }
  chrome.tabs.sendMessage(tab.id, msg); 
}