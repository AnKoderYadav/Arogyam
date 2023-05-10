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
        "https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?b=1&s=612x612&w=0&k=20&c=Dnxc_cOvh1zQjTE8Za9MMADydkRc8lSKzIEX6ej9H8g=",
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
    likeBy: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const FeedPosts = models?.FeedPost || model("FeedPost", FeedPostSchema);

export default FeedPosts;
