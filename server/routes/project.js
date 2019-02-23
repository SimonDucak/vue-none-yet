const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getProjectAPI,
  createProject
} = require("../handlers/project");

router.route("/")
  .get(getProjectAPI)
  .post(createProject);

module.exports = router;
