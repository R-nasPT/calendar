const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Calendar = require("./model/calendar");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/calendar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.get("/calendar", async (req, res) => {
  try {
    const calendars = await Calendar.find();
    res.json(calendars);
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:", err);
    res.status(500).json({ error: "ไม่สามารถดึงข้อมูลผู้ใช้ได้" });
  }
});

app.listen(3000, () => {
  console.log("The application is running on port 3000.");
});
