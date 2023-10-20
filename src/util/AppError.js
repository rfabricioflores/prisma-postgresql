class AppError extends Error {
    constructor(message, status) {
        super();
        Error.captureStackTrace(this, this.constructor)
        this.name = this.constructor.name;
        this.message = message || "Something wrong happened, try again.";
        this.status = status || 500;
    }
}

export default AppError;