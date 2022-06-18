const services = require('../services');
const { crypto } = require('../helpers');

const loginAndReturnToken = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = crypto.randomToken();
    await services.loginAndReturnToken(email, password, token);
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = loginAndReturnToken;