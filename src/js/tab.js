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