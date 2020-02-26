function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ptitcolon-ptitcolon-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/bot/bot.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/bot/bot.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtitcolonBotBotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>{{bot.name}} - lvl {{bot.level}}</p>\r\n<div *ngFor=\"let loot of bot.lootTable; let i = index\">\r\n    {{index}}\r\n    <span [ngStyle]=\"{'border': i >= bot.level && i < bot.level + 7 ?   '1px solid red' : 'none'}\"><app-cout [cout]=\"loot\"></app-cout></span>\r\n</div>\r\n<button (click)=\"lance()\">Lance</button>\r\n<div *ngFor=\"let upgrade of bot.upgradeTable\">\r\n    <app-cout [cout]=\"upgrade\"></app-cout>\r\n</div>\r\n<button (click)=\"upgrade()\">Upgrade</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/cout/cout.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/cout/cout.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtitcolonCoutCoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "{{cout.toString()}}";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/culture/culture.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/culture/culture.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtitcolonCultureCultureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>culture works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/elevage/elevage.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/elevage/elevage.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtitcolonElevageElevageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>elevage works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/mine/mine.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/mine/mine.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtitcolonMineMineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>mine works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/partie/partie.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/partie/partie.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtitcolonPartiePartieComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"display: flex; flex-direction: row;\">\r\n    <div class=\"module\">\r\n        <div *ngIf=\"!partie.culture.bot else cultureBot\">\r\n            culture\r\n        </div>\r\n        <ng-template #cultureBot>\r\n            <app-bot [bot]=\"partie.culture\"></app-bot>\r\n        </ng-template>\r\n    </div>\r\n    <div class=\"module\">\r\n        <div *ngIf=\"!partie.elevage.bot else elevageBot\">\r\n            elevage\r\n        </div>\r\n        <ng-template #elevageBot>\r\n            <app-bot [bot]=\"partie.elevage\"></app-bot>\r\n        </ng-template>\r\n    </div>\r\n    <div class=\"module\">\r\n        <div *ngIf=\"!partie.peche.bot else pecheBot\">\r\n            <app-peche [peche]=\"partie.peche\"></app-peche>\r\n        </div>\r\n        <ng-template #pecheBot>\r\n            <app-bot [bot]=\"partie.peche\"></app-bot>\r\n        </ng-template>\r\n    </div>\r\n    <div class=\"module\">\r\n        <div *ngIf=\"!partie.mine.bot else mineBot\">\r\n            mine\r\n        </div>\r\n        <ng-template #mineBot>\r\n            <app-bot [bot]=\"partie.mine\"></app-bot>\r\n        </ng-template>\r\n    </div>\r\n    {{counter}}\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/peche/peche.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/peche/peche.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtitcolonPechePecheComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p> maison </p>\n<div *ngIf=\"peche\">\n    <p> stock : {{peche.stock}}</p>\n    <p>des : {{peche.des | json}}</p>\n    <div *ngFor=\"let de of peche.des; let i = index\">\n        {{de}} <input type=\"checkbox\" [(ngModel)]=\"peche.relance[i]\" />\n    </div>\n    <button (click)=\"peche.relanceDes()\" [enabled]=\"peche.hasRelance()\">Relance</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/start/start.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/start/start.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtitcolonStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!partie\">\r\n    click players\r\n    <br/>\r\n<input type=\"checkbox\" [(ngModel)]=\"culture\" /> Culture\r\n<br/>\r\n<input type=\"checkbox\" [(ngModel)]=\"elevage\" /> elevage\r\n<br/>\r\n<input type=\"checkbox\" [(ngModel)]=\"mine\" /> mine\r\n<br/>\r\n<input type=\"checkbox\" [(ngModel)]=\"peche\" /> peche\r\n<br/>\r\n<button (click)=\"launch()\">Go</button>\r\n</div>\r\n<div *ngIf=\"partie\">\r\n    <app-partie [partie]=\"partie\"></app-partie>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/ptitcolon/bot/bot.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/ptitcolon/bot/bot.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtitcolonBotBotComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0aXRjb2xvbi9ib3QvYm90LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ptitcolon/bot/bot.component.ts":
  /*!************************************************!*\
    !*** ./src/app/ptitcolon/bot/bot.component.ts ***!
    \************************************************/

  /*! exports provided: BotComponent */

  /***/
  function srcAppPtitcolonBotBotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotComponent", function () {
      return BotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ptitcolon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ptitcolon.service */
    "./src/app/ptitcolon/ptitcolon.service.ts");

    var BotComponent =
    /*#__PURE__*/
    function () {
      function BotComponent(ptitColonService) {
        _classCallCheck(this, BotComponent);

        this.ptitColonService = ptitColonService;
      }

      _createClass(BotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "lance",
        value: function lance() {
          this.ptitColonService.sendMessage("");
        }
      }, {
        key: "upgrade",
        value: function upgrade() {
          this.bot.level++;
        }
      }]);

      return BotComponent;
    }();

    BotComponent.ctorParameters = function () {
      return [{
        type: _ptitcolon_service__WEBPACK_IMPORTED_MODULE_2__["PtitColonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BotComponent.prototype, "bot", void 0);
    BotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/bot/bot.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bot.component.scss */
      "./src/app/ptitcolon/bot/bot.component.scss")).default]
    })], BotComponent);
    /***/
  },

  /***/
  "./src/app/ptitcolon/cout/cout.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/ptitcolon/cout/cout.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtitcolonCoutCoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0aXRjb2xvbi9jb3V0L2NvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ptitcolon/cout/cout.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/ptitcolon/cout/cout.component.ts ***!
    \**************************************************/

  /*! exports provided: CoutComponent */

  /***/
  function srcAppPtitcolonCoutCoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoutComponent", function () {
      return CoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CoutComponent =
    /*#__PURE__*/
    function () {
      function CoutComponent() {
        _classCallCheck(this, CoutComponent);
      }

      _createClass(CoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CoutComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CoutComponent.prototype, "cout", void 0);
    CoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/cout/cout.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cout.component.scss */
      "./src/app/ptitcolon/cout/cout.component.scss")).default]
    })], CoutComponent);
    /***/
  },

  /***/
  "./src/app/ptitcolon/culture/culture.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/ptitcolon/culture/culture.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtitcolonCultureCultureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0aXRjb2xvbi9jdWx0dXJlL2N1bHR1cmUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ptitcolon/culture/culture.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/ptitcolon/culture/culture.component.ts ***!
    \********************************************************/

  /*! exports provided: CultureComponent */

  /***/
  function srcAppPtitcolonCultureCultureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CultureComponent", function () {
      return CultureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CultureComponent =
    /*#__PURE__*/
    function () {
      function CultureComponent() {
        _classCallCheck(this, CultureComponent);
      }

      _createClass(CultureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CultureComponent;
    }();

    CultureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-culture',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./culture.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/culture/culture.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./culture.component.scss */
      "./src/app/ptitcolon/culture/culture.component.scss")).default]
    })], CultureComponent);
    /***/
  },

  /***/
  "./src/app/ptitcolon/domain/partie.ts":
  /*!********************************************!*\
    !*** ./src/app/ptitcolon/domain/partie.ts ***!
    \********************************************/

  /*! exports provided: random, Cout, Module, BotModule, PlayerModule, Culture, Materiaux, BotCulture, Elevage, BotElevage, Mine, BotMine, Peche, BotPeche, Partie */

  /***/
  function srcAppPtitcolonDomainPartieTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "random", function () {
      return random;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cout", function () {
      return Cout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Module", function () {
      return Module;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotModule", function () {
      return BotModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerModule", function () {
      return PlayerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Culture", function () {
      return Culture;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Materiaux", function () {
      return Materiaux;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotCulture", function () {
      return BotCulture;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Elevage", function () {
      return Elevage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotElevage", function () {
      return BotElevage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mine", function () {
      return Mine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotMine", function () {
      return BotMine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Peche", function () {
      return Peche;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotPeche", function () {
      return BotPeche;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Partie", function () {
      return Partie;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    var Cout =
    /*#__PURE__*/
    function () {
      function Cout() {
        var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Cout);

        this.elements = elements;
      }

      _createClass(Cout, [{
        key: "toString",
        value: function toString() {
          var _this = this;

          console.log("to string");
          var s = '';
          Object.keys(this.elements).forEach(function (e) {
            for (var i = 0; i < _this.elements[e]; i++) {
              s = s + e;
            }
          });
          return s;
        }
      }, {
        key: "add",
        value: function add(cout) {
          var _this2 = this;

          Object.keys(cout.elements).forEach(function (e) {
            if (_this2.elements[e]) {
              _this2.elements[e] += cout.elements[e];
            } else {
              _this2.elements[e] = cout.elements[e];
            }
          });
        }
      }, {
        key: "moreThan",
        value: function moreThan(cout) {
          var _this3 = this;

          var res = true;
          Object.keys(cout.elements).forEach(function (e) {
            return res = res && _this3.elements[e] && _this3.elements[e] >= cout.elements[e];
          });
          return !!res;
        }
      }, {
        key: "remove",
        value: function remove(cout) {
          var _this4 = this;

          Object.keys(cout.elements).forEach(function (e) {
            if (_this4.elements[e]) {
              _this4.elements[e] -= cout.elements[e];
            }
          });
        }
      }], [{
        key: "from",
        value: function from(s) {
          var elements = {};
          s.split('').forEach(function (c) {
            if (elements[c]) {
              elements[c] += 1;
            } else {
              elements[c] = 1;
            }
          });
          return new Cout(elements);
        }
      }]);

      return Cout;
    }();

    var Module = function Module() {
      _classCallCheck(this, Module);

      this.bot = false;
    };

    var BotModule =
    /*#__PURE__*/
    function (_Module) {
      _inherits(BotModule, _Module);

      function BotModule() {
        var _this5;

        _classCallCheck(this, BotModule);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(BotModule).apply(this, arguments));
        _this5.level = 1;
        _this5.bot = true;
        return _this5;
      }

      return BotModule;
    }(Module);

    var PlayerModule = function PlayerModule() {
      _classCallCheck(this, PlayerModule);

      this.stock = [];
      this.bot = false;
    };

    var Culture =
    /*#__PURE__*/
    function (_PlayerModule) {
      _inherits(Culture, _PlayerModule);

      function Culture() {
        var _this6;

        _classCallCheck(this, Culture);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Culture).apply(this, arguments));
        _this6.name = 'Culture';
        _this6.type = 'c';
        return _this6;
      }

      return Culture;
    }(PlayerModule);

    var Materiaux = {
      m: 'maïs',
      g: 'graines',
      l: 'laine',
      t: 'tissu',
      b: 'blé',
      a: 'arbre',
      w: 'bois',
      c: 'cheval',
      s: 'mouton',
      h: 'herbe',
      p: 'poisson',
      r: 'trésor',
      i: 'pierre',
      f: 'fer',
      _: 'rien'
    };

    var BotCulture =
    /*#__PURE__*/
    function (_BotModule) {
      _inherits(BotCulture, _BotModule);

      function BotCulture() {
        var _this7;

        _classCallCheck(this, BotCulture);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(BotCulture).apply(this, arguments));
        _this7.name = 'Bot Culture';
        _this7.type = 'bc';
        _this7.bot = true;
        _this7.upgradeTable = [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
        _this7.lootTable = [Cout.from(''), Cout.from(''), Cout.from('g'), Cout.from('h'), Cout.from('m'), Cout.from('w'), Cout.from('gh'), Cout.from('hm'), Cout.from('mw'), Cout.from('hw'), Cout.from('mw')];
        return _this7;
      }

      return BotCulture;
    }(BotModule);

    var Elevage =
    /*#__PURE__*/
    function (_PlayerModule2) {
      _inherits(Elevage, _PlayerModule2);

      function Elevage() {
        var _this8;

        _classCallCheck(this, Elevage);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Elevage).apply(this, arguments));
        _this8.name = 'Elevage';
        _this8.type = 'e';
        return _this8;
      }

      return Elevage;
    }(PlayerModule);

    var BotElevage =
    /*#__PURE__*/
    function (_BotModule2) {
      _inherits(BotElevage, _BotModule2);

      function BotElevage() {
        var _this9;

        _classCallCheck(this, BotElevage);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(BotElevage).apply(this, arguments));
        _this9.name = 'Bot Elevage';
        _this9.type = 'be';
        _this9.bot = true;
        _this9.upgradeTable = [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
        _this9.lootTable = [Cout.from(''), Cout.from(''), Cout.from('g'), Cout.from('h'), Cout.from('m'), Cout.from('w'), Cout.from('gh'), Cout.from('hm'), Cout.from('mw'), Cout.from('hw'), Cout.from('mw')];
        return _this9;
      }

      return BotElevage;
    }(BotModule);

    var Mine =
    /*#__PURE__*/
    function (_PlayerModule3) {
      _inherits(Mine, _PlayerModule3);

      function Mine() {
        var _this10;

        _classCallCheck(this, Mine);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Mine).apply(this, arguments));
        _this10.name = 'Mine';
        _this10.type = 'm';
        return _this10;
      }

      return Mine;
    }(PlayerModule);

    var BotMine =
    /*#__PURE__*/
    function (_BotModule3) {
      _inherits(BotMine, _BotModule3);

      function BotMine() {
        var _this11;

        _classCallCheck(this, BotMine);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(BotMine).apply(this, arguments));
        _this11.name = 'Bot Mine';
        _this11.type = 'bm';
        _this11.bot = true;
        _this11.upgradeTable = [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
        _this11.lootTable = [Cout.from(''), Cout.from(''), Cout.from('g'), Cout.from('h'), Cout.from('m'), Cout.from('w'), Cout.from('gh'), Cout.from('hm'), Cout.from('mw'), Cout.from('hw'), Cout.from('mw')];
        return _this11;
      }

      return BotMine;
    }(BotModule);

    var Peche =
    /*#__PURE__*/
    function (_PlayerModule4) {
      _inherits(Peche, _PlayerModule4);

      function Peche() {
        var _this12;

        _classCallCheck(this, Peche);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Peche).apply(this, arguments));
        _this12.name = 'Peche';
        _this12.type = 'p';
        _this12.nbDes = 3;
        _this12.des = [];
        _this12.relance = [];
        _this12.numRelance = 1;
        _this12.nbRelances = 1;
        return _this12;
      }

      _createClass(Peche, [{
        key: "lanceDes",
        value: function lanceDes() {
          this.des = [];
          this.relance = [];

          for (var i = 0; i < this.nbDes; i++) {
            this.des.push(random(1, 6));
            this.relance.push(false);
          }
        }
      }, {
        key: "relanceDes",
        value: function relanceDes() {
          for (var i = 0; i < this.nbDes; i++) {
            if (this.relance[i]) {
              this.des[i] = random(1, 6);
            }

            this.relance[i] = false;
          }
        }
      }, {
        key: "hasRelance",
        value: function hasRelance() {
          return this.numRelance < 2 + this.nbRelances;
        }
      }, {
        key: "toMatos",
        value: function toMatos(de) {
          switch (de) {
            case 1:
              return Cout.from("");

            case 2:
              return Cout.from("p");

            case 3:
              return Cout.from("pp");

            case 4:
              return Cout.from("ppp");

            case 5:
              return Cout.from("r");

            case 6:
              return Cout.from("b");
          }
        }
      }]);

      return Peche;
    }(PlayerModule);

    var BotPeche =
    /*#__PURE__*/
    function (_BotModule4) {
      _inherits(BotPeche, _BotModule4);

      function BotPeche() {
        var _this13;

        _classCallCheck(this, BotPeche);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(BotPeche).apply(this, arguments));
        _this13.name = 'Bot Peche';
        _this13.type = 'bp';
        _this13.bot = true;
        _this13.upgradeTable = [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
        _this13.lootTable = [Cout.from(''), Cout.from(''), Cout.from('p'), Cout.from('p'), Cout.from('pp'), Cout.from('r'), Cout.from('pp'), Cout.from('pp'), Cout.from('pr'), Cout.from('ppp'), Cout.from('ppr')];
        return _this13;
      }

      return BotPeche;
    }(BotModule);

    var Partie = function Partie() {
      var culture = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var elevage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var mine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var peche = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _classCallCheck(this, Partie);

      if (culture) {
        this.culture = new Culture();
      } else {
        this.culture = new BotCulture();
      }

      if (elevage) {
        this.elevage = new Elevage();
      } else {
        this.elevage = new BotElevage();
      }

      if (mine) {
        this.mine = new Mine();
      } else {
        this.mine = new BotMine();
      }

      if (peche) {
        this.peche = new Peche();
      } else {
        this.peche = new BotPeche();
      }
    };
    /***/

  },

  /***/
  "./src/app/ptitcolon/elevage/elevage.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/ptitcolon/elevage/elevage.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtitcolonElevageElevageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0aXRjb2xvbi9lbGV2YWdlL2VsZXZhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ptitcolon/elevage/elevage.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/ptitcolon/elevage/elevage.component.ts ***!
    \********************************************************/

  /*! exports provided: ElevageComponent */

  /***/
  function srcAppPtitcolonElevageElevageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElevageComponent", function () {
      return ElevageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ElevageComponent =
    /*#__PURE__*/
    function () {
      function ElevageComponent() {
        _classCallCheck(this, ElevageComponent);
      }

      _createClass(ElevageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ElevageComponent;
    }();

    ElevageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-elevage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./elevage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/elevage/elevage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./elevage.component.scss */
      "./src/app/ptitcolon/elevage/elevage.component.scss")).default]
    })], ElevageComponent);
    /***/
  },

  /***/
  "./src/app/ptitcolon/mine/mine.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/ptitcolon/mine/mine.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtitcolonMineMineComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0aXRjb2xvbi9taW5lL21pbmUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ptitcolon/mine/mine.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/ptitcolon/mine/mine.component.ts ***!
    \**************************************************/

  /*! exports provided: MineComponent */

  /***/
  function srcAppPtitcolonMineMineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MineComponent", function () {
      return MineComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MineComponent =
    /*#__PURE__*/
    function () {
      function MineComponent() {
        _classCallCheck(this, MineComponent);
      }

      _createClass(MineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MineComponent;
    }();

    MineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mine',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mine.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/mine/mine.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mine.component.scss */
      "./src/app/ptitcolon/mine/mine.component.scss")).default]
    })], MineComponent);
    /***/
  },

  /***/
  "./src/app/ptitcolon/partie/partie.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/ptitcolon/partie/partie.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtitcolonPartiePartieComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".module {\n  border: 1px solid black;\n  margin: 30px;\n  padding: 15px;\n  min-width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHRpdGNvbG9uL3BhcnRpZS9FOlxcZGV2ZWxvcHBlbWVudFxccHJvamV0c18yXFxjb2xvbnNfZ2l0aHViXFxjb2xvbnNcXGNvZGVcXG1lZXBsZXMvc3JjXFxhcHBcXHB0aXRjb2xvblxccGFydGllXFxwYXJ0aWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3B0aXRjb2xvbi9wYXJ0aWUvcGFydGllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3B0aXRjb2xvbi9wYXJ0aWUvcGFydGllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIHBhZGRpbmcgOiAxNXB4O1xyXG4gICAgbWluLXdpZHRoOiAxNSU7XHJcbn0iLCIubW9kdWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWluLXdpZHRoOiAxNSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ptitcolon/partie/partie.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ptitcolon/partie/partie.component.ts ***!
    \******************************************************/

  /*! exports provided: PartieComponent */

  /***/
  function srcAppPtitcolonPartiePartieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartieComponent", function () {
      return PartieComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ptitcolon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ptitcolon.service */
    "./src/app/ptitcolon/ptitcolon.service.ts");

    var PartieComponent =
    /*#__PURE__*/
    function () {
      function PartieComponent(ptitColonService) {
        _classCallCheck(this, PartieComponent);

        this.ptitColonService = ptitColonService;
      }

      _createClass(PartieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.ptitColonService.getChannel().subscribe(function (m) {
            console.log("ding");
            _this14.counter = m;
          });
        }
      }]);

      return PartieComponent;
    }();

    PartieComponent.ctorParameters = function () {
      return [{
        type: _ptitcolon_service__WEBPACK_IMPORTED_MODULE_2__["PtitColonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PartieComponent.prototype, "partie", void 0);
    PartieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-partie',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./partie.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/partie/partie.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./partie.component.scss */
      "./src/app/ptitcolon/partie/partie.component.scss")).default]
    })], PartieComponent);
    /***/
  },

  /***/
  "./src/app/ptitcolon/peche/peche.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/ptitcolon/peche/peche.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtitcolonPechePecheComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0aXRjb2xvbi9wZWNoZS9wZWNoZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ptitcolon/peche/peche.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ptitcolon/peche/peche.component.ts ***!
    \****************************************************/

  /*! exports provided: PecheComponent */

  /***/
  function srcAppPtitcolonPechePecheComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PecheComponent", function () {
      return PecheComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PecheComponent =
    /*#__PURE__*/
    function () {
      function PecheComponent() {
        _classCallCheck(this, PecheComponent);
      }

      _createClass(PecheComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.peche.lanceDes();
        }
      }]);

      return PecheComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PecheComponent.prototype, "peche", void 0);
    PecheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-peche',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./peche.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/peche/peche.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./peche.component.scss */
      "./src/app/ptitcolon/peche/peche.component.scss")).default]
    })], PecheComponent);
    /***/
  },

  /***/
  "./src/app/ptitcolon/ptitcolon.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/ptitcolon/ptitcolon.module.ts ***!
    \***********************************************/

  /*! exports provided: PtitcolonModule */

  /***/
  function srcAppPtitcolonPtitcolonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PtitcolonModule", function () {
      return PtitcolonModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./start/start.component */
    "./src/app/ptitcolon/start/start.component.ts");
    /* harmony import */


    var _partie_partie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./partie/partie.component */
    "./src/app/ptitcolon/partie/partie.component.ts");
    /* harmony import */


    var _elevage_elevage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./elevage/elevage.component */
    "./src/app/ptitcolon/elevage/elevage.component.ts");
    /* harmony import */


    var _culture_culture_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./culture/culture.component */
    "./src/app/ptitcolon/culture/culture.component.ts");
    /* harmony import */


    var _mine_mine_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mine/mine.component */
    "./src/app/ptitcolon/mine/mine.component.ts");
    /* harmony import */


    var _peche_peche_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./peche/peche.component */
    "./src/app/ptitcolon/peche/peche.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _bot_bot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./bot/bot.component */
    "./src/app/ptitcolon/bot/bot.component.ts");
    /* harmony import */


    var _cout_cout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./cout/cout.component */
    "./src/app/ptitcolon/cout/cout.component.ts");

    var ROUTES = [{
      path: '',
      component: _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"]
    }];

    var PtitcolonModule = function PtitcolonModule() {
      _classCallCheck(this, PtitcolonModule);
    };

    PtitcolonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _partie_partie_component__WEBPACK_IMPORTED_MODULE_4__["PartieComponent"], _elevage_elevage_component__WEBPACK_IMPORTED_MODULE_5__["ElevageComponent"], _culture_culture_component__WEBPACK_IMPORTED_MODULE_6__["CultureComponent"], _mine_mine_component__WEBPACK_IMPORTED_MODULE_7__["MineComponent"], _peche_peche_component__WEBPACK_IMPORTED_MODULE_8__["PecheComponent"], _bot_bot_component__WEBPACK_IMPORTED_MODULE_11__["BotComponent"], _cout_cout_component__WEBPACK_IMPORTED_MODULE_12__["CoutComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(ROUTES)]
    })], PtitcolonModule);
    /***/
  },

  /***/
  "./src/app/ptitcolon/ptitcolon.service.ts":
  /*!************************************************!*\
    !*** ./src/app/ptitcolon/ptitcolon.service.ts ***!
    \************************************************/

  /*! exports provided: PtitColonService */

  /***/
  function srcAppPtitcolonPtitcolonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PtitColonService", function () {
      return PtitColonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PtitColonService =
    /*#__PURE__*/
    function () {
      function PtitColonService() {
        _classCallCheck(this, PtitColonService);

        this.channel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.counter = 0;
      }

      _createClass(PtitColonService, [{
        key: "sendMessage",
        value: function sendMessage(message) {
          console.log("send mesg", message);
          this.handleMessage();
        }
      }, {
        key: "getChannel",
        value: function getChannel() {
          return this.channel.asObservable();
        }
      }, {
        key: "handleMessage",
        value: function handleMessage() {
          this.counter++;

          if (this.counter % 3 === 0) {
            this.channel.next("" + this.counter);
          }
        }
      }]);

      return PtitColonService;
    }();

    PtitColonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PtitColonService);
    /***/
  },

  /***/
  "./src/app/ptitcolon/start/start.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/ptitcolon/start/start.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPtitcolonStartStartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0aXRjb2xvbi9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ptitcolon/start/start.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ptitcolon/start/start.component.ts ***!
    \****************************************************/

  /*! exports provided: StartComponent */

  /***/
  function srcAppPtitcolonStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _domain_partie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../domain/partie */
    "./src/app/ptitcolon/domain/partie.ts");

    var StartComponent =
    /*#__PURE__*/
    function () {
      function StartComponent() {
        _classCallCheck(this, StartComponent);

        this.culture = false;
        this.elevage = false;
        this.mine = false;
        this.peche = true;
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.state = 'INIT';
        }
      }, {
        key: "launch",
        value: function launch() {
          this.partie = new _domain_partie__WEBPACK_IMPORTED_MODULE_2__["Partie"](this.culture, this.elevage, this.mine, this.peche);
        }
      }]);

      return StartComponent;
    }();

    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ptitcolon/start/start.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./start.component.scss */
      "./src/app/ptitcolon/start/start.component.scss")).default]
    })], StartComponent);
    /***/
  }
}]);
//# sourceMappingURL=ptitcolon-ptitcolon-module-es5.js.map