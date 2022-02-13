## Base Mode Tasks

-- DOM ----------------------
* Create a front end experience that allows a user to create a Task.
* Inputs, Buttons, etc

-- CLIENT / SERVER ----------
* [] POST - When the Task is created, it should be stored inside of a database (SQL)
* [] GET -- Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
* [] PUT -- Each Task should have an option to 'Complete'
* [] DEL -- Each Task should have an option to 'Delete'.

* [] PUT -- When a Task is complete, its visual representation should change on the front end. 
* ex. BG of the task container could change from gray to green. 
* ex. The complete option should be  'checked off'. 
* -- Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.

-- SQL ----------------------
* [] SQL Column - Whether or not a Task is complete should also be stored in the database.
* [] SQL Table -- Deleting a Task should remove it both from the front end as well as the Database.



## Ordered STEPS: 

[x] 1. Create Folder/File Structure
[x] 2. Install All Apps
    * [x] npm, express, body-parser, pg
[x] 3. Create DOM wireframe
    * Inputs, buttons, etc

[x] 4. GET 
* gets all checklist items from db
    [x] a. Client AJAX
        -- data-id tr
    [x] b. Array data Testing
        * [x] Hardcode Array in Router
        * [x] Hardcode in SQL Table
        -- Create SQL Table

[x] 5. POST
* add new checklist item
    [x] a. Client AJAX 
    [x] b. Server Router SQL
    [x] c. client re-renders list with GET

[x] 6. DELETE
* deletes task from task list
    [x] a. Client AJAX
    [x] b. send data-id to server to delete
    [x] c. client re-renders list with GET

[x] 7. PUT
* mark task as complete 
    [x] a. Client AJAX
    [x] b. send data-id to server
        -- UPDATE SQL query text
    [x] c. client re-renders list with GET

### Styling

[] 8. Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - [x] background color of the page
  - [x] font family and size
  - [x] text color & or background color of tasks *to show whether or not they have been completed*


## Stretch Goals

For each of your stretch goals, you will be practicing git branching. Please refer to the branching notes for a reminder on commands. Each branch will be merged into master using `--no-ff`. This will allow us to see that you branched your feature when you turn in your code.

- `feature-styling-bootstrap` 

    - [ ]  Add Bootstrap to the front end and style it up!
      -  [x] Buttons -- make the creation buttons and completion buttons green and the delete red.
      -  [x] Inputs -- make your text inputs styled in the bootstrap way
      -  [] Responsive -- make your app responsive to different screen sizes -- check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

- `feature-confirm-delete`

    - [ ]  In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
        - Some styled options are [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) or [Sweet Alerts](https://sweetalert.js.org/guides/): Use the CDN option.

- `feature-ordering-task-query` 

    - [ ]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
    
- `feature-time-completed` 

    - [ ]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.


    
// GLOBAL VARS -------------------------------------------------

// GET ---------------------------------------------------------

// POST --------------------------------------------------------

// PUT ---------------------------------------------------------

// DELETE ------------------------------------------------------

// OTHER FUNCTIONS ---------------------------------------------