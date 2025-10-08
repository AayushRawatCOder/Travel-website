import { Request, Response } from "express";
import { pool } from "../db";

export const addContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: "All fields are required" });

    const result = await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );

    res.status(201).json({ success: true, contact: result.rows[0] });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
