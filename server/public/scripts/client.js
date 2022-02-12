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
    $('#tbl-todo-list').empty();
    for (let li of list){
        $('#tbl-todo-list').append(`
        <tr>
            <td></td>
            <td>${li.task_desc}</td>
            <td><button>Delete</button></td>
        <tr>
        `);
    }
}