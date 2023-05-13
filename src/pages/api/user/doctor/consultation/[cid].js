import dbConnect from "@/dbconnect";
import Consultations from "@/models/consultModel";
import Posts from "@/models/postModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    try {
      const { doctorId, postId } = req.body;
      const resp = await Posts.findByIdAndUpdate(postId, {
        $pull: { offers: doctorId },
      });
      const data = await Consultations.findByIdAndRemove(req.query.cid);
      return res.status(200).json({ data, resp, msg: "Deleted Successfully" });
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "PUT") {
    const data = await Consultations.findByIdAndUpdate(req.query.cid, {
      isAccepted: req.body.isAccepted,
    });

    return res.status(200).json({ data, msg: "Updated Successfully" });
  }
}
