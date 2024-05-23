window.addEventListener('scroll', function() {
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
});

function blurBg() {
    var bg = document.getElementById("yonex");
    bg.style.blur = "10px";
}


var intro = [
    $('<table class="title_intro"></table>'),
    $('<table class="title_intro"></table>'),
    $('<table class="title_intro"></table>')
];
var mainShopItem = [
    $('<tr><td><img src="src/store/shirt.png">'),
    $('<tr><td><img src="src/store/shirt.png">'),
    $('<tr><td><img src="src/store/shirt.png">')
];

$(intro).each(function(index) {
    $(this).css({
        'text-align': 'center',
        'z-index': '500',
        'color': 'white',
        'margin': '0 auto', // 水平置中
        'align': 'center'
    });
    $(this).append(mainShopItem[index]);
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
            $(title).append(intro[index - 1].clone());  // 確保每次附加的都是新表格
        }
        $(title).siblings('img').css({'filter': 'blur(10px)', '-webkit-filter:': 'blur(10px)'});
    }
}





