window.addEventListener('scroll', scrollFloat);
function scrollFloat(){
    let stores = document.querySelectorAll('.store');
    // 將 NodeList 轉成 array，然後移除第一個元素，更新
    let storeArray = Array.from(stores);
    let removed = storeArray.shift();       // removed 的元素用不到，storeArray 現在移除第一個元素了

    storeArray.forEach(function(store) {
        let rect = store.getBoundingClientRect();
        // 若滾動到這個 div 了
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            store.classList.add('float-in');
        }
        else {
            store.classList.remove('float-in');
        }
    });
};

var intro = [
    $('<table class="title_intro"></table>'),
    $('<table class="title_intro"></table>'),
    $('<table class="title_intro"></table>')
];
// var mainShopItem = [
//     $('<tr><td rowspan="3"><img src="src/store/shirt.png"><td>顏色｜白、燕麥黃、藍梅紫、粉綠'),
//     $('<tr><td><img src="src/store/kit1.png"><tr><td><img src="src/store/kit2.png"><tr><td><img src="src/store/kit3.png">'),
//     $('<tr><td><img src="src/store/creditcard.png"><tr><td><img src="src/store/bags.png">')
// ];

// var mainShopText1 = [
//     $('<tr><td>尺寸｜S - 2XL'),
//     $('<tr><td>材質｜100% 聚酯纖維')
// ];

// var mainShopText2 = [
//     $('<td>文字設計師林國慶在 polo 衫上印刷了「Chinese Taipei」字樣，上下翻轉後「Taipei」就會變成「加油」，合起來就是「Chinese Taipei 加油」。'),
//     $('<td>東方傳纏花統工藝則由手工纏花工藝家林佩瑩設計，採用了春仔花的纏花工藝，共有 2 款，一款是台灣國花梅花，另一款是油菜花，油菜花象徵著加油鼓勵和無私奉獻，代表為選手們的加油打氣。'),
//     $('<td>進場服的鞋子和腰帶則使用了嚴玉英老師的香蕉絲織布，其工法十分獨特，一人一天僅能織出 7.5 公分。鞋子上的香蕉絲織片圖案呈現海龜，源自於噶瑪蘭族的傳說「海龜報恩」。此外，鞋子還環繞著 20 個愛心圖案，有著十全十美的意涵。')
// ];

// 整理完的樣子：
var mainShopItem = [
    $('<tr><td rowspan="3"><img src="src/store/shirt.png"></td>' + 
        '<td>顏色｜<br>白、燕麥黃、<br>藍梅紫、粉綠</td></tr>' + 
        '<tr><td>尺寸｜S - 2XL</td></tr><tr><td>材質｜100% 聚酯纖維</td></tr>'),
    $('<tr><td><img src="src/store/kit1.png"></td><td>文字設計師林國慶在 polo 衫上印刷了「Chinese Taipei」字樣，上下翻轉後「Taipei」就會變成「加油」，合起來就是「Chinese Taipei 加油」。</td></tr>' +
        '<tr><td><img src="src/store/kit2.png"></td><td>東方傳纏花統工藝則由手工纏花工藝家林佩瑩設計，採用了春仔花的纏花工藝，共有 2 款，一款是台灣國花梅花，另一款是油菜花，油菜花象徵著加油鼓勵和無私奉獻，代表為選手們的加油打氣。</td></tr>' +
        '<tr><td><img src="src/store/kit3.png"></td><td>進場服的鞋子和腰帶則使用了嚴玉英老師的香蕉絲織布，其工法十分獨特，一人一天僅能織出 7.5 公分。鞋子上的香蕉絲織片圖案呈現海龜，源自於噶瑪蘭族的傳說「海龜報恩」。此外，鞋子還環繞著 20 個愛心圖案，有著十全十美的意涵。</td></tr>'),
    $('<tr><td><img src="src/store/creditcard.png"></td></tr>' +
        '<tr><td><img src="src/store/bags.png"></td></tr>')
];

$(intro).each(function(index) {
    $(this).css({                   // table 的 css
        'position': 'absolute',
        'text-align': 'left',
        'z-index': '500',
        'color': 'white',
        //'margin': '0 auto', // 水平置中
        'align': 'center',
        // 'border': '3px solid white',    // debug 完記得拿掉
        'margin-right': '5%',
        'opacity': '1',
    });
    $(this).append(mainShopItem[index]);       // 加入圖片和文字說明
});

$("table tr, table td").css({'border': '3px solid white'})    // debug 完記得拿掉

$((intro[0]).find('img')).css({
    'border-radius': '10%',
    'width': '70%',
    'position': 'relative',
    'opacity': '1',
});

$((intro[1]).find('img')).each(function(index){
    $(this).css({
        'border-radius': '10%',
        'width': '90%',
        'position': 'relative',
        'opacity': '1',
    })
});

$((intro[2]).find('img')).each(function(){
    $(this).css({
        'border-radius': '10px',
        'width': '90%',
        'position': 'relative',
        'opacity': '1',
    })
});

function toggleTitle(index) {
    var checkbox = document.getElementById('toggleCheckbox' + index);
    var title = document.getElementsByClassName('title')[index - 1];
    var label = title.querySelector('label div');

    console.log(checkbox.checked)
    if (checkbox.checked) {
        title.style.width = '25%';
        title.style.height = '100%';
        label.innerHTML = '點我看更多';
        checkbox.checked = false;
        $(title).find('.title_intro').remove();
        $($(title).parent()).find('img').css({'filter': 'blur(0px)', '-webkit-filter:': 'blur(0px)'});
    } else {
        title.style.width = '100%';
        title.style.height = '100%';
        label.innerHTML = '收起資訊';
        checkbox.checked = true;
        if ($(title).find('.title_intro').length === 0){
            $(title).find('.table-container').append(intro[index - 1].clone());  // 確保每次附加的都是新表格
        }
        $(title).siblings('img').css({'filter': 'blur(10px)', '-webkit-filter:': 'blur(10px)'});    // 原底圖模糊
    }
}







