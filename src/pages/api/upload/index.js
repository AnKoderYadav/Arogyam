import { Storage } from "@google-cloud/storage";
import { IncomingForm } from "formidable";
import fs from "fs";

export default async function upload(req, res) {
  const fdata = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) return reject(err);

      resolve({ fields, files });
    });
  });

  const file = fdata.files.file;
  const buffer = await fs.promises.readFile(file.filepath);

  const credential = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64")
  );

  const cloudStorage = new Storage({
    projectId: credential.project_id,
    credentials: {
      client_email: credential.client_email,
      private_key: credential.private_key,
    },
  });

  const bucketName = process.env.BUCKET_NAME;
  const bucket = cloudStorage.bucket(bucketName);

  if (req.method === "POST") {
    if (!file) {
      return res.status(400).json({ msg: "File Not Uploaded!" });
    }

    const blob = bucket.file(fdata.fields.newFilename);
    const blobStream = blob.createWriteStream();
    blobStream.on("error", (err) => {
      res.status(200).json({ Error: err });
    });

    blobStream.on("finish", () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      res.status(200).json({ imageurl: publicUrl });
    });
    blobStream.end(buffer);
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
