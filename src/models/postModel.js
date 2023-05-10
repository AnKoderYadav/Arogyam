import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    severity: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    solved: {
      type: Boolean,
      default: false,
    },
    offers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Posts = models?.Post || model("Post", PostSchema);

export default Posts;
