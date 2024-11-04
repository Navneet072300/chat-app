import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please provide full name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide a phone number"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
