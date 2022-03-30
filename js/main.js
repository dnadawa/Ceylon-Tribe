//https://alvarotrigo.com/blog/css-animations-scroll/
window.addEventListener("scroll", function(){
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

let destinations = document.getElementsByClassName('container');
for(let i=0;i<destinations.length;i++){
    destinations[i].addEventListener('click', function () {
        window.location.href = "popular-destinations.html";
    });
}