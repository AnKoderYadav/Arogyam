import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FeedPostSchema = new Schema(
  {
    userId: {
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
    comments: {
      type: [CommentSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const FeedPosts = models?.FeedPost || model("FeedPost", FeedPostSchema);

export default FeedPosts;
