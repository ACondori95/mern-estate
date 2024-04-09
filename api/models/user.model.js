import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://imgs.search.brave.com/vimRBqV1gbtSp6lSKHUfYpGmtB4YmLo41a2LhLldkS4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRkLzJl/LzBhLzRkMmUwYTY5/NDAxNWYzZDJmODQw/ODczZDAxYWE1ZmQ0/LmpwZw",
    },
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;
