console.log("chrome extension go");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if(message.txt === "Truckstop Env") {
        
    }
}