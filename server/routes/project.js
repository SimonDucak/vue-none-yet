const express = require("express");
const router = express.Router({ mergeParams: true });

const {
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
  .get(getProjectAPI)
  .post(createProject);

router.route("/:name")
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
