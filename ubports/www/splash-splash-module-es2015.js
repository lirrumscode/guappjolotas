(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-splash-module"],{

/***/ "QSij":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".containt-img .img-logo {\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQVIiLCJmaWxlIjoic3BsYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWludC1pbWd7XG4gICAgLmltZy1sb2dve1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "acyj":
/*!***************************************!*\
  !*** ./src/app/splash/splash.page.ts ***!
  \***************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./splash.page.html */ "hFcS");
/* harmony import */ var _splash_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash.page.scss */ "QSij");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let SplashPage = class SplashPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let TIME_IN_MS = 5000;
        setTimeout(() => {
            this.route.navigateByUrl('home');
        }, TIME_IN_MS);
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SplashPage);



/***/ }),

/***/ "eYMH":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.module.ts ***!
  \*****************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splash-routing.module */ "zerW");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash.page */ "acyj");







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
    })
], SplashPageModule);



/***/ }),

/***/ "hFcS":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"light\">\n  <div class=\"containt-img\">\n    <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-logo\">\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "zerW":
/*!*************************************************!*\
  !*** ./src/app/splash/splash-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SplashPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function() { return SplashPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash.page */ "acyj");




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SplashPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=splash-splash-module-es2015.js.map