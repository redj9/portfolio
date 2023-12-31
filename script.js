/*=== Background===*/ 
const light = document.querySelector(".light");
const grid = document.querySelector(".hex-grid");
const container = document.querySelector(".container");

container.addEventListener('mousemove', moveLight);

function moveLight(e) {
    const scrollY = document.documentElement.scrollTop;
    
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`
}



/* === Text animation === */ 
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style='transform:rotate(${i * 7.9}deg)'>${char}</span>`
    ).join('')


/* === Header toggle === */
let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-times');
})

/* === Typing effect === */
let typed = new Typed('.auto-input', {
    strings: ['Front-end Developer!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000, 
    loop: true,
})

//Active link status on scroll
let navLinks = document.querySelectorAll('nav ul li a');
console.log(navLinks)
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function(){
    const scrollPos = this.window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active')
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});
