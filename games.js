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

var totalScore2 = 0;
var count2 = 0;
var fallingAnimation = [
    `ballFalling 1s ease-in forwards`,       // 1秒，缓慢开始
    `ballFalling 3s linear forwards`,        // 3秒，线性
    `ballFalling 2s ease-out forwards`,      // 2秒，缓慢结束
    `ballFalling 1.5s ease-in-out forwards`, // 1.5秒，缓慢开始和结束
    `ballFalling 4s ease forwards`,          // 4秒，默认缓动
];
function hit(){

    console.log(count2);
    if (count2 == 0){
        restartBadminton();
    }

    var dai = document.getElementById('ready');
    var dai_jq = $('#ready');
    var ball = $('#ball');
    var target = $('#target2');
    var newball = $('<img id="ball" src="src/games/ball.png">');
    var button = $('#hitting');

    if (count2 >= 10){
        button.text('Restart');

        var end = $('#end2');
        if (totalScore >= 46){
            end.text('要拿金牌了');
        }
        else if (totalScore >= 30){
            end.text('美賣喔');
        } 
        else{
            end.text('菜就多練');
        }
        count2 = 0;
        return;
    }

    if (dai.getAttribute('src') == 'src/games/ready.png'){  // 打擊
        dai.setAttribute('src', 'src/games/hit.png');
        ball.css({'animation-play-state': 'paused'});
        count2++;   // 有打擊就算一次

        if (target.position().top > ball.position().top + ball.height() || target.position().top + target.height() < ball.position().top){  // 沒打到
            ball.css({'animation-play-state': 'running'});
            if (count >= 9) button.text('Result');
            else button.text('Next');
        }
        else{                           // 有打到
            button.removeAttr('onclick');   // 暫時停止按鈕功能
            var direction = $('<img id="direction" onclick="hitDirection()" src="src/games/direction.png"></img>');  // 決定方向
            direction.css({
                'animation': 'ballDirection 1.5s ease infinite',
            })
            target.after(direction);
        }
        // count2++;   // 有打擊就算一次
    }
    else{   // 重發球
        dai.setAttribute('src', 'src/games/ready.png');
        newball.remove();
        dai_jq.after(ball);
        var randAnimation = Math.floor(Math.random() * (fallingAnimation.length))
        ball.css({
            'transform': 'rotate(0deg)',
            'left': '37%',
            'animation': fallingAnimation[randAnimation],
            //'animation': 'ballFalling 3s linear forwards',
        });
        button.text('Hit !');
    }
}
function hitDirection(){
    var button = $('#hitting');
    button.removeAttr('onclick');

    var dai_jq = $('#ready');
    var ball = $('#ball');
    var newball = $('<img id="ball" src="src/games/ball.png">');
    var scoreBar = $('#score2 span');
    var container = $('.games-bg');
    var containerWidth = container.width();
    var direction = $('#direction');
    direction.css({
        'animation-play-state' : 'paused',
    });
    // 获取并解析 transform 属性
    var matrix = direction.css('transform');
    var angle;
    // 解析 matrix
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    }
    angle = angle - 90;
    var pos = ball.position();
    var ratio = (((pos.top + 20.0) / 600.00) * 100.00);
    var ratioStr = ratio.toString();
    let beta = Math.abs(angle) * (Math.PI / 180);
    let c = 600 * 0.75 - pos.top;
    let d = Math.sin(beta) * (c / Math.cos(beta));  // 殺球的水平距離
    let dist = 39 + parseFloat(d / containerWidth) * 100;
    let topdist = ratio + (c * (1.5 - (Math.abs(angle)/(75.0-10.0))) / 600.00) * 100;    // 殺球的垂直距離
    let topdistStr = topdist.toString();
    ball.remove();
    console.log(Math.abs(angle));
    newball.css({
        'transform': 'rotate(' + angle +'deg)',
        'top': ratioStr + '%',
        'left': '39%',
        'animation': 'none',
    });
    newball.animate({
        'left': dist.toString() + '%',
        //'top': targetPointY + '%',
        'top': topdistStr + '%',
    }, 1000, 'easeInQuart');
    dai_jq.after(newball);
    $('.games-board').find('#direction').remove();

    // 算分數
    var score;
    if (Math.abs(angle) >= 40 && Math.abs(angle) <= 60){
        score = 5;
    }
    else if (Math.abs(angle) >= 28 && Math.abs(angle) <= 65){
        score = 3;
    }
    else {
        score = 0;
    }
    totalScore2 += score;
    scoreBar.html(totalScore2);

    button.attr('onclick', 'hit()');
    if (count2 >= 9) button.text('Result');
    else button.text('Next');
}

function restartBadminton(){
    totalScore2 = 0;
    count2 = 0;
    var end = $('#end2');
    var scoreBar = $('#score2 span');
    var button = $('#hitting');
    button.text('Hit !');
    end.text('');
    scoreBar.html('0');
}


//------ 文字變換 -------
var ruleH = [
    `2020 東京奧運｜團體射箭男子組銀牌得主：湯智鈞`,
    `2024 巴黎奧運｜射向金牌：遊戲規則`,
]
var ruleP = [
    `繼 2020 東奧成功在團體射箭奪得銀牌，這次我要挑戰在 2024 巴黎奧運上拿到金牌！<br>
    離比賽還有一段時間，我必須要把握時間練習，就選在這次的場地練習吧！`,
    `- 準心會在螢幕上一直移動，請在要射箭時點擊 Shoot<br>
    - 總共會有 6 發箭，請盡你所能幫助<b>湯智鈞</b>獲得滿分！`,
]
var ruleH2 = [
    `世界羽后｜戴資穎`,
    `2024 巴黎奧運｜Last Dance：遊戲規則`,
    `2024 巴黎奧運｜Last Dance：遊戲規則`,
]
var ruleP2 = [
    `2024 巴黎奧運可能是我最後一次挑戰奧運，面對強大的各國好手，希望這次可以順利奪回金牌！<br>
    在剩下的備戰期間，妳也來幫我練習穩定性吧！`,
    `- 球會從戴資穎的上方掉下來，請在要殺球時點擊 Hit，讓球進到瞄準的圈圈內<br>
    - 如果有擊中，則會需要控制角度，點擊出現的箭頭可以決定殺球角度`,
    `- 若殺進發球區內得 5 分，其餘區域 3 分，出界或揮空 0 分<br>
    - 總共會有 10 顆球，快幫助小戴訓練吧！`,
]
var nowIndex1 = 1
var nowIndex2 = 1
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
function ruleText2() {
    var rule = $("#rule2");
    var h = $("#rule2 h2");
    var p = $("#rule2 p");
    h.css("opacity", "0");
    p.css("opacity", "0");
    h.html(ruleH2[nowIndex2 % ruleH2.length]);
    p.html(ruleP2[nowIndex2 % ruleP2.length]);
   // 同时淡入文本和div元素
    rule.fadeIn(500, function() {
        h.animate({"opacity": "1"}, 500);
        p.animate({"opacity": "1"}, 500);
    });
    nowIndex2++;
}
