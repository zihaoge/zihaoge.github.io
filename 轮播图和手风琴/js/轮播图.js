var current = 0;
var swiperEL = document.getElementById("swiper");
var listEl = swiperEL.getElementsByClassName("list")[0];
var imgs = swiperEL.getElementsByClassName("list")[0].getElementsByTagName("img");
var dots = swiperEL.getElementsByClassName("dot")[0].getElementsByTagName("li");
var circles = swiperEL.getElementsByClassName("circle");
var pevrBtn = circles[0];
var nextBtn = circles[1];

function showItem(n) {
    listEl.style.marginLeft = -n * 500 + 'px';
    current = n;
    for (var i = 0; i < imgs.length; i++) {
        if (n === i) {
            dots[i].style.backgroundColor = "red";
        } else {
            dots[i].style.backgroundColor = "orange";
        }
    }
}
showItem(0);

Array.prototype.slice.call(dots).forEach(function(dot, i) {
    dot.onclick = function() {
        showItem(i);
    }
});



pevrBtn.onclick = function() {
    current--;
    if (current < 0) {
        current = imgs.length - 1;
    }
    showItem(current);
}

nextBtn.onclick = showNext;

function showNext() {
    current++;
    if (current > imgs.length - 1) {
        current = 0;
    }
    showItem(current);
}

var time;

time = setInterval(() => {
    showNext();
}, 3000);


swiperEL.onmouseover = function() {
    clearInterval(time);
}

swiperEL.onmouseout = function() {
    time = setInterval(() => {
        showNext();
    }, 3000);
}