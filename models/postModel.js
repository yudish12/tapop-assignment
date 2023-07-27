import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    _id: String,
    picture: {
      data: Buffer,
      contentType: String,
    },
    createdBy: {
      type: String,
      ref: "User",
      required: [true, "Post must belong to a user"],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
