const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getProjectsAPI,
  getProjectAPI,
  getTemplateAPI,
  createProject,
  updateProject,
  removeProject,
  createTemplate,
  updateTemplate,
  removeTemplate,
} = require("../handlers/project");

// Project
router.route("/")
  .get(getProjectsAPI)
  .post(createProject);

router.route("/:name")
  .get(getProjectAPI)
  .put(updateProject)
  .delete(removeProject);

// Template
router.route("/templates")
  .get(getTemplateAPI);

router.route("/:name/template")
  .post(createTemplate);

router.route("/template/:id")
  .put(updateTemplate)
  .delete(removeTemplate);

module.exports = router;
