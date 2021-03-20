const textInput = document.getElementById("text")
const btnAdd = document.getElementById("buttonAdd")
const list = document.getElementById("list")
const submit = document.getElementById("submit")
submit.onclick = function() {
   const numbreinput = document.getElementById("number")
   height = numbreinput.value
   list.style.height = height*22.22 + "px"
}
let checked = 0
let btnDeletelist = []
let checklist = []
let lilist = []
function checkLength (string) {
   if (string.length > 10) {
      alert("Warning, pls add less symbols")
      return false
   }
   else {
      return true
   }
}
btnAdd.onclick = function() {
   let text = textInput.value
   textInput.value = ""
   console.log(checklist.length)
   if (checklist.length >= height) {
      alert("Change height")
   }
   else {
   if (checkLength(text) == true) {
      let span = document.createElement("span")
      let li = document.createElement("li")
      let checkInput = document.createElement("input")
      let btnDelete = document.createElement("button")

      span.innerHTML = text

      checkInput.type = "checkbox"
      checkInput.classList = "check"

      btnDelete.innerHTML = "+"
      btnDelete.classList = "button"

      li.classList = "list"

      li.appendChild(btnDelete)
      li.appendChild(checkInput)
      li.appendChild(span)

      list.appendChild(li)
      btnDeletelist = document.querySelectorAll(".button")
      checklist = document.querySelectorAll(".check")
      lilist  = document.querySelectorAll(".list")

      for (let i = 0; i < checklist.length; i++) {
         checklist[i].onclick = function() {
            lilist[i].classList.toggle("changecolor")
         }
         btnDeletelist[i].onclick = function() {
            btnDeletelist[i].remove()
            lilist[i].remove()
            checklist[i].remove()
         }
      }
   }
}
}