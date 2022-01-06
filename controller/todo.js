const pool = require('../db/db')

//Get All Todos
const getTodos = async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM todo");
      res.json(data.rows);
    } catch (error) {
      console.log(error);
    }
}

//Create New Todo
const createTodo = async (req, res) => {
     try {
       const { todo_title, todo_desc } = req.body;

       const data = await pool.query(
         "INSERT INTO todo (todo_title,todo_desc) values ($1,$2) returning *",
         [todo_title, todo_desc]
       );

       res.json(data.rows);
     } catch (error) {
       console.log(error);
     }
}

//Get Todo by id
const getTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await pool.query("SELECT * FROM todo WHERE id=($1)", [id]);

    res.json(data.rows);
  } catch (error) {
    console.log(error);
  }
};

//Update Todo by id
const updateTodo = async (req, res) => {
     const { todo_title, todo_desc, todo_completed } = req.body;
     const { id } = req.params;

     try {
       const data = await pool.query(
         "UPDATE todo set todo_title=($1), todo_desc=($2), todo_completed=($3) WHERE id=($4) RETURNING *",
         [todo_title, todo_desc, todo_completed, id]
       );

       res.json(data.rows);
     } catch (error) {
       console.log(error);
     }
}


//Delete Todo by id
const deleteTodo = async (req, res) => { 

     const { id } = req.params;
     try {
       const data = await pool.query("DELETE FROM todo WHERE id=($1)", [id]);

       res.json(data.rows);
     } catch (error) {
       console.log(error);
     }
}

//Delete All Todos
const deleteTodos = async (req, res) => {
      try {
        const data = await pool.query("TRUNCATE TABLE todo");

        res.json(data.rows);
      } catch (error) {
        console.log(error);
      }
}

module.exports = {
    getTodo,
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    deleteTodos
}