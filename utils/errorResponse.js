class ErrorResponse extends Error {
    constroctor(message, statusCode){

        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;