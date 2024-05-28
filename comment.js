function upload(){
    var boxWidth = $('#box').width()-100;
    var v = document.getElementById('message').value;
    var ele = $('<span></span>').text(v);
    // document.getElementById('message').value="";
    var randomInt = Math.floor(Math.random() * (5 - 1 + 1)) + 1;  //新增class樣式，要增加max值
    randomClass = 'style'+randomInt;
    ele.addClass(randomClass);

    
    ele.css({
        visibility: 'hidden'
    });
    $('#box').append(ele);

    // // 確定位置
    // var isOverlap;
    // var randomHeight, randomWidth;

    // do {
    //     isOverlap = false;
    //     var randomHeight = (Math.floor(Math.random() * ( 55- 15 + 1)) + 15)*10;  //max:55 min:15
    //     var randomWidth = (Math.floor(Math.random() * (boxWidth - 1 + 1)));

    //     // 檢查新位置是否與現有元素重疊
    //     $('#box > span').each(function() {
    //         var existingSpan = $(this);
    //         if (existingSpan[0] === ele[0]) return; // Skip the new element itself

    //         var existingTop = existingSpan.position().top;
    //         var existingLeft = existingSpan.position().left;
    //         var existingHeight = existingSpan.outerHeight(true);
    //         var existingWidth = existingSpan.outerWidth(true);

    //         if (
    //             randomHeight < existingTop + existingHeight &&
    //             randomHeight + ele.outerHeight(true) > existingTop &&
    //             randomWidth < existingLeft + existingWidth &&
    //             randomWidth + ele.outerWidth(true) > existingLeft
    //         ) {
    //             isOverlap = true;
    //             return false;
    //         }
    //     });
    // } while (isOverlap);
    
    var min=66;
    var max=103;
    var randomHeight = (Math.floor(Math.random() * ( max- min + 1)) + min)*10; 
    var randomWidth = (Math.floor(Math.random() * (boxWidth - 1 + 1)));
    
    ele.css({
        position: 'absolute',
        top: randomHeight + 'px',
        left: randomWidth + 'px',
        opacity: 0,
        visibility: 'visible'
    });

    ele.animate({
        top: (randomHeight - 50) + 'px', // 動畫結束位置，比初始位置高50px
        opacity: 1
    }, 1000); // 1秒內完成動畫

    // // 准备要追加的数据
    // var newData = {
    //     content: v,
    //     class: randomClass,
    //     top: randomHeight,
    //     left: randomWidth
    // };

    //  // 读取现有的 data.json 文件
    //  $.getJSON("data.json", function(data) {
    //     // 将新数据追加到 JSON 对象中
    //     data.push(newData);
        
    // });

}
