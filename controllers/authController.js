const passport = require('passport');
const User = require('../models/user');


exports.signup = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = new User({ username });
      await User.register(user, password);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  exports.login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  
      req.logIn(user, (err) => {
        if (err) return next(err);
        if (!user.isAdmin) return res.status(403).json({ error: 'Permission denied' });
  
        return res.json({ message: 'Login successful' });
      });
    })(req, res, next);
  };
  
  exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
  };