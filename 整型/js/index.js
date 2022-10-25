var iconBtn = document.querySelector(".iconBtn");
var mask = document.querySelector(".mask");
var nav = document.querySelector(".nav-m");
var navMask = document.querySelector(".nav-mask");

iconBtn.onclick = function() {
    navMask.classList.add("open");
}

mask.onclick = function() {
    navMask.classList.remove('open');
}