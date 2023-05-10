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
    doctorProfile: {
      type: String,
      default:
        "https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?b=1&s=612x612&w=0&k=20&c=Dnxc_cOvh1zQjTE8Za9MMADydkRc8lSKzIEX6ej9H8g=",
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
