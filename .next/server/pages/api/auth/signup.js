"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const DoctorSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    doctorId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "User"
    },
    experience: {
        type: String,
        default: ""
    },
    qualification: {
        type: String,
        default: ""
    },
    twitter: {
        type: String,
        default: ""
    },
    linkedin: {
        type: String,
        default: ""
    },
    requestCount: {
        type: Number,
        default: 0
    },
    consultCount: {
        type: Number,
        default: 0
    },
    timeSlot: {
        type: String
    }
});
const Doctors = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Doctor || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Doctor", DoctorSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Doctors);


/***/ }),

/***/ 9118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3829);
/* harmony import */ var _dbconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6783);
/* harmony import */ var _models_doctorModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(153);




async function handler(req, res) {
    (0,_dbconnect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)().catch((error)=>res.json({
            error: "Connection Failed"
        }));
    if (req.method === "POST") {
        const { fullname , email , password , isDoctor  } = req.body;
        const emailCheck = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
            email
        });
        if (emailCheck) return res.json({
            msg: "Email already used",
            status: false
        });
        const hashedPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 10);
        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
            fullname,
            email,
            password: hashedPassword,
            isDoctor
        });
        if (!user) {
            return res.status(400).json({
                msg: "User Already Registered"
            });
        }
        if (isDoctor) {
            const doctor = await _models_doctorModel__WEBPACK_IMPORTED_MODULE_3__/* ["default"].create */ .Z.create({
                doctorId: user._id.toString()
            });
        }
        delete user.password;
        return res.status(200).json({
            user
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [272], () => (__webpack_exec__(9118)));
module.exports = __webpack_exports__;

})();