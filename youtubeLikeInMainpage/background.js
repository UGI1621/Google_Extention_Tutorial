// interval mode

// let loadedContent = []

// chrome.runtime.onInstalled.addListener(function () {
//     console.log("Extension installed, background script is ready.");
// });

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     // 만약 액션이 "sendResults"인 경우 결과를 처리합니다.
//     if (message.action === "sendResults") {
//         var results = message.results;
//         if (!(loadedContent)) {
//             loadedContent = message.results
//         } else {
//             message.results.map(a => {
//                 if (!(loadedContent.includes(a))) {
//                     loadedContent.push(a)
//                 }
//             })
//             // loadedContent.push.apply(loadedContent, message.results)
//         }
//         // 여기서 결과를 처리하거나 필요한 작업을 수행합니다.
//         console.log("Received results:", loadedContent);

//         // 성공적으로 결과를 수신했다는 응답을 보냅니다.
//         sendResponse({ success: true });
//     }
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (changeInfo.status === 'complete' && tab.url.startsWith('https://www.youtube.com/')) {
//         console.log("hi")
//     }
// });

// // 탭이 업데이트될 때 실행되는 이벤트 핸들러
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     // 페이지가 완전히 로드되었고 YouTube 페이지에 있을 때
//     if (changeInfo.status === 'complete' && tab.url.startsWith('https://www.youtube.com/')) {
//         console.log("YouTube page loaded");
//     } else {
//         // YouTube 페이지를 벗어나거나 새로고침될 때 loadedContent를 초기화합니다.
//         console.log("Leaving YouTube page or refreshing");
//         loadedContent = [];
//         console.log("loadedContetn : ", loadedContent)
//     }
// });




// hover mode

chrome.runtime.onInstalled.addListener(function () {
    console.log("Extension installed, background script is ready.");
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // 액션이 "sendHref"이면 전송된 href 값을 처리합니다.
    if (message.action === "sendHref") {
        var hrefValue = message.href;
        console.log('Received href value in background:', hrefValue);
        // 받은 href 값을 필요한 작업을 수행합니다.
    }
});
