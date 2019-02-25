const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      max: 25
    },
    urlPath: {
      type: String,
      required: true,
      unique: true,
      max: 25
    },
    description: {
      type: String,
      required: true,
      min: 3,
      max: 250
    },
    tags: {
      type: Array,
      required: true
    },
    templates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Template"
      }
    ]
  }
);

// projectSchema.pre("remove", async function(next) {
//   try {
//     let foundProject = await db.Project(this.id);
//     console.log(foundProject);
//   } catch(err) {
//     return next(err);
//   }
// });

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;