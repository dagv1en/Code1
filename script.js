const modal = document.querySelector('.modalWindow')
const modal2 = document.querySelector('.modalWindow2')
const modalBg = document.querySelector('.modalBackground')
const modalBg2 = document.querySelector('.modalBackground2')
const modalTrigger = document.querySelector('.headerModalButton')
const modalTrigger2 = document.querySelector('.introModalButton')
const modalBtn = document.querySelector('.modalClose')
const modalBtn2 = document.querySelector('.modalClose2')
modalTrigger.addEventListener('click', () => {
    if (modal.style.display = 'none') {
       modal.style.display = 'flex'
    }
    else {
       modal.style.display = 'none'
    }
   })
   
   modalBtn.addEventListener('click', (event) => {
       modal.style.display = 'none'
       
   })

   modalTrigger2.addEventListener('click', () => {
    if (modal2.style.display = 'none') {
       modal2.style.display = 'flex'
    }
    else {
       modal2.style.display = 'none'
    }
   })
   
   modalBtn2.addEventListener('click', (event) => {
       modal2.style.display = 'none'
       
   })