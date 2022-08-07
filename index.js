const nav = document.getElementById("nav")
const open = document.getElementById("open-btn")
const exit = document.getElementById("exit-btn")

open.addEventListener("click", function(){
    nav.classList.add("open-nav")
    console.log(open)
})

exit.addEventListener("click", function(){
    nav.classList.remove("open-nav")
    console.log(exit)
})