(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-views-single-single-module"],{

/***/ "3Abs":
/*!****************************************************!*\
  !*** ./src/app/core/views/single/single.module.ts ***!
  \****************************************************/
/*! exports provided: SinglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageModule", function() { return SinglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _single_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-routing.module */ "c0SZ");
/* harmony import */ var _single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single.page */ "wzJk");







let SinglePageModule = class SinglePageModule {
};
SinglePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _single_routing_module__WEBPACK_IMPORTED_MODULE_5__["SinglePageRoutingModule"]
        ],
        declarations: [_single_page__WEBPACK_IMPORTED_MODULE_6__["SinglePage"]]
    })
], SinglePageModule);



/***/ }),

/***/ "52BK":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/views/single/single.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-icon name=\"cart-outline\" class=\"icon-header\" slot=\"end\" (click)=\"goToCart()\"></ion-icon>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <img [src]=\"dataObject.uri\" alt=\"img\" class=\"img\">\n      <h1 class=\"title\">{{ dataObject.slug }}</h1>\n      <p class=\"price\">$ {{ dataObject.price | number }} MXN</p>\n      <div class=\"counter-div\">\n        <div class=\"less\">\n          <ion-icon name=\"remove-circle-outline\" (click)=\"lessCounter()\"></ion-icon>\n        </div>\n        <div class=\"counter\">\n          <span class=\"contador\">{{ counter }}</span>\n        </div>\n        <div class=\"more\">\n          <ion-icon name=\"add-circle-outline\" (click)=\"moreCounter()\"></ion-icon>\n        </div>\n      </div>\n      <ion-row class=\"div-sabors\">\n        <ion-col size=\"4\" *ngFor=\"let items of saborsGuajalotas\">\n          <a class=\"selected-img\" (click)=\"selectedSabors(items)\">\n            <img [src]=\"items.uri\" alt=\"img\">\n          </a>\n        </ion-col>\n        </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div class=\"container\">\n    <ion-button shape=\"round\" (click)=\"addCartData(dataObject)\" class=\"btn-footer\"><span>Agregar al carrito</span></ion-button>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "C+X7":
/*!****************************************************!*\
  !*** ./src/app/core/views/single/single.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.icon-header {\n  font-size: 40px;\n  padding-right: 20px;\n  color: grey;\n  padding-top: 10px;\n}\n\n.img {\n  width: 80%;\n  display: block;\n  margin: 0px auto;\n  margin-top: -10%;\n}\n\n.title {\n  color: #000;\n  text-align: center;\n  font-size: 35px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.price {\n  color: #ff7a64;\n  text-align: center;\n  font-size: 20px;\n  margin-top: 0px;\n  font-weight: bold;\n  margin-bottom: 30px;\n}\n\n.counter-div {\n  display: block;\n  margin: 0px auto;\n  width: 205px;\n  background: #ffffff;\n  padding: 20px;\n  border-radius: 20px;\n  margin-bottom: 70px;\n}\n\n.counter-div .less {\n  display: inline;\n  width: 20%;\n  padding-right: 37px;\n}\n\n.counter-div .less ion-icon {\n  font-size: 30px;\n}\n\n.counter-div .counter {\n  display: inline;\n  width: 20%;\n}\n\n.counter-div .counter span {\n  font-size: 30px;\n}\n\n.counter-div .more {\n  display: inline;\n  width: 20%;\n  padding-left: 36px;\n}\n\n.counter-div .more ion-icon {\n  font-size: 30px;\n}\n\n.div-sabors {\n  margin-top: 20px;\n}\n\n.div-sabors ion-col .selected-img {\n  opacity: 0.4;\n}\n\n.div-sabors ion-col .selected-img img {\n  width: 80%;\n  display: block;\n  margin: 0px auto;\n  opacity: 0.4;\n}\n\n.div-sabors ion-col .selected-img:active img {\n  opacity: 0.9;\n}\n\nion-footer {\n  --background: #f2f2f2;\n}\n\nion-footer .container {\n  display: flex;\n  justify-content: center;\n}\n\nion-footer .container .btn-footer {\n  margin-top: 20px;\n  width: 90%;\n  --background: #fa4a0c;\n  --background-activated: #fa4a0c;\n  height: 60px;\n}\n\nion-footer .container .btn-footer span {\n  color: #fff;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpbmdsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUxFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQU9KOztBQU5JO0VBQ0UsZUFBQTtBQVFOOztBQUxFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFPSjs7QUFOSTtFQUNFLGVBQUE7QUFRTjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFOSTtFQUNFLGVBQUE7QUFRTjs7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7O0FBTEk7RUFDRSxZQUFBO0FBT047O0FBTk07RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVFSOztBQUpNO0VBQ0UsWUFBQTtBQU1SOztBQURBO0VBQ0UscUJBQUE7QUFJRjs7QUFIRTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUtOOztBQUpJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFNTjs7QUFMTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQU9SIiwiZmlsZSI6InNpbmdsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5pY29uLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgY29sb3I6IGdyZXk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xufVxuLnRpdGxlIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnByaWNlIHtcbiAgY29sb3I6ICNmZjdhNjQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNvdW50ZXItZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHdpZHRoOiAyMDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgLmxlc3Mge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB3aWR0aDogMjAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDM3cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfVxuICAuY291bnRlciB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9XG4gIC5tb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfVxufVxuLmRpdi1zYWJvcnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBpb24tY29sIHtcbiAgICAuc2VsZWN0ZWQtaW1nIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3RlZC1pbWc6YWN0aXZlIHtcbiAgICAgIGltZyB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmlvbi1mb290ZXIge1xuICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5idG4tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmE0YTBjO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZhNGEwYztcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "c0SZ":
/*!************************************************************!*\
  !*** ./src/app/core/views/single/single-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SinglePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageRoutingModule", function() { return SinglePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _single_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single.page */ "wzJk");




const routes = [
    {
        path: '',
        component: _single_page__WEBPACK_IMPORTED_MODULE_3__["SinglePage"]
    }
];
let SinglePageRoutingModule = class SinglePageRoutingModule {
};
SinglePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SinglePageRoutingModule);



/***/ }),

/***/ "wzJk":
/*!**************************************************!*\
  !*** ./src/app/core/views/single/single.page.ts ***!
  \**************************************************/
/*! exports provided: SinglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePage", function() { return SinglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_single_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./single.page.html */ "52BK");
/* harmony import */ var _single_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single.page.scss */ "C+X7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "cplz");







let SinglePage = class SinglePage {
    constructor(router, route, dto, toastController) {
        this.router = router;
        this.route = route;
        this.dto = dto;
        this.toastController = toastController;
        this.dataObject = {};
        this.counter = 1;
    }
    ngOnInit() {
        this.route.params.subscribe((data) => {
            this.id = data;
        });
        this.conditionData();
        this.guajalotaSabors();
    }
    conditionData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const data = yield this.dto.getDataGuajalopas().subscribe((data) => {
                    const items = data.find((item) => item.id === parseInt(this.id.id));
                    this.dataObject = items;
                    // return this.dataObject;
                });
                return data;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    moreCounter() {
        return (this.counter = this.counter + 1);
    }
    lessCounter() {
        return (this.counter = this.counter - 1);
    }
    guajalotaSabors() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dto.getSaborsGuajalopas().subscribe((data) => {
                this.saborsGuajalotas = data;
            });
        });
    }
    goToCart() {
        this.router.navigateByUrl('cart');
    }
    selectedSabors(items) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `has seleccionado: ${items.name}`,
                duration: 1000,
                position: "top"
            });
            toast.present();
            localStorage.setItem("name", items.name);
        });
    }
    addCartData(dataObject) {
        this.sendData(dataObject.uri, dataObject.id, dataObject.slug, dataObject.price, this.counter, localStorage.getItem("name"));
    }
    sendData(uri, id, name, price, quantity, sabor) {
        this.dto.getCartData(uri, id, name, price, quantity, sabor);
    }
};
SinglePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
SinglePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-single',
        template: _raw_loader_single_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_single_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SinglePage);



/***/ })

}]);
//# sourceMappingURL=core-views-single-single-module-es2015.js.map