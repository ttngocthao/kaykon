let slideIndex=0;
slideShow();
function slideShow(){
    let slides= document.getElementsByClassName('slides');
    for(var  i=0; i<slides.length; i++){
        // slides[i].style.display = 'none';
        slides[i].style.opacity = 0;
    }
    slideIndex ++;
    if(slideIndex > slides.length){slideIndex=1}
    // slides[slideIndex - 1].style.display= 'block';
    slides[slideIndex - 1].style.opacity= 1;
    setTimeout(slideShow,5000);
}
