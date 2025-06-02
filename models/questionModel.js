const db = require("../configs/db");

const QuestionModel = {
  // 1. Create a new question
  create: (data, callback) => {
    const { text, options, answer, category } = data;
    const query = `INSERT INTO questions (text, options, answer, category) VALUES (?, ?, ?, ?)`;
    db.query(query, [text, JSON.stringify(options), answer, category], (err, result) => {
      if (err) return callback(err);
      callback(null, {
        message: "Question inserted",
        questionId: result.insertId,
      });
    });
  },

  // 2. Get all questions
  getAll: (callback) => {
    const query = `SELECT * FROM questions`;
    db.query(query, (err, results) => {
      console.log(results)
      if (err) return callback(err);
      callback(null, results);
    });
  },

  // 3. Get question by ID
  getById: (id, callback) => {
    const query = `SELECT * FROM questions WHERE id = ?`;
    db.query(query, [id], (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, null);
      callback(null, results);
    });
  },

  // 4. Update a question
  update: (data, callback) => {
    const { id, text, options, answer, category } = data;
    const query = `UPDATE questions SET text = ?, options = ?, answer = ?, category = ? WHERE id = ?`;
    db.query(query, [text, JSON.stringify(options), answer, category, id], (err, result) => {
      if (err) return callback(err);
      callback(null, { message: "Question updated" });
    });
  },

  // 5. Delete a question
  delete: (id, callback) => {
    db.query("DELETE FROM questions WHERE id = ?", [id], (err, result) => {
      if (err) return callback(err);
      callback(null, { message: "Question deleted" });
    });
  }
};

module.exports = QuestionModel;
