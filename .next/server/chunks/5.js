"use strict";
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 1970:
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

/***/ 6854:
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


/***/ })

};
;