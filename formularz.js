const form=document.querySelector('form')
const antybot=document.getElementById('antybot')
const zgoda=document.getElementById('zgoda')
const ostrzezenie=document.getElementById('ostrzezenie')
const wyslij=document.querySelector('button')

form.addEventListener('submit', function(e){
    if(antybot.checked){
        e.preventDefault()
        alert("Wykryto bota! Formularz nie został wysłany")
        return
    }

    if(!zgoda.checked){
        e.preventDefault()
        ostrzezenie.innerHTML="W celu wysłania formularza kontaktowego wymagane jest zapoznanie się, oraz zaznaczenie zgody na przetwarzanie twoich danych osobowych"
        return
    }
})
