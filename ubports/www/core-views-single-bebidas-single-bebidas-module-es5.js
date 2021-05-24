(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-views-single-bebidas-single-bebidas-module"], {
    /***/
    "4Mn7":
    /*!******************************************************************!*\
      !*** ./src/app/core/views/single-bebidas/single-bebidas.page.ts ***!
      \******************************************************************/

    /*! exports provided: SingleBebidasPage */

    /***/
    function Mn7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleBebidasPage", function () {
        return SingleBebidasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_single_bebidas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./single-bebidas.page.html */
      "nEKq");
      /* harmony import */


      var _single_bebidas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./single-bebidas.page.scss */
      "T35G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data.service */
      "cplz");

      var SingleBebidasPage = /*#__PURE__*/function () {
        function SingleBebidasPage(router, route, dto, toastController) {
          _classCallCheck(this, SingleBebidasPage);

          this.router = router;
          this.route = route;
          this.dto = dto;
          this.toastController = toastController;
          this.dataObject = {};
          this.counter = 1;
        }

        _createClass(SingleBebidasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (data) {
              _this.id = data;
            });
            this.conditionData();
            this.guajalotaSabors();
          }
        }, {
          key: "guajalotaSabors",
          value: function guajalotaSabors() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.dto.getSaborsBebidas().subscribe(function (data) {
                        _this2.saborsBebidas = data;
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "selectedSabors",
          value: function selectedSabors(items) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: "has seleccionado: ".concat(items.name),
                        duration: 2000,
                        position: "top"
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "conditionData",
          value: function conditionData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.dto.getDataBebidas().subscribe(function (data) {
                        var items = data.find(function (item) {
                          return item.id === parseInt(_this3.id.id);
                        });
                        _this3.dataObject = items; // return this.dataObject;
                      });

                    case 3:
                      _context3.next = 8;
                      break;

                    case 5:
                      _context3.prev = 5;
                      _context3.t0 = _context3["catch"](0);
                      console.error(_context3.t0);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 5]]);
            }));
          }
        }, {
          key: "moreCounter",
          value: function moreCounter() {
            return this.counter = this.counter + 1;
          }
        }, {
          key: "lessCounter",
          value: function lessCounter() {
            return this.counter = this.counter - 1;
          }
        }, {
          key: "goToCart",
          value: function goToCart() {
            this.router.navigateByUrl('cart');
          }
        }, {
          key: "addCartData",
          value: function addCartData(dataObject) {
            this.sendData(dataObject.uri, dataObject.id, dataObject.name, dataObject.price, this.counter, localStorage.getItem("name"));
          }
        }, {
          key: "sendData",
          value: function sendData(uri, id, name, price, quantity, sabor) {
            this.dto.getCartData(uri, id, name, price, quantity, sabor);
          }
        }]);

        return SingleBebidasPage;
      }();

      SingleBebidasPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      SingleBebidasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-single-bebidas',
        template: _raw_loader_single_bebidas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_single_bebidas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SingleBebidasPage);
      /***/
    },

    /***/
    "5Y5G":
    /*!********************************************************************!*\
      !*** ./src/app/core/views/single-bebidas/single-bebidas.module.ts ***!
      \********************************************************************/

    /*! exports provided: SingleBebidasPageModule */

    /***/
    function Y5G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleBebidasPageModule", function () {
        return SingleBebidasPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _single_bebidas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./single-bebidas-routing.module */
      "6pDW");
      /* harmony import */


      var _single_bebidas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./single-bebidas.page */
      "4Mn7");

      var SingleBebidasPageModule = function SingleBebidasPageModule() {
        _classCallCheck(this, SingleBebidasPageModule);
      };

      SingleBebidasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _single_bebidas_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleBebidasPageRoutingModule"]],
        declarations: [_single_bebidas_page__WEBPACK_IMPORTED_MODULE_6__["SingleBebidasPage"]]
      })], SingleBebidasPageModule);
      /***/
    },

    /***/
    "6pDW":
    /*!****************************************************************************!*\
      !*** ./src/app/core/views/single-bebidas/single-bebidas-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: SingleBebidasPageRoutingModule */

    /***/
    function pDW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleBebidasPageRoutingModule", function () {
        return SingleBebidasPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _single_bebidas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./single-bebidas.page */
      "4Mn7");

      var routes = [{
        path: '',
        component: _single_bebidas_page__WEBPACK_IMPORTED_MODULE_3__["SingleBebidasPage"]
      }];

      var SingleBebidasPageRoutingModule = function SingleBebidasPageRoutingModule() {
        _classCallCheck(this, SingleBebidasPageRoutingModule);
      };

      SingleBebidasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SingleBebidasPageRoutingModule);
      /***/
    },

    /***/
    "T35G":
    /*!********************************************************************!*\
      !*** ./src/app/core/views/single-bebidas/single-bebidas.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function T35G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.icon-header {\n  font-size: 40px;\n  padding-right: 20px;\n  color: grey;\n  padding-top: 10px;\n}\n\n.img {\n  width: 50%;\n  display: block;\n  margin: 0px auto;\n  margin-top: 10%;\n}\n\n.title {\n  color: #000;\n  text-align: center;\n  font-size: 35px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.price {\n  color: #ff7a64;\n  text-align: center;\n  font-size: 20px;\n  margin-top: 0px;\n  font-weight: bold;\n  margin-bottom: 30px;\n}\n\n.counter-div {\n  display: block;\n  margin: 0px auto;\n  width: 205px;\n  background: #ffffff;\n  padding: 20px;\n  border-radius: 20px;\n  margin-bottom: 70px;\n}\n\n.counter-div .less {\n  display: inline;\n  width: 20%;\n  padding-right: 37px;\n}\n\n.counter-div .less ion-icon {\n  font-size: 30px;\n}\n\n.counter-div .counter {\n  display: inline;\n  width: 20%;\n}\n\n.counter-div .counter span {\n  font-size: 30px;\n}\n\n.counter-div .more {\n  display: inline;\n  width: 20%;\n  padding-left: 36px;\n}\n\n.counter-div .more ion-icon {\n  font-size: 30px;\n}\n\n.div-sabors {\n  margin-top: 20px;\n}\n\n.div-sabors ion-col .selected-img {\n  opacity: 0.4;\n}\n\n.div-sabors ion-col .selected-img img {\n  width: 80%;\n  display: block;\n  margin: 0px auto;\n  opacity: 0.4;\n}\n\n.div-sabors ion-col .selected-img:active img {\n  opacity: 0.9;\n}\n\nion-footer {\n  --background: #f2f2f2;\n}\n\nion-footer .container {\n  display: flex;\n  justify-content: center;\n}\n\nion-footer .container .btn-footer {\n  margin-top: 20px;\n  width: 90%;\n  --background: #fa4a0c;\n  --background-activated: #fa4a0c;\n  height: 60px;\n}\n\nion-footer .container .btn-footer span {\n  color: #fff;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpbmdsZS1iZWJpZGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFOSTtFQUNFLGVBQUE7QUFRTjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBT0o7O0FBTkk7RUFDRSxlQUFBO0FBUU47O0FBTEU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTkk7RUFDRSxlQUFBO0FBUU47O0FBSkE7RUFDRSxnQkFBQTtBQU9GOztBQUxJO0VBQ0UsWUFBQTtBQU9OOztBQU5NO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFRUjs7QUFKTTtFQUNFLFlBQUE7QUFNUjs7QUFEQTtFQUNFLHFCQUFBO0FBSUY7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFKSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBTU47O0FBTE07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFPUiIsImZpbGUiOiJzaW5nbGUtYmViaWRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5pY29uLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgY29sb3I6IGdyZXk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG4udGl0bGUge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ucHJpY2Uge1xuICBjb2xvcjogI2ZmN2E2NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uY291bnRlci1kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgd2lkdGg6IDIwNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAubGVzcyB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgcGFkZGluZy1yaWdodDogMzdweDtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9XG4gIC5jb3VudGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIH1cbiAgLm1vcmUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB3aWR0aDogMjAlO1xuICAgIHBhZGRpbmctbGVmdDogMzZweDtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9XG59XG4uZGl2LXNhYm9ycyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGlvbi1jb2wge1xuICAgIC5zZWxlY3RlZC1pbWcge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnNlbGVjdGVkLWltZzphY3RpdmUge1xuICAgICAgaW1nIHtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuYnRuLWZvb3RlciB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZhNGEwYztcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmYTRhMGM7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "nEKq":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/views/single-bebidas/single-bebidas.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nEKq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-icon name=\"cart-outline\" class=\"icon-header\" slot=\"end\" (click)=\"goToCart()\"></ion-icon>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <img [src]=\"dataObject.uri\" alt=\"img\" class=\"img\">\n      <h1 class=\"title\">{{ dataObject.name }}</h1>\n      <p class=\"price\">$ {{ dataObject.price | number }} MXN</p>\n      <div class=\"counter-div\">\n        <div class=\"less\">\n          <ion-icon name=\"remove-circle-outline\" (click)=\"lessCounter()\"></ion-icon>\n        </div>\n        <div class=\"counter\">\n          <span class=\"contador\">{{ counter }}</span>\n        </div>\n        <div class=\"more\">\n          <ion-icon name=\"add-circle-outline\" (click)=\"moreCounter()\"></ion-icon>\n        </div>\n      </div>\n      <ion-row class=\"div-sabors\">\n        <ion-col size=\"4\" *ngFor=\"let items of saborsBebidas\">\n          <a class=\"selected-img\" (click)=\"selectedSabors(items)\">\n            <img [src]=\"items.uri\" alt=\"img\">\n          </a>\n        </ion-col>\n        </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div class=\"container\">\n    <ion-button shape=\"round\" (click)=\"addCartData(dataObject)\" class=\"btn-footer\"><span>Agregar al carrito</span></ion-button>\n  </div>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=core-views-single-bebidas-single-bebidas-module-es5.js.map