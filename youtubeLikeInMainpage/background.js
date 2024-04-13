let loadedContent = []

chrome.runtime.onInstalled.addListener(function () {
    console.log("Extension installed, background script is ready.");
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // 만약 액션이 "sendResults"인 경우 결과를 처리합니다.
    if (message.action === "sendResults") {
        var results = message.results;
        if (!(loadedContent)) {
            loadedContent = message.results
        } else {
            loadedContent.push.apply(loadedContent, message.results)
        }
        // 여기서 결과를 처리하거나 필요한 작업을 수행합니다.
        console.log("Received results:", loadedContent);

        // 성공적으로 결과를 수신했다는 응답을 보냅니다.
        sendResponse({ success: true });
    }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.startsWith('https://www.youtube.com/')) {
        console.log("hi")
    }
});
