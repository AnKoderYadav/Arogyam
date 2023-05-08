// import dbConnect from "@/dbconnect";
// import FeedPosts from "@/models/feedModel";

// export default async function handler(req, res) {
//   dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

//   const liked = req.body.liked;
//     if (!liked) {
//         await Post.findByIdAndUpdate(FeedPosts, {
//         $inc: { likes: 2 },
//         }).then((data) => {});
//     await Post.findOneAndUpdate(
//         { _id: id },
//         ).then((data) => {
//         res.status(200).json(data);
//         });
//     }
//     else {
//         await Post.findByIdAndUpdate(FeedPosts, {
//           $inc: { likes: -1 },
//         }).then((data) => {});
//     }

//     await Post.findOneAndUpdate(
//         { _id: FeedPosts },
//       ).then((data) => {
//         res.status(200).json(data);
//       });
// }

import dbConnect from "@/dbconnect";
import FeedPosts from "@/models/feedModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));
  if (req.method === "POST") {
    const feedId = req.body.feedId;
    const liked = req.body.liked;
    // const userId = req.body.usedId;
    if (!liked) {
      await FeedPosts.findByIdAndUpdate(feedId, {
        $inc: { likeCount: 1 },
      }).then((data) => {});

      await FeedPosts.findOneAndUpdate(
        { _id: feedId }
        // {$push: likedBy : usedID},
      ).then((data) => {
        res.status(200).json(data);
      });
    } else {
      await FeedPosts.findByIdAndUpdate(feedId, {
        $inc: { likeCount: -1 },
      }).then((data) => {});

      await FeedPosts.findOneAndUpdate(
        { _id: feedId }
        // { $pull: { likedBy: userId } }
      ).then((data) => {
        res.status(200).json(data);
      });
    }
  }
}
