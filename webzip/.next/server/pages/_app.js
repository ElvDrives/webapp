"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./stub/nav.js
const nav = [
    "Home",
    "Working",
    "Places",
    "Careers",
    "Contact Us"
];
/* harmony default export */ const stub_nav = (nav);

;// CONCATENATED MODULE: ./Components/Navbar.js


const Navbar = ()=>{
    console.log(stub_nav, "navbar");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "navbar custom_nav navbar-expand-lg navbar-light shadow-xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "navbar-brand",
                href: "#",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "./images/logo.svg",
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "navbar-toggler",
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "navbar-toggler-icon"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "collapse navbar-collapse",
                id: "navbarSupportedContent",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "navbar-nav ml-auto",
                    children: stub_nav && stub_nav.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item pl-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                href: "#",
                                children: item
                            })
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const Components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./Components/Layout.js


const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Components_Navbar, {}),
            children
        ]
    });
};
/* harmony default export */ const Components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function myApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (myApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(430));
module.exports = __webpack_exports__;

})();