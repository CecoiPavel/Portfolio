var typed = new Typed(".multiple-text", {
    strings: ["Sofware Developer", ".Net Developer", "BackEnd Developer", "Web Developer", "Christian" ],
    
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1000,
    loop: true
})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("topp", window.scrollY > 0);
})

let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => { 
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop;
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height) { 
            navLinks.forEach(links => { 
                links.classList.remove('active'); 
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); 
            });
        };
    });
};