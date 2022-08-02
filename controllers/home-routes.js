const router = require("express").Router();
const { User, Pet } = require("../models");
const withAuth = require("../utils/auth");

// homepage route
router.get("/", withAuth, (req, res) => {
  Pet.findAll({
    where: {
      user_id: req.session.user_id,
    },
  })
    .then((dbPetData) => {
      res.render("homepage", dbPetData);
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
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
