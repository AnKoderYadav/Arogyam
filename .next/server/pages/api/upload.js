"use strict";
(() => {
var exports = {};
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 1672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ upload)
});

;// CONCATENATED MODULE: external "@google-cloud/storage"
const storage_namespaceObject = require("@google-cloud/storage");
;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/upload/index.js



async function upload(req, res) {
    const fdata = await new Promise((resolve, reject)=>{
        const form = new external_formidable_namespaceObject.IncomingForm();
        form.parse(req, async (err, fields, files)=>{
            if (err) return reject(err);
            resolve({
                fields,
                files
            });
        });
    });
    const file = fdata.files.file;
    const buffer = await external_fs_default().promises.readFile(file.filepath);
    let publicUrl = "";
    const credential = JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64"));
    const cloudStorage = new storage_namespaceObject.Storage({
        projectId: credential.project_id,
        credentials: {
            client_email: credential.client_email,
            private_key: credential.private_key
        }
    });
    const bucketName = process.env.BUCKET_NAME;
    const bucket = cloudStorage.bucket(bucketName);
    if (req.method === "POST") {
        if (!file) {
            return res.status(400).json({
                msg: "File Not Uploaded!"
            });
        }
        const blob = bucket.file(fdata.fields.newFilename);
        const blobStream = blob.createWriteStream();
        blobStream.on("error", (err)=>{
            console.log(err);
        });
        blobStream.on("finish", ()=>{
            // The public URL can be used to directly access the file via HTTP.
            publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        });
        blobStream.end(buffer);
        res.status(200).json({
            imageurl: publicUrl
        });
    } else {
        res.status(500).json({
            msg: "Only Post Request is Allowed"
        });
    }
}
const config = {
    api: {
        bodyParser: false
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1672));
module.exports = __webpack_exports__;

})();