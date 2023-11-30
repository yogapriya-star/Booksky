//Select overlay
var popupoverlay = document.querySelector(".popup-overlay");

//Select popupbox
var popupbox = document.querySelector(".popup-box")

//Select Add-Popup-Button
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//Select Container
var container = document.querySelector(".container")

//Select Add Button
var addbook = document.getElementById("add-book")

//Select book-title-input
var booktitleinput = document.getElementById("book-title-input")

//Select book-author-input
var bookauthorinput = document.getElementById("book-author-input")

//Select book-description-input
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function (event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
                     <h5>${bookauthorinput.value}</h5>
                     <p>${bookdescriptioninput.value}</p>
                     <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    booktitleinput.value=''
    bookauthorinput.value=''
    bookdescriptioninput.value=''
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

//Select Cancel Button
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function (event){
    event.preventDefault()
    booktitleinput.value=''
    bookauthorinput.value=''
    bookdescriptioninput.value=''
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})


function deletebook(event){
    event.target.parentElement.remove()
}
