const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  const isValidUser = username === process.env.ADMIN_USERNAME;
  const isValidPassword = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);

  if (!isValidUser || !isValidPassword) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.json({ token });
};

module.exports = { loginAdmin };
