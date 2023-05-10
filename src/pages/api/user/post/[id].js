import dbConnect from "@/dbconnect";
import Posts from "@/models/postModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    const { solved } = req.body;

    const post = await Posts.findByIdAndUpdate(req.query.id, {
      solved,
    });

    return res.status(200).json({ post, msg: "Posted Successfully" });
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}
