const express = require('express');
const app = express();
const port = 3000;

// Import route modules
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');
const questionRoutes = require('./routes/question');

app.use(express.json()); // Needed to parse JSON bodies

// Use routes
app.use('/', homeRoutes);
app.use('/users', userRoutes);
app.use('/question', questionRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
