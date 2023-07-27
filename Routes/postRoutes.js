import express from "express";
import multer from "multer";
import { createPost, getPosts } from "../Controller/postController.js";

const upload = multer({ dest: "images/" });

const router = express.Router();

router.post("/create", upload.single("image"), createPost);
router.get("/:userid", getPosts);

export default router;
