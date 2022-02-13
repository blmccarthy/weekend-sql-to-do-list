CREATE TABLE todo (
    "id" serial PRIMARY KEY,
    "task_desc" VARCHAR(150) NOT NULL,
    "completed" BOOLEAN
);

INSERT INTO todo (task_desc, completed)
VALUES ('Complete to do list for weekend assignment', FALSE),
('Make Dinner', FALSE),
('Run  to Target to get more Cat Food', FALSE),
('Example of Completed Task', TRUE);