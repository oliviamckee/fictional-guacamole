const router = require("express").Router();
const { User, Pet } = require("../../models");

// /api/pets GET route
router.get("/", (req, res) => {
  Pet.findAll()
    .then((dbPetData) => res.json(dbPetData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// /api/pets POST route
router.post("/", (req, res) => {
  Pet.create({
    owner_id: req.session.user_id,

    name: req.body.name,
    species: req.body.species,
    breed: req.body.breed,
    sex: req.body.sex,
    birthday: req.body.birthday,
    medical_history: req.body.medical_history,
    medications: req.body.medications,
    personality: req.body.personality,
    caution: req.body.caution,
    vet: req.body.vet,
    other: req.body.other,
  })
    .then((dbPetData) => res.json(dbPetData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// /api/pets PUT update route
router.put("/:id", (req, res) => {
  Pet.update(
    {
      name: req.body.name,
      species: req.body.species,
      breed: req.body.breed,
      sex: req.body.sex,
      birthday: req.body.birthday,
      medical_history: req.body.medical_history,
      medications: req.body.medications,
      personality: req.body.personality,
      caution: req.body.caution,
      vet: req.body.vet,
      other: req.body.other,
    },
    {
      where: {
        id: req.params.id,
      }
    }
  )
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: "No pet found with this id" });
        return;
      }
      res.json(dbPetData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// /api/pets/id DELETE route
router.delete("/:id", (req, res) => {
  Pet.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPetData) => {
      if (!dbPetData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbPetData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
