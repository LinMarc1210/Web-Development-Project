// jQuery，外層選定 $(父容器).each( ... )
$('#olympic_ad').each(function () {

    let slideImgs = $(this).find('img'),            // 在 #olympic_ad 底下找出所有 img
        slideImgsCount = slideImgs.length - 1,
        index = 0;
  
    slideImgs = slideImgs.slice(0, -1);             // 拿掉 sliceImgs 的最後一個元素（HIGHLIGHT）
    slideImgs.eq(index).fadeIn();                   // 淡入（eq 選定集合中的指定 index 元素）
  
    setInterval(showNextSlide, 5000);               // 5 秒換一次
  
    function showNextSlide() {
        let next = (index + 1) % slideImgsCount;
        //console.log(next)                             // 用來 debug 而已
        slideImgs.eq(index).fadeOut();                // 前一張淡出，後一張淡入（淡出久一點）
        slideImgs.eq(next).fadeIn();
        index = next;
    }
});

var maskColor = ['#FBD043', '#0072E3', "#5B5B5B"]
var textColor = ['white', 'white', "white"]
var topicColor = [
    'rgba(251, 208, 67, 0.6)',
    'rgba(0, 114, 227, 0.6)',
    'rgba(91, 91, 91, 0.6)'
];
var str = ['Taiwan', ''];
// 用 ` 就不需要串接字串，可以直接換行
var topicStr = [
    `巴黎文化奧運臺灣館以「自由之聲、島嶼風華、當代新藝、世界共融」為4大主題，邀集22組表演團隊、120多人，
    將在7月27日到8月10日於園區，安排音樂、戲曲新編、舞蹈、DJ演出等近達60場節目，
    讓國際看見青壯新銳的充沛活力，與世界分享臺灣對自由、平等、性別、族群、母語、混種等價值認同的轉化及實踐。`,
    
    `「自由之聲」襯托臺灣自由土壤所孕育出的音樂創作；
    <br>「島嶼風華」傳遞臺灣島嶼風采與真誠的人情味；
    <br>「當代新藝」分享當代臺灣表演創作者對自身文化的再詮釋；
    <br>「世界共融」展現臺灣對世界共融的價值呼應。`,
    
    `臺灣館主視覺由多次擔任金曲獎、金穗獎、臺灣文博會視覺統籌的<b>顏伯駿</b>操刀，設計以「Taiwan」中的「W」為視覺核心。
    顏伯駿解釋，「W」在英語中代表雙重的「U」，而在法語中則是兩個「V」的結合，不僅表徵臺灣對國際合作的開放態度，
    也反映臺灣願意攜手與全世界共享雙贏的文化願景。`
];


$('#taiwan').each(function(){
    let slideImgs = $(this).find('img'),
        slideImgsCount = slideImgs.length,
        index = 0;
    let twMask = $(this).find('#tw_mask');
    let twText = $(this).find('#tw_text');
    let twTopic = $(this).find('#taiwan_intro');
    let twName = $(this).find('#tw_title_text');
    let topicText = $(this).find('#tw_title_text p');

    slideImgs.eq(index).fadeIn();

    $(this).on('click', function() {
        // 開始旋轉動畫
        twMask.css({
            'animation': 'rotateMask 2s ease-in-out infinite',
            'animation-play-state': 'running'
        });

        // 等動畫完成停止旋轉
        setTimeout(function(){
            console.log('timeout');
            twMask.css({'animation-play-state': 'paused'});
        }, 2006);

        showNextSlide();
    });

    function showNextSlide() {
        let next = (index + 1) % slideImgsCount;
        slideImgs.eq(index).fadeOut();      // 預設 400ms
        slideImgs.eq(next).fadeIn();
        index = next;

        twMask.css({'border-color': maskColor[index]});
        twText.fadeOut();
        topicText.fadeOut();
        twName.fadeOut();

        //twText.text();
        topicText.html(topicStr[index]).hide(); // 更改完內文先藏起來

        twName.fadeIn(2000);
        twText.fadeIn(2000);
        topicText.fadeIn(2000);
        twText.css({'color': textColor[index]});
        twTopic.css({'background-color': topicColor[index]})
    }
});

window.addEventListener('scroll', producerAnimation);
function producerAnimation() {
    var div = document.getElementById('producer-container');
    var rect = div.getBoundingClientRect();
    // 檢查 div 的底部是否在窗口中
    if (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        var children = div.children;
        for (var i = 0; i < children.length; i++) {
            children[i].style.animationPlayState = 'running';
        }
        // 一旦動畫觸發，可以選擇移除滾動事件監聽器
        window.removeEventListener('scroll', producerAnimation);
    }
}