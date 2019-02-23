const db = require("../models/");

exports.getProjectAPI = async function(req,res,next) {
  try {
    let projects = await db.Project.find().populate("template");
    return res.status(200).json(projects);
  } catch (err) {
    return next(err);
  }
};

exports.createProject = async function(req,res,next) {
  try {
    let newProject = await db.Project.create({
      name: req.body.name,
      description: req.body.description,
      tags: req.body.tags
    });

    return res.status(201).json(newProject);
  } catch (err) {
    return next(err);
  }
};