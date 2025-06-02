const Question = require("../models/questionModel");

exports.create = (req, res) => {
  Question.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Question created", id: result.insertId });
  });
};

exports.read = (req, res) => {
  let id = req.params.id;
  Question.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0] || {});
  });
};

exports.readAll = (req, res) => {
  Question.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.update = (req, res) => {
  Question.update(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Question updated" });
  });
};

exports.delete = (req, res) => {
  Question.delete(req.body.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Question deleted" });
  });
};
