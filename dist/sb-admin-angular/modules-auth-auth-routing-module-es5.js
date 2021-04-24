(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-routing-module"], {
    /***/
    "3+T0":
    /*!**********************************************!*\
      !*** ./src/modules/auth/components/index.ts ***!
      \**********************************************/

    /*! exports provided: components */

    /***/
    function T0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "components", function () {
        return components;
      });

      var components = [];
      /***/
    },

    /***/
    "9ke+":
    /*!**************************************************************!*\
      !*** ./src/modules/auth/containers/login/login.component.ts ***!
      \**************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function ke(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "iYnd");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.scss */
      "BgQx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent() {
          _classCallCheck(this, LoginComponent);
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-login',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoginComponent);
      /***/
    },

    /***/
    "BczO":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register/register.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BczO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-7\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Create Account</h3></div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"form-row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputFirstName\">First Name</label><input class=\"form-control py-4\" id=\"inputFirstName\" type=\"text\" placeholder=\"Enter first name\" /></div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputLastName\">Last Name</label><input class=\"form-control py-4\" id=\"inputLastName\" type=\"text\" placeholder=\"Enter last name\" /></div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputEmailAddress\">Email</label><input class=\"form-control py-4\" id=\"inputEmailAddress\" type=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email address\" /></div>\n                            <div class=\"form-row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputPassword\">Password</label><input class=\"form-control py-4\" id=\"inputPassword\" type=\"password\" placeholder=\"Enter password\" /></div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputConfirmPassword\">Confirm Password</label><input class=\"form-control py-4\" id=\"inputConfirmPassword\" type=\"password\" placeholder=\"Confirm password\" /></div>\n                                </div>\n                            </div>\n                            <div class=\"form-group mt-4 mb-0\"><a class=\"btn btn-primary btn-block\" routerLink=\"/dashboard\">Create Account</a></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/auth/login\">Have an account? Go to login</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n>\n";
      /***/
    },

    /***/
    "BgQx":
    /*!****************************************************************!*\
      !*** ./src/modules/auth/containers/login/login.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function BgQx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "DrEB":
    /*!*************************************************!*\
      !*** ./src/modules/auth/auth-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ROUTES, AuthRoutingModule */

    /***/
    function DrEB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.module */
      "OELk");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./containers */
      "ccMp");
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var ROUTES = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }, {
        path: 'login',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: {
          title: 'Pages Login - SB Admin Angular'
        }
      }, {
        path: 'register',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        data: {
          title: 'Pages Register - SB Admin Angular'
        }
      }, {
        path: 'forgot-password',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
        data: {
          title: 'Pages Forgot Password - SB Admin Angular'
        }
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthRoutingModule);
      /***/
    },

    /***/
    "NkfZ":
    /*!**********************************************************************!*\
      !*** ./src/modules/auth/containers/register/register.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function NkfZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "OELk":
    /*!*****************************************!*\
      !*** ./src/modules/auth/auth.module.ts ***!
      \*****************************************/

    /*! exports provided: AuthModule */

    /***/
    function OELk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @common/app-common.module */
      "NMtB");
      /* harmony import */


      var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @modules/navigation/navigation.module */
      "hex+");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components */
      "3+T0");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./containers */
      "ccMp");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./guards */
      "olz4");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services */
      "+nzF");
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Components */

      /* Containers */

      /* Guards */

      /* Services */


      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
        providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_10__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_9__["guards"])),
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"])),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]))
      })], AuthModule);
      /***/
    },

    /***/
    "WVvL":
    /*!***********************************************!*\
      !*** ./src/modules/auth/guards/auth.guard.ts ***!
      \***********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function WVvL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard() {
          _classCallCheck(this, AuthGuard);
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
      /***/
    },

    /***/
    "XOd+":
    /*!********************************************************************!*\
      !*** ./src/modules/auth/containers/register/register.component.ts ***!
      \********************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XOd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "BczO");
      /* harmony import */


      var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.scss */
      "NkfZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent() {
          _classCallCheck(this, RegisterComponent);
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-register',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RegisterComponent);
      /***/
    },

    /***/
    "ccMp":
    /*!**********************************************!*\
      !*** ./src/modules/auth/containers/index.ts ***!
      \**********************************************/

    /*! exports provided: containers, LoginComponent, RegisterComponent, ForgotPasswordComponent */

    /***/
    function ccMp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "q8Nc");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      "9ke+");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register/register.component */
      "XOd+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"];
      });

      var containers = [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"]];
      /***/
    },

    /***/
    "iYnd":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login/login.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iYnd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Login</h3></div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputEmailAddress\">Email</label><input class=\"form-control py-4\" id=\"inputEmailAddress\" type=\"email\" placeholder=\"Enter email address\" /></div>\n                            <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputPassword\">Password</label><input class=\"form-control py-4\" id=\"inputPassword\" type=\"password\" placeholder=\"Enter password\" /></div>\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox\"><input class=\"custom-control-input\" id=\"rememberPasswordCheck\" type=\"checkbox\" /><label class=\"custom-control-label\" for=\"rememberPasswordCheck\">Remember password</label></div>\n                            </div>\n                            <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\"><a class=\"small\" routerLink=\"/auth/forgot-password\">Forgot Password?</a><a class=\"btn btn-primary\" routerLink=\"/dashboard\">Login</a></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/auth/register\">Need an account? Sign up!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n>\n";
      /***/
    },

    /***/
    "ka7e":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/forgot-password/forgot-password.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ka7e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Password Recovery</h3></div>\n                    <div class=\"card-body\">\n                        <div class=\"small mb-3 text-muted\">Enter your email address and we will send you a link to reset your password.</div>\n                        <form>\n                            <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputEmailAddress\">Email</label><input class=\"form-control py-4\" id=\"inputEmailAddress\" type=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email address\" /></div>\n                            <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\"><a class=\"small\" routerLink=\"/auth/login\">Return to login</a><a class=\"btn btn-primary\" routerLink=\"/auth/login\">Reset Password</a></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/auth/register\">Need an account? Sign up!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n>\n";
      /***/
    },

    /***/
    "mz3Y":
    /*!************************************************************************************!*\
      !*** ./src/modules/auth/containers/forgot-password/forgot-password.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function mz3Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "olz4":
    /*!******************************************!*\
      !*** ./src/modules/auth/guards/index.ts ***!
      \******************************************/

    /*! exports provided: guards, AuthGuard */

    /***/
    function olz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guards", function () {
        return guards;
      });
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "WVvL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });

      var guards = [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]];
      /***/
    },

    /***/
    "q8Nc":
    /*!**********************************************************************************!*\
      !*** ./src/modules/auth/containers/forgot-password/forgot-password.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function q8Nc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "ka7e");
      /* harmony import */


      var _forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.component.scss */
      "mz3Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent() {
          _classCallCheck(this, ForgotPasswordComponent);
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ctorParameters = function () {
        return [];
      };

      ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-forgot-password',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ForgotPasswordComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-auth-auth-routing-module-es5.js.map