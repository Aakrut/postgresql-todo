create database todo_database;

create table todo(

    id serial primary key,
    todo_title varchar(400) not null,
    todo_desc text not null,
    todo_completed boolean default false

);

