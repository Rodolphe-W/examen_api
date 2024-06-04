const express = require('express');
const controllerBlague = require('../controllers/Blague');
const router = express.Router();


router.get("/", (req,res) => {
    res.status(200).json({success: "racine API"});
});

router.get("/blague", controllerBlague.findAll);

//router.post("/blague", controllerBlague.create)

router.get("/blague/random", controllerBlague.random);

router.get("/blague/:id", controllerBlague.findById)

module.exports = router;