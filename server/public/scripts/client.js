// STARTUP CLIENT ----------------------------------------------

$(readyNow);

function readyNow(){
    getToDoList();
    $('#btn-submit').on('click', submitTask);
    $('#tbl-todo-list').on('click', '#btn-delete', deleteTask)
    $('#tbl-todo-list').on('click', '#checkbox', updateStatus)
}

// GLOBAL VARS -------------------------------------------------

// GET ---------------------------------------------------------

function getToDoList(){
    console.log('in getToDoList');
    
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).then(function(res){
        console.log('in getToDoList .then', res);
        renderToDom(res);
    }).catch(function(err){
        console.log('getToDoList .catch err:', err);
    })
}

// POST --------------------------------------------------------

function submitTask(){
    console.log('in submitTask');
    
    $.ajax({
        type: 'POST',
        url: '/todo',
        data: {
            task_desc: $('#inp-task').val(),
        }
    }).then(function(res){
        console.log('submitTask .then');
        $('#inp-task').val('');
        // Re-render to-do list
        getToDoList();
    }).catch(function(err){
        console.log('submitTask .catch', err);
        alert('Error submitting task to server:', err)
    })
    
}

// PUT ---------------------------------------------------------

function updateStatus(){
    let id = $(this).closest('tr').data().id
    let isComplete = $(this).closest('#checkbox').data().checked
    console.log('in updateStatus', id, isComplete);

    $.ajax({
        type: 'PUT',
        url: `/todo/${id}`,
        data: {
            completed: isComplete
        }
    }).then(function(res){
        console.log('in updateStatus .then');
        getToDoList();
    }).catch(function(res){
        console.log('in updateStatus .catch', res);
        alert('Error updating task')
    })
    
}

// DELETE ------------------------------------------------------

function deleteTask(){
    console.log('in deleteTask');
    let taskID = $(this).closest('tr').data().id;
    console.log('taskID:', taskID);
    
    $.ajax({
        type: `DELETE`,
        url: `/todo/${taskID}`
    })
    .then((result) => {
        console.log('in deleteTask .then');
        // Re-render to-do list
        getToDoList();
    }).catch((err) => {
        console.log('in deleteTask .catch', err);
        alert('Error: Unable to delete task at this time', err)
    });
}

// OTHER FUNCTIONS ---------------------------------------------

function renderToDom(tasklist){
    console.log('in renderToDom');
    // Empty to-do list
    $('#tbody-todo-list').empty();
    for (let task of tasklist){
        // Enable checkmark & strikethrough class if complete
        let isChecked = '';
        let addClass = '';
        if (task.completed === true){
            isChecked = 'checked';
            addClass = 'class="completed"';
        }
        // Append to-do list
        $('#tbody-todo-list').append(`
        <tr ${addClass} data-id="${task.id}">
            <td><input type="checkbox" class="form-check-input" id="checkbox" data-checked="${task.completed}" ${isChecked}></td>
            <td>${task.task_desc}</td>
            <td><button class="btn btn-danger" id="btn-delete">Delete</button></td>
        </tr>
        `);
    }
}