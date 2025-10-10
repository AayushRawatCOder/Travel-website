import express from "express";
import pkg from "pg";
import cors from "cors";

const { Pool } = pkg;
const app = express();
app.use(cors());
app.use(express.json());

// Neon DB connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // from Neon
  ssl: { rejectUnauthorized: false },
});

// ✅ Add Destination
app.post("/api/destinations", async (req, res) => {
  const { name, image, description, category } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO destinations (name, image, description, category) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, image, description, category]
    );
    res.json({ success: true, destination: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

// ✅ Get All Destinations
app.get("/api/destinations", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM destinations ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});
// ✅ Add Package
app.post("/api/packages", async (req, res) => {
  const { title, price, duration, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO packages (title, price, duration, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, price, duration, description]
    );
    res.json({ success: true, package: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false});
  }
});

// ✅ Get All Packages
app.get("/api/packages", async (req, res) => {
  const result = await pool.query("SELECT * FROM packages ORDER BY id ASC");
  res.json(result.rows);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
