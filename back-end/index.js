const express = require('express');

const connectDB = require('./db/connect');
require('dotenv').config();

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);

const port = process.env.PORT || 8800;

const start = async () => {
   try {
      await connectDB();
      app.listen(port, console.log(`Server is listening on port ${port}`));
   } catch (error) {
      console.log(error);
   }
};

start();
