// STARTUP CLIENT ----------------------------------------------

$(readyNow);

function readyNow(){
    getToDoList();
    $('#btn-submit').on('click', submitTask);
    $('#tbl-todo-list').on('click', '.btn-delete', deleteTask)
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
    $('#tbl-todo-list').empty();
    for (let task of tasklist){
        // Enable checkmark if complete
        let isChecked = '';
        if (task.completed === true){
            isChecked = 'checked';
        }
        // Append to-do list
        $('#tbl-todo-list').append(`
        <tr data-id="${task.id}">
            <td><input type="checkbox" ${isChecked}></td>
            <td>${task.task_desc}</td>
            <td><button class="btn-delete">Delete</button></td>
        <tr>
        `);
    }
}