"use strict";
exports.id = 494;
exports.ids = [494];
exports.modules = {

/***/ 2917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then((res)=>res.data);
const TrendingBox = ()=>{
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/trending", fetcher);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "min-w-[15rem] h-fit flex flex-col p-4 gap-4 shadow-xl bg-lightMode-component dark:bg-darkMode-component text-lightMode-txt dark:text-darkMode-txt rounded-lg sticky top-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full font-bold tracking-tight leading-tight flex flex-wrap content-center items-center ml-1 p-1 rounded-md text-md ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mr-3 ",
                        children: "Trending Specialists"
                    })
                }),
                data?.trendingSpecialist.map((doctor, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex items-start border-teal-950 gap-2 text-sm px-4 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "bg-cyan-500 text-white dark:text-darkMode-txt dark:bg-cyan-800 w-5 h-5 rounded-md flex justify-center",
                                children: index + 1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: " border-neutral-500",
                                children: doctor.doctorName
                            }, index)
                        ]
                    }, index);
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendingBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;