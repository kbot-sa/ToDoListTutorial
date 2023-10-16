//Variables:

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

//Event Listener for add button 

addTask.addEventListener('click', function() {
    
    //Creates a div that will house the task and other buttons
    let task = document.createElement('div');
    task.classList.add('task');

    //Creates the list item(task)
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}` //this inserts the value from the input into the list item
    task.appendChild(li); //inserts the li item into the task div

    //INSIDE TASK DIV:
    let checkButton = document.createElement('button');
    checkButton.innerHTML= '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML= '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    //To make it show in browser:
    if(inputTask.value === '') {
        alert('Please Enter a Task!');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = '';

    checkButton.addEventListener('click', function() {
        checkButton.parentElement.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener('click', function(e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
});

//Event Listener for adding task on enter keypress

inputTask.value.addEventListener("keypress", function (event) {
    if(event.key === "enter") {
        addTask.click();
    }
})