(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-views-single-tamales-single-tamales-module"], {
    /***/
    "0iQg":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/views/single-tamales/single-tamales.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iQg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-icon\n      name=\"cart-outline\"\n      class=\"icon-header\"\n      slot=\"end\"\n      (click)=\"goToCart()\"\n    ></ion-icon>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img [src]=\"dataObject.uri\" alt=\"img\" class=\"img\" />\n        <h1 class=\"title\">{{ dataObject.name }}</h1>\n        <p class=\"price\">$ {{ dataObject.price | number }} MXN</p>\n        <div class=\"counter-div\">\n          <div class=\"less\">\n            <ion-icon\n              name=\"remove-circle-outline\"\n              (click)=\"lessCounter()\"\n            ></ion-icon>\n          </div>\n          <div class=\"counter\">\n            <span class=\"contador\">{{ counter }}</span>\n          </div>\n          <div class=\"more\">\n            <ion-icon\n              name=\"add-circle-outline\"\n              (click)=\"moreCounter()\"\n            ></ion-icon>\n          </div>\n        </div>\n        <ion-row class=\"div-sabors\">\n          <ion-col size=\"4\" *ngFor=\"let items of saborsTamales\">\n            <a class=\"selected-img\" (click)=\"selectedSabors(items)\">\n              <img [src]=\"items.uri\" alt=\"img\" />\n            </a>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div class=\"container\">\n    <ion-button\n      shape=\"round\"\n      (click)=\"addCartData(dataObject)\"\n      class=\"btn-footer\"\n      ><span>Agregar al carrito</span></ion-button\n    >\n  </div>\n</ion-footer>\n";
      /***/
    },

    /***/
    "2c53":
    /*!********************************************************************!*\
      !*** ./src/app/core/views/single-tamales/single-tamales.module.ts ***!
      \********************************************************************/

    /*! exports provided: SingleTamalesPageModule */

    /***/
    function c53(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleTamalesPageModule", function () {
        return SingleTamalesPageModule;
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


      var _single_tamales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./single-tamales-routing.module */
      "qD6Z");
      /* harmony import */


      var _single_tamales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./single-tamales.page */
      "I0I0");

      var SingleTamalesPageModule = function SingleTamalesPageModule() {
        _classCallCheck(this, SingleTamalesPageModule);
      };

      SingleTamalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _single_tamales_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleTamalesPageRoutingModule"]],
        declarations: [_single_tamales_page__WEBPACK_IMPORTED_MODULE_6__["SingleTamalesPage"]]
      })], SingleTamalesPageModule);
      /***/
    },

    /***/
    "I0I0":
    /*!******************************************************************!*\
      !*** ./src/app/core/views/single-tamales/single-tamales.page.ts ***!
      \******************************************************************/

    /*! exports provided: SingleTamalesPage */

    /***/
    function I0I0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleTamalesPage", function () {
        return SingleTamalesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_single_tamales_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./single-tamales.page.html */
      "0iQg");
      /* harmony import */


      var _single_tamales_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./single-tamales.page.scss */
      "nlFm");
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

      var SingleTamalesPage = /*#__PURE__*/function () {
        function SingleTamalesPage(router, route, dto, toastController) {
          _classCallCheck(this, SingleTamalesPage);

          this.router = router;
          this.route = route;
          this.dto = dto;
          this.toastController = toastController;
          this.dataObject = {};
          this.counter = 1;
        }

        _createClass(SingleTamalesPage, [{
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
                      return this.dto.getSaborsGuajalopas().subscribe(function (data) {
                        _this2.saborsTamales = data;
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
                      return this.dto.getDataTamales().subscribe(function (data) {
                        var items = data.find(function (item) {
                          return item.id === parseInt(_this3.id.id);
                        });
                        _this3.dataObject = items; //return this.dataObject;
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

        return SingleTamalesPage;
      }();

      SingleTamalesPage.ctorParameters = function () {
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

      SingleTamalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-single-tamales',
        template: _raw_loader_single_tamales_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_single_tamales_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SingleTamalesPage);
      /***/
    },

    /***/
    "nlFm":
    /*!********************************************************************!*\
      !*** ./src/app/core/views/single-tamales/single-tamales.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function nlFm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.icon-header {\n  font-size: 40px;\n  padding-right: 20px;\n  color: grey;\n  padding-top: 10px;\n}\n\n.img {\n  width: 80%;\n  display: block;\n  margin: 0px auto;\n  margin-top: -10%;\n}\n\n.title {\n  color: #000;\n  text-align: center;\n  font-size: 35px;\n  font-weight: bold;\n  margin-top: 0px;\n}\n\n.price {\n  color: #ff7a64;\n  text-align: center;\n  font-size: 20px;\n  margin-top: 0px;\n  font-weight: bold;\n  margin-bottom: 30px;\n}\n\n.counter-div {\n  display: block;\n  margin: 0px auto;\n  width: 205px;\n  background: #ffffff;\n  padding: 20px;\n  border-radius: 20px;\n  margin-bottom: 70px;\n}\n\n.counter-div .less {\n  display: inline;\n  width: 20%;\n  padding-right: 37px;\n}\n\n.counter-div .less ion-icon {\n  font-size: 30px;\n}\n\n.counter-div .counter {\n  display: inline;\n  width: 20%;\n}\n\n.counter-div .counter span {\n  font-size: 30px;\n}\n\n.counter-div .more {\n  display: inline;\n  width: 20%;\n  padding-left: 36px;\n}\n\n.counter-div .more ion-icon {\n  font-size: 30px;\n}\n\n.div-sabors {\n  margin-top: 20px;\n}\n\n.div-sabors ion-col .selected-img {\n  opacity: 0.4;\n}\n\n.div-sabors ion-col .selected-img img {\n  width: 80%;\n  display: block;\n  margin: 0px auto;\n  opacity: 0.4;\n}\n\n.div-sabors ion-col .selected-img:active img {\n  opacity: 0.9;\n}\n\nion-footer {\n  --background: #f2f2f2;\n}\n\nion-footer .container {\n  display: flex;\n  justify-content: center;\n}\n\nion-footer .container .btn-footer {\n  margin-top: 20px;\n  width: 90%;\n  --background: #fa4a0c;\n  --background-activated: #fa4a0c;\n  height: 60px;\n}\n\nion-footer .container .btn-footer span {\n  color: #fff;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpbmdsZS10YW1hbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTUY7O0FBTEU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTkk7RUFDRSxlQUFBO0FBUU47O0FBTEU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQU9KOztBQU5JO0VBQ0UsZUFBQTtBQVFOOztBQUxFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQU9KOztBQU5JO0VBQ0UsZUFBQTtBQVFOOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFMSTtFQUNFLFlBQUE7QUFPTjs7QUFOTTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUVI7O0FBSk07RUFDRSxZQUFBO0FBTVI7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQUhFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSkk7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQU1OOztBQUxNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBT1IiLCJmaWxlIjoic2luZ2xlLXRhbWFsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uaWNvbi1oZWFkZXIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5pbWcge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogLTEwJTtcbn1cbi50aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5wcmljZSB7XG4gIGNvbG9yOiAjZmY3YTY0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5jb3VudGVyLWRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICB3aWR0aDogMjA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIC5sZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzN3B4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIH1cbiAgLmNvdW50ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB3aWR0aDogMjAlO1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfVxuICAubW9yZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIH1cbn1cbi5kaXYtc2Fib3JzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaW9uLWNvbCB7XG4gICAgLnNlbGVjdGVkLWltZyB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgfVxuICAgIH1cbiAgICAuc2VsZWN0ZWQtaW1nOmFjdGl2ZSB7XG4gICAgICBpbWcge1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5pb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5idG4tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmE0YTBjO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZhNGEwYztcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "qD6Z":
    /*!****************************************************************************!*\
      !*** ./src/app/core/views/single-tamales/single-tamales-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: SingleTamalesPageRoutingModule */

    /***/
    function qD6Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleTamalesPageRoutingModule", function () {
        return SingleTamalesPageRoutingModule;
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


      var _single_tamales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./single-tamales.page */
      "I0I0");

      var routes = [{
        path: '',
        component: _single_tamales_page__WEBPACK_IMPORTED_MODULE_3__["SingleTamalesPage"]
      }];

      var SingleTamalesPageRoutingModule = function SingleTamalesPageRoutingModule() {
        _classCallCheck(this, SingleTamalesPageRoutingModule);
      };

      SingleTamalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SingleTamalesPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=core-views-single-tamales-single-tamales-module-es5.js.map