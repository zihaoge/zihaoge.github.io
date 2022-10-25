var navbar = document.querySelector(".navbar");
console.log(navbar);

var btn = document.querySelector(".header .search .btn");

var close = document.querySelector(".navbar ul li:first-child");
console.log(close);

btn.onclick = function() {
    navbar.classList.add('open');
}

close.onclick = function() {
    navbar.classList.remove("open");
}