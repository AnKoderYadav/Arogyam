import dbConnect from "@/dbconnect";
import Doctors from "@/models/doctorModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    const { experience, qualification, twitter, linkedin } = req.body;

    const doctor = await Doctors.findOneAndUpdate(
      { doctorId: req.query.doctorId },
      {
        experience,
        qualification,
        twitter,
        linkedin,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({ doctor, msg: "Updated Successfully" });
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}
