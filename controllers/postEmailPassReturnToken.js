const services = require('../services');

const postEmailPassReturnToken = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await services.postEmailPassReturnToken(email, password);
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = postEmailPassReturnToken;