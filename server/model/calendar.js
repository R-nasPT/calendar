const mongoose = require("mongoose");

const calendarSchema = new mongoose.Schema({
    content_name: String,
    project_name: String,
    date: {
        publishing_date: Date,
        due_date: Date,
        shooting_date: Date,
        pitching_date: Date
    },
    creative_type: String,
    channel: String
});

const Calendar = mongoose.model("events", calendarSchema);

module.exports = Calendar;
