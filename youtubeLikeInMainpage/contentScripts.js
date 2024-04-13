// var thumbnailElements = Array.from(document.querySelectorAll('#thumbnail'));
var thumbnailElements = Array.from(document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail')).map(element => {
    var href = element.getAttribute('href');

    if (href) {
        return href;
    }
}).filter(Boolean)


// 결과 배열을 출력합니다.
var message = {
    action: "sendResults",
    results: thumbnailElements
}

// chrome.runtime.sendMessage(message)
chrome.runtime.sendMessage(message, function (response) {
    if (response && response.success) {
        console.log("Results sent successfully");
    } else {
        console.error("Failed to send results");
    }
});

// // yt-simple-endpoint inline-block style-scope ytd-thumbnail
