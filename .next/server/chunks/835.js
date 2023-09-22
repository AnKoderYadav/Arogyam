"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 9126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(137);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _function_getTimeElapsed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Post = ({ pdata , user  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [postLiked, setPostLiked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pdata.likeBy.includes(user._id));
    const [likeCount, setLikeCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pdata.likeBy.length);
    const timeElapsed = new Date().getTime() - new Date(pdata.createdAt);
    const handleLike = async ()=>{
        if (postLiked) {
            await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`/api/user/feedPost/${pdata._id}`, {
                userId: user._id,
                liked: false
            });
            setLikeCount(likeCount - 1);
        } else {
            await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`/api/user/feedPost/${pdata._id}`, {
                userId: user._id,
                liked: true
            });
            setLikeCount(likeCount + 1);
        }
        setPostLiked(!postLiked);
    };
    const refreshData = ()=>{
        router.replace(router.asPath);
    };
    const onSubmit = async (values, error)=>{
        const { content  } = values;
        const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].put(`/api/user/comment/${pdata._id}`, {
            name: user.fullname,
            profile: user.profile,
            content
        });
        setShow(false);
        if (res.status === 200) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(res.data.msg, _lib_lib__WEBPACK_IMPORTED_MODULE_6__/* .toastOptions */ .H);
            refreshData();
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(res.data.msg, _lib_lib__WEBPACK_IMPORTED_MODULE_6__/* .toastOptions */ .H);
        }
    };
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
        initialValues: {
            content: ""
        },
        onSubmit
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-5 bg-lightMode-component dark:bg-darkMode-component mt-5 rounded-t-lg shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center space-x-2 flex-row",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "rounded-full w-10 h-10",
                                            src: pdata?.userId.profile
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-medium",
                                                children: pdata.userId.fullname
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-xs text-gray-400",
                                                children: [
                                                    (0,_function_getTimeElapsed__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(timeElapsed),
                                                    " ago"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                href: `/feed/${pdata._id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "text-black dark:text-white",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "material-symbols-outlined",
                                        children: "open_in_new"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-2",
                        children: pdata.description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " flex justify-center align-center md-h-96 bg-zinc-300 dark:bg-neutral-800",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: pdata.image,
                    className: "object-contain max-h-[17rem]"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col rounded-b-lg bg-lightMode-component dark:bg-darkMode-component text-neutral-700 dark:text-neutral-400 border-t p-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between items-center gap-9 mx-10 mb-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onClick: handleLike,
                                className: "rounded-lg cursor-pointer flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-white justify-center p-1",
                                children: [
                                    postLiked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xl",
                                        children: "❤️ "
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xl",
                                        children: "\uD83E\uDD0D "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            paddingRight: "10px",
                                            whiteSpace: "nowrap",
                                            display: "inline-block"
                                        },
                                        children: likeCount
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                onClick: ()=>setShow(!show),
                                className: "rounded-lg cursor-pointer flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-white justify-center p-2 px-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "material-symbols-outlined",
                                        children: "chat"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-xs sm:text-base ",
                                        children: "Comment"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rounded-lg cursor-pointer flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-white justify-center p-2 px-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "material-symbols-outlined",
                                        children: "share"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-xs sm:text-base",
                                        children: "Share"
                                    })
                                ]
                            })
                        ]
                    }),
                    show && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "CommentSection",
                        className: " flex mx-4 space-x-4 p-4 items-center border-t-[1px] border-neutral-400 dark:border-neutral-600",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "rounded-full w-8 h-8",
                                src: user.profile
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                action: "",
                                className: "flex flex-1 ",
                                onSubmit: formik.handleSubmit,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        className: "rounded-full h-8 bg-gray-100 dark:bg-neutral-800  flex flex-grow px-5 focus:outline-none ",
                                        placeholder: "Write a comment..",
                                        ...formik.getFieldProps("content")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "ml-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "material-symbols-outlined",
                                            children: "send"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const CommentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        default: "https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?b=1&s=612x612&w=0&k=20&c=Dnxc_cOvh1zQjTE8Za9MMADydkRc8lSKzIEX6ej9H8g="
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const FeedPostSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    userId: {
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
    comments: {
        type: [
            CommentSchema
        ],
        default: []
    },
    likeBy: {
        type: [
            String
        ],
        default: []
    }
}, {
    timestamps: true
});
const FeedPosts = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.FeedPost || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("FeedPost", FeedPostSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPosts);


/***/ })

};
;