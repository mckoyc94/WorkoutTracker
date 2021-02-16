const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please enter the type of workout"
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter the exercise name",
        },
        duration: {
            type: Number,
            trim: true,
            required: "Please enter how long you worked out for",
        },
        weight: {
            type: Number,
            trim: true,
        },
        reps: {
            type: Number,
            trim: true,
        },
        sets: {
            type: Number,
            trim: true,
        },
        distance: {
            type: Number,
            trim: true,
        }
    }]
})

module.exports = mongoose.model('Workout', workoutSchema)