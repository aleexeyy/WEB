let result = document.querySelector(".calculator-screen")
let listNums = document.querySelectorAll(".nums")
let listOperators = document.querySelectorAll(".operator")
let equal = document.querySelector(".equal-sign")
let clear = document.querySelector(".all-clear")
let checkequal = false
let buffer = document.querySelector(".bufferbox")
let ul = document.querySelector(".bufferlist")
let showbuffer = document.querySelector(".showbuffer")
let checkoperators = false
let downloadbutton = document.querySelector(".download")
let dot = document.querySelector(".dot")
let savefile = []

for (let i = 0; i < listNums.length; i += 1) {
   listNums[i].addEventListener("click", function() {
      if (result.value == "0") {
         result.value = ""
      }
      if (checkequal == true) {
         checkequal = false
         result.value = ""
      }
      checkoperators = false
      result.value = result.value + listNums[i].value
   })
}

for (let i = 0; i < listOperators.length; i += 1) {
   listOperators[i].addEventListener("click", function() {
      checkequal = false
      console.log(result.value)
      if (checkoperators == true) {
         result.value = result.value.substring(0, result.value.length - 1)
      }
      result.value = result.value + listOperators[i].value
      checkoperators = true
   })
}
equal.addEventListener("click", function() {
   let li = document.createElement("li")
   li.innerHTML = result.value + " = "
   result.value = eval(result.value)
   checkequal = true
   li.innerHTML = li.innerHTML + result.value + " | "
   ul.append(li)
   savefile.push(li.innerHTML)
   checkoperators = false
})

clear.addEventListener("click", function() {
   result.value = "0"
   checkequal = false
   checkoperators = false
})

showbuffer.addEventListener("click", function() {
   buffer.classList.toggle("buffersee")
})

dot.addEventListener("click", function() {
   if (Number.isInteger(result.value) || result.value == "0") {
   result.value += "."
   checkequal = false
   checkoperators = true
   }
})
downloadbutton.onclick = function () {
   let file = new File(savefile, "result.txt", {
      type: "text/plain",
      })
   let link = document.createElement('a')
   link.download = file.name
   link.href = URL.createObjectURL(file)
   link.click()
   URL.revokeObjectURL(link.href)
 }
