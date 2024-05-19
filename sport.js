$(document).ready(function() {
    $('.badminton_image').mouseenter(function(){
        $(this).css('width','300px');
        $(this).css('height','300px');
    })
})

$(document).ready(function() {
    $('.badminton_image').mouseleave(function(){
        $(this).css('width','240px');
        $(this).css('height','240px');
    })
})

//一閃一閃的效果
$(document).ready(function() {
    setInterval(function() {$('.Taekwondo_image').toggleClass('shinning_Taekwondo');}, 1000);  
})
$(document).ready(function() {
    setInterval(function() {$('.table_image').toggleClass('shinning');}, 1000); 
    setInterval(function() {$('.Weightlifting_image').toggleClass('shinning');}, 1000);  
})


//淡入特效
$(document).ready(function() {
    $('badminton_image').fadeIn(2000); // 在2秒內淡入
});

/*頁面滾動時:照片特效(左右滑入,淡入)*/
$(document).ready(function() {
    function checkIfInView() {
        $('.fade').each(function() {
            var element = $(this);
            var elementTop = element.offset().top;
            var elementBottom = elementTop + element.outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                element.addClass('in-view');
            }
        });

        $('.Weightlifting_image').each(function() {
            var element = $(this);
            var elementTop = element.offset().top;
            var elementBottom = elementTop + element.outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                element.addClass('appear-view');
            }
        });


    }

    $(window).on('scroll resize', function() {
        checkIfInView();
    });

    checkIfInView();
});


