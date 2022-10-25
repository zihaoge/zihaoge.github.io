var boxEl = document.getElementsByClassName("bigbox")[0];
var imgs = boxEl.getElementsByClassName("box")[0].getElementsByTagName("div");
// 把类数组转为数组
var img = Array.prototype.slice.call(imgs);

function accordion() {
    img.forEach(function(e, i) {
        e.onclick = function() {
            img.forEach(function(el, index) {
                if (index === i) {
                    el.style.width = 500 + "px";
                    console.log(i);
                } else {
                    el.style.width = 50 + "px";
                }
            });
        }
    });
}
accordion();