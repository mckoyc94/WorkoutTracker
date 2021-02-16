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

   app.get("/api/workouts", (req, res) => {
       Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } }])
        .sort({name: -1})
        .then(exercise => {
            res.json(exercise)
        })
        .catch( err => {
            res.status(400).json(err)
        })
   })

   app.get("/api/workouts/range", (req, res) => {
       Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } }])
        .limit(7)
        .sort({name: -1})
        .then( exercise => {
            res.json(exercise)
        })
        .catch(err => {
            res.status(400).json(err)
        })
   })

   app.post("/api/workouts", (req, res) => {
       Workout.create({})
        .then(exercise => {
            res.json(exercise)
        })
        .catch(err => {
            res.status(400).json(err)
        })
   })


}