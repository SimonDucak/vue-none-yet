const db = require("../models/");

exports.getProjectAPI = async function(req,res,next) {
  try {
    let projects = await db.Project.find().populate("templates", {
      type: true
    });
    return res.status(200).json(projects);
  } catch (err) {
    return next(err);
  }
};

exports.createProject = async function(req,res,next) {
  try {
    let newProject = await db.Project.create({
      name: req.body.name,
      urlPath: encodeURI(req.body.name.split(" ").join("-")),
      description: req.body.description,
      tags: req.body.tags
    });

    return res.status(201).json(newProject);
  } catch (err) {
    return next(err);
  }
};

exports.updateProject = async function(req,res,next) {
  try {
    let foundProject = await db.Project.findOneAndUpdate(
        { urlPath: req.params.name},
        {
          name: req.body.name,
          urlPath: encodeURI(req.body.name.split(" ").join("-")),
          description: req.body.description,
          tags: req.body.tags
        }
      );

    return res.status(200).json(foundProject);
  } catch (err) {
    return next(err);
  }
};

exports.removeProject = async function(req,res,next) {
  try {
    let foundProject = await db.Project.findOneAndDelete({
      urlPath: req.params.name
    });

    return res.status(200).json(foundProject);
  } catch(err) {
    return next(err);
  }
};

exports.createTemplate = async function(req,res,next) {
  try {
    let foundProject = await db.Project.findOne({
      urlPath: req.params.name
    });

    let newTemplate = await db.Template.create({
      type: req.body.type
    });

    newTemplate.project.id = foundProject.id;
    await newTemplate.save();

    foundProject.templates.push(newTemplate);
    await foundProject.save();

    return res.status(200).json(newTemplate);
  } catch(err) {
    return next(err);
  }
};

exports.updateTemplate = async function(req,res,next) {
  try {
    let foundTemplate = await db.Template.findByIdAndUpdate(req.params.id, {
      type: req.body.type
    });

    return res.status(200).json(foundTemplate);
  } catch(err) {
    return next(err);
  }
};