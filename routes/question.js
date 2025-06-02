const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/create', questionController.create);
router.get('/read', questionController.readAll);
router.get('/read/:id', questionController.read);
router.post('/update', questionController.update);
router.post('/delete', questionController.delete);

module.exports = router;
