import express from "express";
import { addContact } from "../controller/contactController";

const router = express.Router();
router.post("/contacts", addContact);

export default router;
