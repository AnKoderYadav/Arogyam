import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Transgender", "rather not say"],
    default: "rather not say",
  },
  contact: {
    type: String,
  },
  profile: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/previews/004/026/956/original/person-avatar-icon-free-vector.jpg",
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
});

const Users = models?.User || model("User", UserSchema);

export default Users;
