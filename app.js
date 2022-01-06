const express = require('express');

const app = express();

const TodoRoutes = require('./routes/TodoRoutes');

const notFound = require("./middleware/not-found");

app.use(express.json());

app.use('/api/todo/v1', TodoRoutes);

app.use(notFound);

const port = process.env.port || 5000

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}/`);
})