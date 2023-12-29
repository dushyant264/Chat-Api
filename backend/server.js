const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const cors= require('cors');
const {connectDB} = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config(); 
connectDB();
const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send('API is running smoothly...');
});

app.use('/api/user', userRoutes);

app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

const Port= process.env.Port || 5000;

app.listen(5000, console.log(`Server running on port ${Port}` .yellow.bold));