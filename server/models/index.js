const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://noneyetAdmin:CvtfSvpcdJuhCy5@ds221645.mlab.com:21645/none_yet", {
  keepAlive: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

module.exports.Project = require("./project");
module.exports.Template = require("./template");
