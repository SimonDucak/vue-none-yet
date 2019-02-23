const mongoose = require("mongoose");
const ProjectGroup = require("./project_group");

const projectSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            unique: true,
            max: 25
        }

      /*  projectGroup: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ProjectGroup"
            }
        }*/
    }
);

projectSchema.pre("remove", async function(next) {
    try {
        let group = await ProjectGroup.findById(this.projectGroup.id);
        group.projects.remove(this.id);
        await group.save();
        return next();
    } catch(err) {
        return next(err);
    }
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;