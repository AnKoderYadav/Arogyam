(() => {
var exports = {};
exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 8944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getTimeElapsed)
/* harmony export */ });
function getTimeElapsed(timeElapsed) {
    const seconds = Math.round(timeElapsed / 1000);
    const minutes = Math.round(timeElapsed / 60000);
    const hours = Math.round(timeElapsed / 3600000);
    const days = Math.floor(timeElapsed / (24 * 3600000));
    const years = Math.floor(timeElapsed / (24 * 3600000 * 365));
    return timeElapsed < 60000 ? seconds + (seconds < 2 ? " second" : " seconds") : timeElapsed < 3600000 ? minutes + (minutes < 2 ? " minute" : " minutes") : timeElapsed < 24 * 3600000 ? hours + (hours < 2 ? " hour" : " hours") : timeElapsed < 24 * 3600000 * 365 ? days + (days < 2 ? " day" : " days") : years + (years < 2 ? " year" : " years");
}


/***/ }),

/***/ 6885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9126);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9676);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dbconnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(778);
/* harmony import */ var _models_feedModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6518);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9923);
/* harmony import */ var _components_function_getTimeElapsed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Post__WEBPACK_IMPORTED_MODULE_1__]);
_components_Post__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









async function getServerSideProps({ req , params  }) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getSession)({
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
    (0,_dbconnect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)().catch((error)=>console.log(error));
    let res = await _models_userModel__WEBPACK_IMPORTED_MODULE_7__/* ["default"].findById */ .Z.findById(session.user.id);
    const user = JSON.parse(JSON.stringify(res));
    //all posts by current user
    res = await _models_feedModel__WEBPACK_IMPORTED_MODULE_6__/* ["default"].findById */ .Z.findById(params.id).populate("userId");
    const post = JSON.parse(JSON.stringify(res));
    return {
        props: {
            post,
            user
        }
    };
}
const PostPage = ({ post , user  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " bg-lightMode-background justify-center flex dark:bg-darkMode-background md:flex-row lg:flex-row overflow-scroll scrollbar-hide w-full h-full flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-2xl w-full flex flex-col p-4 md:p-0 lg:p-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        pdata: post,
                        user: user
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-5 w-full md:w-[30%] lg:[30%] h-2/3 bg-lightMode-component overflow-scroll scrollbar-hide dark:bg-darkMode-component mt-5 rounded-lg shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt mx-5 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-semibold text-md mx-8 md:mx-0 lg:mx-0",
                            children: "Comments"
                        }),
                        post.comments.map((comment)=>{
                            const timeElapsed = new Date().getTime() - new Date(post.createdAt);
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                id: "Comment",
                                className: " border-t-[1px] mt-1  border-neutral-300 dark:border-neutral-600 flex space-x-4 p-2 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "rounded-full w-8 h-8 mt-1",
                                        src: comment.profile
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-grow bg-lightMode-componentHead dark:bg-neutral-800 p-2 px-4 rounded-2xl  flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "font-semibold text-xs",
                                                children: [
                                                    comment.name,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-[9px] text-neutral-500",
                                                children: [
                                                    (0,_components_function_getTimeElapsed__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(timeElapsed),
                                                    " ago"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-xs",
                                                children: comment.content
                                            })
                                        ]
                                    })
                                ]
                            });
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,393,37,835], () => (__webpack_exec__(6885)));
module.exports = __webpack_exports__;

})();