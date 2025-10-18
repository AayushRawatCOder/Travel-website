import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Neon
});

// ✅ Function to load all .sql schema files
export const initializeSchemas = async () => {
  try {
    const schemaDir = path.join(__dirname, "schemas"); // Folder where all your schema files are stored
    const files = fs.readdirSync(schemaDir);

    for (const file of files) {
      if (file.endsWith(".sql")) {
        const schemaPath = path.join(schemaDir, file);
        const sql = fs.readFileSync(schemaPath, "utf8");
        console.log(`🧩 Applying schema: ${file}`);
        await pool.query(sql);
      }
    }

    console.log("✅ All schemas initialized successfully!");
  } catch (error) {
    console.error("❌ Error initializing schemas:", error);
  }
};

// Connect to DB and initialize schemas
pool.connect()
  .then(async () => {
    console.log("✅ Connected to Neon PostgreSQL");
    await initializeSchemas();
  })
  .catch((err) => console.error("❌ DB connection error:", err));
