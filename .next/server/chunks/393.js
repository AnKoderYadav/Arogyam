"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 778:
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

/***/ 9676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_MainLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Navbar.js





const Navbar = ({ isDoctor  })=>{
    const router = (0,router_.useRouter)();
    const handleSignOut = ()=>{
        (0,react_.signOut)({
            redirect: false
        });
        router.push("/login");
    };
    const basePath = isDoctor ? "/doctor/" : "/";
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
            className: "sticky top-0 bg-lightMode-btn dark:bg-gray-800 w-100 px-8 md:px-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                        href: "/feed",
                        className: "text-white md:order-1 flex items-center cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-10 w-10",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "ml-2 text-2xl font-extrabold tracking-tight leading-tight",
                                children: "AROGYAM"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "order-3 w-full md:w-auto md:order-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "text-xl flex justify-around gap-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: basePath,
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/feed",
                                        children: "Feed"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `${basePath}profile`,
                                        children: "Profile"
                                    })
                                }),
                                isDoctor ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/doctor/consult",
                                            children: "Consult"
                                        })
                                    })
                                }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "order-2 md:order-3",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "px-4 py-2 hover:bg-cyan-700 dark:hover:bg-cyan-900 text-gray-50 rounded-md flex items-center gap-2",
                            onClick: handleSignOut,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
                                        clipRule: "evenodd"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Sign Out"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
//
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/layouts/MainLayout.js




const MainLayout = ({ children  })=>{
    const { data: session  } = (0,react_.useSession)();
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "w-screen h-screen overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(components_Navbar, {
                    isDoctor: session?.user.isDoctor
                }, 1),
                children
            ]
        })
    });
};
/* harmony default export */ const layouts_MainLayout = (MainLayout);


/***/ })

};
;