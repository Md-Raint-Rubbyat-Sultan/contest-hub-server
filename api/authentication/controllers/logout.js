const logout = (req, res) => {
  res
    .clearCookie("token", { maxAge: 0, secure: true, sameSite: "none" })
    .send({ message: true });
};

module.exports = logout;
