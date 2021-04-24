(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-routing-module"], {
    /***/
    "+IJA":
    /*!***************************************************!*\
      !*** ./src/modules/dashboard/containers/index.ts ***!
      \***************************************************/

    /*! exports provided: containers, DashboardComponent, StaticComponent, LightComponent */

    /***/
    function IJA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "Q2T/");
      /* harmony import */


      var _light_light_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./light/light.component */
      "u30O");
      /* harmony import */


      var _static_static_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./static/static.component */
      "q+g/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StaticComponent", function () {
        return _static_static_component__WEBPACK_IMPORTED_MODULE_2__["StaticComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LightComponent", function () {
        return _light_light_component__WEBPACK_IMPORTED_MODULE_1__["LightComponent"];
      });

      var containers = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], _static_static_component__WEBPACK_IMPORTED_MODULE_2__["StaticComponent"], _light_light_component__WEBPACK_IMPORTED_MODULE_1__["LightComponent"]];
      /***/
    },

    /***/
    "+ZFO":
    /*!***********************************************!*\
      !*** ./src/modules/dashboard/guards/index.ts ***!
      \***********************************************/

    /*! exports provided: guards, DashboardGuard */

    /***/
    function ZFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guards", function () {
        return guards;
      });
      /* harmony import */


      var _dashboard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.guard */
      "zq2N");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardGuard", function () {
        return _dashboard_guard__WEBPACK_IMPORTED_MODULE_0__["DashboardGuard"];
      });

      var guards = [_dashboard_guard__WEBPACK_IMPORTED_MODULE_0__["DashboardGuard"]];
      /***/
    },

    /***/
    "+uVk":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uVk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-dashboard [static]=\"true\"\n    ><sb-dashboard-head title=\"Dashboard Static\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head><sb-dashboard-cards></sb-dashboard-cards><sb-dashboard-charts></sb-dashboard-charts><sb-dashboard-tables></sb-dashboard-tables\n    ><sb-card\n        ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-pie\"]'></fa-icon>Pie Chart Example</div>\n        <div class=\"card-body\"><sb-charts-pie></sb-charts-pie></div>\n        <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div></sb-card\n    ></sb-layout-dashboard\n>\n";
      /***/
    },

    /***/
    "1r2h":
    /*!*************************************************!*\
      !*** ./src/modules/dashboard/services/index.ts ***!
      \*************************************************/

    /*! exports provided: services, DashboardService */

    /***/
    function r2h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.service */
      "QXO3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
        return _dashboard_service__WEBPACK_IMPORTED_MODULE_0__["DashboardService"];
      });

      var services = [_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["DashboardService"]];
      /***/
    },

    /***/
    "3YyW":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YyW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <sb-card\n            ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-area\"]'></fa-icon>Area Chart Example</div>\n            <div class=\"card-body\"><sb-charts-area></sb-charts-area></div\n        ></sb-card>\n    </div>\n    <div class=\"col-xl-6\">\n        <sb-card\n            ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-bar\"]'></fa-icon>Bar Chart Example</div>\n            <div class=\"card-body\"><sb-charts-bar></sb-charts-bar></div\n        ></sb-card>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "8AI6":
    /*!*****************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function AI6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtY2FyZHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "DCsZ":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DCsZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-dashboard><sb-dashboard-head title=\"Dashboard\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head><sb-dashboard-cards></sb-dashboard-cards><sb-dashboard-charts></sb-dashboard-charts><sb-dashboard-tables></sb-dashboard-tables></sb-layout-dashboard>\n";
      /***/
    },

    /***/
    "DuCT":
    /*!***************************************************!*\
      !*** ./src/modules/dashboard/dashboard.module.ts ***!
      \***************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function DuCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @modules/charts/charts.module */
      "9OwE");
      /* harmony import */


      var _modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @modules/tables/tables.module */
      "Q+db");
      /* harmony import */


      var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-slick-carousel */
      "fyIi");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components */
      "qvVY");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./containers */
      "+IJA");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./guards */
      "+ZFO");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services */
      "1r2h");
      /* harmony import */


      var _components_dashboard_actions_dashboard_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/dashboard-actions/dashboard-actions.component */
      "pp4/");
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Components */

      /* Containers */

      /* Guards */

      /* Services */


      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], _modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_8__["TablesModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__["SlickCarouselModule"]],
        providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_13__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_12__["guards"])),
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_11__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_10__["components"]), [_components_dashboard_actions_dashboard_actions_component__WEBPACK_IMPORTED_MODULE_14__["DashboardActionsComponent"]]),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_11__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_10__["components"]))
      })], DashboardModule);
      /***/
    },

    /***/
    "EGDz":
    /*!*********************************************************************!*\
      !*** ./src/modules/dashboard/containers/light/light.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function EGDz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWdodC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ENLj":
    /*!*******************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function ENLj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtdGFibGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "HG3J":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HG3J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-3 col-md-6\">\n        <sb-card-view-details link=\"/dashboard\" background=\"bg-primary\"><div class=\"card-body\">Primary Card</div></sb-card-view-details>\n    </div>\n    <div class=\"col-xl-3 col-md-6\">\n        <sb-card-view-details link=\"/dashboard\" background=\"bg-warning\"><div class=\"card-body\"></div></sb-card-view-details>\n    </div>\n    <div class=\"col-xl-3 col-md-6\">\n        <sb-card-view-details link=\"/dashboard\" background=\"bg-success\"><div class=\"card-body\"></div></sb-card-view-details>\n    </div>\n    <div class=\"col-xl-3 col-md-6\">\n        <sb-card-view-details link=\"/dashboard\" background=\"bg-danger\"><div class=\"card-body\">Danger Card</div></sb-card-view-details>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "IlwM":
    /*!***********************************************************!*\
      !*** ./src/modules/dashboard/dashboard-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ROUTES, DashboardRoutingModule */

    /***/
    function IlwM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.module */
      "DuCT");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./containers */
      "+IJA");
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var ROUTES = [{
        path: '',
        data: {
          title: 'Dashboard - SB Admin Angular',
          breadcrumbs: [{
            text: 'Dashboard',
            active: true
          }]
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
      }, {
        path: 'static',
        data: {
          title: 'Dashboard Static - SB Admin Angular',
          breadcrumbs: [{
            text: 'Dashboard',
            link: '/dashboard'
          }, {
            text: 'Static',
            active: true
          }]
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["StaticComponent"]
      }, {
        path: 'light',
        data: {
          title: 'Dashboard Light - SB Admin Angular',
          breadcrumbs: [{
            text: 'Dashboard',
            link: '/dashboard'
          }, {
            text: 'Light',
            active: true
          }]
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["LightComponent"]
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    },

    /***/
    "Kfyz":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Kfyz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-card\n    ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>DataTable Example</div>\n    <div class=\"card-body\"><sb-ng-bootstrap-table [pageSize]=\"4\"></sb-ng-bootstrap-table></div\n></sb-card>\n";
      /***/
    },

    /***/
    "KhFx":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-actions/dashboard-actions.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KhFx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class='container-fluid'>\n    <div class='container'>\n        <ngx-slick-carousel class=\"carousel\"\n                            #slickModal=\"slick-carousel\"\n                            [config]=\"slideConfig\"\n                            (init)=\"slickInit()\"\n                            (breakpoint)=\"breakpoint($event)\"\n                            (afterChange)=\"afterChange($event)\"\n                            (beforeChange)=\"beforeChange($event)\">\n            <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide\">\n                <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\n            </div>\n        </ngx-slick-carousel>\n\n        <button (click)=\"addSlide()\">Add</button>\n        <button (click)=\"removeSlide()\">Remove</button>\n        <button (click)=\"slickModal.slickGoTo(2)\">slickGoto 2</button>\n        <button (click)=\"slickModal.unslick()\">unslick</button>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Pdcd":
    /*!*********************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-actions/dashboard-actions.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pdcd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Q2T/":
    /*!***************************************************************************!*\
      !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.ts ***!
      \***************************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Q2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "DCsZ");
      /* harmony import */


      var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component.scss */
      "dhcA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-dashboard',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardComponent);
      /***/
    },

    /***/
    "QXO3":
    /*!*************************************************************!*\
      !*** ./src/modules/dashboard/services/dashboard.service.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardService */

    /***/
    function QXO3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
        return DashboardService;
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

      var DashboardService = /*#__PURE__*/function () {
        function DashboardService() {
          _classCallCheck(this, DashboardService);
        }

        _createClass(DashboardService, [{
          key: "getDashboard$",
          value: function getDashboard$() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
          }
        }]);

        return DashboardService;
      }();

      DashboardService.ctorParameters = function () {
        return [];
      };

      DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardService);
      /***/
    },

    /***/
    "TibX":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/light/light.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TibX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-dashboard [light]=\"true\"><sb-dashboard-head title=\"Dashboard Light\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head><sb-dashboard-cards></sb-dashboard-cards><sb-dashboard-charts></sb-dashboard-charts><sb-dashboard-tables></sb-dashboard-tables></sb-layout-dashboard>\n";
      /***/
    },

    /***/
    "cWIy":
    /*!*******************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function cWIy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtY2hhcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "dhcA":
    /*!*****************************************************************************!*\
      !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function dhcA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "pp4/":
    /*!*******************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-actions/dashboard-actions.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: DashboardActionsComponent */

    /***/
    function pp4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardActionsComponent", function () {
        return DashboardActionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard-actions.component.html */
      "KhFx");
      /* harmony import */


      var _dashboard_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-actions.component.scss */
      "Pdcd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DashboardActionsComponent = /*#__PURE__*/function () {
        function DashboardActionsComponent() {
          _classCallCheck(this, DashboardActionsComponent);

          this.slides = [{
            img: 'https://via.placeholder.com/600.png/09f/fff'
          }, {
            img: 'https://via.placeholder.com/600.png/021/fff'
          }, {
            img: 'https://via.placeholder.com/600.png/321/fff'
          }, {
            img: 'https://via.placeholder.com/600.png/422/fff'
          }, {
            img: 'https://via.placeholder.com/600.png/654/fff'
          }];
          this.slideConfig = {
            slidesToShow: 4,
            slidesToScroll: 4
          };
        }

        _createClass(DashboardActionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addSlide",
          value: function addSlide() {
            this.slides.push({
              img: 'http://placehold.it/350x150/777777'
            });
          }
        }, {
          key: "removeSlide",
          value: function removeSlide() {
            this.slides.length = this.slides.length - 1;
          }
        }, {
          key: "slickInit",
          value: function slickInit() {
            console.log('slick initialized');
          }
        }, {
          key: "breakpoint",
          value: function breakpoint() {
            console.log('breakpoint');
          }
        }, {
          key: "afterChange",
          value: function afterChange() {
            console.log('afterChange');
          }
        }, {
          key: "beforeChange",
          value: function beforeChange() {
            console.log('beforeChange');
          }
        }]);

        return DashboardActionsComponent;
      }();

      DashboardActionsComponent.ctorParameters = function () {
        return [];
      };

      DashboardActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-dashboard-actions',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_dashboard_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardActionsComponent);
      /***/
    },

    /***/
    "q+g/":
    /*!*********************************************************************!*\
      !*** ./src/modules/dashboard/containers/static/static.component.ts ***!
      \*********************************************************************/

    /*! exports provided: StaticComponent */

    /***/
    function qG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticComponent", function () {
        return StaticComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_static_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./static.component.html */
      "+uVk");
      /* harmony import */


      var _static_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./static.component.scss */
      "yHVM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var StaticComponent = /*#__PURE__*/function () {
        function StaticComponent() {
          _classCallCheck(this, StaticComponent);
        }

        _createClass(StaticComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StaticComponent;
      }();

      StaticComponent.ctorParameters = function () {
        return [];
      };

      StaticComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-static',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_static_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_static_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaticComponent);
      /***/
    },

    /***/
    "qvVY":
    /*!***************************************************!*\
      !*** ./src/modules/dashboard/components/index.ts ***!
      \***************************************************/

    /*! exports provided: components, DashboardCardsComponent, DashboardChartsComponent, DashboardTablesComponent */

    /***/
    function qvVY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "components", function () {
        return components;
      });
      /* harmony import */


      var _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-cards/dashboard-cards.component */
      "yDlM");
      /* harmony import */


      var _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard-charts/dashboard-charts.component */
      "sBPu");
      /* harmony import */


      var _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-tables/dashboard-tables.component */
      "tlU4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function () {
        return _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_0__["DashboardCardsComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardChartsComponent", function () {
        return _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_1__["DashboardChartsComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardTablesComponent", function () {
        return _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_2__["DashboardTablesComponent"];
      });

      var components = [_dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_0__["DashboardCardsComponent"], _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_1__["DashboardChartsComponent"], _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_2__["DashboardTablesComponent"]];
      /***/
    },

    /***/
    "sBPu":
    /*!*****************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: DashboardChartsComponent */

    /***/
    function sBPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardChartsComponent", function () {
        return DashboardChartsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_charts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard-charts.component.html */
      "3YyW");
      /* harmony import */


      var _dashboard_charts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-charts.component.scss */
      "cWIy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DashboardChartsComponent = /*#__PURE__*/function () {
        function DashboardChartsComponent() {
          _classCallCheck(this, DashboardChartsComponent);
        }

        _createClass(DashboardChartsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardChartsComponent;
      }();

      DashboardChartsComponent.ctorParameters = function () {
        return [];
      };

      DashboardChartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-dashboard-charts',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_dashboard_charts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_charts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardChartsComponent);
      /***/
    },

    /***/
    "tlU4":
    /*!*****************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: DashboardTablesComponent */

    /***/
    function tlU4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardTablesComponent", function () {
        return DashboardTablesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_tables_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard-tables.component.html */
      "Kfyz");
      /* harmony import */


      var _dashboard_tables_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-tables.component.scss */
      "ENLj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DashboardTablesComponent = /*#__PURE__*/function () {
        function DashboardTablesComponent() {
          _classCallCheck(this, DashboardTablesComponent);
        }

        _createClass(DashboardTablesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardTablesComponent;
      }();

      DashboardTablesComponent.ctorParameters = function () {
        return [];
      };

      DashboardTablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-dashboard-tables',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_dashboard_tables_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_tables_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardTablesComponent);
      /***/
    },

    /***/
    "u30O":
    /*!*******************************************************************!*\
      !*** ./src/modules/dashboard/containers/light/light.component.ts ***!
      \*******************************************************************/

    /*! exports provided: LightComponent */

    /***/
    function u30O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightComponent", function () {
        return LightComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_light_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./light.component.html */
      "TibX");
      /* harmony import */


      var _light_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./light.component.scss */
      "EGDz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LightComponent = /*#__PURE__*/function () {
        function LightComponent() {
          _classCallCheck(this, LightComponent);
        }

        _createClass(LightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LightComponent;
      }();

      LightComponent.ctorParameters = function () {
        return [];
      };

      LightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-light',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_light_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_light_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LightComponent);
      /***/
    },

    /***/
    "yDlM":
    /*!***************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: DashboardCardsComponent */

    /***/
    function yDlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function () {
        return DashboardCardsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_cards_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard-cards.component.html */
      "HG3J");
      /* harmony import */


      var _dashboard_cards_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-cards.component.scss */
      "8AI6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DashboardCardsComponent = /*#__PURE__*/function () {
        function DashboardCardsComponent() {
          _classCallCheck(this, DashboardCardsComponent);
        }

        _createClass(DashboardCardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardCardsComponent;
      }();

      DashboardCardsComponent.ctorParameters = function () {
        return [];
      };

      DashboardCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-dashboard-cards',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_dashboard_cards_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_cards_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardCardsComponent);
      /***/
    },

    /***/
    "yHVM":
    /*!***********************************************************************!*\
      !*** ./src/modules/dashboard/containers/static/static.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function yHVM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aWMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zq2N":
    /*!*********************************************************!*\
      !*** ./src/modules/dashboard/guards/dashboard.guard.ts ***!
      \*********************************************************/

    /*! exports provided: DashboardGuard */

    /***/
    function zq2N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardGuard", function () {
        return DashboardGuard;
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

      var DashboardGuard = /*#__PURE__*/function () {
        function DashboardGuard() {
          _classCallCheck(this, DashboardGuard);
        }

        _createClass(DashboardGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          }
        }]);

        return DashboardGuard;
      }();

      DashboardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DashboardGuard);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-dashboard-dashboard-routing-module-es5.js.map