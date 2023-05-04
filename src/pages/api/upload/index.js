import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
import mv from "mv";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function upload(req, res) {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      console.log(fields, files);
      console.log(files.file.filepath);
      var oldPath = files.file.filepath;
      var newPath = `./public/uploads/${
        fields.id + files.file.originalFilename
      }`;
      mv(oldPath, newPath, function (err) {});
      res.status(200).json({ fields, files });
    });
  });
}
