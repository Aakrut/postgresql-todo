const notFound = (req, res) => {
  res.status(404).send("Something Went Wrong");
};

module.exports = notFound;
