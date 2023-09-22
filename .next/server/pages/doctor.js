(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 7470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ConsultBox = ({ post , doctor , setOffer , refreshData  })=>{
    const handleValidation = ()=>{
        const { fee  } = formik.values;
        if (fee === 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.info("Fee cannot be Zero!", _lib_lib__WEBPACK_IMPORTED_MODULE_5__/* .toastOptions */ .H);
            return false;
        }
        return true;
    };
    const onSubmit = async (values, err)=>{
        if (handleValidation()) {
            const { fee  } = values;
            const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/user/doctor/consultation", {
                postId: post._id,
                doctorName: doctor.doctorId.fullname,
                doctorProfile: doctor.doctorId.profile,
                doctorRefId: doctor._id,
                fee
            });
            setOffer(false);
            refreshData();
            if (res.status === 200) react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(res.data.msg, _lib_lib__WEBPACK_IMPORTED_MODULE_5__/* .toastOptions */ .H);
            else react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(res.data.msg, _lib_lib__WEBPACK_IMPORTED_MODULE_5__/* .toastOptions */ .H);
        }
    };
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
        initialValues: {
            fee: 0
        },
        onSubmit
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "w-full flex flex-col gap-4 p-5",
            onSubmit: formik.handleSubmit,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "block uppercase tracking-wide text-xs font-semibold mb-2",
                            htmlFor: "grid-first-name",
                            children: "Fee"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white",
                            id: "grid-first-name",
                            type: "number",
                            placeholder: "Enter Fee",
                            ...formik.getFieldProps("fee")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-row mx-7 p-5 justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "text-sm p-2 w-full font-medium bg-lightMode-btn dark:bg-darkMode-btn rounded-md text-white",
                        children: "Send"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConsultBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(178);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConsultBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7470);
/* harmony import */ var _function_getTimeElapsed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8944);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ConsultBox__WEBPACK_IMPORTED_MODULE_3__]);
_ConsultBox__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const RequestBox = ({ post , doctor  })=>{
    const [offer, setOffer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const refreshData = ()=>{
        router.replace(router.asPath);
    };
    const timeElapsed = new Date().getTime() - new Date(post.createdAt);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center flex-col w-full bg-lightMode-component text-lightMode-txt shadow-xl rounded-lg dark:bg-darkMode-component dark:text-darkMode-txt p-2 ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-center items-center w-full p-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center content-center w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "w-10 h-10 rounded-full",
                                    src: post.patientId.profile,
                                    alt: "img"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col pl-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-md tracking-tight font-sans font-semibold",
                                            children: post.patientId.fullname
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-xs",
                                            children: [
                                                (0,_function_getTimeElapsed__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(timeElapsed),
                                                " ago"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        post.severity === "Low" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-sm  flex flex-row pr-5 w-full justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mr-2 font-semibold",
                                    children: "Severity - "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__.FcLowPriority, {
                                    className: "md:text-xl mr-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "uppercase text-sm",
                                    children: "low"
                                })
                            ]
                        }) : post.severity === "Medium" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-sm flex flex-row pr-5 w-full justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-semibold mr-2",
                                    children: "Severity - "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__.FcMediumPriority, {
                                    className: "md:text-xl mr-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "uppercase text-sm",
                                    children: "Medium"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-sm flex flex-row pr-5 w-full justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-semibold mr-2",
                                    children: "Severity - "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__.FcHighPriority, {
                                    className: "md:text-xl mr-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "uppercase text-sm",
                                    children: "High"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex p-3 py-0 gap-2 w-full flex-col ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-sans text-sm text-justify",
                            children: post.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "w-auto h-[300px] object-contain",
                            src: post.image,
                            alt: ""
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-wrap justify-around  gap-2 m-2 border-t-[1px] pt-2 w-4/5 dark:border-neutral-600",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-fit text-xl flex  content-center items-center cursor-pointer p-2 py-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xl ",
                                children: !post.offers.includes(`${doctor._id}`) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "md:text-md w-full rounded-xl flex flex-row items-center md:font-bold tracking-tight leading-tight p-[5px] hover:bg-slate-300 hover:text-gray-600 pr-2 content-center",
                                    onClick: ()=>setOffer(!offer),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__.FcPlus, {
                                            className: "md:text-2xl mr-2"
                                        }),
                                        "Offer consultation"
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " md:text-md w-full rounded-xl flex flex-row items-center md:font-bold tracking-tight leading-tight  p-[5px]  pr-2 content-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__.FcApproval, {
                                            className: "md:text-2xl mr-2"
                                        }),
                                        "Offered"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-fit text-xl flex content-center items-center hover:text-gray-600 cursor-pointer ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xl ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "text-md w-full md:font-bold tracking-tight hover:bg-slate-300 pr-2 leading-tight rounded-xl  p-[5px] flex flex-row items-center content-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__.FcShare, {
                                            className: "md:text-2xl mr-2"
                                        }),
                                        "Share"
                                    ]
                                })
                            })
                        })
                    ]
                }),
                offer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConsultBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    post: post,
                    doctor: doctor,
                    setOffer: setOffer,
                    refreshData: refreshData
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 7824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 4379:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_TrendingBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2917);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9676);
/* harmony import */ var _components_RequestBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1193);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dbconnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(778);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
/* harmony import */ var _models_postModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7824);
/* harmony import */ var _models_doctorModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6854);
/* harmony import */ var _models_consultModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1970);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TrendingBox__WEBPACK_IMPORTED_MODULE_1__, _components_RequestBox__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_9__]);
([_components_TrendingBox__WEBPACK_IMPORTED_MODULE_1__, _components_RequestBox__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













async function getServerSideProps({ req  }) {
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
    (0,_dbconnect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)().catch((error)=>console.log(error));
    //current user
    let res = await _models_doctorModel__WEBPACK_IMPORTED_MODULE_11__/* ["default"].findOne */ .Z.findOne({
        doctorId: session.user.id
    }).populate("doctorId");
    const doctor = JSON.parse(JSON.stringify(res));
    //all posts
    res = await _models_postModel__WEBPACK_IMPORTED_MODULE_10__/* ["default"].find */ .Z.find({
        solved: false
    }).populate("patientId").sort({
        updatedAt: -1
    });
    const posts = res.map((doc)=>{
        const post = JSON.parse(JSON.stringify(doc));
        return post;
    });
    res = await _models_consultModel__WEBPACK_IMPORTED_MODULE_12__/* ["default"].find */ .Z.find({
        doctorRefId: doctor._id
    });
    const consultations = res.map((doc)=>{
        const consultation = JSON.parse(JSON.stringify(doc));
        return consultation;
    });
    return {
        props: {
            doctor,
            posts,
            consultations
        }
    };
}
const Home = ({ doctor , posts , consultations  })=>{
    const consultCount = consultations.filter((consultation)=>consultation.isAccepted === true).length;
    const requestCount = consultations.filter((consultation)=>consultation.isAccepted === false).length;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex justify-center gap-8 md:p-8 bg-lightMode-background dark:bg-darkMode-background text-lightMode-txt dark:text-darkMode-txt overflow-scroll",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "doctorProfileBox",
                            className: "sticky top-0 h-fit w-[15%] justify-center flex flex-col shadow-xl bg-lightMode-component text-lightMode-txt dark:bg-darkMode-component  dark:text-darkMode-txt py-6 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex content-center justify-center items-center flex-col gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "w-44 h-44 rounded-full border-[1px] m-2 border-cyan-600 dark:border-neutral-600 object-cover",
                                            src: doctor.doctorId.profile,
                                            alt: "pic"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-lg font-medium ",
                                            children: doctor.doctorId.fullname
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "py-2 gap-2 w-[70%] mx-9 flex  items-center flex-col border-y-[1px] border-black dark:border-white",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row items-center w-full justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-md mr-2",
                                                    children: "Offered"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-md bg-cyan-500 dark:bg-cyan-800  rounded-xl w-8 h-8 flex items-center justify-center text-white",
                                                    children: requestCount
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row items-center w-full justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-md mr-2",
                                                    children: "Accepted"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-md bg-cyan-500 dark:bg-cyan-800 rounded-xl w-8 h-8 flex justify-center items-center text-white",
                                                    children: consultCount
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-4 pb-1 text-center flex justify-center items-center text-white",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: "/doctor/consult",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "font-bold -tracking-tightest leading-tight text-xs p-2 bg-lightMode-btn text-white dark:bg-cyan-900 dark:text-darkMode-txt rounded-md  ",
                                            children: "Manage Consultations"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "requestBox",
                            className: "w-[50%] h-full flex flex-col gap-8",
                            children: posts.map((post)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    post: post,
                                    doctor: doctor
                                }, post._id);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "sticky top-0",
                            id: "Trending",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TrendingBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_9__.ToastContainer, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 178:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fc");

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

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,393,494,5], () => (__webpack_exec__(4379)));
module.exports = __webpack_exports__;

})();