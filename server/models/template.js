const mongoose = require("mongoose");
const Project = require("./project");

const templateSchema = new mongoose.Schema(
  {
    type: {
      type: Number,
      required: true
    },
    project: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
      }
    }
  }
);

templateSchema.pre("remove", async function(next) {
  try {
    let project = await Project.findById(this.project.id);
    project.template.remove(this.id);
    await project.save();
    return next();
  } catch(err) {
    return next(err);
  }
});

const Template = mongoose.model("Template", templateSchema);
module.exports = templateSchema;
