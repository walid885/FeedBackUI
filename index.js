const ratingEls = document.querySelectorAll(".rating"); 

const btnel = document.getElementById("btn")
const containerEL = document.getElementById("container")
let selectedRating =""

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(event)=>{
        removeActive()
        selectedRating= event.target.innerText || event.target.parentNode.innerText ;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")

    })
})


btnel.addEventListener("click",()=>{
    if ( selectedRating !== ""){
        containerEL.innerHTML = `
        <strong> Thank you </strong>
        <br> <br>
        <strong> FeedBack : ${selectedRating} </strong>
        <p> We will use your feedback in order to improve our customer support! </p>
        `
    }
})

function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active")
    })
}