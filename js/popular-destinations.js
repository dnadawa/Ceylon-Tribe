let section = document.getElementsByClassName('section');

//set active nav item
for(let i=0;i<section.length;i++) {
    let navItem = document.getElementsByClassName('nav-item');
    window.addEventListener('scroll', function () {
        if ((window.scrollY > section[i].offsetTop - 150) && (window.scrollY < section[i].offsetTop + section[i].offsetHeight - 150)) {
            navItem[i].classList.add('active');
        } else {
            navItem[i].classList.remove('active');
        }
    });
}

function showBackToTopButton () {
    let backToTop = document.getElementById('back-to-top');

    if(window.scrollY > 150){
        backToTop.style.display = 'block';
    }
    else{
        backToTop.style.display = 'none';
    }
}

window.addEventListener('load', showBackToTopButton);


//lazy load
window.addEventListener("scroll", function(){
    showBackToTopButton();

    let reveals = document.querySelectorAll(".animate");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
});