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
  let publicUrl = "";
  console.log(fdata.fields);

  const cloudStorage = new Storage({
    projectId: "arogyam-india-77",
    credentials: {
      client_email: "330504445749-compute@developer.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDOIB471OilbJqn\nOkQSZeCFMCHbGyCRuarFjtBBuMsPk94m0ixm7mhRNARoFq76M+oKjbmp/61Fm9Yx\nj9M4vAAzS6k226nXgFswKU5DP+wSB1zv9NDV/1ADG1RcZOxoYhU4R0JHD4WKjE6r\ndAHihEQvQsk2+pndXSvC1MgfUlUTO+AlRcUoZT/67/NMv/MIXN1IesKRRIaneFhW\nRxkakbcOJCvHrLF15pXhyAqKA8d4nfkiNyc6ayQ/g+t2WKUM6kF4wzHnb+726I2V\n+u5sK+XqAOcIwc8vCEeQ/u+E+qasdwPKvay8f5jkeDcJMlOFwNGCBReNivP6Plx5\nQ2+U78ZTAgMBAAECggEAA4T63yyoeEKddWOCTAofRkbnHRWefb580vi4R5b/KJnu\nvhzykyNY9qH7vUc935nJUjrPQ77Q15JsmtYI1jwniLiu//fKM5rGc9EQvAc4Yaps\nhNBaTH0agaMS0q0KeFHMaPSWhh4WuqHgqf7GFXcKrv/l7aFjxSrVF3OIozhFqZlh\nQr5qo4NOrS3KrqLVaU9nrKsMLiOIk3edatrMFW4jW+rFNirporOp0ka0zH87mJH+\n7jrFoOtFxx4VTypts6kvZyVbSDDniop+3iOvpkKrIBoFf/qry15rYsk6pjq8EfH6\nlufe7nREv2SavrzuaUWrkMPb8q5TE93JscPxqu5VgQKBgQD1gmJ6oUBJ+ZswwS42\nM5bOmLGHJ0SldjKxR2S4UxwD50irFkP/uo6uItQl/q/SXYFTAfvJJ9pXPJcF4EWG\nhINd0YqsUHLsQuLTvUlUEqAhv3r0c7VCNZ9xsGlIUtfTdgvruiEaxyHI1Ukx+KoE\n3tE4mkSThXVkV55UWlV05JFjQQKBgQDW7upLsBuJrt1e7g25I0kmO9xBUdCWnIYx\nlrpbPIrLnj+tUYYFx9uPc8snTN1uLF0MkNuK+7XujV3Qe14wIMrZguaFsXvQRUlZ\nnYr89t7zzdXhpxVLw5kpyns+ilsJDE/55JTUOqPFnPGtIuiWcO0eLpNIp7USrhg9\nTInnuqnIkwKBgQCJ+SedIUg/Cp8TzE1LOrzzCE8k1IW4s2+Tv7qz+EkTTITDWbUH\nX/HVnU86tyJaiCAo5UF6cAI96pg5Piv0iD5HmH5ljqS3cHOHaaZvMDR8It9XyDtC\npV4hB3JzqdMPTRUv+h+mq+iptGv5QHVUXWCZfeEyQtuRc8hQQaArHFU0wQKBgQC3\n0sB6GVWEDRVx4mHETQR7+chn6URf++Dduo8KBx6iBWdqoYXhncwPxbYjl57uYmz2\nmVHbbWpta2SoMUseGH3FSCpGf8RoHUodphtAPRf0JsBdbRxOnyx4zJ9ZntU7SNeB\n31jWpox5L8CXFnscZ9q07Jq1EhJQtqsuii6MDV62lwKBgQDXNPToBTXqFDOduLTr\nm/3Imimz1aCPbBEimS7QvCqzUy4JgZ8vL9rjqVtbF+ndQMAZnsE9coLAbeGdNDBM\nq10UfNT+sF1wG/7xJkHH6RVxlE6Uyc7zeO3FBvg6eI4zTmv1Vo/k0Zh//ifYBV3V\nl7fbkfTtuwvgjvC+1SoxXG+qng==\n-----END PRIVATE KEY-----\n",
    },
  });

  const bucketName = "arogyam-storage-bucket";
  const bucket = cloudStorage.bucket(bucketName);

  if (req.method === "POST") {
    if (!file) {
      return res.status(400).json({ msg: "File Not Uploaded!" });
    }

    const blob = bucket.file(fdata.fields.newFilename);
    const blobStream = blob.createWriteStream();
    blobStream.on("error", (err) => {
      console.log(err);
    });

    blobStream.on("finish", () => {
      // The public URL can be used to directly access the file via HTTP.
      publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    });
    blobStream.end(buffer);

    res.status(200).json({ imageurl: publicUrl });
  } else {
    res.status(500).json({ msg: "Only Post Request is Allowed" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
