"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6079:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _function_getTimeElapsed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CurrentPost = ({ user , post , refreshData  })=>{
    const timeElapsed = new Date().getTime() - new Date(post.createdAt);
    const handleDelete = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](`/api/user/post/delete/${post._id}`);
        refreshData();
    };
    const handleSolved = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`/api/user/post/${post._id}`, {
            solved: true
        });
        refreshData();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full h-[50%] flex content-center items-center flex-col bg-lightMode-component text-lightMode-txt dark:bg-darkMode-component dark:text-darkMode-txt shadow-xl p-4 gap-4 rounded-lg min-w-1/2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex content-center items-center w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full flex flex-row content-center items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "w-10 h-10 rounded-full",
                                    src: user.profile,
                                    alt: "img"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "ml-4 text-sm font-medium tracking-tight",
                                            children: user.fullname
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "ml-4 text-xs",
                                            children: [
                                                (0,_function_getTimeElapsed__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(timeElapsed),
                                                " ago"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-center text-3xl hover:text-red-600 cursor-pointer",
                            onClick: handleDelete,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdDelete, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-2 w-full ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-justify font-sans",
                            children: post.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "w-auto h-[300px] object-contain",
                            src: post.image,
                            alt: ""
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-end w-full justify-end mr-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "text-sm bg-cyan-500 text-white  dark:bg-cyan-800 p-1 px-3 rounded-lg hover:bg-cyan-700 ",
                        onClick: handleSolved,
                        children: "Solved"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7824:
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


/***/ }),

/***/ 5901:
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
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9923);
/* harmony import */ var _dbconnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(778);
/* harmony import */ var _models_postModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7824);
/* harmony import */ var _models_consultModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1970);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9676);
/* harmony import */ var _components_OfferBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _components_CurrentPost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6079);
/* harmony import */ var _components_TrendingBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2917);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(137);
/* harmony import */ var _models_doctorModel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6854);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _components_CurrentPost__WEBPACK_IMPORTED_MODULE_9__, _components_TrendingBox__WEBPACK_IMPORTED_MODULE_10__, react_toastify__WEBPACK_IMPORTED_MODULE_14__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _components_CurrentPost__WEBPACK_IMPORTED_MODULE_9__, _components_TrendingBox__WEBPACK_IMPORTED_MODULE_10__, react_toastify__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















async function getServerSideProps({ req  }) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.getSession)({
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
    (0,_dbconnect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().catch((error)=>console.log(error));
    //current user
    let res = await _models_userModel__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(session.user.id);
    const user = JSON.parse(JSON.stringify(res));
    //all posts by current user
    res = await _models_postModel__WEBPACK_IMPORTED_MODULE_5__/* ["default"].find */ .Z.find({
        patientId: user._id
    }).sort({
        updatedAt: -1
    });
    const posts = res.map((doc)=>{
        const post = JSON.parse(JSON.stringify(doc));
        return post;
    });
    const Doctor = await _models_doctorModel__WEBPACK_IMPORTED_MODULE_18__/* ["default"].findOne */ .Z.findOne({
        email: user.email
    });
    let consultations = [];
    // all consultation offers on current post
    if (posts[0]) {
        res = await _models_consultModel__WEBPACK_IMPORTED_MODULE_6__/* ["default"].find */ .Z.find({
            postId: posts[0]._id
        }).populate("doctorRefId").sort({
            updatedAt: -1
        });
        consultations = res.map((doc)=>{
            const consultation = JSON.parse(JSON.stringify(doc));
            return consultation;
        });
    }
    return {
        props: {
            user,
            posts,
            consultations
        }
    };
}
const Home = ({ user , posts , consultations  })=>{
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [sorted, setSorted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const refreshData = ()=>{
        router.replace(router.asPath);
    };
    const onSubmit = async (values, error)=>{
        const body = new FormData();
        body.append("file", image);
        const newFilename = `${Date.now()}_${image.name}`;
        body.append("newFilename", newFilename);
        await fetch("/api/upload", {
            method: "POST",
            body
        });
        const { description , severity  } = values;
        const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/user/post", {
            patientId: user._id,
            description,
            severity,
            image: `https://storage.googleapis.com/arogyam-bucket/${newFilename}`
        });
        if (res.status === 200) {
            react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(res.data.msg, _lib_lib__WEBPACK_IMPORTED_MODULE_17__/* .toastOptions */ .H);
            setTimeout(refreshData, 4000);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error(res.data.msg, _lib_lib__WEBPACK_IMPORTED_MODULE_17__/* .toastOptions */ .H);
        }
    };
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_12__.useFormik)({
        initialValues: {
            description: "",
            severity: "Low"
        },
        onSubmit
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex justify-center items-start overflow-x-hidden p-5 gap-1 text-lightMode-txt dark:text-darkMode-txt bg-lightMode-background dark:bg-darkMode-background",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " max-w-3xl w-full flex flex-col gap-5 p-5 pt-0",
                            children: posts[0] && !posts[0].solved ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CurrentPost__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        post: posts[0],
                                        refreshData: refreshData,
                                        user: user
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full flex gap-4 justify-between  items-center ",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>{
                                                    setSorted(!sorted);
                                                    consultations.reverse();
                                                },
                                                className: "border-[1px] border-neutral-400 dark:border-neutral-700  p-[1px] px-1 rounded-md cursor-pointer  tracking-tight leading-tight flex flex-row items-center gap-[6px]",
                                                children: [
                                                    "Sort by",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "cursor-pointer font-bold",
                                                        children: sorted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_13__.BsSortDownAlt, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_13__.BsSortDown, {})
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " tracking-tight leading-tight mr-3",
                                                children: [
                                                    consultations.length + " ",
                                                    "offers"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full flex flex-row flex-wrap gap-2",
                                        children: consultations.map((consultation)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OfferBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                consultation: consultation,
                                                hide: false
                                            }, consultation._id);
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex items-center flex-col text-lightMode-txt dark:text-darkMode-txt bg-lightMode-component dark:bg-darkMode-component shadow-md p-4 gap-5 rounded-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex content-center items-center w-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full flex flex-row content-center items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "w-[3rem] h-[3rem] rounded-full",
                                                    src: user.profile,
                                                    alt: "img"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: " ml-4 flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: " text-xl ",
                                                            children: "Welcome to Arogyam!"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: user.fullname
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "w-full flex flex-col gap-2 text-sm items-center",
                                        onSubmit: formik.handleSubmit,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                rows: "8",
                                                placeholder: "Please, describe your health",
                                                className: "bg-transparent w-full focus:outline-none border border-stone-400 rounded-md p-4",
                                                ...formik.getFieldProps("description")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-full flex justify-between items-center px-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "file",
                                                        className: "w-48",
                                                        onChange: (e)=>{
                                                            setImage(e.target.files[0]);
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "flex justify-center items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "block uppercase tracking-wide text-xs font-semibold",
                                                                htmlFor: "grid-state",
                                                                children: "Severity"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                className: "appearance-none p-2 block  bg-lightMode-btn dark:bg-darkMode-btn hover:bg-cyan-600 rounded leading-tight placeholder:text-white text-white focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white",
                                                                id: "grid-state",
                                                                ...formik.getFieldProps("severity"),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        children: "Low"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        children: "Medium"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        children: "High"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "font-medium bg-lightMode-btn dark:bg-darkMode-btn hover:bg-cyan-600 disabled:text-white disabled:bg-black/25 dark:disabled:text-black/40 dark:disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-md px-12 p-2",
                                                        type: "submit",
                                                        disabled: !formik.values.description.trim(),
                                                        children: "Post"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " lg:flex md:flex sticky top-0 hidden ",
                            id: "Trending",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TrendingBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}, 1)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

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

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,393,37,494,5,41], () => (__webpack_exec__(5901)));
module.exports = __webpack_exports__;

})();