const router = require("express").Router();
const { User, Pet } = require("../models");
const withAuth = require("../utils/auth");

// homepage route
router.get("/", withAuth, (req, res) => {
  Pet.findAll({
    where: {
      owner_id: req.session.user_id,
    },
  })
    .then((dbPetData) => {
      const pets = dbPetData.map((pet) => pet.get({ plain: true }));
      res.render("homepage", { pets, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// signup route
router.get("/sign-up", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("sign-up");
});

// add pet route
router.get("/add-pet", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("add-pet");
});

// edit pet route
router.get("/edit/:id", (req, res) => {
  Pet.findByPk(req.params.id)
    .then((dbPetData) => {
      const pet = dbPetData.get({ plain: true });

      res.render("edit-pet", {
        pet,
        loggedIn: true,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
