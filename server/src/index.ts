import express from "express";
import cors from "cors";
import { pool } from './db'; // ✅ single source for DB

const app = express();
app.use(cors());
app.use(express.json());

// Add Destination
app.post("/api/destinations", async (req, res) => {
  const { name, image, description, category } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO destinations (name, image, description, category) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, image, description, category]
    );
    res.json({ success: true, destination: result.rows[0] });
  } catch (err) {
    console.error("❌ Insert Error:", err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

// Get All Destinations
app.get("/api/destinations", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM destinations ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Fetch Error:", err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
