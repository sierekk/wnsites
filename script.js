const dropdown = document.querySelector('.dropdown')
const button = document.querySelector('.dropdown button')
button.addEventListener('click', function(e){
    e.stopPropagation();
    dropdown.classList.toggle('active')
})
document.addEventListener('click', function(){
    dropdown.classList.remove('active')
})
document.querySelectorAll('.dropdown a').forEach(link =>{
    link.addEventListener('click', () =>{
        dropdown.classList.remove('active')
    })
})

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initialSlider)
function initialSlider(){
    if(slides.length>0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000) 
    }
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    })
    slides[slideIndex].classList.add("displaySlide")
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--
    showSlide(slideIndex)
}
function nextSlide(){
    clearInterval(intervalId);
    slideIndex++
    showSlide(slideIndex)
}



const uslugi = document.querySelectorAll('.oferta .usluga'); //bierzemy z query selectora div ofertra, w ktorym sa uslugi

uslugi.forEach(usluga => { //dla kazdej uslugi zrob:
    const opis=usluga.querySelector('.opis') //pobierz jej opis
    const tresc=usluga.querySelector('.tresc') //pobierz jej tresc
    const strzalka=usluga.querySelector('.strzalka')
    opis.addEventListener('click', () => { //klikniecie
        if(usluga.classList.contains('open')){ //jezeli usluga ma open to: zmien te style
            tresc.style.maxHeight= null
            tresc.style.paddingTop = 0
            tresc.style.paddingBottom = 0
            usluga.classList.remove('open')
            strzalka.style.transform="rotate(0deg)"
        }else{ // w przeciwnym wypadku dodaj te style
            tresc.style.maxHeight= tresc.scrollHeight + 'px'
        tresc.style.paddingTop = '25px'
        tresc.style.paddingBottom = '25px'
        usluga.classList.add('open');
        strzalka.style.transform="rotate(180deg)"
        }
        
    })
})




