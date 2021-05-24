(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-views-pay-pay-module"], {
    /***/
    "47rX":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/views/pay/pay.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function rX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n  <ion-grid>\n    <ion-row *ngFor=\"let items of show()\">\n      <ion-col size=\"4\">\n        <img [src]=\"items.uri\" alt=\"img\" />\n      </ion-col>\n      <ion-col size=\"4\">\n        <p class=\"name\">{{ items.name }}</p>\n        <p class=\"quantity\">X{{ items.quantity }} + {{ items.sabor }}</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <p class=\"price\">$ {{ items.quantity * items.price }} MXN</p>\n      </ion-col>\n\n      <div class=\"containt\">\n        <ion-button shape=\"round\" class=\"btn-pay\" (click)=\"viewData()\"\n          ><span>Pagar</span></ion-button\n        >\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "6X+4":
    /*!**********************************************!*\
      !*** ./src/app/core/views/pay/pay.module.ts ***!
      \**********************************************/

    /*! exports provided: PayPageModule */

    /***/
    function X4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayPageModule", function () {
        return PayPageModule;
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


      var _pay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pay-routing.module */
      "llTZ");
      /* harmony import */


      var _pay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pay.page */
      "J9K0");

      var PayPageModule = function PayPageModule() {
        _classCallCheck(this, PayPageModule);
      };

      PayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pay_routing_module__WEBPACK_IMPORTED_MODULE_5__["PayPageRoutingModule"]],
        declarations: [_pay_page__WEBPACK_IMPORTED_MODULE_6__["PayPage"]]
      })], PayPageModule);
      /***/
    },

    /***/
    "G3p0":
    /*!**********************************************!*\
      !*** ./src/app/core/views/pay/pay.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function G3p0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  font-size: 40px;\n  margin-top: 20px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.name {\n  color: #000;\n  font-size: 20px;\n  font-weight: 300;\n  margin-bottom: 0px;\n  margin-top: 20px;\n}\n\n.quantity {\n  color: #fa4a0c;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.price {\n  color: #fa4a0c;\n  font-weight: bold;\n  margin-top: 20px;\n}\n\n.containt {\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  bottom: 10px;\n  width: 100%;\n  left: 2px;\n}\n\n.containt .btn-pay {\n  margin-top: 20px;\n  width: 90%;\n  --background: #fa4a0c;\n  --background-activated: #fa4a0c;\n  height: 60px;\n}\n\n.containt .btn-pay span {\n  color: #fff;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUpJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFNTjs7QUFMTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQU9SIiwiZmlsZSI6InBheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAubmFtZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLnF1YW50aXR5IHtcbiAgICBjb2xvcjogI2ZhNGEwYztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5wcmljZSB7XG4gICAgY29sb3I6ICNmYTRhMGM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAuY29udGFpbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAycHg7XG4gICAgLmJ0bi1wYXkge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmYTRhMGM7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmE0YTBjO1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */";
      /***/
    },

    /***/
    "J9K0":
    /*!********************************************!*\
      !*** ./src/app/core/views/pay/pay.page.ts ***!
      \********************************************/

    /*! exports provided: PayPage */

    /***/
    function J9K0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayPage", function () {
        return PayPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pay_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pay.page.html */
      "47rX");
      /* harmony import */


      var _pay_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pay.page.scss */
      "G3p0");
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

      var PayPage = /*#__PURE__*/function () {
        function PayPage(dto, router, alertController) {
          _classCallCheck(this, PayPage);

          this.dto = dto;
          this.router = router;
          this.alertController = alertController;
        }

        _createClass(PayPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.show();
          }
        }, {
          key: "show",
          value: function show() {
            console.log(this.dto.taxDataCart());
            return this.dto.taxDataCart();
          }
        }, {
          key: "viewData",
          value: function viewData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Pay Data!',
                        message: 'Realmente desea pagar estos <strong>elementos?</strong>!!!',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            var arr = _this.dto.taxDataCart();

                            arr.length = 0;

                            _this.dto.AlertToast("Gracias por su compra, si desea comprar, sera redirijido a el home!");

                            _this.router.navigateByUrl('/home');
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return PayPage;
      }();

      PayPage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      PayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pay',
        template: _raw_loader_pay_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pay_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PayPage);
      /***/
    },

    /***/
    "llTZ":
    /*!******************************************************!*\
      !*** ./src/app/core/views/pay/pay-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: PayPageRoutingModule */

    /***/
    function llTZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayPageRoutingModule", function () {
        return PayPageRoutingModule;
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


      var _pay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pay.page */
      "J9K0");

      var routes = [{
        path: '',
        component: _pay_page__WEBPACK_IMPORTED_MODULE_3__["PayPage"]
      }];

      var PayPageRoutingModule = function PayPageRoutingModule() {
        _classCallCheck(this, PayPageRoutingModule);
      };

      PayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PayPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=core-views-pay-pay-module-es5.js.map