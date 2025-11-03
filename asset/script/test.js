let btn = document.querySelector("#ajout")
let tacheAjout = document.querySelector("#tache")
let listContainer = document.querySelector(".list")
let msgError = document.querySelector("#error")
let count = 0

document.getElementById("Todolist").addEventListener("submit", function (event) {
    event.preventDefault()
    updateBtn()
});
function updateBtn() {
    if (tacheAjout.value != "") {
        let newDiv = document.createElement("div")
        let newList = document.createElement("li")
        let newsuppBtn = document.createElement("button")

        msgError.textContent = ""

        newsuppBtn.textContent = "supprimez"
        newsuppBtn.setAttribute("class", "suppbtn")
        listContainer.style.display = "block"
        listContainer.style.display = "space"
        listContainer.appendChild(newDiv)
        newDiv.appendChild(newList)
        newDiv.appendChild(newsuppBtn)
        newList.textContent = tacheAjout.value
        count++

        newsuppBtn.addEventListener("click", function () {
            listContainer.removeChild(newDiv)
            count--
            if (count == 0) {
                listContainer.style.display = "none"
            }


        })
    } else {
        msgError.textContent = "Entrez une tache"
    }
}

