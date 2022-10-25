var data = [{
    img: "./image/1.jpg",
    name: "张三",
    title: "147",
    audioUrl: "./music/1.mp3"
}, {
    img: "./image/2.jpg",
    name: "李四",
    title: "258",
    audioUrl: "./music/2.mp3"
}, {
    img: "./image/3.jpg",
    name: "王五",
    title: "369",
    audioUrl: "./music/3.mp3"
}]


var range = document.querySelector("input[type=range]");
var mask = document.querySelector(".mask");
var audio = document.querySelector("audio");
var dot = document.querySelector(".dot");


var current = 0;

$(".heard").on("click", "i", function() {
    $(this).toggleClass("red");
})


function show(n) {
    $(".title").find("h3").text(data[n].title);
    $(".title").find("p").text(data[n].name);
    $(".musicBox .left .imgBox img")[0].src = data[n].img;
    audio.src = data[n].audioUrl;
}
// 初始化
show(0);

// 上一首
$(".prov").click(function() {
    audio.pause();
    current--;
    if (current < 0) {
        current = data.length - 1;
    }
    show(current);
    audio.play();
});

// 下一首
$(".next").click(function() {
    audio.pause();
    current++;
    if (current > data.length - 1) {
        current = 0;
    }
    show(current);
    audio.play();

});

$(".isPlay").on("click", "i", function() {
    if (audio.paused) {
        console.log("播放");
        audio.play();
        $(this).addClass("fa-pause-circle-o");
        $(this).removeClass('fa-play-circle-o');

    } else {
        console.log("暂停");
        audio.pause();
        $(this).removeClass("fa-pause-circle-o");
        $(this).addClass('fa-play-circle-o');
    }
})






range.oninput = function() {
    mask.style.width = this.value + '%';
    audio.currentTime = (this.value * audio.duration) / 100;
}

audio.ontimeupdate = function() {
    mask.style.width = this.currentTime / this.duration * 100 + '%';
    dot.style.left = this.currentTime / this.duration * 98 + '%';

    var allTime = document.getElementById("audio").duration;
    var min = parseInt(allTime / 60);
    var s = parseInt(allTime % 60);
    if (s < 10) s = "0" + s;
    $(".time span").eq(0).text(min);
    $(".time span").eq(2).text(s);


    var ns = parseInt(this.currentTime % 60);

    if (this.currentTime >= 60 && ns == 0) {
        console.log("大");
        var nmin = parseInt(this.currentTime / 60);
    }
    if (nmin < 10) nmin = "0" + nmin;
    if (ns < 10) ns = "0" + ns;

    $(".nowTime span").eq(0).text(nmin);
    $(".nowTime span").eq(2).text(ns);
}