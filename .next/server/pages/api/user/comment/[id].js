"use strict";
(() => {
var exports = {};
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _dbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6783);
/* harmony import */ var _models_feedModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8256);


async function handler(req, res) {
    (0,_dbconnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().catch((error)=>res.json({
            error: "Connection Failed"
        }));
    const { content , name , profile  } = req.body;
    if (req.method === "PUT") {
        const data = await _models_feedModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(req.query.id, {
            $push: {
                comments: {
                    name,
                    profile,
                    content
                }
            }
        });
        if (!data) {
            return res.status(400).json({
                msg: "Comment Unsuccesful"
            });
        }
        return res.status(200).json({
            data,
            msg: "Comment Successfully"
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
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [947], () => (__webpack_exec__(9367)));
module.exports = __webpack_exports__;

})();