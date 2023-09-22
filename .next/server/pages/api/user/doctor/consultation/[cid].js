"use strict";
(() => {
var exports = {};
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ConsultationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    postId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "Post"
    },
    doctorRefId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    priceId: {
        type: String
    },
    doctorName: {
        type: String,
        required: true
    },
    doctorProfile: {
        type: String,
        default: "https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?b=1&s=612x612&w=0&k=20&c=Dnxc_cOvh1zQjTE8Za9MMADydkRc8lSKzIEX6ej9H8g="
    },
    fee: {
        type: Number,
        required: true
    },
    isAccepted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const Consultations = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Consultation || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Consultation", ConsultationSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Consultations);


/***/ }),

/***/ 9277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _dbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6783);
/* harmony import */ var _models_consultModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1529);
/* harmony import */ var _models_postModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7447);



async function handler(req, res) {
    (0,_dbconnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().catch((error)=>res.json({
            error: "Connection Failed"
        }));
    if (req.method === "POST") {
        try {
            const { doctorId , postId  } = req.body;
            const resp = await _models_postModel__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(postId, {
                $pull: {
                    offers: doctorId
                }
            });
            const data = await _models_consultModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndRemove */ .Z.findByIdAndRemove(req.query.cid);
            return res.status(200).json({
                data,
                resp,
                msg: "Deleted Successfully"
            });
        } catch (error) {
            console.log(error);
        }
    } else if (req.method === "PUT") {
        const data = await _models_consultModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(req.query.cid, {
            isAccepted: req.body.isAccepted
        });
        return res.status(200).json({
            data,
            msg: "Updated Successfully"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [490], () => (__webpack_exec__(9277)));
module.exports = __webpack_exports__;

})();