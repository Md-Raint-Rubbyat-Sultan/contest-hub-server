const logout = (req, res) => {
  res.clearCookie("token", { maxAge: 0 }).send({ message: true });
};

module.exports = logout;
