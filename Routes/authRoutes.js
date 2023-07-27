import express from "express";
import { getUser, registerUser } from "../Controller/authController.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "images/" });

router.post("/register", upload.single("image"), registerUser);
router.get("/login/:email", getUser);

export default router;
