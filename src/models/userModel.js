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
      "https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?b=1&s=612x612&w=0&k=20&c=Dnxc_cOvh1zQjTE8Za9MMADydkRc8lSKzIEX6ej9H8g=",
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
});

const Users = models?.User || model("User", UserSchema);

export default Users;
