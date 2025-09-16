import express from "express";
import cors from "cors";
import db from "./models/index.js";  // Sequelize setup

const app = express();

// middleware
app.use(cors());
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the blog API!" });
});

// connect to DB
db.sequelize.authenticate()
  .then(() => console.log("✅ Database connected."))
  .catch(err => console.error("❌ DB connection error:", err));

db.sequelize.sync()
  .then(() => console.log("✅ Models synced to database."));

// set port and listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}.`);
});
