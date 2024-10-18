let next = document.getElementById('next');
let prev = document.getElementById('prev');

let container= document.querySelector('.container');
let Slider = container.querySelector('.container .list');
let thumbnailBorder = document.querySelector('.container .thumbnail');
let thumbnailItems = thumbnailBorder.querySelectorAll('.item');
let time = document.querySelector('.container .time');

thumbnailBorder.appendChild(thumbnailItems[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

next.onclick = function(){
    showSlider('next');    
}

prev.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItems = Slider.querySelectorAll('.container .list .item');
    let thumbnailItems = document.querySelectorAll('.container .thumbnail .item');
    
    if(type === 'next'){
        Slider.appendChild(SliderItems[0]);
        thumbnailBorder.appendChild(thumbnailItems[0]);
        container.classList.add('next');
    }else{
        Slider.prepend(SliderItems[SliderItems.length - 1]);
        thumbnailBorder.prepend(thumbnailItems[thumbnailItems.length - 1]);
        container.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}