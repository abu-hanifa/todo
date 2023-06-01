const list = document.getElementById("list")
const input = document.getElementById("input")
const button = document.getElementById("button")

button.addEventListener('click', (e) => {
    e.preventDefault()
   
    const li = document.createElement("li")
    if(input.value === ''){
        return null
    }


    li.textContent = input.value;


    const removeButton = document.createElement("button")
    removeButton.textContent = "x"

    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    li.prepend(checkbox)

    checkbox.addEventListener('click', () => {
        if(checkbox.checked === true) {
            li.style.opacity = '0.33'
        }
        if (checkbox.checked === false) {
            li.style.opacity = '1'
        }

    })

    removeButton.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })

    li.append(removeButton)

    list.append(li)

    input.value = ''
})