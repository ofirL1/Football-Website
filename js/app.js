/* hamburger */

const hamburger = document.querySelector("#hamburger");
const navUL = document.querySelector(".nav-ul");

hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
});



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


