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



### Styling

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - [] background color of the page
  - [] font family and size
  - [] text color & or background color of tasks *to show whether or not they have been completed*


  ## STEPS: 

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

[] 6. DELETE
* deletes task from task list
    [] a. Client AJAX
    [] b. send data-id to server to delete
    [] c. client re-renders list with GET

[] 7. PUT
* mark task as complete 
    [] a. Client AJAX
    [] b. send data-id to server
        -- UPDATE SQL query text
    [] c. client re-renders list with GET


    
// GLOBAL VARS -------------------------------------------------

// GET ---------------------------------------------------------

// POST --------------------------------------------------------

// PUT ---------------------------------------------------------

// DELETE ------------------------------------------------------

// OTHER FUNCTIONS ---------------------------------------------