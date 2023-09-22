"use strict";
(() => {
var exports = {};
exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ toastOptions)
/* harmony export */ });
const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
};


/***/ }),

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

/***/ 781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _dbconnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(778);
/* harmony import */ var _models_consultModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1970);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9676);
/* harmony import */ var _components_OfferBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(137);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(943);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_8__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const publishableKey = `${process.env.STRIPE_PUBLISHABLE_KEY}`;
(0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11__.loadStripe)(publishableKey);
async function getServerSideProps({ req , params  }) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.getSession)({
        req
    });
    if (!session?.user) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        };
    }
    (0,_dbconnect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().catch((error)=>console.log(error));
    const res = await _models_consultModel__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findOne */ .Z.findOne({
        priceId: params.priceId
    }).populate("doctorRefId");
    const consultation = JSON.parse(JSON.stringify(res));
    return {
        props: {
            consultation
        }
    };
}
const Home = ({ consultation  })=>{
    const [isAccepted, setIsAccepted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(consultation.isAccepted);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            async function accept() {
                try {
                    await axios__WEBPACK_IMPORTED_MODULE_2__["default"].put(`/api/user/doctor/consultation/${consultation._id}`, {
                        isAccepted: true
                    });
                } catch (error) {
                    console.error(error);
                }
            }
            accept();
            setIsAccepted(true);
        }
        if (query.get("canceled")) {
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Order Canceled!", _lib_lib__WEBPACK_IMPORTED_MODULE_10__/* .toastOptions */ .H);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex flex-col justify-evenly items-center overflow-x-hidden p-5 gap-2 text-lightMode-txt dark:text-darkMode-txt bg-lightMode-background dark:bg-darkMode-background",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-4 w-2/3 border-b border-white",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "font-bold text-2xl",
                                children: [
                                    "Checkout",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-cyan-800 dark:text-cyan-600",
                                        children: "Consultation"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OfferBox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            consultation: consultation,
                            hide: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            action: `/api/checkout_sessions/${consultation.priceId}`,
                            method: "POST",
                            className: "w-fit text-sm flex justify-center  items-center hover:text-gray-500 cursor-pointer",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "pl-2",
                                children: [
                                    " ",
                                    !isAccepted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "w-full p-2 px-4 bg-yellow-600 rounded-sm text-white",
                                        type: "submit",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center font-semibold text-xl",
                                            children: "Proceed To Pay"
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " w-full p-2 px-4 bg-green-600 rounded-sm text-white",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center font-semibold",
                                            children: "Consultation Placed"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 943:
/***/ ((module) => {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,393,41], () => (__webpack_exec__(781)));
module.exports = __webpack_exports__;

})();