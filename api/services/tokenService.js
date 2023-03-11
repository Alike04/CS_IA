const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      userId: user._id,
    },
    process.env.SECRET,
    {
      expiresIn: "48h",
    }
  );
  return token;
};

module.exports = { generateToken };
