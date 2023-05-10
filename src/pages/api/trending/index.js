import dbConnect from "@/dbconnect";
import Consultations from "@/models/consultModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "GET") {
    try {
      const trendingSpecialist = await Consultations.aggregate([
        {
          $match: {
            isAccepted: true, // Filter consultations where isAccepted is true
          },
        },
        {
          $group: {
            _id: "$doctorRefId",
            doctorId: { $first: "$doctorRefId" }, // Optionally, include the doctor ID in the result
            doctorName: { $first: "$doctorName" }, // Optionally, include the doctor name in the result
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            count: -1, // Sort by count in descending order
          },
        },
      ]);
      return res
        .status(200)
        .json({ trendingSpecialist, msg: "Updated Successfully" });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}
