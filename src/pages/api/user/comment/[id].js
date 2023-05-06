import dbConnect from "@/dbconnect";
import FeedPosts from "@/models/feedModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  const { content, name, profile } = req.body;

  if (req.method === "PUT") {
    const data = await FeedPosts.findByIdAndUpdate(req.query.id, {
      $push: {
        comments: {
          name,
          profile,
          content,
        },
      },
    });

    if (!data) {
      return res.status(400).json({ msg: "Comment Unsuccesful" });
    }

    return res.status(200).json({ data, msg: "Comment Successfully" });
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}
