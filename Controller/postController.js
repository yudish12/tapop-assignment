import Post from "../models/postModel.js";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const createPost = async (req, res) => {
  const id = uuidv4();
  try {
    const post = await Post.create({
      _id: id,
      createdBy: req.body.userid,
      picture: {
        data: fs.readFileSync(req.file.path),
        contentType: "image/png",
      },
    });
    res.status(200).json({
      status: "success",
      message: "post created successfully",
      post: post,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }
};

export const getPosts = async (req, res) => {
  const { userid } = req.params;
  try {
    const postsArr = await Post.find({ createdBy: userid });

    res.status(200).json({
      status: "success",
      postsArr,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }
};
