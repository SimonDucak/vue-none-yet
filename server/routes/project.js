const express = require("express");
const router = express.Router({ mergeParams: true });

/*const {
    createGroup,
    createProject,
    removeGroup,
    removeProject,
    updateProject
} = require("../handlers/project");

router.route("/group")
    .post(createGroup);

router.route("/group/:id")
    .delete(removeGroup);

router.route("/project/:parameter")
    .post(createProject)
    .delete(removeProject)
    .put(updateProject);*/

module.exports = router;
