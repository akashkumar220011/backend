const Survey = require('../models/Survey');

exports.submitSurvey = async (req, res) => {
  console.log("hii ", req.body);
  const { name, gender, nationality, email, phoneNumber, address, message } = req.body;
  const survey = new Survey({ name, gender, nationality, email, phoneNumber, address, message });

  try {
    await survey.save();
    res.status(201).json({ message: 'Survey submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
