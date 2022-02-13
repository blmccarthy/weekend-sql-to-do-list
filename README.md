# Weekend SQL To-Do List

## Description

_Duration: Weekend Assignment_

For this assignment, I created a to-do list that stores tasks server side with the ability to delete and mark tasks as complete, which will resort all completed tasks to the bottom.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

[Example Screenshot](https://imgur.com/a/JrJI63u)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- Express
- PostGres
- Body-Parser
- JQuery
- Bootstrap

## Installation

1. Create a database named `todo`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm start` in your terminal
5. Enter `localhost:5000` in your browser to access the DOM

## Usage

1. Upon load, the app will load all pre-existing tasks from server
2. User can enter task in the input and click 'submit' to store task
3. Latest tasks are filtered to the top, and any completed tasks filter to the bottom


## Built With

- HTML 
- CSS
- JavaScript
- SQL

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality!

## Support
If you have suggestions or issues, please email me at [brant.mccarthy@me.com](mailto:brant.mccarthy@me.com)