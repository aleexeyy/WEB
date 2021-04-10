const btnbin = document.querySelector(".bin")
const btnclearbin = document.querySelector(".clearbin")
basket = document.querySelector(".test")

function renderconfirmwindow(self) {
   let div = document.createElement("div")
   div.classList.add("overlay")
   div.insertAdjacentHTML("afterbegin", `
   <div class="confirmwindow">
   <h1>Do you want to buy this?</h1>
   <div class = "choisediv">
      <button id = "closebtn">Close</button>
      <button id = "buybtn">Buy</button>
   </div>
   </div>
   `
   )
   document.body.appendChild(div)
   const btnclosewindow = document.getElementById("closebtn")
   const btnconfirmbuy = document.getElementById("buybtn")
   btnclosewindow.addEventListener("click", function() {
      div.remove()
   })
   btnconfirmbuy.addEventListener("click", function() {
      const li = document.createElement('li')


      li.innerHTML = self.parentElement.querySelector(".name").innerHTML
      basket.append(li)
      div.remove()
   })

}

btnbin.addEventListener("click", function() {
   basket.classList.toggle("hideelement")
})
btnclearbin.addEventListener("click", function() {
   array = basket.getElementsByTagName("li")
   for (let i = 0; i <= array.length; i++) {
      array[0].remove()
   }
})