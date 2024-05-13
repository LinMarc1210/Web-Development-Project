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
        console.log(next)                             // 用來 debug 而已
        slideImgs.eq(index).fadeOut();                // 前一張淡出，後一張淡入（淡出久一點）
        slideImgs.eq(next).fadeIn();
        index = next;
    }
})

