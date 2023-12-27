const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

router.post('/submit', surveyController.submitSurvey);
router.get('/surveys', surveyController.getSurveys);

module.exports = router;
