console.log(document.querySelectorAll(".swiper-slide"));

var slide = document.querySelectorAll(".swiper-slide");


slide.forEach(function(ele, i) {
    ele.style.opcity = 1;
})


// window.scrollY + window.innerHeight >= smallEl.offsetHeight + smallEl.offsetTop