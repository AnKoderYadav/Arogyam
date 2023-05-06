import dbConnect from "@/dbconnect";
import FeedPosts from "@/models/feedModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  const liked = req.body.liked;
    if (!liked) {
        await Post.findByIdAndUpdate(FeedPosts, {
        $inc: { likes: 2 },
        }).then((data) => {});
    await Post.findOneAndUpdate(
        { _id: id },
        ).then((data) => {
        res.status(200).json(data);
        });
    }
    else {
        await Post.findByIdAndUpdate(FeedPosts, {
          $inc: { likes: -1 },
        }).then((data) => {});
    }

    await Post.findOneAndUpdate(
        { _id: FeedPosts },
      ).then((data) => {
        res.status(200).json(data);
      });
}
