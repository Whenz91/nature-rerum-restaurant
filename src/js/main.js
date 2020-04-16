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

/* Form validation */
const form = document.getElementById("reservationForm");

form.setAttribute('novalidate', true);

var hasError = function (field) {
    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

    // Get validity
    var validity = field.validity;

    // If valid, return null
    if (validity.valid) return;

    // If field is required and empty
    if (validity.valueMissing) return 'Kérlek töltsd ki a mezőt!';

    // If not the right type
    if (validity.typeMismatch) {

        // Email
        if (field.type === 'email') {
            return 'Kérlek helyes email címet adj meg!';  
        } else {
            return 'Kérlek megfelelően töltsd ki a mezőt!';
        }
    }
    
    // If number input isn't a number
    if (validity.badInput) return 'Csak egész számok adhatók meg.';

    // If a number value doesn't match the step interval
    if (validity.stepMismatch) return 'Kérlek ellenőrizd a megadott szám értékét!';

    // If a number field is over the max
    if (validity.rangeOverflow) return `Maximum ${field.getAttribute('max')} fős asztalt tudsz foglalni.`;

    // If a number field is below the min
    if (validity.rangeUnderflow) return `Minimum ${field.getAttribute('min')} főr tudsz asztalt foglalni.`;

    

    // If all else fails, return a generic catchall error
    return 'Helytelen kitöltés!';
};

// Show the error message
var showError = function (field, error) {
   // Add error class to field
   field.classList.add('error');

   // Get field id or name
   var id = field.id || field.name;
   if (!id) return;

   // Check if error message field already exists
   // If not, create one
   var message = field.form.querySelector('.error-message#error-for-' + id );
   if (!message) {
       message = document.createElement('div');
       message.className = 'error-message';
       message.id = 'error-for-' + id;
       field.parentNode.insertBefore( message, field.nextSibling );
   }

   // Update error message
   message.innerHTML = error;

   // Show error message
   message.style.display = 'block';
   message.style.visibility = 'visible';
};

// Remove the error message
var removeError = function (field) {
    // Remove error class to field
    field.classList.remove('error');

    // Get field id or name
    var id = field.id || field.name;
    if (!id) return;

    // Check if an error message is in the DOM
    var message = field.form.querySelector('.error-message#error-for-' + id + '');
    if (!message) return;

    // If so, hide it
    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden';
};

// Listen to all blur events
document.addEventListener('blur', function (event) {
    if (!event.target.form.classList.contains('validate')) return;

    // Validate the field
    var error = hasError(event.target);

    // If there's an error, show it
    if (error) {
        showError(event.target, error);
    }

    // Otherwise, remove any existing error message
    removeError(event.target);
}, true);

// Check all fields on submit
document.addEventListener('submit', function (event) {

    // Only run on forms flagged for validation
    if (!event.target.classList.contains('validate')) return;

    // Get all of the form elements
    var fields = event.target.elements;

    // Validate each field
    // Store the first field with an error to a variable so we can bring it into focus later
    var error, hasErrors;
    for (var i = 0; i < fields.length; i++) {
        error = hasError(fields[i]);
        if (error) {
            showError(fields[i], error);
            if (!hasErrors) {
                hasErrors = fields[i];
            }
        }
    }

    // If there are errrors, don't submit form and focus on first element with error
    if (hasErrors) {
        event.preventDefault();
        hasErrors.focus();
    }

    // Otherwise, let the form submit normally
    // Write here the Ajax form submit process

}, false);