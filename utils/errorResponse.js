class ErrorResponse extends Error{
    //the purpose of this class is to change the status code and the error message in the Error object to what was passed to the class when we first initialized the class in the next function
    constructor(message, statusCode){
        //change the message in the Error object
        super(message)
        //change the statusCode in the Error object
        this.statusCode = statusCode
    }
}
module.exports = ErrorResponse