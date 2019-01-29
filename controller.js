module.exports = {
  getBands: (req, res) => {
    req.app
      .get('db')
      .bands.find()
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
  },
  addBand: (req, res) => {
    req.app
      .get('db')
      .bands.save(req.body)
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
  },
  updateBand: (req, res) => {
    req.app
      .get('db')
      .bands.save({id: +req.params.id, year_formed: req.body.year_formed})
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
  },
  deleteBand: (req, res) => {
    req.app
      .get("db")
      .bands.destroy(+req.params.id)
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
  }

}