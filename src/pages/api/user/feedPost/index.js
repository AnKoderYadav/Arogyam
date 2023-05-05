import dbConnect from "@/dbconnect";
import FeedPosts from "@/models/feedModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    const { userId, description, image } = req.body;

    const feedPost = await FeedPosts.create({
      userId,
      description,
      image,
    });

    if (!feedPost) {
      return res.status(400).json({ msg: "Not Posted" });
    }

    return res.status(200).json({ feedPost, msg: "Posted Successfully" });
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}
