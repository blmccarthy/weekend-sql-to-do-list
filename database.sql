CREATE TABLE todo (
    "id" serial PRIMARY KEY,
    "task_desc" VARCHAR(150) NOT NULL,
    "completed" BOOLEAN
);

INSERT INTO todo (task_desc, completed)
VALUES ('Complete to do list for weekend assignment', FALSE),
('Another test task description', FALSE),
('I should probably make lunch soon', FALSE),
('Example completed task', TRUE);