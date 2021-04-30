const hamburgerIcom = document.querySelector('.harmburger-icon');
const toogleHam = document.querySelector('.toggle');
const trialBtn = document.querySelector('#free-trial-btn')

// console.log(trialBtn);


hamburgerIcom.addEventListener('click', function(){
    // console.log('hello');
    toogleHam.classList.toggle('nav-toggle')
    trialBtn.classList.toggle('free-trial-btn')
    // console.log(trialBtn);
});