"use strict";
(() => {
var exports = {};
exports.id = 396;
exports.ids = [396];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 1023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const stripe = __webpack_require__(8174)(process.env.STRIPE_SECRET_KEY);
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { priceId  } = req.query;
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: priceId,
                        quantity: 1
                    }
                ],
                mode: "payment",
                success_url: `${req.headers.origin}/checkout/${priceId}/?success=true`,
                cancel_url: `${req.headers.origin}/checkout/${priceId}/?canceled=true`
            });
            res.redirect(303, session.url);
        // return res.status(200).json({ session });
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1023));
module.exports = __webpack_exports__;

})();