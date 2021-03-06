const express = require('express');
const dotenv = require('dotenv'); 
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const colors = require('colors');

//Load env vars
dotenv.config({path: './config/config.env'});

//Connect to database
connectDB();

//Route files
const bootcampRoutes = require('./routes/bootcamps');

const app = express();

//Body Parser
app.use(express.json());

//Middlewares

//Dev logging middleeare
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcampRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandle promise rejections
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err}`.red.bold);
    //Close server & exit process
    server.close(()=>process.exit(1));
})