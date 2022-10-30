module.exports = {
    getIndex: (req, res) => {
      console.log("hi")
      res.send({message: "home"});
    },
  };
  