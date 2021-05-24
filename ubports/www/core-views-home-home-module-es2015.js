(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-views-home-home-module"],{

/***/ "1lfc":
/*!************************************************!*\
  !*** ./src/app/core/views/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "r3xG");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "TVGC");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "F4NX":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/views/home/home.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-row>\n      <ion-col size=\"8\">\n        <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"img-logo\" />\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-icon name=\"cart-outline\" class=\"icon-header\" (click)=\"goToCart()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <h1 class=\"title\">Nada como una Guajolota para empezar el día</h1>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-searchbar\n          placeholder=\"Sabor de guajapota, bebida ...\"\n          mode=\"ios\"\n        ></ion-searchbar>\n      </ion-col>\n      <div class=\"ion-padding\">\n        <ion-segment\n          [(ngModel)]=\"type\"\n          (ionChange)=\"segmentChanged($event)\"\n          scrollable\n          mode=\"md\"\n        >\n          <ion-segment-button value=\"guajalotas\" checked>\n            <ion-label>Guajalotas</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"bebidas\">\n            <ion-label>Bebidas</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"tamales\">\n            <ion-label>Tamales</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n        <div [ngSwitch]=\"type\">\n          <ion-list *ngSwitchCase=\"'guajalotas'\">\n            <ion-row\n              *ngFor=\"let item of itemGuajalopas\"\n              id=\"sec-guajalotas\"\n              (click)=\"goToSingle(item)\"\n            >\n              <ion-col size=\"4\">\n                <ion-img [src]=\"item.uri\" class=\"sec-img\"></ion-img>\n              </ion-col>\n              <ion-col size=\"8\">\n                <h3 class=\"sec-name\">{{ item.name }}</h3>\n                <h3 class=\"sec-price\">${{ item.price | number }} MXN</h3>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n          <ion-list *ngSwitchCase=\"'bebidas'\">\n            <ion-row\n              *ngFor=\"let item of itemBebidas\"\n              id=\"sec-bebidas\"\n              (click)=\"goToSingleBebidas(item)\"\n            >\n              <ion-col size=\"4\">\n                <ion-img [src]=\"item.uri\" class=\"sec-img\"></ion-img>\n              </ion-col>\n              <ion-col size=\"8\">\n                <h3 class=\"sec-name\">{{ item.name }}</h3>\n                <h3 class=\"sec-price\">${{ item.price | number }} MXN</h3>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n          <ion-list *ngSwitchCase=\"'tamales'\">\n            <ion-row\n              *ngFor=\"let item of itemTamales\"\n              id=\"sec-tamales\"\n              (click)=\"goToSingleTamales(item)\"\n            >\n              <ion-col size=\"4\">\n                <ion-img [src]=\"item.uri\" class=\"sec-img\"></ion-img>\n              </ion-col>\n              <ion-col size=\"8\">\n                <h3 class=\"sec-name\">{{ item.name }}</h3>\n                <h3 class=\"sec-price\">${{ item.price | number }} MXN</h3>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "TVGC":
/*!********************************************************!*\
  !*** ./src/app/core/views/home/home-routing.module.ts ***!
  \********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "r3xG");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "bJlj":
/*!************************************************!*\
  !*** ./src/app/core/views/home/home.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-header {\n  font-size: 35px;\n  float: right;\n  position: relative;\n  top: 25px;\n  right: 20px;\n  color: #808080;\n}\n\n.img-logo {\n  padding-left: 10px;\n  width: 50%;\n}\n\nion-grid .title {\n  text-align: left;\n  color: #000;\n  font-weight: bold;\n  font-size: 40px;\n  margin-top: 0px;\n  padding-left: 20px;\n}\n\nion-grid ion-searchbar {\n  --background: #e7e7e7;\n}\n\nion-grid .ion-padding {\n  padding-left: 8px !important;\n}\n\nion-grid ion-segment {\n  --background: #f2f2f2;\n  margin-bottom: 20px;\n}\n\nion-grid ion-segment ion-segment-button {\n  --color: #808080;\n  --color-checked: #ff7a64;\n  --border-color: #ff7a64;\n  --indicator-color: #ff7a64;\n}\n\nion-grid ion-segment ion-segment-button ion-label {\n  font-size: 15px;\n  font-weight: bold;\n}\n\nion-list {\n  background: #f2f2f2 !important;\n}\n\n#sec-guajalotas {\n  width: 100%;\n  background: #fff;\n  border-radius: 15px;\n  height: 115px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#sec-guajalotas .sec-img {\n  width: 100%;\n  position: absolute;\n  top: 8px;\n}\n\n#sec-guajalotas .sec-name {\n  color: #000;\n  font-weight: bold;\n  margin-bottom: 10px;\n  font-size: 25px;\n}\n\n#sec-guajalotas .sec-price {\n  color: #ff7a64;\n  font-weight: 300;\n  font-size: 16px;\n  margin-top: 0px;\n}\n\n#sec-bebidas {\n  width: 100%;\n  background: #fff;\n  border-radius: 15px;\n  height: 115px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#sec-bebidas .sec-img {\n  width: 92%;\n  position: absolute;\n  top: 17px;\n}\n\n#sec-bebidas .sec-name {\n  color: #000;\n  font-weight: bold;\n  margin-bottom: 10px;\n  font-size: 22px;\n}\n\n#sec-bebidas .sec-name:nth-child(2) {\n  margin-top: 30px;\n}\n\n#sec-bebidas .sec-price {\n  color: #ff7a64;\n  font-weight: 300;\n  font-size: 16px;\n  margin-top: 0px;\n}\n\n#sec-tamales {\n  width: 100%;\n  background: #fff;\n  border-radius: 15px;\n  height: 115px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#sec-tamales .sec-img {\n  width: 92%;\n  position: absolute;\n  top: 17px;\n}\n\n#sec-tamales .sec-name {\n  color: #000;\n  font-weight: bold;\n  margin-bottom: 10px;\n  font-size: 22px;\n}\n\n#sec-tamales .sec-name:nth-child(2) {\n  margin-top: 30px;\n}\n\n#sec-tamales .sec-price {\n  color: #ff7a64;\n  font-weight: 300;\n  font-size: 16px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSw0QkFBQTtBQUVKOztBQUFFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQURJO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUFHTjs7QUFGTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUlSOztBQUNBO0VBQ0EsOEJBQUE7QUFFQTs7QUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFJSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFIRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFLSjs7QUFIRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhFO0VBQ0UsZ0JBQUE7QUFLSjs7QUFIRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBS0o7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBTUo7O0FBSkU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKRTtFQUNFLGdCQUFBO0FBTUo7O0FBSkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU1KIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24taGVhZGVyIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNXB4O1xuICByaWdodDogMjBweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG4uaW1nLWxvZ28ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5pb24tZ3JpZCB7XG4gIC50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlN2U3ZTc7XG4gIH1cbiAgLmlvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgLS1jb2xvcjogIzgwODA4MDtcbiAgICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmN2E2NDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmY3YTY0O1xuICAgICAgLS1pbmRpY2F0b3ItY29sb3I6ICNmZjdhNjQ7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuaW9uLWxpc3R7XG5iYWNrZ3JvdW5kOiNmMmYyZjIgIWltcG9ydGFudDtcbn1cbiNzZWMtZ3VhamFsb3Rhc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC5zZWMtaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgfVxuICAuc2VjLW5hbWV7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgLnNlYy1wcmljZXtcbiAgICBjb2xvcjogI2ZmN2E2NDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbn1cbiNzZWMtYmViaWRhc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC5zZWMtaW1ne1xuICAgIHdpZHRoOiA5MiU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTdweDtcbiAgfVxuICAuc2VjLW5hbWV7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLnNlYy1uYW1lOm50aC1jaGlsZCgyKXtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5zZWMtcHJpY2V7XG4gICAgY29sb3I6ICNmZjdhNjQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59XG4jc2VjLXRhbWFsZXN7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAuc2VjLWltZ3tcbiAgICB3aWR0aDogOTIlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3cHg7XG4gIH1cbiAgLnNlYy1uYW1le1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5zZWMtbmFtZTpudGgtY2hpbGQoMil7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAuc2VjLXByaWNle1xuICAgIGNvbG9yOiAjZmY3YTY0O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "r3xG":
/*!**********************************************!*\
  !*** ./src/app/core/views/home/home.page.ts ***!
  \**********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "F4NX");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "bJlj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "cplz");







let HomePage = class HomePage {
    constructor(router, dto, toastController) {
        this.router = router;
        this.dto = dto;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.type = 'guajalotas';
        this.getGuajalopas();
        this.getTamales();
        this.getBebidas();
        this.welcomeToast();
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
    goToSingle(item) {
        this.router.navigate(['/single', item.id]);
    }
    goToSingleBebidas(item) {
        this.router.navigate(['/single/bebidas/', item.id]);
    }
    goToSingleTamales(item) {
        this.router.navigate(['/single/tamales/', item.id]);
    }
    getGuajalopas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.dto.getDataGuajalopas().subscribe((data) => {
                    this.itemGuajalopas = data;
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getBebidas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.dto.getDataBebidas().subscribe((data) => {
                    this.itemBebidas = data;
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getTamales() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.dto.getDataTamales().subscribe((data) => {
                    this.itemTamales = data;
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    welcomeToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Está app esta desarrollada y diseñada por Lirrumscode con la tecnologia de Ionic!',
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
    goToCart() {
        this.router.navigateByUrl('cart');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=core-views-home-home-module-es2015.js.map