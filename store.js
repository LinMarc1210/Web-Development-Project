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

function yonexIntro(){
    var div = document.getElementById("title");
    console.log(div.style.animation);
    div.style.animation = "expand 2s linear forwards";
}