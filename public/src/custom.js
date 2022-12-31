//slider store
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const slided   = document.querySelectorAll('.slide');
let curSlide   = 0; 
let maxSlide   = slided.length - 1;

slided.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

nextButton.addEventListener('click', function(){
    if(curSlide === maxSlide){
        curSlide = 0;
    } else {
        curSlide++;
    };

    slided.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    })
})

prevButton.addEventListener('click', function(){
    if(curSlide === 0){
        curSlide = maxSlide;
    } else {
        curSlide--;
    };

    slided.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    })
})