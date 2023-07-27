import mongoose from "mongoose";
import validator from "validator";

const user_schema = mongoose.Schema(
  {
    _id: String,
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    phoneNo: {
      type: String,
      required: [true, "Phone Number is Required"],
      validate: validator.isMobilePhone,
    },
    email: {
      type: String,
      required: [true, "user must have an email"],
      unique: [true, "user with this email already exists"],
      lowercase: true,
      validate: [validator.isEmail, "please enter valid email"],
    },
    picture: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", user_schema);

export default User;
