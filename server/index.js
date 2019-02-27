const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./handlers/error");
const PORT = 8081;

app.use(bodyParser.json());
app.use(cors());

const ProjectRoutesAPI = require("./routes/project");
app.use("/api/", ProjectRoutesAPI);

app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
   console.log(`Server is starting on port ${PORT}`);
});