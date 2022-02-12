// STARTUP CLIENT ----------------------------------------------

$(readyNow);

function readyNow(){
    getToDoList();
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

// PUT ---------------------------------------------------------

// DELETE ------------------------------------------------------

// OTHER FUNCTIONS ---------------------------------------------

function renderToDom(list){
    console.log('in renderToDom');
    // Empty to-do list
    $('#tbl-todo-list').empty();
    for (let li of list){
        // Enable checkmark if complete
        let isChecked = '';
        if (li.completed === true){
            isChecked = 'checked';
        }
        // Append to-do list
        $('#tbl-todo-list').append(`
        <tr data-id="${li.id}">
            <td><input type="checkbox" ${checked}></td>
            <td>${li.task_desc}</td>
            <td><button>Delete</button></td>
        <tr>
        `);
    }
}