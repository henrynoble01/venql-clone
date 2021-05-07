const hamburgerIcom = document.querySelector('.harmburger-icon');
const toogleHam = document.querySelector('.toggle');
const trialBtn = document.querySelector('#free-trial-btn');
const navColor = document.querySelector('.navbar');
const topTouch = document.querySelector('.top-touch');
const sticky = topTouch.offsetTop;
const sectionThree = document.querySelector('.section-3');
const sectionFour = document.querySelector('.section-4')

// console.log(sectionThree);

// console.log(trialBtn);


hamburgerIcom.addEventListener('click', function(){
    // console.log('hello');stickyNav
    toogleHam.classList.toggle('nav-toggle')
    trialBtn.classList.toggle('free-trial-btn')
    navColor.classList.toggle('nav-toggle')
    // console.log(trialBtn);
});




// window.onscroll = function() {myFunction()};
// function myFunction() {
//     if (window.pageYOffset >= sticky){
//         sectionThree.classList.add('sticky');
//         console.log(sectionThree.offsetTop);
//     } else /* if (window.pageYOffset >  )*/ {
//         sectionThree.classList.remove('sticky');
//     }
// }


// trial two
window.addEventListener('scroll', ()=> {
    if (window.pageYOffset >= sticky){
        sectionThree.classList.add('sticky');
        sectionFour.classList.add('scroll-fourth');
        // console.log(sectionThree.offsetTop);
    } else /* if (window.pageYOffset >  )*/ {
        sectionThree.classList.remove('sticky');
        sectionFour.classList.remove('scroll-fourth');
    }
});


// ******************************************
// window.addEventListener('scroll', ()=> {
//     let distance_from_top = document.body.scrollTop;
    
//     // 
//     if (distance_from_top > sticky){
//         sectionThree.classList.add('sticky');
//     }
//     // 
//     if (distance_from_top > 60){
//         sectionThree.classList.add('sticky');
//     }
    
// });