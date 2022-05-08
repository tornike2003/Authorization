const btn = document.querySelector(".btn")
const body = document.querySelector('body')
const wrongpass = document.querySelector('.wrongpass')
const blank = document.querySelector('.blank')


btn.addEventListener('click', function () {
    const login = document.querySelector("#login").value
    const pass = document.querySelector("#pass").value
    if (login === 'toko' & pass === 'toko') {
        window.location.href = "page2.html"
    } else if (login === "" & pass === "") {
        wrongpass.classList.add('hidden')
        blank.classList.remove('hidden')
    } else if (login !== 'toko' & pass !== 'toko') {
        blank.classList.add('hidden')
        wrongpass.classList.remove('hidden')
    }
})