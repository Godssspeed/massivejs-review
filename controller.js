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

    // The code above is doing the same thing as below SQL statement
    // SELECT * FROM bands;
  },
  addBand: (req, res) => {
    //.save() massivejs method will INSERT INTO your database if no id is passed into method
    req.app
      .get('db')
      .bands.save(req.body)
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });

    // Save method is running this SQL statement for us. 
    // INSERT INTO bands(name, year_formed, genre)
    // VALUES(req.body.name, req.body.year_formed, req.body.genre);

  },
  updateBand: (req, res) => {
    // Here we're passing an id and values to be changed so massive will SET the new values from our req.body on our band WHERE the id = req.params.id
    req.app
      .get('db')
      .bands.save({id: +req.params.id, year_formed: req.body.year_formed})
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });

    // The save method also runs UPDATE statements. We just have to pass in an id.
    // UPDATE bands
    // SET year_formed = req.body.year_formed
    // WHERE id = +req.params.id;
  },
  deleteBand: (req, res) => {
    //Didn't cover this in class but destroy will delete an item, but you need to pass in the correct id. 
    req.app
      .get("db")
      .bands.destroy(+req.params.id)
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
    // This is the same as DELETE FROM
    // DELETE FROM bands
    // WHERE id = +req.params.id;
  }
}

