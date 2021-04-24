(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Milos Bogdanovic\Downloads\h4p-frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = function AppComponent(router, titleService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.titleService = titleService;
        this.title = 'sb-admin-angular';
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildActivationEnd"];
        })).subscribe(function (event) {
          var snapshot = event.snapshot;

          while (snapshot.firstChild !== null) {
            snapshot = snapshot.firstChild;
          }

          _this.titleService.setTitle(snapshot.data.title || 'SB Admin Angular');
        });
      };

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-slick-carousel */
      "fyIi");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
      }, {
        path: 'charts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-charts-charts-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-charts-charts-routing-module~modules-dashboard-dash~d4e793c4"), __webpack_require__.e("default~modules-charts-charts-routing-module~modules-dashboard-dashboard-routing-module"), __webpack_require__.e("modules-charts-charts-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/charts/charts-routing.module */
          "pqGK")).then(function (m) {
            return m.ChartsRoutingModule;
          });
        }
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-dashboard-dashboard-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-charts-charts-routing-module~modules-dashboard-dash~d4e793c4"), __webpack_require__.e("default~modules-charts-charts-routing-module~modules-dashboard-dashboard-routing-module"), __webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-tables-tables-routing-module"), __webpack_require__.e("modules-dashboard-dashboard-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/dashboard/dashboard-routing.module */
          "IlwM")).then(function (m) {
            return m.DashboardRoutingModule;
          });
        }
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-auth-auth-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-charts-charts-routing-module~modules-dashboard-dash~d4e793c4"), __webpack_require__.e("modules-auth-auth-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/auth/auth-routing.module */
          "DrEB")).then(function (m) {
            return m.AuthRoutingModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-error-error-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-charts-charts-routing-module~modules-dashboard-dash~d4e793c4"), __webpack_require__.e("modules-error-error-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/error/error-routing.module */
          "1nNA")).then(function (m) {
            return m.ErrorRoutingModule;
          });
        }
      }, {
        path: 'tables',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-tables-tables-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-charts-charts-routing-module~modules-dashboard-dash~d4e793c4"), __webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-tables-tables-routing-module"), __webpack_require__.e("modules-tables-tables-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/tables/tables-routing.module */
          "XfXi")).then(function (m) {
            return m.TablesRoutingModule;
          });
        }
      }, {
        path: 'version',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-utility-utility-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-charts-charts-routing-module~modules-dashboard-dash~d4e793c4"), __webpack_require__.e("modules-utility-utility-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/utility/utility-routing.module */
          "W7dZ")).then(function (m) {
            return m.UtilityRoutingModule;
          });
        }
      }, {
        path: '**',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-error-error-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-charts-charts-routing-module~modules-dashboard-dash~d4e793c4"), __webpack_require__.e("modules-error-error-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/error/error-routing.module */
          "1nNA")).then(function (m) {
            return m.ErrorRoutingModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map