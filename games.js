var totalScore = 0;
var scoreArray = [0, 0, 0, 0, 0, 0];
var count = 0;

function shoot() {
    if (count == 0){
        restartArchery();
    }

    var target = $('#target');
    var arrow = $('#arrow');
    var container = $('.games-bg');
    var containerWidth = container.width();
    var scoreBar = $('#score1 span');
    var shootpos;

    // 获取目标元素的 DOM 元素
    var targetElement = target[0];
    var img = $('<img class="shot" src="src/games/archery-arrow.png">');
    // console.log(targetElement.getBoundingClientRect().width) // 小數
    // console.log(targetElement.clientWidth)                   // 整數

    if (count >= 6){
        var button = $('#shooting');
        button.text('Restart');
        
        target.css({'animation-play-state': 'paused'});
        arrow.css({'animation-play-state': 'paused'});

        container.siblings('.shot').remove();
        var end = $('#end');
        if (totalScore >= 55){
            end.text('AWESOME');
        }
        else if (totalScore >= 40){
            end.text('Good');
        } 
        else{
            end.text('點點點');
        }
        count = 0;
        return;
    }

    if (target.css('animation-play-state') == 'running') {
        target.css({'animation-play-state': 'paused'});
        arrow.css({'animation-play-state': 'paused'});
        
        // 使用 getBoundingClientRect() 获取元素位置
        var rect = targetElement.getBoundingClientRect();
        
        // 计算中心点
        shootpos = rect.left + (rect.width / 2);
        console.log(containerWidth / 2);
        console.log(container.offset().left);
        console.log(shootpos);
        target.after(img);
        img.css({
            'position': 'absolute',
            'width': '3%',
            'left': '50%',
            'top': '100%',
            'transform-origin': '0% 100%',
            'transform': 'rotate(-45deg)',
        });
        img.animate({
            'top': '53%',
            'left': rect.left,
        }, 500);

        count++;
    } 
    else {
        target.css({'animation-play-state': 'running'});
        arrow.css({'animation-play-state': 'running'});
        // scoreBar.html('0');
    }

    if (target.css('animation-play-state') == 'paused') {
        // 计算中心点相对于容器的百分比位置
        var cent = containerWidth / 2 + 18
        // if (shootpos < cent) shootpos = shootpos + 18;
        // if (shootpos > cent) shootpos = shootpos - 18;


        var dist = Math.abs((shootpos) - cent) / containerWidth * 100;
        // console.log(Math.abs((shootpos) - (containerWidth / 2)) / 8.53);
        // var containerOffset = container.offset();
        // dist = Math.abs((shootpos - 16) - (containerWidth / 2)) / containerWidth * 100;

        if (dist <= 10) {
            var score = 10 - Math.floor(dist);
            totalScore = totalScore + score;
            scoreArray[count] = score;
            scoreBar.html(totalScore);
        } else {
            scoreBar.html(totalScore);
        }

        if (count >= 6){
            $('#shooting').text('Result');
        }
    }
}

function restartArchery(){
    totalScore = 0;
    count = 0;
    var end = $('#end');
    var scoreBar = $('#score1 span');
    var button = $('#shooting');
    button.text('Shoot !');
    end.text('');
    scoreBar.html('0');

}


var ruleH = [
    `2020 東京奧運｜團體射箭男子組銀牌得主：湯智鈞`,
    `2024 巴黎奧運｜挑戰金牌之路：遊戲規則`,
]

var ruleP = [
    `繼 2020 東奧成功在團體射箭奪得銀牌，這次我要挑戰在 2024 巴黎奧運上拿到金牌！<br>
    離比賽還有一段時間，我必須要把握時間練習，就選在這次的場地練習吧！`,
    `- 準心會在螢幕上一直移動，請在要射箭時點擊 Shoot<br>
    - 總共會有 6 發箭，請盡你所能幫助<b>湯智鈞</b>獲得滿分！`,
]

var nowIndex1 = 1

function ruleText() {
    var rule = $("#rule1");
    var h = $("#rule1 h2");
    var p = $("#rule1 p");
    h.css("opacity", "0");
    p.css("opacity", "0");
    h.html(ruleH[nowIndex1 % ruleH.length]);
    p.html(ruleP[nowIndex1 % ruleP.length]);
   // 同时淡入文本和div元素
    rule.fadeIn(500, function() {
        h.animate({"opacity": "1"}, 500);
        p.animate({"opacity": "1"}, 500);
    });
    nowIndex1++;
}

