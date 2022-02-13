// STARTUP SERVER ----------------------------------------------

const express = require('express');
const todoRouter = express.Router();
// DB CONNECTION
const pool = require('../modules/pool');

// GLOBAL VARS -------------------------------------------------

// GET ---------------------------------------------------------

todoRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "todo";';
    pool.query(queryText)
    .then(result => {
        console.log('result.rows:', result.rows);
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

// DELETE ------------------------------------------------------

// OTHER FUNCTIONS ---------------------------------------------

// EXPORTS -----------------------------------------------------

module.exports = todoRouter;