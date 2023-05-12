const sv = document.querySelector("#sv")
const fi = document.querySelector("#fi")
const language = document.querySelector(".lang")
const input = document.querySelector(".input")
const container = document.querySelector(".Pcontainer")

const translations = {
    Svenska: {
        title: "Du har valt Svenska",
        inputPlaceholder: "Skriv något...",
        buttonLabel: "Lägg till"
    },
    Suomi: {
        title: "Olet valinnut Suomen kielen",
        inputPlaceholder: "Kirjoita jotain...",
        buttonLabel: "Lisää"
    }

}

function saveToLocalStorage() {
    localStorage.setItem("savedText", container.innerHTML)
}

function loadFromLocalStorage() {
    const savedText = localStorage.getItem("savedText")
    if (savedText) {
        container.innerHTML = savedText
    }
}

input.placeholder = translations[localStorage.getItem("lang")].inputPlaceholder
language.innerText = translations[localStorage.getItem("lang")].title

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let newElement = document.createElement("p")
        container.appendChild(newElement)
        newElement.innerHTML = input.value
        input.value = ""
        saveToLocalStorage()
    }
})

function showLang() {
    language.innerText = translations[localStorage.getItem("lang")].title
}

function chosenLang() {
    sv.addEventListener("click", function () {
        localStorage.setItem("lang", "Svenska")
        showLang()
        input.placeholder = translations[localStorage.getItem("lang")].inputPlaceholder
    })

    fi.addEventListener("click", function () {
        localStorage.setItem("lang", "Suomi")
        showLang()
        input.placeholder = translations[localStorage.getItem("lang")].inputPlaceholder
    })
}

chosenLang()
loadFromLocalStorage()
