const todolist = [];

function addTask() {
    const taskValue = document.querySelector('#taskInput').value;
    const dateValue = document.querySelector('#dateInput').value;

     

    todolist.push({
        task: taskValue,
        date: dateValue
    });
    
    document.querySelector('#taskInput').value = '';
    document.querySelector('#dateInput').value = '';

    showTasks();
}

function showTasks() {
    let todolisthtml = "";

    for (let i = 0; i < todolist.length; i++) {
        const taskObj = todolist[i];
        const html = `
            
                <div>${taskObj.task} </div>
                <div> ${taskObj.date} </div> 
                <button onclick="todolist.splice(${i}, 1); showTasks()" class="btn-delete">Delete</button>
            
        `;
        todolisthtml += html;
    }

    document.querySelector('#taskList').innerHTML = todolisthtml;
}
