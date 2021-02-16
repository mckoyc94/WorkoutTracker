const mongoose = require('mongoose')
const db = require("../models")
const exercise = require('../models/exercise')
const Workout = db.Workout

module.exports = app => {
   app.get("/api/workout", (req, res) => {
       Workout.find({})
        .sort({name: -1})
        .then(exercise => {
            res.json(exercise)
        })
        .catch(err => {
            res.status(400).json(err);
        });
   })
}