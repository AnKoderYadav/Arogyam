import dbConnect from "@/dbconnect";
import Users from "@/models/userModel";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    const { fullname, password, age, contact, gender, profile } = req.body;

    const hashedPassword = await hash(password, 10);
    const data = await Users.findByIdAndUpdate(req.query.id, {
      fullname,
      password: hashedPassword,
      age,
      contact,
      gender,
      profile,
    });

    if (!data) {
      return res.status(400).json({ msg: "Not Updated" });
    }

    return res.status(200).json({ data, msg: "Updated Successfully" });
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}
