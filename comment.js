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
    
    var min=118;
    var max=158;
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
}

function vote(num){
    document.getElementById(num).innerHTML=parseInt(document.getElementById(num).innerHTML)+1000;
    var element;
    if(num==1){
        element=document.getElementById('dai');
    }if(num==2){
        element=document.getElementById('guo');
    }if(num==3){
        element=document.getElementById('yung');
    }if(num==4){
        element=document.getElementById('zheng');
    }if(num==5){
        element=document.getElementById('zhunag');
    }
    var computedStyle = window.getComputedStyle(element);
    var a = parseInt(computedStyle.borderRightWidth);
    element.style.borderRightWidth = (a + 2.6) + "px";
}