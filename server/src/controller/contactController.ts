import { Request, Response } from "express";
import { pool } from "../../db/db";

export const addContact = async (req: Request, res: Response) => {
  try {
    const { name, email, inquiryType, travelDate, destination, message } = req.body;

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return res.status(400).json({ error: "Name, email, inquiry type, and message are required" });
    }

    // Insert into contacts table
    const result = await pool.query(
      "INSERT INTO contacts (name, email, inquiry_type, travel_date, destination, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, email, inquiryType, travelDate || null, destination || null, message]
    );

    res.status(201).json({ success: true, contact: result.rows[0] });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};