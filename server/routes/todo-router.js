// STARTUP SERVER ----------------------------------------------

const express = require('express');
const todoRouter = express.Router();
// DB CONNECTION
const pool = require('../modules/pool');

// GLOBAL VARS -------------------------------------------------

// GET ---------------------------------------------------------

todoRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "todo" ORDER BY "id";';
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch( err => {
        console.log('error getting todo', err);
        res.sendStatus(500);
    });
});

// POST --------------------------------------------------------

todoRouter.post('/', (req, res) => {
    let task = req.body.task_desc;
    console.log('in post', task);
    let queryText = `INSERT INTO todo (task_desc, completed) VALUES ($1, FALSE);`;
    pool.query(queryText, [task])
    .then((result) => {
        console.log('in POST .then');
        res.sendStatus(200);
    }).catch((err) => {
        console.log('in POST .catch:', err);
        res.sendStatus(500)
    });

})

// PUT ---------------------------------------------------------

todoRouter.put('/:id', (req, res) => {
    let isComplete = req.body.completed;
    let id = req.params.id;
    // Toggles isComplete Status upon clicking checkmark
    if (isComplete === "true"){
        isComplete = false;
    }
    if (isComplete === "false"){
        isComplete = true;
    }
    let queryText = `UPDATE "todo" SET "completed" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [isComplete, id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((result) => {
        console.log('todoRouter.put error:', result);
        res.sendStatus(500);
    });
});

// DELETE ------------------------------------------------------

todoRouter.delete('/:id', (req, res) => {
    console.log('in delete');
    let reqID = req.params.id;
    let queryText = `DELETE FROM "todo" WHERE "id" = $1;`;
    pool.query(queryText, [reqID])
    .then((result) => {
        console.log('in delete.then');
        res.sendStatus(200);
    }).catch((err) => {
        console.log('in delete.catch', err);
        res.sendStatus(500);
    })
})

// OTHER FUNCTIONS ---------------------------------------------

// EXPORTS -----------------------------------------------------

module.exports = todoRouter;