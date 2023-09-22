"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: ./src/models/userModel.js
var userModel = __webpack_require__(3829);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
// EXTERNAL MODULE: ./src/dbconnect.js
var dbconnect = __webpack_require__(6783);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].js





const authOptions = {
    providers: [
        credentials_default()({
            name: "credentials",
            async authorize (credentials, req) {
                (0,dbconnect/* default */.Z)().catch((error)=>{
                    error: "Connection Failed...!";
                });
                // check user existance
                const user = await userModel/* default.findOne */.Z.findOne({
                    email: credentials.email
                });
                const checkPassword = await (0,external_bcrypt_.compare)(credentials.password, user.password);
                if (user && checkPassword) {
                    delete user.password;
                    return Promise.resolve(user);
                } else {
                    throw new Error("Invalid Credentials");
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async session ({ session , token  }) {
            if (token) {
                session.user.id = token._doc._id;
                session.user.isDoctor = token._doc.isDoctor;
                session.user.name = token._doc.fullname;
                session.user.email = token._doc.email;
                session.user.profile = token._doc.profile;
            }
            return {
                ...session
            };
        },
        async jwt ({ token , user  }) {
            return {
                ...token,
                ...user
            };
        }
    },
    secret: process.env.NEXTAUTH_SECRET
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [272], () => (__webpack_exec__(197)));
module.exports = __webpack_exports__;

})();