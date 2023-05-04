import dbConnect from "@/dbconnect";
import Consultations from "@/models/consultModel";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    const { postId, fee, timeSlot, doctorName, doctorRefId } = req.body;

    const product = await stripe.products.create({
      name: doctorName,
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: fee * 100,
      currency: "inr",
    });

    console.log(price);

    const consultation = await Consultations.create({
      postId,
      doctorName,
      doctorRefId,
      fee,
      timeSlot,
      doctorName,
      priceId: price.id,
    });

    if (!consultation) {
      return res.status(400).json({ msg: "Consultation Not Created" });
    }

    return res.status(200).json({ consultation, msg: "Posted Successfully" });
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}
