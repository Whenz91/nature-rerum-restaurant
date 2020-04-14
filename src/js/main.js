/* Tab */
const tabContent = document.querySelectorAll(".tabcontent");
const tabLinks = document.querySelectorAll(".tab-nav__link");

for(var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function() {
        
        tabContent.forEach((element) => {
            element.className = element.className.replace(" active", "");
        });
    
        tabLinks.forEach((element) => {
            element.className = element.className.replace(" active", "");
        })
    
        document.getElementById(this.dataset.id).className += " active";
        this.className += " active";
    });
}

/* Slider */
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for next slide
    if(current.nextElementSibling) {
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[0].classList.add('current');
    }
}
const prevSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for prev slide
    if(current.previousElementSibling) {
        //Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current to last
        slides[slides.length - 1].classList.add('current');
    }
}

//Button events
next.addEventListener('click', e => {
    nextSlide();
});
prev.addEventListener('click', e => {
    prevSlide();
});
