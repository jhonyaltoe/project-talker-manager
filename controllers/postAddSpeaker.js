const services = require('../services');

const postAddSpeaker = async (req, res) => {
  try {
    const { name, age, talk } = req.body;
    // const { authorization } = req.headers;
    await services.postAddSpeaker({ name, age, talk });
    res.status(200).json('Speaker adicionado com sucesso.');
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = postAddSpeaker;