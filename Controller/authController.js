import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import User from "../models/userModel.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const readDefaultImage = () => {
  return fs.readFileSync(`${__dirname}/download.jpg`);
};

export const registerUser = async (req, res) => {
  try {
    const id = uuidv4();
    const obj = {
      _id: id,
      email: req.body.email,
      name: req.body.name,
      phoneNo: req.body.phoneNo,
      picture: {
        data: req.file ? fs.readFileSync(req.file.path) : readDefaultImage(),
        contentType: "image/png",
      },
    };

    const data = await User.create(obj);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "failed",
      error,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { email } = req.params;
    const data = await User.findOne({ email: email });
    return res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      statsus: "fail",
      error: error,
    });
  }
};
