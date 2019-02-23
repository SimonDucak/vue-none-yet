const db = require("../models/");

/*exports.showPortfolio = async function(req,res,next) {
    try {
        let projectGroups = await db.ProjectGroup.find().populate('projects');

        let arr = await projectGroups.map(group => {
            return group.projects.length
        });

        let width = await Math.max(...arr) * 100 + "%";
        let height = await projectGroups.length * 100 + "%";

        const settings = {
            css: ["portfolio"],
            js: ["functions","specific/portfolio"],
            draggable: true
        };

        return res.status(200).render("./project/portfolio", {ProjectGroups: projectGroups, Width: width, Height: height, Settings: settings});
    }catch (err) {
        return next(err);
    }
};*/
