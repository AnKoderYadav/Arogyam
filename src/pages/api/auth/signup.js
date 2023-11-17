import { hash } from "bcrypt";
import Users from "@/models/userModel";
import dbConnect from "@/dbconnect";
import Doctors from "@/models/doctorModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    const { fullname, email, password, isDoctor } = req.body;

    const emailCheck = await Users.findOne({ email });
    if (emailCheck) return res.status(201).json({ msg: "Email already used" });

    const hashedPassword = await hash(password, 10);
    if (isDoctor) {
      const user = await Users.create({
        fullname: "Dr. " + fullname,
        email,
        password: hashedPassword,
        isDoctor,
      });

      await Doctors.create({
        doctorId: user._id.toString(),
      });
    } else {
      await Users.create({
        fullname,
        email,
        password: hashedPassword,
        isDoctor,
      });
    }

    return res.status(200).json({ msg: "Account Created" });
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}
