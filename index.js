const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // This will parse JSON data sent in the request body

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost:27017/dream11-test");

const Match = mongoose.model("Match", {
  // Match schema fields
});

const Team = mongoose.model("Team", {
  teamName: { type: String, required: true },
  players: [{
    id: { type: Number, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    price: { type: Number, required: true },
  }],
});

const Player = mongoose.model("Player", {
  // Player schema fields
});

// Get all the matches from the database
app.get("/matches", async (req, res) => {
  const matches = await Match.find();
  res.json(matches);
});

// Get all the teams from the database
app.get("/teams", async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ error: "Failed to fetch teams" });
  }
});

// Create a new team and save it to the database
app.post("/teams", async (req, res) => {
  const { teamName, players } = req.body;

  try {
    const newTeam = new Team({ teamName, players });
    await newTeam.save();

    res.status(201).json(newTeam);
  } catch (error) {
    console.error("Error saving team:", error);
    res.status(500).json({ error: "Failed to save team" });
  }
});

// Start the server
app.listen(4000, () => console.log("Server started on port 4000"));
