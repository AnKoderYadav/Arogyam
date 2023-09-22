"use strict";
(() => {
var exports = {};
exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

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

/***/ 4572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _dbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6783);
/* harmony import */ var _models_consultModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1529);
/* harmony import */ var _models_postModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7447);



const stripe = __webpack_require__(8174)(process.env.STRIPE_SECRET_KEY);
async function handler(req, res) {
    (0,_dbconnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().catch((error)=>res.json({
            error: "Connection Failed"
        }));
    if (req.method === "POST") {
        const { postId , fee , doctorName , doctorRefId , doctorProfile  } = req.body;
        const product = await stripe.products.create({
            name: doctorName
        });
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: fee * 100,
            currency: "inr"
        });
        await _models_postModel__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(postId, {
            $push: {
                offers: doctorRefId
            }
        });
        const consultation = await _models_consultModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
            postId,
            doctorName,
            doctorProfile,
            doctorRefId,
            fee,
            doctorName,
            priceId: price.id
        });
        if (!consultation) {
            return res.status(400).json({
                msg: "Consultation Not Created"
            });
        }
        return res.status(200).json({
            consultation,
            msg: "Posted Successfully"
        });
    } else {
        res.status(500).json({
            msg: "Only Post Request is Allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [490], () => (__webpack_exec__(4572)));
module.exports = __webpack_exports__;

})();