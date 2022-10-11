const hamburgerMenu =document.querySelector(".hamburgerMenu");

hamburgerMenu.addEventlistener("click", function(event){
    Event.target.classList.toggle("clicked");
})