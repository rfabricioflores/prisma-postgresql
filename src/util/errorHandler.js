const errorHandler = (err, req, res, next) => {
    if (err) {
        console.log(`\nAn error of type ${err.name} ocurred:`);
        console.log("==============================")
        console.log(`Trigered by a ${req.method} request at ${req.url}`)
        console.log(err)
        console.log("==============================")

        const errorType = err.constructor.name;

        switch (errorType) {
            case 'AppError':
                res.status(500).json({ error: err.message });
                break;
            case 'SyntaxError':
                res.status(500).json({ error: "Invalid JSON, check your json content and try again." });
                break;
            case 'PrismaClientValidationError':
                res.status(406).json({ error: "Validation error, try again." });
                break;
            default:
                res.status(500).json({ error: "Serverside error, try again." });
        }
    }
}

export default errorHandler;