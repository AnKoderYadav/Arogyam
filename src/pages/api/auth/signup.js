import { hash } from "bcrypt";
import Users from "@/models/userModel";
import dbConnect from "@/dbconnect";
import Doctors from "@/models/doctorModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    const { fullname, email, password, isDoctor } = req.body;

    const emailCheck = await Users.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });

    const use = await userModel;
    const hashedPassword = await hash(password, 10);
    const user = await Users.create({
      fullname,
      email,
      password: hashedPassword,
      isDoctor,
    });

    if (!user) {
      return res.status(400).json({ msg: "User Already Registered" });
    }

    if (isDoctor) {
      const doctor = await Doctors.create({
        doctorId: user._id.toString(),
      });
    }

    delete user.password;
    return res.status(200).json({ user });
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}
