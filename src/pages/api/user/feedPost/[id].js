import dbConnect from "@/dbconnect";
import FeedPosts from "@/models/feedModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    const { userId, liked } = req.body;
    console.log(userId, liked);
    if (!liked) {
      await FeedPosts.findByIdAndUpdate(req.query.id, {
        $push: { likeBy: userId },
      });
    } else {
      await FeedPosts.findByIdAndUpdate(req.query.id, {
        $pull: { likeBy: userId },
      });
    }

    return res.status(200).json({ msg: "liked" });
  }
}
