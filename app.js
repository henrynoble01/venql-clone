const hamburgerIcom = document.querySelector('.harmburger-icon');
const toogleHam = document.querySelector('.toggle');
const trialBtn = document.querySelector('#free-trial-btn');
const navColor = document.querySelector('.navbar');
const stickyNav = document.querySelector('.section-3');
const sticky = stickyNav.offsetTop;

// console.log(stickyNav.offsetTop);

// console.log(trialBtn);


hamburgerIcom.addEventListener('click', function(){
    // console.log('hello');
    toogleHam.classList.toggle('nav-toggle')
    trialBtn.classList.toggle('free-trial-btn')
    navColor.classList.toggle('nav-toggle')
    // console.log(trialBtn);
});




// window.onscroll = function() {myFunction()};
// function myFunction() {
//     if (window.pageYOffset >= sticky){
//         stickyNav.classList.add('sticky');
//         console.log(stickyNav.offsetTop);
//     } else /* if (window.pageYOffset >  )*/ {
//         stickyNav.classList.remove('sticky');
//     }
// }

window.addEventListener('scroll', ()=> {
    if (window.pageYOffset >= sticky){
        stickyNav.classList.add('sticky');
        // console.log(stickyNav.offsetTop);
    } else /* if (window.pageYOffset >  )*/ {
        stickyNav.classList.remove('sticky');
    }
});