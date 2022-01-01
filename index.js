const API_URL = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5"
const notesCont = document.querySelector(".list")
const fetchBtn = document.querySelector('.fetch-btn')
const closeBtn = document.querySelector('.close')
const popUP = document.querySelector('.pop-up')



const fetchCatNotes = async () => {
  notesCont.innerHTML = "";
  const response = await fetch(API_URL)
  const json = await response.json()

  json.forEach(note => {
    const liElement = document.createElement('li');
    liElement.classList.add('note-text')
    liElement.innerText = note.text
    
    notesCont.appendChild(liElement)
  })
}

const closePopUP = () => {
  if (popUP.classList.contains('pop-up')) {
    popUP.classList.remove('pop-up');
    popUP.classList.add('slide-off')
    
    setTimeout(function () {
      popUP.style.display ='none'
    }, 3000);
  }
}


const dontLoadPop = () => {
  window.localStorage.setItem("show", JSON.stringify(false)) 
}

window.onload = function () {  
  const localStorageValue = JSON.parse(window.localStorage.getItem("show"))
  if (localStorageValue === false && popUP.classList.contains('pop-up')) {
    popUP.classList.remove('pop-up');
    popUP.classList.add('none')
    popUP.style.display ='none'
  }
}

fetchBtn.addEventListener("click", fetchCatNotes)
closeBtn.addEventListener("click", closePopUP)
closeBtn.addEventListener("dblclick", dontLoadPop)
