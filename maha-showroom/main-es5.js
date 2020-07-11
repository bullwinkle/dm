function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/address-form/address-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/address-form/address-form.component.ts ***!
    \********************************************************/

  /*! exports provided: AddressFormComponent */

  /***/
  function srcAppAddressFormAddressFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressFormComponent", function () {
      return AddressFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AddressFormComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddressFormComponent_mat_error_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddressFormComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddressFormComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddressFormComponent_div_24_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.hasUnitNumber = !ctx_r9.hasUnitNumber;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " + Add C/O, Apt, Suite, Unit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddressFormComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddressFormComponent_mat_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddressFormComponent_mat_option_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var state_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r11.abbreviation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r11.name, " ");
      }
    }

    function AddressFormComponent_mat_error_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddressFormComponent = /*#__PURE__*/function () {
      function AddressFormComponent(fb) {
        _classCallCheck(this, AddressFormComponent);

        this.fb = fb;
        this.addressForm = this.fb.group({
          company: null,
          firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          address2: null,
          city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)])],
          shipping: ['free', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.hasUnitNumber = false;
        this.states = [{
          name: 'Alabama',
          abbreviation: 'AL'
        }, {
          name: 'Alaska',
          abbreviation: 'AK'
        }, {
          name: 'American Samoa',
          abbreviation: 'AS'
        }, {
          name: 'Arizona',
          abbreviation: 'AZ'
        }, {
          name: 'Arkansas',
          abbreviation: 'AR'
        }, {
          name: 'California',
          abbreviation: 'CA'
        }, {
          name: 'Colorado',
          abbreviation: 'CO'
        }, {
          name: 'Connecticut',
          abbreviation: 'CT'
        }, {
          name: 'Delaware',
          abbreviation: 'DE'
        }, {
          name: 'District Of Columbia',
          abbreviation: 'DC'
        }, {
          name: 'Federated States Of Micronesia',
          abbreviation: 'FM'
        }, {
          name: 'Florida',
          abbreviation: 'FL'
        }, {
          name: 'Georgia',
          abbreviation: 'GA'
        }, {
          name: 'Guam',
          abbreviation: 'GU'
        }, {
          name: 'Hawaii',
          abbreviation: 'HI'
        }, {
          name: 'Idaho',
          abbreviation: 'ID'
        }, {
          name: 'Illinois',
          abbreviation: 'IL'
        }, {
          name: 'Indiana',
          abbreviation: 'IN'
        }, {
          name: 'Iowa',
          abbreviation: 'IA'
        }, {
          name: 'Kansas',
          abbreviation: 'KS'
        }, {
          name: 'Kentucky',
          abbreviation: 'KY'
        }, {
          name: 'Louisiana',
          abbreviation: 'LA'
        }, {
          name: 'Maine',
          abbreviation: 'ME'
        }, {
          name: 'Marshall Islands',
          abbreviation: 'MH'
        }, {
          name: 'Maryland',
          abbreviation: 'MD'
        }, {
          name: 'Massachusetts',
          abbreviation: 'MA'
        }, {
          name: 'Michigan',
          abbreviation: 'MI'
        }, {
          name: 'Minnesota',
          abbreviation: 'MN'
        }, {
          name: 'Mississippi',
          abbreviation: 'MS'
        }, {
          name: 'Missouri',
          abbreviation: 'MO'
        }, {
          name: 'Montana',
          abbreviation: 'MT'
        }, {
          name: 'Nebraska',
          abbreviation: 'NE'
        }, {
          name: 'Nevada',
          abbreviation: 'NV'
        }, {
          name: 'New Hampshire',
          abbreviation: 'NH'
        }, {
          name: 'New Jersey',
          abbreviation: 'NJ'
        }, {
          name: 'New Mexico',
          abbreviation: 'NM'
        }, {
          name: 'New York',
          abbreviation: 'NY'
        }, {
          name: 'North Carolina',
          abbreviation: 'NC'
        }, {
          name: 'North Dakota',
          abbreviation: 'ND'
        }, {
          name: 'Northern Mariana Islands',
          abbreviation: 'MP'
        }, {
          name: 'Ohio',
          abbreviation: 'OH'
        }, {
          name: 'Oklahoma',
          abbreviation: 'OK'
        }, {
          name: 'Oregon',
          abbreviation: 'OR'
        }, {
          name: 'Palau',
          abbreviation: 'PW'
        }, {
          name: 'Pennsylvania',
          abbreviation: 'PA'
        }, {
          name: 'Puerto Rico',
          abbreviation: 'PR'
        }, {
          name: 'Rhode Island',
          abbreviation: 'RI'
        }, {
          name: 'South Carolina',
          abbreviation: 'SC'
        }, {
          name: 'South Dakota',
          abbreviation: 'SD'
        }, {
          name: 'Tennessee',
          abbreviation: 'TN'
        }, {
          name: 'Texas',
          abbreviation: 'TX'
        }, {
          name: 'Utah',
          abbreviation: 'UT'
        }, {
          name: 'Vermont',
          abbreviation: 'VT'
        }, {
          name: 'Virgin Islands',
          abbreviation: 'VI'
        }, {
          name: 'Virginia',
          abbreviation: 'VA'
        }, {
          name: 'Washington',
          abbreviation: 'WA'
        }, {
          name: 'West Virginia',
          abbreviation: 'WV'
        }, {
          name: 'Wisconsin',
          abbreviation: 'WI'
        }, {
          name: 'Wyoming',
          abbreviation: 'WY'
        }];
      }

      _createClass(AddressFormComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          alert('Thanks!');
        }
      }]);

      return AddressFormComponent;
    }();

    AddressFormComponent.ɵfac = function AddressFormComponent_Factory(t) {
      return new (t || AddressFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    AddressFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddressFormComponent,
      selectors: [["dm-address-form"]],
      decls: 55,
      vars: 10,
      consts: [["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "shipping-card"], [1, "row"], [1, "col"], [1, "full-width"], ["matInput", "", "placeholder", "Company", "formControlName", "company"], ["matInput", "", "placeholder", "First name", "formControlName", "firstName"], [4, "ngIf"], ["matInput", "", "placeholder", "Last name", "formControlName", "lastName"], ["matInput", "", "placeholder", "Address", "formControlName", "address"], ["class", "row", 4, "ngIf"], ["matInput", "", "placeholder", "City", "formControlName", "city"], ["placeholder", "State", "formControlName", "state"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "maxlength", "5", "placeholder", "Postal Code", "type", "number", "formControlName", "postalCode"], ["postalCode", ""], ["align", "end"], ["formControlName", "shipping"], ["value", "free"], ["value", "priority"], ["value", "nextday"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "type", "button", 3, "click"], ["matInput", "", "placeholder", "Address 2", "formControlName", "address2"], [3, "value"]],
      template: function AddressFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddressFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shipping Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddressFormComponent_mat_error_14_Template, 4, 0, "mat-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddressFormComponent_mat_error_18_Template, 4, 0, "mat-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddressFormComponent_mat_error_23_Template, 4, 0, "mat-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddressFormComponent_div_24_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddressFormComponent_div_25_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddressFormComponent_mat_error_30_Template, 4, 0, "mat-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddressFormComponent_mat_option_34_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddressFormComponent_mat_error_35_Template, 4, 0, "mat-error", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-hint", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-radio-group", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-radio-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Free Shipping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-radio-button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Priority Shipping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-radio-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Next Day Shipping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addressForm.controls["firstName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addressForm.controls["lastName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addressForm.controls["address"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasUnitNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasUnitNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addressForm.controls["city"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addressForm.controls["state"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r8.value.length, " / 5");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatHint"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
      styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.shipping-card[_ngcontent-%COMP%] {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 5px 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.col[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL2FkZHJlc3MtZm9ybS9hZGRyZXNzLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL2FkZHJlc3MtZm9ybS9hZGRyZXNzLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGlwcGluZy1jYXJkIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dm-address-form',
          templateUrl: './address-form.component.html',
          styleUrls: ['./address-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _palette_palette_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./palette/palette.component */
    "./src/app/palette/palette.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");

    var routes = [{
      path: '',
      component: _palette_palette_component__WEBPACK_IMPORTED_MODULE_2__["PaletteComponent"]
    }, {
      path: 'products',
      component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        enableTracing: true,
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            enableTracing: true,
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngneat/until-destroy */
    "../../node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["dm-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dm-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haGEtc2hvd3Jvb20vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */"],
      changeDetection: 0
    });
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()], AppComponent);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dm-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/badge */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/chips */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/paginator */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/radio */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/slider */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/sort */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/tree */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./address-form/address-form.component */
    "./src/app/address-form/address-form.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./drag-drop/drag-drop.component */
    "./src/app/drag-drop/drag-drop.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _palette_palette_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./palette/palette.component */
    "./src/app/palette/palette.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./services/theme.service */
    "./src/app/services/theme.service.ts");
    /* harmony import */


    var _table_table_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./table/table.component */
    "./src/app/table/table.component.ts");
    /* harmony import */


    var _tree_tree_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./tree/tree.component */
    "./src/app/tree/tree.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_39__["ThemeService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["NoopAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["DashboardComponent"], _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_30__["AddressFormComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_36__["NavigationComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_40__["TableComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_41__["TreeComponent"], _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_34__["DragDropComponent"], _palette_palette_component__WEBPACK_IMPORTED_MODULE_37__["PaletteComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_38__["ProductsComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_35__["LayoutComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["NoopAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["NoopAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["DashboardComponent"], _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_30__["AddressFormComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_36__["NavigationComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_40__["TableComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_41__["TreeComponent"], _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_34__["DragDropComponent"], _palette_palette_component__WEBPACK_IMPORTED_MODULE_37__["PaletteComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_38__["ProductsComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_35__["LayoutComponent"]],
          providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_39__["ThemeService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function DashboardComponent_mat_grid_tile_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Expand");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-content", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Card Content Here");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r1 = ctx.$implicit;

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", card_r1.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
      }
    }

    var DashboardComponent = function DashboardComponent(breakpointObserver) {
      _classCallCheck(this, DashboardComponent);

      this.breakpointObserver = breakpointObserver;
      /** Based on the screen size, switch from standard to one column per row */

      this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
        var matches = _ref.matches;

        if (matches) {
          return [{
            title: 'Card 1',
            cols: 1,
            rows: 1
          }, {
            title: 'Card 2',
            cols: 1,
            rows: 1
          }, {
            title: 'Card 3',
            cols: 1,
            rows: 1
          }, {
            title: 'Card 4',
            cols: 1,
            rows: 1
          }];
        }

        return [{
          title: 'Card 1',
          cols: 2,
          rows: 1
        }, {
          title: 'Card 2',
          cols: 1,
          rows: 1
        }, {
          title: 'Card 3',
          cols: 1,
          rows: 2
        }, {
          title: 'Card 4',
          cols: 1,
          rows: 1
        }];
      }));
    };

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["dm-dashboard"]],
      decls: 6,
      vars: 3,
      consts: [[1, "grid-container"], [1, "mat-h1"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], ["aria-label", "Toggle menu", "mat-icon-button", "", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "dashboard-card-content"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-grid-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_mat_grid_tile_4_Template, 17, 4, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.cards));
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhcHBzL21haGEtc2hvd3Jvb20vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dm-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/drag-drop/drag-drop.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/drag-drop/drag-drop.component.ts ***!
    \**************************************************/

  /*! exports provided: DragDropComponent */

  /***/
  function srcAppDragDropDragDropComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropComponent", function () {
      return DragDropComponent;
    });
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DragDropComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4);
      }
    }

    function DragDropComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5);
      }
    }

    var DragDropComponent = /*#__PURE__*/function () {
      function DragDropComponent() {
        _classCallCheck(this, DragDropComponent);

        this.todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
        this.done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
      }

      _createClass(DragDropComponent, [{
        key: "drop",
        value: function drop(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          }
        }
      }]);

      return DragDropComponent;
    }();

    DragDropComponent.ɵfac = function DragDropComponent_Factory(t) {
      return new (t || DragDropComponent)();
    };

    DragDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DragDropComponent,
      selectors: [["dm-drag-drop"]],
      decls: 12,
      vars: 6,
      consts: [[1, "container"], ["cdkDropList", "", 1, "list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["class", "list-item", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["doneList", "cdkDropList"], ["cdkDrag", "", 1, "list-item"]],
      template: function DragDropComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "To do");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DragDropComponent_Template_div_cdkDropListDropped_3_listener($event) {
            return ctx.drop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DragDropComponent_div_5_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Done");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DragDropComponent_Template_div_cdkDropListDropped_9_listener($event) {
            return ctx.drop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DragDropComponent_div_11_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.todo)("cdkDropListConnectedTo", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.done)("cdkDropListConnectedTo", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.done);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 20px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  display: block;\n  overflow: hidden;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  color: black;\n  font-size: 14px;\n}\n\n.list-item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n\n\n.cdk-drop-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL2RyYWctZHJvcC9kcmFnLWRyb3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsbURBQW1EOztBQUNuRDtFQUNFLGtCQUFrQjtFQUNsQjs7Z0RBRThDO0FBQ2hEOztBQUVBLDJDQUEyQzs7QUFDM0M7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUEsMkNBQTJDOztBQUMzQztFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJhcHBzL21haGEtc2hvd3Jvb20vc3JjL2FwcC9kcmFnLWRyb3AvZHJhZy1kcm9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5saXN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5saXN0LWl0ZW0ge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxpc3QtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4vKiBIaWdobGlnaHQgdGhlIGxpc3QgaXRlbSB0aGF0IGlzIGJlaW5nIGRyYWdnZWQuICovXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4vKiBBbmltYXRlIGl0ZW1zIGFzIHRoZXkncmUgYmVpbmcgc29ydGVkLiAqL1xuLmNkay1kcm9wLWRyYWdnaW5nIC5jZGstZHJhZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLyogQW5pbWF0ZSBhbiBpdGVtIHRoYXQgaGFzIGJlZW4gZHJvcHBlZC4gKi9cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragDropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dm-drag-drop',
          templateUrl: './drag-drop.component.html',
          styleUrls: ['./drag-drop.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/theme.service */
    "./src/app/services/theme.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["sidenav"];

    function LayoutComponent_a_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", nav_r3, " ");
      }
    }

    var _c1 = ["*"];

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent(httpClient, changeDetectorRef, media, themeService) {
        _classCallCheck(this, LayoutComponent);

        this.httpClient = httpClient;
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        this.themeService = themeService;
        this.DM_THEME_MODE = _services_theme_service__WEBPACK_IMPORTED_MODULE_4__["DM_THEME_MODE"];
        this.title = 'first';
        this.fillerNav = Array.from({
          length: 10
        }, function (_, i) {
          return "Nav Item ".concat(i + 1);
        });
        this.opened = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addEventListener('change', this._mobileQueryListener);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(window.innerWidth);

          if (window.innerWidth < 768) {
            this.sidenav.fixedTopGap = 55;
            this.opened = false;
          } else {
            this.sidenav.fixedTopGap = 55;
            this.opened = true;
          }
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (event.target.innerWidth < 768) {
            this.sidenav.fixedTopGap = 55;
            this.opened = false;
          } else {
            this.sidenav.fixedTopGap = 55;
            this.opened = true;
          }
        }
      }, {
        key: "isBiggerScreen",
        value: function isBiggerScreen() {
          var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

          if (width < 768) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
        }
      }, {
        key: "setTheme",
        value: function setTheme(mode) {
          this.themeService.setMode(mode);
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]));
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["dm-layout"]],
      viewQuery: function LayoutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function LayoutComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        }
      },
      ngContentSelectors: _c1,
      decls: 65,
      vars: 5,
      consts: [[1, "example-toolbar", "mat-elevation-z6"], ["routerLink", "/", "mat-button", ""], [1, "example-app-name"], ["mat-button", "", "routerLink", "/products"], [1, "example-spacer"], ["matTooltip", "Info about the action", "mat-icon-button", "", "aria-label", "Example icon-button with a menu"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""], [1, "example-sidenav-container", "mat-typography"], ["fixedTopGap", "56", 1, "dm-sidenav", 3, "mode", "fixedInViewport", "opened", "openedChange"], ["sidenav", ""], ["mat-list-item", "", "routerLink", ".", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip when focused or hovered over", 3, "click"], [1, "content"], ["mat-list-item", "", "routerLink", "."]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "group_work");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "verified_user");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-menu", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_24_listener() {
            return ctx.setTheme(ctx.DM_THEME_MODE.LIGHT);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "dialpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Theme mode light");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_29_listener() {
            return ctx.setTheme(ctx.DM_THEME_MODE.DARK);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "dialpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Theme mode dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "dialpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Redial");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "voicemail");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Check voice mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "notifications_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Disable alerts");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-sidenav-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-sidenav", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("openedChange", function LayoutComponent_Template_mat_sidenav_openedChange_50_listener($event) {
            return ctx.opened = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, LayoutComponent_a_53_Template, 4, 1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](51);

            return _r1.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Second Line");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches)("opened", ctx.opened);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fillerNav);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: red;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n}\n\n.example-toolbar[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  display: inline-block;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%], .dm-sidenav[_ngcontent-%COMP%] {\n  \n  min-height: 100vh;\n  padding-top: 56px;\n}\n\n@media (min-width: 600px) {\n  .example-sidenav-container[_ngcontent-%COMP%], .dm-sidenav[_ngcontent-%COMP%] {\n    padding-top: 64px;\n  }\n}\n\n.dm-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBSUEsZUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsWUFBQTtBQUxGOztBQVFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLDhFQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBTEY7O0FBUUE7O0VBRUU7MEZBQUE7RUFLQSxpQkFBQTtFQUVBLGlCQUFBO0FBVEY7O0FBVUU7RUFWRjs7SUFXSSxpQkFBQTtFQU5GO0FBQ0Y7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFORjs7QUFVQTtFQUNFOytEQUFBO0VBRUEsY0FBQTtBQVBGIiwiZmlsZSI6ImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvL3dpZHRoOiAxMDAlO1xuICAvL2hlaWdodDogMTAwJTtcbiAgLy9vdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uZXhhbXBsZS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXhhbXBsZS10b29sYmFyIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG59XG5cbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lcixcbi5kbS1zaWRlbmF2IHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICAvL2ZsZXg6IDE7XG4gIC8vei1pbmRleDogMTtcblxuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICBwYWRkaW5nLXRvcDogNTZweDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgcGFkZGluZy10b3A6IDY0cHg7XG4gIH1cbn1cblxuLmRtLXNpZGVuYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xuICBmbGV4OiAxIDAgYXV0bztcbn1cbiJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'dm-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]
        }, {
          type: _services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
        }];
      }, {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['sidenav', {
            "static": true
          }]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function NavigationComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return _r0.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var NavigationComponent = function NavigationComponent(breakpointObserver) {
      _classCallCheck(this, NavigationComponent);

      this.breakpointObserver = breakpointObserver;
      this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    };

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]));
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["dm-navigation"]],
      decls: 21,
      vars: 12,
      consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "href", "#"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Link 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Link 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Link 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-toolbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavigationComponent_button_17_Template, 3, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "first");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, ctx.isHandset$) === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.isHandset$) ? "dialog" : "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 10, ctx.isHandset$));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6ImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dm-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/palette/palette.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/palette/palette.component.ts ***!
    \**********************************************/

  /*! exports provided: PaletteComponent */

  /***/
  function srcAppPalettePaletteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaletteComponent", function () {
      return PaletteComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! socket.io-client */
    "../../node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../table/table.component */
    "./src/app/table/table.component.ts");
    /* harmony import */


    var _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../address-form/address-form.component */
    "./src/app/address-form/address-form.component.ts");
    /* harmony import */


    var _tree_tree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../tree/tree.component */
    "./src/app/tree/tree.component.ts");
    /* harmony import */


    var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../drag-drop/drag-drop.component */
    "./src/app/drag-drop/drag-drop.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/slider */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/badge */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PaletteComponent = /*#__PURE__*/function () {
      function PaletteComponent(httpClient) {
        _classCallCheck(this, PaletteComponent);

        this.httpClient = httpClient;
        this.hello$ = this.httpClient.get('/api/hello');
        this.wsEvents$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fillerContent = Array.from({
          length: 10
        }, function () {
          return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
      }

      _createClass(PaletteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // TODO wrap with rxjs, put to service
          // TODO make config
          var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3333');
          socket.emit('events', {
            name: 'Nest'
          }, function (responseMessage) {
            console.warn('ws client response:', responseMessage);
          });
          socket.on('events', function (message) {
            console.warn('ws client:', message);

            _this.wsEvents$.next(message);
          });
        }
      }]);

      return PaletteComponent;
    }();

    PaletteComponent.ɵfac = function PaletteComponent_Factory(t) {
      return new (t || PaletteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    PaletteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PaletteComponent,
      selectors: [["dm-palette"]],
      decls: 187,
      vars: 9,
      consts: [[1, "mat-elevation-z4"], [1, "mat-elevation-z1"], [1, "example-label"], [1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "href", "https://www.google.com/", "target", "_blank"], [1, "example-flex-container"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a home icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon button with a menu icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a open in new tab icon"], [1, "example-button-container"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon"], ["mat-fab", "", "color", "accent", "aria-label", "Example icon button with a bookmark icon"], ["mat-fab", "", "color", "warn", "aria-label", "Example icon button with a home icon"], ["mat-fab", "", "disabled", "", "aria-label", "Example icon button with a heart icon"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a plus one icon"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a filter list icon"], ["mat-mini-fab", "", "disabled", "", "aria-label", "Example icon button with a home icon"], ["min", "1", "max", "100", "step", "1", "value", "1"], ["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style"], ["matBadge", "4", "matBadgeOverlap", "false"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"], [1, "text"]],
      template: function PaletteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dm-dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dm-table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dm-address-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dm-tree", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dm-drag-drop");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "hi");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Accent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Raised");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Accent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Stroked");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Accent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Flat");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Accent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "open_in_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "FAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "bookmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Mini FAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "plus_one");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "filter_list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "mat-slider", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " Default appearance: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "mat-button-toggle-group", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "mat-button-toggle", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "mat-button-toggle", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Italic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "mat-button-toggle", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Underline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, " Legacy appearance: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "mat-button-toggle-group", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "mat-button-toggle", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "mat-button-toggle", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Italic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-button-toggle", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Underline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, " CSS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Text with a badge");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " Button with a badge on the left ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " Icon with a badge ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "mat-icon", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, " Example with a home icon with overlaid badge showing the number 15 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.hello$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, ctx.wsEvents$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](181);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fillerContent);
        }
      },
      directives: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"], _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_6__["AddressFormComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_7__["TreeComponent"], _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_8__["DragDropComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSlider"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggle"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadge"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]],
      styles: ["section[_ngcontent-%COMP%] {\n  display: table;\n  margin: 8px;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: table-cell;\n  margin-right: 8px;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 480px;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL3BhbGV0dGUvcGFsZXR0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiYXBwcy9tYWhhLXNob3dyb29tL3NyYy9hcHAvcGFsZXR0ZS9wYWxldHRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDhweDtcbn1cblxuLmV4YW1wbGUtbGFiZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNDgwcHg7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEyMHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaletteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dm-palette',
          templateUrl: './palette.component.html',
          styleUrls: ['./palette.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductsComponent_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", product_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", product_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, product_r1.price));
      }
    }

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(httpClient) {
        _classCallCheck(this, ProductsComponent);

        this.httpClient = httpClient;
        this.products$ = this.httpClient.get('/api/products');
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["dm-products"]],
      decls: 3,
      vars: 3,
      consts: [[1, "products"], ["target", "_blank", "class", "product", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "product", 3, "href"], [1, "product__image"], [3, "src"], [1, "product__title", 3, "innerHTML"], [1, "product__price"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsComponent_a_1_Template, 7, 6, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.products$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: [".products[_ngcontent-%COMP%] {\n  max-width: 1140px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  justify-content: center;\n}\n.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n  min-width: 230px;\n  max-width: 330px;\n  padding: 15px;\n}\n.products[_ngcontent-%COMP%]   .product__image[_ngcontent-%COMP%] {\n  height: 0;\n  padding-top: 128%;\n  position: relative;\n  overflow: hidden;\n}\n.products[_ngcontent-%COMP%]   .product__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNOO0FBQ007RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ1IiLCJmaWxlIjoiYXBwcy9tYWhhLXNob3dyb29tL3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMge1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAucHJvZHVjdCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xuICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgICZfX2ltYWdlIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMjglO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICB9XG5cbiAgICAmX19wcmljZSB7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dm-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/theme.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/theme.service.ts ***!
    \*******************************************/

  /*! exports provided: DM_THEME, DM_THEME_MODE, ThemeService */

  /***/
  function srcAppServicesThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DM_THEME", function () {
      return DM_THEME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DM_THEME_MODE", function () {
      return DM_THEME_MODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var DM_THEME;

    (function (DM_THEME) {
      DM_THEME["DEFAULT"] = "DEFAULT";
    })(DM_THEME || (DM_THEME = {}));

    var DM_THEME_MODE;

    (function (DM_THEME_MODE) {
      DM_THEME_MODE["LIGHT"] = "LIGHT";
      DM_THEME_MODE["DARK"] = "DARK";
    })(DM_THEME_MODE || (DM_THEME_MODE = {}));

    var DM_THEME_CLASS_PREFIX = 'dm-ui-theme-';

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService() {
        var _this2 = this;

        _classCallCheck(this, ThemeService);

        this.currentTheme$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](DM_THEME.DEFAULT);
        this.currentMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](DM_THEME_MODE.LIGHT);
        this.theme$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.currentTheme$, this.currentMode$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              id = _ref3[0],
              mode = _ref3[1];

          return {
            id: id,
            mode: mode
          };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({
          bufferSize: 1,
          refCount: true
        }));
        this.theme$.subscribe(function (newClassName) {
          _this2.applyTheme(newClassName);
        });
      }

      _createClass(ThemeService, [{
        key: "setTheme",
        value: function setTheme(theme) {
          this.currentTheme$.next(theme);
        }
      }, {
        key: "setMode",
        value: function setMode(mode) {
          this.currentMode$.next(mode);
        }
      }, {
        key: "applyTheme",
        value: function applyTheme(_ref4) {
          var id = _ref4.id,
              mode = _ref4.mode;
          var newClassName = "".concat(DM_THEME_CLASS_PREFIX).concat(id, "--").concat(mode).toLowerCase();
          document.body.classList.forEach(function (className) {
            if (className.startsWith(DM_THEME_CLASS_PREFIX)) {
              document.body.classList.remove(className);
            }
          });
          document.body.classList.add(newClassName);
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)();
    };

    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/table/table-datasource.ts":
  /*!*******************************************!*\
    !*** ./src/app/table/table-datasource.ts ***!
    \*******************************************/

  /*! exports provided: TableDataSource */

  /***/
  function srcAppTableTableDatasourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDataSource", function () {
      return TableDataSource;
    });
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js"); // TODO: replace this with real data from your application


    var EXAMPLE_DATA = [{
      id: 1,
      name: 'Hydrogen'
    }, {
      id: 2,
      name: 'Helium'
    }, {
      id: 3,
      name: 'Lithium'
    }, {
      id: 4,
      name: 'Beryllium'
    }, {
      id: 5,
      name: 'Boron'
    }, {
      id: 6,
      name: 'Carbon'
    }, {
      id: 7,
      name: 'Nitrogen'
    }, {
      id: 8,
      name: 'Oxygen'
    }, {
      id: 9,
      name: 'Fluorine'
    }, {
      id: 10,
      name: 'Neon'
    }, {
      id: 11,
      name: 'Sodium'
    }, {
      id: 12,
      name: 'Magnesium'
    }, {
      id: 13,
      name: 'Aluminum'
    }, {
      id: 14,
      name: 'Silicon'
    }, {
      id: 15,
      name: 'Phosphorus'
    }, {
      id: 16,
      name: 'Sulfur'
    }, {
      id: 17,
      name: 'Chlorine'
    }, {
      id: 18,
      name: 'Argon'
    }, {
      id: 19,
      name: 'Potassium'
    }, {
      id: 20,
      name: 'Calcium'
    }];
    /**
     * Data source for the Table view. This class should
     * encapsulate all logic for fetching and manipulating the displayed data
     * (including sorting, pagination, and filtering).
     */

    var TableDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
      _inherits(TableDataSource, _angular_cdk_collecti);

      var _super = _createSuper(TableDataSource);

      function TableDataSource() {
        var _this3;

        _classCallCheck(this, TableDataSource);

        _this3 = _super.call(this);
        _this3.data = EXAMPLE_DATA;
        return _this3;
      }
      /**
       * Connect this data source to the table. The table will only update when
       * the returned stream emits new items.
       * @returns A stream of the items to be rendered.
       */


      _createClass(TableDataSource, [{
        key: "connect",
        value: function connect() {
          var _this4 = this;

          // Combine everything that affects the rendered data into one update
          // stream for the data-table to consume.
          var dataMutations = [Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data), this.paginator.page, this.sort.sortChange];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"]).apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this4.getPagedData(_this4.getSortedData(_toConsumableArray(_this4.data)));
          }));
        }
        /**
         *  Called when the table is being destroyed. Use this function, to clean up
         * any open connections or free any held resources that were set up during connect.
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
        /**
         * Paginate the data (client-side). If you're using server-side pagination,
         * this would be replaced by requesting the appropriate data from the server.
         */

      }, {
        key: "getPagedData",
        value: function getPagedData(data) {
          var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
          return data.splice(startIndex, this.paginator.pageSize);
        }
        /**
         * Sort the data (client-side). If you're using server-side sorting,
         * this would be replaced by requesting the appropriate data from the server.
         */

      }, {
        key: "getSortedData",
        value: function getSortedData(data) {
          var _this5 = this;

          if (!this.sort.active || this.sort.direction === '') {
            return data;
          }

          return data.sort(function (a, b) {
            var isAsc = _this5.sort.direction === 'asc';

            switch (_this5.sort.active) {
              case 'name':
                return compare(a.name, b.name, isAsc);

              case 'id':
                return compare(+a.id, +b.id, isAsc);

              default:
                return 0;
            }
          });
        }
      }]);

      return TableDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]);
    /** Simple sort comparator for example ID/Name columns (for client-side sorting). */


    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    /***/

  },

  /***/
  "./src/app/table/table.component.ts":
  /*!******************************************!*\
    !*** ./src/app/table/table.component.ts ***!
    \******************************************/

  /*! exports provided: TableComponent */

  /***/
  function srcAppTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sort */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _table_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./table-datasource */
    "./src/app/table/table-datasource.ts");

    function TableComponent_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableComponent_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.id);
      }
    }

    function TableComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableComponent_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.name);
      }
    }

    function TableComponent_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
      }
    }

    function TableComponent_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
      }
    }

    var _c0 = function _c0() {
      return [25, 50, 100, 250];
    };

    var TableComponent = /*#__PURE__*/function () {
      function TableComponent() {
        _classCallCheck(this, TableComponent);

        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
      }

      _createClass(TableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource = new _table_datasource__WEBPACK_IMPORTED_MODULE_4__["TableDataSource"]();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.table.dataSource = this.dataSource;
        }
      }]);

      return TableComponent;
    }();

    TableComponent.ɵfac = function TableComponent_Factory(t) {
      return new (t || TableComponent)();
    };

    TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableComponent,
      selectors: [["dm-table"]],
      viewQuery: function TableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 11,
      vars: 7,
      consts: [["mat-table", "", "matSort", "", "aria-label", "Elements", 1, "full-width-table"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function TableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_th_2_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_td_3_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_th_5_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_td_6_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableComponent_tr_7_Template, 1, 0, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableComponent_tr_8_Template, 1, 0, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-paginator", 7, 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource == null ? null : ctx.dataSource.data.length)("pageIndex", 0)("pageSize", 6)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dm-table',
          templateUrl: './table.component.html',
          styleUrls: ['./table.component.css']
        }]
      }], null, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/tree/example-data.ts":
  /*!**************************************!*\
    !*** ./src/app/tree/example-data.ts ***!
    \**************************************/

  /*! exports provided: files */

  /***/
  function srcAppTreeExampleDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "files", function () {
      return files;
    });
    /** Example file/folder data. */


    var files = [{
      name: 'components',
      type: 'folder',
      children: [{
        name: 'src',
        type: 'folder',
        children: [{
          name: 'cdk',
          type: 'folder',
          children: [{
            name: 'package.json',
            type: 'file'
          }, {
            name: 'BUILD.bazel',
            type: 'file'
          }]
        }, {
          name: 'material',
          type: 'folder'
        }]
      }]
    }, {
      name: 'angular',
      type: 'folder',
      children: [{
        name: 'packages',
        type: 'folder',
        children: [{
          name: '.travis.yml',
          type: 'file'
        }, {
          name: 'firebase.json',
          type: 'file'
        }]
      }, {
        name: 'package.json',
        type: 'file'
      }]
    }, {
      name: 'angularjs',
      type: 'folder',
      children: [{
        name: 'gulpfile.js',
        type: 'file'
      }, {
        name: 'README.md',
        type: 'file'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/tree/tree.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tree/tree.component.ts ***!
    \****************************************/

  /*! exports provided: TreeComponent */

  /***/
  function srcAppTreeTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeComponent", function () {
      return TreeComponent;
    });
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tree */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _example_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./example-data */
    "./src/app/tree/example-data.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function TreeComponent_mat_tree_node_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", node_r2.type + "icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r2.type === "file" ? "description" : "folder", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r2.name, " ");
      }
    }

    function TreeComponent_mat_tree_node_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "toggle " + node_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", node_r3.type + "icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r3.type === "file" ? "description" : "folder", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r3.name, " ");
      }
    }

    var TreeComponent = /*#__PURE__*/function () {
      function TreeComponent() {
        _classCallCheck(this, TreeComponent);

        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.dataSource.data = _example_data__WEBPACK_IMPORTED_MODULE_3__["files"];
      }
      /** Transform the data to something the tree can read. */


      _createClass(TreeComponent, [{
        key: "transformer",
        value: function transformer(node, level) {
          return {
            name: node.name,
            type: node.type,
            level: level,
            expandable: !!node.children
          };
        }
        /** Get the level of the node */

      }, {
        key: "getLevel",
        value: function getLevel(node) {
          return node.level;
        }
        /** Get whether the node is expanded or not. */

      }, {
        key: "isExpandable",
        value: function isExpandable(node) {
          return node.expandable;
        }
        /** Get whether the node has children or not. */

      }, {
        key: "hasChild",
        value: function hasChild(index, node) {
          return node.expandable;
        }
        /** Get the children for the node. */

      }, {
        key: "getChildren",
        value: function getChildren(node) {
          return node.children;
        }
      }]);

      return TreeComponent;
    }();

    TreeComponent.ɵfac = function TreeComponent_Factory(t) {
      return new (t || TreeComponent)();
    };

    TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TreeComponent,
      selectors: [["dm-tree"]],
      decls: 3,
      vars: 3,
      consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "type-icon"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]],
      template: function TreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TreeComponent_mat_tree_node_1_Template, 5, 3, "mat-tree-node", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TreeComponent_mat_tree_node_2_Template, 7, 5, "mat-tree-node", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        }
      },
      directives: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.type-icon[_ngcontent-%COMP%] {\n  color: #757575;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFoYS1zaG93cm9vbS9zcmMvYXBwL3RyZWUvdHJlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXBwcy9tYWhhLXNob3dyb29tL3NyYy9hcHAvdHJlZS90cmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udHlwZS1pY29uIHtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dm-tree',
          templateUrl: './tree.component.html',
          styleUrls: ['./tree.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/bullwinkle/Projects/Dimaha-workspace/apps/maha-showroom/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map