let slideIndex = 1
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex)

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1)
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1)
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n)
}
/* Функция перелистывания: */
function showSlides(n) {
    
    
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item")
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    let selected = document.getElementsByClassName("el" + slideIndex)
    document.getElementsByClassName("el1")[0].style.backgroundColor = "red"
    document.getElementsByClassName("el2")[0].style.backgroundColor = "red"
    document.getElementsByClassName("el3")[0].style.backgroundColor = "red"
    selected[0].style.backgroundColor = "blue"
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none"
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block"
}
setInterval(function() {
    nextSlide()
}, 3000)
