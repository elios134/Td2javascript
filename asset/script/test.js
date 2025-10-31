let btn = document.querySelector("#ajout")
let tacheAjout = document.querySelector("#tache")
let listContainer = document.querySelector(".list")

document.getElementById("Todolist").addEventListener("submit", function (event) {
    event.preventDefault()
    updateBtn()
});
function updateBtn() {
    let newDiv = document.createElement("div")
    let newList = document.createElement("li")
    let newsuppBtn = document.createElement("button")

    newsuppBtn.textContent = "supprimez"
    newsuppBtn.setAttribute("class" ,"suppbtn")
    listContainer.style.display ="block"
    listContainer.appendChild(newDiv)
    newDiv.appendChild(newList)
    newDiv.appendChild(newsuppBtn)
    newList.textContent = tacheAjout.value
    
    newsuppBtn.addEventListener("click",function () {
        listContainer.removeChild(newDiv)
        
    })

}


