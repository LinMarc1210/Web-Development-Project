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

var winners = [
    `<div id="info-container">
        <h1>魏均珩、鄧宇成、湯智鈞：射中抗韓神穩三劍客</h1>
        <div id="info-img">
            <img src="src/winner/archery.png">
            <hr width="80%" align="center" color="white">
            <p id="info-text">
                「魏均珩、鄧宇成、湯智鈞三個大男生組成三劍客，一路過關斬將，八強戰遭遇強敵中國隊，第一局打成平手，第二、三局後，愈來愈穩健，以5：1淘汰中國隊晉級四強戰；四強對上荷蘭，更強勢以6：0闖進金牌戰。
                <br>
                金牌賽對上射箭項目的「大魔王」韓國隊，三劍客依舊表現沉穩定，但韓國隊表現太可怕，第二局三劍客繳出58分的高分，韓國隊射出6支箭全部是10分箭，雖然每回合比數都十分接近，但最終以總分0比6屈居銀牌。這是我國繼2004年雅典奧運男團銀牌後，再度在射箭項目摘下銀牌。
            </p>
        </div>
        <img id="close" src="src/winner/close.png">
    </div>`,

    `<div id="info-container">
        <h1>李洋、王齊麟：有球必應麟洋聖筊</h1>
        <div id="info-img">
            <img src="src/winner/badminton1.png">
            <hr width="80%" align="center" color="white">
            <p id="info-text">
                「無論那希望總是看起來那麼渺小，我們真的做到了！」
                <br>
                羽球男子黃金雙打李洋、王齊麟「麟洋配」，是本屆奧運的大驚奇。從第一場意外輸給印度組合後愈挫愈勇，自稱「從地獄爬回來」，一路過關斬將至決賽皆未再敗北。
                <br>
                勝利後兩人一前一後彎曲倒地的「人體聖筊」，成為招牌。麟洋配一路愈戰愈勇，金牌戰也快速擊敗「中國雙塔」組合李俊慧和劉雨辰，最後冠軍點完美落在線上，這顆台灣「IN」的金牌，振奮人心。賽後頒獎典禮上，中華奧會會歌奏起，這也是中華奧會旗首度在奧運會場升揚在中國五星旗之上。
            </p>
        </div>
        <img id="close" src="src/winner/close.png">
    </div>`,

    `<div id="info-container">
        <h1>黃筱雯：把台灣紋上手臂的小美人魚</h1>
        <div id="info-img">
            <img src="src/winner/boxing.png">
            <hr width="80%" align="center" color="white">
            <p id="info-text">
                「誰說拳擊選手一定要很Man？」
                <br>
                把家人和對台灣的愛刺在左手臂上的黃筱雯，在女子拳擊蠅量級靠著身高、手長優勢，以直拳搶下先機，一路晉級至四強戰，最後不敵第一種子土耳其選手卡奇洛魯（Buse Naz Cakiroglu），拿下銅牌，但這已是台灣在奧運拳擊場上的第一面獎牌。
                <br>
                由於爸爸就是刺青師，許多刺青就是父親的傑作，兩人透過刺青連結。她也希望，以美麗的姿態，巔覆社會對拳擊手的性別刻板印象。
            </p>
        </div>
        <img id="close" src="src/winner/close.png">
    </div>`,

    `<div id="info-container">
        <h1>潘政琮：價值最高的果嶺放閃秀</h1>
        <div id="info-img">
            <img src="src/winner/golf.png">
            <hr width="80%" align="center" color="white">
            <p id="info-text">
                「高球一哥」潘政琮，這次是二度參加奧運，演出最精彩的超級逆轉秀。第一輪時狀況不理想、排到倒數第三；第二輪後急速超車，第四回合抓下6鳥（低於標準桿1桿）、1老鷹（低於標準桿2桿），以低於標準桿8桿的成績衝到領先群，與其他6名選手並列第三進行加賽，爭奪銅牌。
                <br>
                這場銅牌戰也被喻為本屆奧運「身價最高」的競賽，大物級名將一一被潘政琮比下，最後只剩曾拿下英國公開賽冠軍的美國選手森川柯林（Collin Morikawa）與他進行PK，潘政琮仍勝出，為台灣奪下首面高爾夫球奧運獎牌。
            </p>
        </div>
        <img id="close" src="src/winner/close.png">
    </div>`,

    `<div id="info-container">
        <h1>李智凱：翻上巔峰的湯瑪斯大迴旋</h1>
        <div id="info-img">
            <img src="src/winner/gymnastic.png">
            <hr width="80%" align="center" color="white">
            <p id="info-text">
                「我知道自己條件比別人差，但我可以比別人努力！」
                <br>
                李智凱在鞍馬決賽中，以招牌的湯瑪斯迴旋，秀出備戰多時的高難度動作，鞍馬上飛舞45秒後完美落地，最終技術分6.7、執行分8.7，總分15.400，以0.183分的差距，落在上一屆里約奧運金牌得主、英國名將惠特洛克（Max Whitlock）之後，拿下銀牌。這是台灣在奧運體操奪下的首面銀牌。
            </p>
        </div>
        <img id="close" src="src/winner/close.png">
    </div>`,

    `<div id="info-container">
        <h1>楊勇緯：最萌的銀牌擦臉儀式</h1>
        <div id="info-img">
            <img src="src/winner/judo.png">
            <hr width="80%" align="center" color="white">
            <p id="info-text">擁有開朗笑容的楊勇緯，靠著拿手的寢技壓制各國高手，晉級柔道男子60公斤級金牌戰，雖然被判定三次指導輸掉，他仍為台灣柔道拿下珍貴的一面銀牌；賽後他一度落淚說：「我要的是金牌。」所幸在頒獎典禮上露出釋懷的可愛笑容，開心拿著銀牌擦臉，不僅萌翻國人的心，連日本觀眾都融化，被他圈粉。</p>
        </div>
        <img id="close" src="src/winner/close.png">
    </div>`,

    `<div id="info-container">
        <h1>林昀儒、鄭怡靜：最完美的銅牌「姊弟」</h1>
        <div id="info-img">
            <img src="src/winner/table_tennis.png">
            <hr width="80%" align="center" color="white">
            <p id="info-text">
                年僅19歲的「小林同學」林昀儒，接下台灣新桌球一哥的位置，展現冷靜又刁鑽的球風，個人單打幾乎把現任中國球王樊振東逼到絕境，最後雖止步四強，未能奪牌，卻展現大將之風。
                <br>
                在本屆奧運新增的混合雙打中，小林同學配搭「學姊」鄭怡靜，持拍一左一右、風格一個強攻一個擅守，彼此互補，雖然在桌球混雙四強戰不敵日本水谷隼與伊藤美誠組合，但銅牌戰展現絕佳默契，穩穩將銅牌抱走，怡靜學姊激動對小林同學說：「我們做到了！」最強「姊弟配」也創下台灣純本土選手，奪下奧運桌球獎牌的紀錄。
            </p>
        </div>
        <img id="close" src="src/winner/close.png">
    </div>`,

    `<div id="info-container">
        <h1>羅嘉翎：最威猛的逆天長腿</h1>
        <div id="info-img">
            <img src="src/winner/taekwondo.png">
            <hr width="80%" align="center" color="white">
            <p id="info-text">
                「這不是一個結束，而是另一個的開始。」身為台灣跆拳道代表隊最年輕的選手，19歲的羅嘉翎第一次參加奧運，卻完全不怯場，靠著長腿優勢一路險勝對手。關鍵的女子57公斤級銅牌戰，更以兩記上端擊中對手頭部，為自己與國家踢下一面銅牌。
            </p>
        </div>
        <img id="close" src="src/winner/close.png">
    </div>`,

    `<div id="info-container">
        <h1>郭婞淳：最美麗的金牌笑容</h1>
        <div id="info-img">
            <img src="src/winner/weightlifting1.png">
            <hr width="80%" align="center" color="white">
            <p id="info-text">
                「金牌是我的夢想，挑戰三次終於達成了！」郭婞淳在女子59公斤級舉重比賽，以抓舉103公斤、挺舉133公斤、總和236公斤，三項破奧運紀錄的成績，「從容」拿下金牌。由於郭婞淳的實力遠遠高於對手，賽前國外媒體也形容「其他選手幾乎看不到郭婞淳的車尾燈」，成為她自己和自己的競賽。
                <br>
                最後一把，郭婞淳在沒有奪牌壓力下進一步挑戰自己的世界紀錄140公斤、設定141公斤，期待自己在奧運場上留下最完美一舉，不料失敗倒地。但郭婞淳露出甜美燦笑，成為國際媒體鎂光燈的「嬌點」，留下本屆奧運場上最美麗的「失敗笑容」。
            </p>
        </div>
        <img id="close" src="src/winner/close.png">
    </div>`,
]
$('.pictogram').mouseenter(infoWindow);
function infoWindow(){
    var index = $(this).index() - 1;    // 扣掉 allsports
    var parent = $('#history');
    var info = $(winners[index]);
    parent.append(info);
}
$('.pictogram').mouseleave(removeInfo);
function removeInfo(){
    var info = $('#history').find('#info-container');
    info.remove();
}

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