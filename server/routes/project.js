const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getProjectAPI,
  createProject,
  updateProject,
  removeProject,
  createTemplate,
  updateTemplate
} = require("../handlers/project");

router.route("/")
  .get(getProjectAPI)
  .post(createProject);

router.route("/:name")
  .put(updateProject)
  .delete(removeProject);

router.route("/:name/template")
  .post(createTemplate);

router.route("/:name/template/:id")
  .put(updateTemplate);

module.exports = router;
