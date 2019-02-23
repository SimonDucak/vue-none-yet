const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
module.exports.Project = require("./project");

mongoose.connect("mongodb://noneyetAdmin:CvtfSvpcdJuhCy5@ds221645.mlab.com:21645/none_yet", {
    keepAlive: true,
    useNewUrlParser: true
});
module.exports.ProjectGroup = require("./project_group");
