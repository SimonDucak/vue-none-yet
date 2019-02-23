const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const PORT = 8081;

/*const ApiProjectRoutes = require("./routes/project");*/

app.use(bodyParser.json());

/*app.use("/portfolio", projectRoutes);*/

app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
   console.log(`Server is starting on port ${PORT}`);
});