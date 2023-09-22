"use strict";
exports.id = 490;
exports.ids = [490];
exports.modules = {

/***/ 6783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};
const dbConnect = async ()=>{
    if (connection.isConnected) return;
    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 7447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const PostSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    patientId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "User"
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    severity: {
        type: String,
        enum: [
            "Low",
            "Medium",
            "High"
        ],
        default: "Low"
    },
    solved: {
        type: Boolean,
        default: false
    },
    offers: {
        type: [
            String
        ]
    }
}, {
    timestamps: true
});
const Posts = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Post || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Post", PostSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);


/***/ })

};
;