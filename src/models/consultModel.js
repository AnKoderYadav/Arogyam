import { Schema, model, models } from "mongoose";

const ConsultationSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    doctorRefId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    priceId: {
      type: String,
    },
    doctorName: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Consultations =
  models?.Consultation || model("Consultation", ConsultationSchema);

export default Consultations;
