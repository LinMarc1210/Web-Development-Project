var colorText = [
    "白","燕麥黃","粉綠","藍莓紫",
    "固定","固定","固定","固定",
    "橘","深紫黑","橘","紅",
    "固定","固定","固定","固定",
    "太空黑","塵埃白","太空黑","太空黑",
];
var materialText = [
    "100% 聚酯纖維","100% 聚酯纖維","100% 聚酯纖維","100% 聚酯纖維",
    "銅","銀", "銀", "銀",
    "加厚PU、尼龍","加厚PU、尼龍","加厚PU、尼龍","加厚PU、尼龍",
    "棉花、合成纖維","塑膠","塑膠","塑膠",
    "不鏽鋼","陶瓷","不鏽鋼","不鏽鋼",
];
var introText = [
    // 紀念T恤
    "簡約的白色T恤，上面印有2024巴黎奧運的標誌和圖案，適合所有場合，象徵純潔和簡單。",
    "溫暖的燕麥黃色T恤，帶有獨特的奧運設計，讓你在日常穿搭中展現對奧運的支持。",
    "清新的粉綠色T恤，採用柔和的色調，適合喜愛自然風格的奧運迷。",
    "豐富的藍莓紫色T恤，充滿活力，特別適合喜歡鮮豔色彩的奧運愛好者。",
    // Phryges 紀念幣
    "傳統設計的紀念幣，刻有Phryges的經典形象，適合收藏家。",
    "帶有休閒度假風情的紀念幣，呈現Phryges在海灘的樣子，給人放鬆愉快的感覺。",
    "這款紀念幣描繪了Phryges在山間活動的場景，適合喜歡戶外和冒險的收藏家。",
    "描繪了Phryges在港口的圖案，象徵著旅遊和探索。",
    // 筆袋
    "明亮活潑的設計，適合年輕人或任何喜歡充滿活力風格的人士。",
    "簡約而典雅的設計，突顯2024巴黎奧運的標誌，非常適合日常使用。",
    "帶有橘色細節的筆袋，活潑且充滿活力。",
    "深紅色的設計，經典且具現代感，適合各種場合。",
    // Phryges 公仔
    "這是一個高度為15厘米的Phryges公仔，非常適合展示或收藏。",
    "這款公仔展示了Phryges在衝浪的形象，象徵著奧運的活力與挑戰精神。",
    "描繪了Phryges進行柔道運動的場景，體現了奧運精神中的力量和技巧。",
    // 其他紀念品
    "這款艾菲爾鐵塔模型具有漸層色的設計，獨特而富有藝術感，完美的巴黎紀念品。",
    "高品質的保溫杯，印有2024巴黎奧運標誌，非常適合日常使用或作為紀念品。",
    "簡約且實用的馬克杯，適合日常飲用，同時也是奧運的美好回憶。",
    "大容量的水瓶，適合運動或戶外活動，印有2024巴黎奧運標誌。",
    "專為2024巴黎殘奧會設計的紀念瓶，體現對殘奧會的支持和尊重。"
];
var priceText = [
    "550", "550", "550", "550",
    "150", "200", "200", "200", 
    "400", "400", "400", "400", 
    "900", "600", "600", "600",
    "450", "450", "650", "650",
];

function spanWindow(){
    var body = $('body').not('#window');
    var others = $('.store');
    var win = $('#window');
    var winImg = $('#item');
    var itemName = $("#itemname");
    var color = $('#color');
    var material = $('#material');
    var intro = $('#text');
    var amount = $('#amount');
    var price = $('#price span');
    var clickedImg = $(this).clone(); // 克隆点击的图片元素
    var tdIndex = $(this).closest('td').index(); // 获取图片所在的 <td> 在其父元素 tr 中的索引（从0开始）
    var trIndex = $(this).closest('td').closest('tr').index();  // 获取图片所在的 <tr> 在其父元素 table 中的索引（从0开始）
    

    // 先清空之前的內容
    winImg.empty();
    itemName.empty();
    color.empty();
    material.empty();
    intro.empty();
    price.empty();
    amount.val(1);
    win.hide();

    winImg.append(clickedImg);
    var nameIndex = parseInt((trIndex / 3)) * 9 + tdIndex + 4 + 1; // 由于索引是从0开始的，所以需要加1

    itemName.append( $("table td").eq(nameIndex).text() );  // 5-8, 14-17, 23-26, 32-35, 41-44
    var index = parseInt((trIndex / 3)) * 4 + tdIndex;
    console.log(nameIndex);
    color.text(colorText[index]);
    material.text(materialText[index]);
    intro.text(introText[index]);
    price.text(priceText[index]);
    win.fadeIn();

    var overlay = $('<div id="overlay"></div>');
    body.append(overlay);
    // 设置遮罩层样式
    overlay.css({
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'background-color': 'rgba(0, 0, 0, 0.5)', // 半透明背景色
        'z-index': 400 // 确保遮罩层位于窗口下方
    });
}

function hideWindow(){
    var win = $('#window');
    var overlay = $('#overlay');
    overlay.remove();
    win.fadeOut();
}

var cart = [];  // 購物車
var allPrice = 0;
function addToCart(){
    var img = $('#item');
    var itemName = $("#itemname");
    var price = $('#price span');
    var amount = $('#amount').val();        // jquery 要用 val() 而不是 value
    var rows = $('.cart-row');
    var product = {
        Pimg: img.html(),
        Pname: itemName.text(),
        Pprice: parseInt(price.text()),
        Pamount: amount,
        Ptotalprice: parseInt(price.text()) * amount,
    };

    if (cart.length >= 7){
        window.alert('購物車已滿！');
        return;
    }

    var current = $('.cart-row').eq(cart.length);
    current.find('.cart-img').html(product.Pimg);
    current.find('.cart-name').html(product.Pname);
    current.find('.cart-price').html(product.Pprice);
    current.find('.cart-amount').html(product.Pamount);
    current.find('.cart-total').html(product.Ptotalprice);
    current.fadeIn();
    console.log(product);
    cart.push(product);
}

$(".store img").each(function(){
    $(this).on('click', spanWindow);
});


var saveduser;
var savedphone;
var savedaddr;
document.getElementById('submit').addEventListener('click', clearTheCart);
function clearTheCart() {
    var form = document.getElementById('buycart');
    var username = document.getElementById('customer');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    if (cart.length == 0){
        alert('購物車是空的！');
        return;
    }
    if (username.value.trim() === '' || phone.value.trim() === '' || address.value.trim() === '') {
        alert('請填寫購買人資訊！');
        return;
    }

    // 儲存已購買人的資料（給 buyNow 用）
    saveduser = username.value
    savedphone = phone.value
    savedaddr = address.value

    // 成功購買的動畫
    var end = document.createElement('img');
    end.id = 'end';
    end.src = 'src/onlinestore/succeed.png';
    end.style.animation = 'cartend 3s ease';
    end.style.animationPlayState = 'paused';
    setTimeout(function(){
        end.style.animationPlayState = 'running';
        // end.remove();
    }, 1);
    form.parentNode.insertBefore(end, form.nextSibling);

    // 清空購物車
    for (var i = 0 ; i < cart.length ; i++){
        allPrice += cart[i].Ptotalprice;
        console.log(allPrice);
        // 移除
        var current = document.getElementsByClassName('cart-row')[i];
        current.getElementsByClassName('cart-img')[0].innerHTML = '';
        current.getElementsByClassName('cart-name')[0].innerHTML = '';
        current.getElementsByClassName('cart-price')[0].innerHTML = '';
        current.getElementsByClassName('cart-amount')[0].innerHTML = '';
        current.getElementsByClassName('cart-total')[0].innerHTML = '';
        current.style.display = 'none';
    }
    var l = cart.length;
    for (var i = 0 ; i < l ; i++){
        cart.shift();
    }

    // 購買成功訊息
    var message = '購買成功！\n\n' +
              '姓名: ' + username.value + '\n' +
              '電話: ' + phone.value + '\n' +
              '地址: ' + address.value + '\n' +
              '\n總價: ' + allPrice;
    alert(message);

    // 移除表單資料
    username.value = '';
    phone.value = '';
    address.value = '';
    console.log('Username:', username.value);
    console.log('Phone:', phone.value);
    console.log('Address:', address.value);
    allPrice = 0;
}

function buyNow() {
    saveduser = document.getElementById('customer').value;
    savedphone = document.getElementById('phone').value;
    savedaddr = document.getElementById('address').value;

    var price = document.querySelector("#price span");
    price = parseInt(price.innerText);
    var amount = document.getElementById('amount').value;
    if (amount == 0){
        alert('尚未選取數量！');
        return;
    }
    if (saveduser.trim() === '' || savedphone.trim() === '' || savedaddr.trim() === '') {
        alert('請在購物車下方填寫購買人資訊，再回來按立即購買');
        return;
    }

    // 購買成功訊息
    var message = '購買成功！\n\n' +
              '姓名: ' + saveduser + '\n' +
              '電話: ' + savedphone + '\n' +
              '地址: ' + savedaddr + '\n' +
              '\n總價: ' + (price*amount);
    alert(message);
}
