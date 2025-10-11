import express from "express";
import { addContact } from "../controller/contactController";

const router = express.Router();
router.post("/", addContact);

export default router;
