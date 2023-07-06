let toDoInput = document.querySelector('#toDoText');
let addButton = document.querySelector('#add');
let toDoList = document.querySelector('#toDoList');

console.log(toDoInput)
console.log(addButton)
console.log(toDoList)

addButton.addEventListener('click', function() {
    // Stores text currently inside input field
    let toDoText = toDoInput.value;
    console.log(toDoText)

    // Clear out the input field for another item
    toDoInput.value = ""

    let newToDo = document.createElement('li');
    newToDo.innerText = toDoText

    toDoList.appendChild(newToDo)

    newToDo.addEventListener('click', function(e) {
        
        newToDo.classList.toggle('crossed-off')

        setTimeout(() => {
            this.remove()
        }, 1000)
})

})


toDoList.appendChild(newTodo)
