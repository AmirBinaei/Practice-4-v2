let $ = document
let question = $.querySelectorAll('.question')

question.forEach((box) => {
    box.addEventListener('click', (e) => {

        e.target.parentNode.classList.toggle('openBox')

        let value = e.target.parentNode.id
        let clas = ".boxArow"
        let icon =$.querySelector(clas + value)

        icon.classList.toggle('rotate')
    })
})