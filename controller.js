module.exports = {
  getBands: (req, res) => {
  // The code below is doing the same thing as the below SQL statement
  // SELECT * FROM bands;

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
  // .save() massivejs method will INSERT INTO your database if no id is passed into method. The method runs the below SQL statement for us. 
  // The code below is doing the same thing as the below SQL statement
  // INSERT INTO bands(name, year_formed, genre)
  // VALUES(req.body.name, req.body.year_formed, req.body.genre);

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
  // Here we're passing an id and values to be changed so massive will SET the new values from our req.body on our band WHERE the id = req.params.id
  // The save method also runs UPDATE statements. We just have to pass in an id.
  // The code below is doing the same thing as the below SQL statement
  // UPDATE bands
  // SET year_formed = req.body.year_formed
  // WHERE id = +req.params.id;
  
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
  // Didn't cover this in class but destroy will delete an item, just pass in the correct id.
  // The code below is doing the same thing as the below SQL statement
  // DELETE FROM bands
  // WHERE id = +req.params.id;

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

