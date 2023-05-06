import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/004/026/956/original/person-avatar-icon-free-vector.jpg",
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
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const FeedPosts = models?.FeedPost || model("FeedPost", FeedPostSchema);

export default FeedPosts;
