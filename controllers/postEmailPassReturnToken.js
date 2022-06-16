const services = require('../services');
const { crypto } = require('../helpers');

const postEmailPassReturnToken = async (req, res) => {
  try {
    const { email, password } = req.body;
    await services.postEmailPassReturnToken(email, password);
    const token = crypto.randomToken();
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = postEmailPassReturnToken;