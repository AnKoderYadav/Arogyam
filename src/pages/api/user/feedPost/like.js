import dbConnect from "@/dbconnect";
import FeedPosts from "@/models/feedModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    const { userId, liked, feedId } = req.body;
    if (liked) {
      await FeedPosts.findByIdAndUpdate(feedId, {
        $push: { likeBy: userId },
      });
    } else {
      await FeedPosts.findByIdAndUpdate(feedId, {
        $pull: { likeBy: userId },
      });
    }

    return res.status(200).json({ msg: "liked" });
  }
}
