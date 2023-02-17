let inputElem=document.querySelector('input')
let spanElem=document.querySelector('span')
let inputMaxlength=inputElem.getAttribute('maxlength')

inputElem.addEventListener('keyup',()=>{
    spanElem.innerHTML=inputMaxlength-inputElem.value.length
})