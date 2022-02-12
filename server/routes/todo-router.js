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

// PUT ---------------------------------------------------------

// DELETE ------------------------------------------------------

// OTHER FUNCTIONS ---------------------------------------------

// EXPORTS -----------------------------------------------------

module.exports = todoRouter;