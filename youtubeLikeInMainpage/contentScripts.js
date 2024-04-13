// // interval mode

// function executeCode() {
//     // var thumbnailElements = Array.from(document.querySelectorAll('#thumbnail'));
//     var thumbnailElements = Array.from(document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail')).map(element => {
//         var href = element.getAttribute('href');

//         if (href) {
//             return href;
//         }
//     }).filter(Boolean)

//     // 결과 배열을 출력합니다.
//     var message = {
//         action: "sendResults",
//         results: thumbnailElements
//     }

//     // chrome.runtime.sendMessage(message)
//     chrome.runtime.sendMessage(message, function (response) {
//         if (response && response.success) {
//             console.log("Results sent successfully");
//         } else {
//             console.error("Failed to send results");
//         }
//     });

//     // // yt-simple-endpoint inline-block style-scope ytd-thumbnail
// }

// // 초기 실행
// executeCode();

// // 3초마다 실행
// setInterval(executeCode, 3000);



// hover mode

// document.addEventListener('mouseover', function (event) {
//     // 호버된 요소를 가져옵니다.
//     var hoveredElement = event.target;

//     // 요소가 <a> 태그이고 href 속성을 가지며 특정 ID와 클래스를 가지는지 확인합니다.
//     if (hoveredElement.id === 'media-container-link') {
//         console.log(hoveredElement.getAttribute('href'))

//         // href 속성값을 가져와서 background로 보냅니다.
//         var hrefValue = hoveredElement.getAttribute('href');
//         chrome.runtime.sendMessage({ action: "sendHref", href: hrefValue });
//     }
// });


document.addEventListener('mouseover', function (event) {
    // 호버된 요소를 가져옵니다.
    var hoveredElement = event.target;

    // 요소가 <a> 태그이고 href 속성을 가지며 특정 ID와 클래스를 가지는지 확인합니다.
    if (hoveredElement.id === 'media-container-link') {
        // 이전에 없던 속성과 값을 저장할 빈 객체 생성
        var previousAttributes = {};

        // 이전에 없던 속성을 찾기 위해 반복문 실행
        for (var attribute of hoveredElement.attributes) {
            // 속성이 추가되었는지를 확인하고, 추가되었다면 로그로 출력
            if (!(attribute.name in previousAttributes)) {
                console.log(`새로운 속성 추가됨: ${attribute.name} - ${attribute.value}`);
            }
            // 현재 속성을 이전 속성으로 저장
            previousAttributes[attribute.name] = attribute.value;
        }

        // href 속성값을 가져와서 background로 보냅니다.
        var hrefValue = hoveredElement.getAttribute('href');
        chrome.runtime.sendMessage({ action: "sendHref", href: hrefValue });
    }
});

