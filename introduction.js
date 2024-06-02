var change=0;
function change_Miraitowa(){
    var logo=document.getElementById("Miraitowa");
    if(change==0){
        logo.src="src/introduction/吉祥物.png";
        change=1;
    }
    else{
        logo.src="src/introduction/Miraitowa.png";
        change=0;
    }
}

setInterval(change_Miraitowa, 2000);

/*以下是控制輪播*/  
var cot = 0;
var cot2 = 0;
var cot3 = 0;

function nex(c, listClass, photoClass) {

    if (c < 4) {
        $(listClass + ' ' + photoClass).eq(c).animate({'margin-left': '-600px'}, 600);
        c++;
    }
    return c;
}
function pre(c, listClass, photoClass) {
    if (c > 0) {
        c--;
        $(listClass + ' ' + photoClass).eq(c).animate({'margin-left': '0px'}, 600);
    }
    return c;
}
/*到這裡結束*/

/*點讚*/
function like(num,icon){
    var picture;
    if(icon==0){
        picture="heart_"
    }
    else{
        picture="bad_"
    }
    var id_str=picture+num;
    var element=document.getElementById(id_str);
    element.innerHTML=parseInt(element.innerHTML)+1;
}