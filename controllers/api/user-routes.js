const router = require("express").Router();
const { User, Pet } = require("../../models");

// /api/users GET route
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// /api/users/id GET route
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Pet,
        attributes: [
          "id",
          "name",
          "species",
          "breed",
          "sex",
          "birthday",
          "medical_history",
          "medications",
          "personality",
          "caution",
          "vet",
          "other",
        ],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id." });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// /api/users POST route
router.post("/", (req, res) => {
  User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    phone: req.body.phone,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
