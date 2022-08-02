const router = require("express").Router();

const userRoutes = require("./user-routes");
const petRoutes = require("./pet-routes");

router.use("/users", userRoutes);
router.use("/pets", petRoutes);

module.exports = router;
