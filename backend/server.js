const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./data/data");
const cors = require('cors');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes =require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config();
app.use(cors());
connectDB();

app.use(express.json());   //to accept json data

app.get('/', (req,res) => {
     res.send("API is running successfully");
});

app.use('/api/user',userRoutes)

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(`${5000}`,console.log(`Server started on PORT ${PORT}`.yellow.bold));