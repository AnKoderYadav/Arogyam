import { Schema, model, models } from "mongoose";

const DoctorSchema = new Schema({
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  experience: {
    type: String,
    default: "",
  },
  qualification: {
    type: String,
    default: "",
  },
  twitter: {
    type: String,
    default: "",
  },
  linkedin: {
    type: String,
    default: "",
  },
  requestCount: {
    type: Number,
    default: 0,
  },
  consultCount: {
    type: Number,
    default: 0,
  },
});

const Doctors = models?.Doctor || model("Doctor", DoctorSchema);

export default Doctors;
