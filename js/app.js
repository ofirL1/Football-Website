/* hamburger */

const hamburger = document.querySelector("#hamburger");
const navUL = document.querySelector(".nav-ul");

hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
});


/*story mobile */
let screenSize = window.matchMedia("(max-width: 768px)");
textBeforeImg(screenSize);
screenSize.addListener(textBeforeImg);
function textBeforeImg(size){
    let box2 = document.querySelector("#box-2");
    let boxText = document.querySelector("#box-text-2");
    let boxImg = document.querySelector("#box-img-2");

    if(size.matches){
        box2.insertBefore(boxText,boxImg);
    }
    else{
        box2.insertBefore(boxImg,boxText);
    }
}

//animation
window.onload = function() {
    var elements = document.getElementsByClassName("feature-box");
    var i;
    for (i = 0; i < elements.length; i++) {
        var offset = elements[i].clientHeight* .5;   //.5 = 50%
        console.log(elements[i].clientHeight);
        elements[i].setAttribute("data-wow-offset", offset);
    }
}

// wow = new WOW(
//     {
//     boxClass:     'wow',      // default
//     animateClass: 'animated', // default
//     offset:       0,          // default
//     mobile:       true,       // default
//     live:         true        // default
//   }
//   )



new WOW().init();
lightGallery(document.getElementById('aniimated-thumbnials'), {
    mode: 'lg-fade',
    thumbnail:true,
    animateThumb:true
}); 


