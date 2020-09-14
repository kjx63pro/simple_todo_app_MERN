const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the Todo App with Backend...' });
});

// Define Routes
app.use('/api/todos', require('./routes/api/todos'));

// Production: PORT vs Development:5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
