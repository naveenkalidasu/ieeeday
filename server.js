const express = require("express");
const app = express();
const port = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

// Serve static files (CSS, images)
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/events", (req, res) => res.render("events"));

// Start server
app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
