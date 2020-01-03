const ErrorResponce = require('../utils/errorResponse');

const errorHandler = (err, req, res, next)=>{
    let error = {...err}

    error.message = err.message;

    //Log to console for dev
    console.log(err.stack.red);
    
    //Mongoose bad ObjId
    if(err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`
        error = new ErrorResponce(message, 404);
    }

    if(err.code === 11000) {
        const message = `Duplicate field value entered`
        error = new ErrorResponce(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;