(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meeples-meeples-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/cellule/cellule.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/cellule/cellule.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"select()\" class=\"cellule\" [ngClass]=\"{'selected': cellule.selected, \r\n    'invisible': !cellule.visible\r\n    }\">\r\n    {{cellule.celluleType.toString()}}\r\n    <span *ngIf=\"cellule.visible\">\r\n        {{cellule.contenu}}\r\n        {{cellule.dormeur?.symbole}}\r\n    </span>\r\n    <span *ngIf=\"cellule.meeplesPresents\">\r\n        <span *ngFor=\"let meeple of cellule.meeplesPresents\"\r\n            class=\"meeple\"\r\n            [ngClass]=\"{'selected': meeple.selected}\"\r\n            (click)=\"selectMeeple($event, meeple)\"\r\n            >{{meeple.symbole}}?</span>\r\n    </span>\r\n    <span *ngIf=\"!cellule.visible\">XXXX</span>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/meeple-infos/meeple-infos.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/meeple-infos/meeple-infos.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span [ngStyle]=\"{'border': '2px solid ' + meeple.color1, 'padding':'1.5px 0', 'border-radius':'10px'}\">\r\n    <span [ngStyle]=\"{'border': '2px solid ' + meeple.color2, 'padding': '0 3px', 'border-radius':'8px'}\">\r\n        {{meeple.nom}} ({{meeple.symbole}})\r\n    </span>\r\n</span>\r\n<div>sante: {{meeple.sante}}</div>\r\n<div>esperance de vie : {{meeple.esperance}}</div>\r\n<div>status: {{meeple.status}}</div>\r\n<div>déplacements: {{meeple.deplacement}}/{{meeple.deplacementMax}}</div>\r\n<div>pts d'action {{meeple.actionPoints}}</div>\r\n<button (click)=\"setOrdre($event, 'couche')\">Définir L</button>\r\n\r\n<div>\r\n    <div>{{meeple.position.celluleType}}</div>\r\n    <div>Actions possibles</div>\r\n    <div *ngFor=\"let action of actions\">\r\n        <div *ngIf=\"action.type_action === TYPE_ACTION.CONSTRUCTION\">\r\n            <button (click)=\"doAction(action)\">{{action.description}}</button>\r\n        </div>\r\n        <div *ngIf=\"action.type_action === TYPE_ACTION.EXPLORATION\">\r\n            <button (click)=\"doAction(action)\">{{action.description}}</button>\r\n        </div>\r\n        <div *ngIf=\"action.type_action === TYPE_ACTION.RECOLTE\">\r\n            <button (click)=\"doAction(action)\">{{action.description}}</button>\r\n        </div>\r\n        <div *ngIf=\"action.type_action === TYPE_ACTION.TRAVAIL\">\r\n            <button (click)=\"doAction(action)\">{{action.description}}</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/meeple/meeple.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/meeple/meeple.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span\n[ngStyle]=\"{'border': '2px solid ' + meeple.color1, 'padding':'1.5px 0', 'border-radius':'10px'}\">\n<span\n    [ngStyle]=\"{'border': '2px solid ' + meeple.color2, 'padding': '0 3px', 'border-radius':'8px'}\">\n    {{meeple.nom}} ({{meeple.symbole}})\n</span>\n</span>\n<span>sante: {{meeple.sante}}</span>\n<span>esperance de vie : {{meeple.esperance}}</span>\n<span>status: {{meeple.status}}</span>\n<button (click)=\"setOrdre($event, 'couche')\">Définir L</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/partie/partie.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/partie/partie.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{getTitle()}}\r\n\r\n<app-terrain [terrain]=\"partie.terrain\"></app-terrain>\r\n\r\n<div class=\"selection\" *ngIf=\"selectedElement\">\r\n    {{selectedElement.type}}\r\n    <div *ngIf=\"selectedElement.batiment\">\r\n        <div *ngIf=\"selectedElement.batiment.typeBatiment.nom === 'Robot'\">\r\n            <h4>Robot</h4>\r\n            <button>Décollage</button>\r\n        </div>\r\n        <div *ngIf=\"selectedElement.batiment.typeBatiment.nom !== 'Robot'\">\r\n            <h4>Batiment</h4>\r\n            {{selectedBatiment.typeBatiment.nom}}\r\n            <button> ???</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"selectedElement.type == TargetType.CELLULE\">\r\n        <h4>C</h4>\r\n        {{selectedElement.cellule.x}} {{selectedElement.cellule.y}} {{selectedElement.cellule.typeCellule}}\r\n        <span *ngIf=\"selectedElement.cellule.actionMeeples\">\r\n            <div *ngFor=\"let meeple of selectedElement.cellule.actionMeeples.meeples\">\r\n                {{meeple.nom}} - Action: {{selectedElement.cellule.carte}} {{selectedElement.cellule.plan}}\r\n            </div>\r\n        </span>\r\n    </div>\r\n\r\n    <div *ngIf=\"selectedElement.type === TargetType.MEEPLE\">\r\n        <app-meeple-infos [meeple]=\"selectedElement.meeple\"></app-meeple-infos>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"logs\">\r\n    <div *ngFor=\"let msg of logs\">{{msg}}</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/start/start.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/start/start.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"partie\">\r\n    <app-partie [partie]=\"partie\"></app-partie>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/terrain/terrain.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/terrain/terrain.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"terrain-container \">\r\n    <table class=\"carte\">\r\n        <tr *ngFor=\"let ligne of terrain.cases\">\r\n            <td *ngFor=\"let cellule of ligne\">\r\n                <app-cellule [cellule]=\"cellule\"></app-cellule>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n<!--<div class=\"terrain\">\r\n    <div class=\"terrain-container\">\r\n        <div class=\"carte\">\r\n            <div *ngFor=\"let ligne of terrain.cases\" class=\"ligne\">\r\n                <app-cellule [cellule]=\"cellule\" *ngFor=\"let cellule of ligne\"></app-cellule>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n");

/***/ }),

/***/ "./src/app/meeples/cellule/cellule.component.scss":
/*!********************************************************!*\
  !*** ./src/app/meeples/cellule/cellule.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cellule {\n  width: 30px;\n  height: 20px;\n  background-color: lightgray;\n}\n.cellule.invisible {\n  background-color: darkgray;\n}\n.cellule.selected {\n  border: 1px solid darkgray;\n}\n.cellule.ocean {\n  background-color: #dfdfff;\n}\n.cellule.foret {\n  background-color: #b2c2aa;\n}\n.cellule.plaine {\n  background-color: #dadab6;\n}\n.meeple {\n  border: 1px solid white;\n  cursor: col-resize;\n  background-color: lightgray;\n}\n.meeple.selected {\n  border: 1px solid darkgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVlcGxlcy9jZWxsdWxlL0U6XFxkZXZlbG9wcGVtZW50XFxwcm9qZXRzXzJcXGNvbG9uc19naXRodWJcXGNvbG9uc1xcY29kZVxcbWVlcGxlcy9zcmNcXGFwcFxcbWVlcGxlc1xcY2VsbHVsZVxcY2VsbHVsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVlcGxlcy9jZWxsdWxlL2NlbGx1bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDQ0o7QURBSTtFQUNJLDBCQUFBO0FDRVI7QURBSTtFQUNJLDBCQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0FDRVI7QURFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NKO0FEQUk7RUFDSSwwQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvbWVlcGxlcy9jZWxsdWxlL2NlbGx1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsbHVsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICYuaW52aXNpYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxuICAgIH1cclxuICAgICYuc2VsZWN0ZWR7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XHJcbiAgICB9XHJcbiAgICAmLm9jZWFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjMsIDI1NSk7XHJcbiAgICB9XHJcbiAgICAmLmZvcmV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc4LCAxOTQsIDE3MCk7XHJcbiAgICB9XHJcbiAgICAmLnBsYWluZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAxODIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVlcGxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgJi5zZWxlY3RlZHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuICAgIH1cclxufSIsIi5jZWxsdWxlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuLmNlbGx1bGUuaW52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG59XG4uY2VsbHVsZS5zZWxlY3RlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xufVxuLmNlbGx1bGUub2NlYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmZmO1xufVxuLmNlbGx1bGUuZm9yZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJjMmFhO1xufVxuLmNlbGx1bGUucGxhaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFiNjtcbn1cblxuLm1lZXBsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5tZWVwbGUuc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/meeples/cellule/cellule.component.ts":
/*!******************************************************!*\
  !*** ./src/app/meeples/cellule/cellule.component.ts ***!
  \******************************************************/
/*! exports provided: CelluleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelluleComponent", function() { return CelluleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _partie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partie.service */ "./src/app/meeples/partie.service.ts");



let CelluleComponent = class CelluleComponent {
    constructor(partieService) {
        this.partieService = partieService;
    }
    ngOnChanges(changes) {
        console.log("changes sur la cellule " + this.cellule.x + " " + this.cellule.y + " " + changes);
    }
    ngOnInit() {
        console.log("on init", this.cellule);
    }
    select() {
        console.log("select C");
        this.partieService.selectCellule(this.cellule);
    }
    selectMeeple(event, meeple) {
        console.log("select M");
        event.stopPropagation();
        this.partieService.selectMeeple(meeple);
    }
};
CelluleComponent.ctorParameters = () => [
    { type: _partie_service__WEBPACK_IMPORTED_MODULE_2__["MeeplePartieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CelluleComponent.prototype, "cellule", void 0);
CelluleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cellule',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cellule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/cellule/cellule.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cellule.component.scss */ "./src/app/meeples/cellule/cellule.component.scss")).default]
    })
], CelluleComponent);



/***/ }),

/***/ "./src/app/meeples/domain/batiment.ts":
/*!********************************************!*\
  !*** ./src/app/meeples/domain/batiment.ts ***!
  \********************************************/
/*! exports provided: BatimentSprite, TYPE_BATIMENT, ProtoBatiment, PROTOS_BATIMENTS, Batiment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatimentSprite", function() { return BatimentSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_BATIMENT", function() { return TYPE_BATIMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtoBatiment", function() { return ProtoBatiment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROTOS_BATIMENTS", function() { return PROTOS_BATIMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Batiment", function() { return Batiment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cout */ "./src/app/meeples/domain/cout.ts");


class BatimentSprite {
    constructor(x, y, sizeX, sizeY) {
        this.posX = x;
        this.posY = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
}
var TYPE_BATIMENT;
(function (TYPE_BATIMENT) {
    TYPE_BATIMENT[TYPE_BATIMENT["ROBOT"] = 0] = "ROBOT";
    TYPE_BATIMENT[TYPE_BATIMENT["FEU_DE_CAMP"] = 1] = "FEU_DE_CAMP";
    TYPE_BATIMENT[TYPE_BATIMENT["PUITS"] = 2] = "PUITS";
    TYPE_BATIMENT[TYPE_BATIMENT["FOYER"] = 3] = "FOYER";
    TYPE_BATIMENT[TYPE_BATIMENT["HUTTE"] = 4] = "HUTTE";
    TYPE_BATIMENT[TYPE_BATIMENT["CABANE"] = 5] = "CABANE";
    TYPE_BATIMENT[TYPE_BATIMENT["LOGE"] = 6] = "LOGE";
    TYPE_BATIMENT[TYPE_BATIMENT["MINE_ARGILE"] = 7] = "MINE_ARGILE";
    TYPE_BATIMENT[TYPE_BATIMENT["CARRIERE_PIERRE"] = 8] = "CARRIERE_PIERRE";
    TYPE_BATIMENT[TYPE_BATIMENT["ATELIER"] = 9] = "ATELIER";
    TYPE_BATIMENT[TYPE_BATIMENT["MAISON"] = 10] = "MAISON";
})(TYPE_BATIMENT || (TYPE_BATIMENT = {}));
class ProtoBatiment {
    constructor(nom, description, cout) {
        this.nom = nom;
        this.description = description;
        this.cout = cout;
        return this;
    }
    withSpriteCoords(a, b, c, d) {
        this.sprite = new BatimentSprite(a, b, c, d);
        return this;
    }
}
const PROTOS_BATIMENTS = {
    ROBOT: new ProtoBatiment('Robot', 'Votre robot', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]()).withSpriteCoords(49, 1, 2, 2),
    FEU_DE_CAMP: new ProtoBatiment('Feu de camp', 'Petit feu pour se chauffer et cuisiner', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 })),
    PUITS: new ProtoBatiment('Puits', 'Trou dans la terre', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]()),
    FOYER: new ProtoBatiment('Foyer', 'Feu de camp amélioré', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 })),
    HUTTE: new ProtoBatiment('Hutte', 'Abri pour dormir', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 })).withSpriteCoords(72, 11, 3, 4),
    CABANE: new ProtoBatiment('Cabane', 'Abri', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 })),
    LOGE: new ProtoBatiment('Loge', 'Abri', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 })),
    MINE_ARGILE: new ProtoBatiment('Cabane', 'Abri', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 })),
    CARRIERE_PIERRE: new ProtoBatiment('Cabane', 'Abri', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 })),
    ATELIER: new ProtoBatiment('Aterlier', 'Abri', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 })),
    MAISON: new ProtoBatiment('Cabane', 'Abri', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 })),
    SIDO: new ProtoBatiment('Sido', 'Maison avec toit rouge et murs blancs', new _cout__WEBPACK_IMPORTED_MODULE_1__["Cout"]({ P: 4, B: 2 }))
};
class Batiment {
    constructor(cellule, proto, infos) {
        this.cellule = cellule;
        this.proto = proto;
    }
}


/***/ }),

/***/ "./src/app/meeples/domain/cellule.ts":
/*!*******************************************!*\
  !*** ./src/app/meeples/domain/cellule.ts ***!
  \*******************************************/
/*! exports provided: CelluleType, TYPE_ACTION, ActionMeeples, Cellule, Terrain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelluleType", function() { return CelluleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_ACTION", function() { return TYPE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMeeples", function() { return ActionMeeples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cellule", function() { return Cellule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terrain", function() { return Terrain; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CelluleType;
(function (CelluleType) {
    CelluleType[CelluleType["OCEAN"] = 0] = "OCEAN";
    CelluleType[CelluleType["MER"] = 1] = "MER";
    CelluleType[CelluleType["SABLE"] = 2] = "SABLE";
    CelluleType[CelluleType["TERRE"] = 3] = "TERRE";
    CelluleType[CelluleType["PIERRE"] = 4] = "PIERRE";
    CelluleType[CelluleType["LAVE"] = 5] = "LAVE";
    CelluleType[CelluleType["EAU"] = 6] = "EAU";
    CelluleType[CelluleType["FORET"] = 7] = "FORET";
    CelluleType[CelluleType["PLAINE"] = 8] = "PLAINE";
})(CelluleType || (CelluleType = {}));
var TYPE_ACTION;
(function (TYPE_ACTION) {
    TYPE_ACTION[TYPE_ACTION["TRAVAIL"] = 0] = "TRAVAIL";
    TYPE_ACTION[TYPE_ACTION["RECOLTE"] = 1] = "RECOLTE";
    TYPE_ACTION[TYPE_ACTION["EXPLORATION"] = 2] = "EXPLORATION";
    TYPE_ACTION[TYPE_ACTION["CHASSE"] = 3] = "CHASSE";
    TYPE_ACTION[TYPE_ACTION["LOISIR"] = 4] = "LOISIR";
    TYPE_ACTION[TYPE_ACTION["CONSTRUCTION"] = 5] = "CONSTRUCTION";
})(TYPE_ACTION || (TYPE_ACTION = {}));
class ActionMeeples {
    constructor(cellule, carte, plan, meeples = []) {
        this.cellule = cellule;
        this.carte = carte;
        this.plan = plan;
        this.meeples = meeples;
    }
}
class Cellule {
    constructor(x, y, celluleType) {
        this.x = x;
        this.y = y;
        this.celluleType = celluleType;
        this.selected = false;
        this.contenu = [];
        this.meeplesPresents = [];
        this.visible = false;
        this.dormeur = undefined;
        this.setCelluleType(celluleType);
        this.contenu = [];
    }
    removeMeeplePresent(meeple) {
        this.meeplesPresents = this.meeplesPresents.filter(m => m != meeple);
    }
    setCelluleType(celluleType) {
        this.celluleType = celluleType;
        switch (celluleType) {
            case CelluleType.EAU:
                this.bgX = 23;
                this.bgY = 29;
                this.bgColor = '#EEEEEE';
                break;
            case CelluleType.MER:
                this.bgX = 23;
                this.bgY = 29;
                break;
            case CelluleType.PIERRE:
                this.bgX = 30;
                this.bgY = 24;
                break;
            case CelluleType.SABLE:
                this.bgX = 5;
                this.bgY = 1;
                break;
            case CelluleType.TERRE:
                this.bgX = 4;
                this.bgY = 0;
                break;
            case CelluleType.FORET:
                const a = Math.floor(Math.random() * 4);
                if (a === 0) {
                    this.bgX = 19;
                    this.bgY = 19;
                }
                else if (a === 1) {
                    this.bgX = 20;
                    this.bgY = 19;
                }
                else if (a === 2) {
                    this.bgX = 21;
                    this.bgY = 19;
                }
                else {
                    this.bgX = 22;
                    this.bgY = 19;
                }
                break;
            case CelluleType.PLAINE:
                this.bgX = 12;
                this.bgY = 0;
                break;
        }
    }
    addObject(objet) {
        this.contenu.push(objet);
    }
}
class Terrain {
    constructor(tailleX, tailleY) {
        this.tailleX = tailleX;
        this.tailleY = tailleY;
        this.cases = [];
        this.cases = [];
        for (let i = 0; i < tailleY; i++) {
            const ligne = [];
            this.cases.push(ligne);
            for (let j = 0; j < tailleX; j++) {
                ligne.push(new Cellule(j, i, CelluleType.TERRE));
            }
        }
    }
    getCellule(x, y) {
        return this.cases[(y + this.tailleY) % this.tailleY][(x + this.tailleX) % this.tailleX];
    }
    setCellule(x, y, celluleType) {
        this.getCellule(x, y).celluleType = celluleType;
    }
    getVoisin(cellule, diffX, diffY) {
        return this.getCellule(cellule.x + diffX, cellule.y + diffY);
    }
    setVisible(cellule) {
        cellule.visible = true;
    }
    setVisibleAvecVoisins(cellule) {
        this.setVisible(cellule);
        this.setVisible(this.getVoisin(cellule, 1, 0));
        this.setVisible(this.getVoisin(cellule, -1, 0));
        this.setVisible(this.getVoisin(cellule, 0, 1));
        this.setVisible(this.getVoisin(cellule, 0, -1));
    }
}


/***/ }),

/***/ "./src/app/meeples/domain/cout.ts":
/*!****************************************!*\
  !*** ./src/app/meeples/domain/cout.ts ***!
  \****************************************/
/*! exports provided: Materiaux, MATERIAU, Cout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Materiaux", function() { return Materiaux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAU", function() { return MATERIAU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cout", function() { return Cout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Materiaux = {
    e: 'eau',
    b: 'bois',
    a: 'argile',
    i: 'minerai de fer',
    f: 'fer',
    p: 'planche',
    v: 'viande',
    o: 'poisson',
    r: 'pierre',
    h: 'herbe',
    c: 'corde'
    /*m: 'maïs',    g: 'graines',    l: 'laine',    t: 'tissu',
    b: 'blé',    a: 'arbre',w: 'bois',    c: 'cheval',s: 'mouton',    h: 'herbe',    r: 'trésor',
        f: 'fer',
    _: 'rien'*/
};
const MATERIAU = {
    BOIS: 'w', TISSU: 't', EAU: 'e', ARGILE: 'a', MINERAI_FER: 'i', FER: 'f', PLANCHE: 'p', VIANDE: 'v',
    POISSON: 'o', PIERRE: 'r', CORDE: 'c', HERBE: 'h'
};
class Cout {
    constructor(elements = {}) {
        this.elements = elements;
    }
    static from(s) {
        const elements = {};
        s.split('').forEach(c => {
            if (elements[c]) {
                elements[c] += 1;
            }
            else {
                elements[c] = 1;
            }
        });
        return new Cout(elements);
    }
    add(cout) {
        Object.keys(cout.elements).forEach(e => {
            if (this.elements[e]) {
                this.elements[e] += cout.elements[e];
            }
            else {
                this.elements[e] = cout.elements[e];
            }
        });
    }
    moreThan(cout) {
        let res = true;
        Object.keys(cout.elements).forEach(e => res = res && this.elements[e] && this.elements[e] > cout.elements[e]);
        return res;
    }
    remove(cout) {
        Object.keys(cout.elements).forEach(e => {
            if (this.elements[e]) {
                this.elements[e] -= cout.elements[e];
            }
        });
    }
}


/***/ }),

/***/ "./src/app/meeples/domain/hexaTerrain.ts":
/*!***********************************************!*\
  !*** ./src/app/meeples/domain/hexaTerrain.ts ***!
  \***********************************************/
/*! exports provided: HexaCellule, HexaTerrain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexaCellule", function() { return HexaCellule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexaTerrain", function() { return HexaTerrain; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cellule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cellule */ "./src/app/meeples/domain/cellule.ts");


class HexaCellule extends _cellule__WEBPACK_IMPORTED_MODULE_1__["Cellule"] {
    constructor(x, y, type) {
        super(x, y, type);
        this.hx = x;
        this.hy = Math.floor(x - y / 2);
        this.hz = -this.hx - this.hy;
    }
}
class HexaTerrain {
    constructor(tailleX, tailleY) {
        this.tailleX = tailleX;
        this.tailleY = tailleY;
        this.cases = [];
        this.cases = [];
        for (let i = 0; i < tailleY; i++) {
            const ligne = [];
            this.cases.push(ligne);
            for (let j = 0; j < tailleX; j++) {
                ligne.push(new HexaCellule(j, i, _cellule__WEBPACK_IMPORTED_MODULE_1__["CelluleType"].TERRE));
            }
        }
    }
    getCellule(x, y) {
        return this.cases[(y + this.tailleY) % this.tailleY][(x + this.tailleX) % this.tailleX];
    }
    setCellule(x, y, celluleType) {
        this.getCellule(x, y).celluleType = celluleType;
    }
    getVoisin(cellule, diffX, diffY) {
        return this.getCellule(cellule.x + diffX, cellule.y + diffY);
    }
    getDistance(cellule1, cellule2) {
        return Math.abs(cellule1.x - cellule2.x) + Math.abs(cellule1.y - cellule2.y);
    }
    getVoisins(cellule, distanceMax) {
        const voisins = [];
        for (let ligne of this.cases) {
            for (let cell of ligne) {
                let distance = this.getDistance(cell, cellule);
                if (distance > 0 && distance <= distanceMax) {
                    voisins.push(cell);
                }
            }
        }
        return voisins;
    }
    setVisible(cellule) {
        cellule.visible = true;
    }
    setVisibleAvecVoisins(cellule) {
        this.setVisible(cellule);
        this.setVisible(this.getVoisin(cellule, 1, 0));
        this.setVisible(this.getVoisin(cellule, -1, 0));
        this.setVisible(this.getVoisin(cellule, 0, 1));
        this.setVisible(this.getVoisin(cellule, 0, -1));
    }
}


/***/ }),

/***/ "./src/app/meeples/domain/meeple.ts":
/*!******************************************!*\
  !*** ./src/app/meeples/domain/meeple.ts ***!
  \******************************************/
/*! exports provided: Trait, TRAIT, traits, Meeple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trait", function() { return Trait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAIT", function() { return TRAIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traits", function() { return traits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meeple", function() { return Meeple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Trait {
    constructor(nom, description) {
        this.nom = nom;
        this.description = description;
    }
}
var TRAIT;
(function (TRAIT) {
    TRAIT[TRAIT["RONFLEUR"] = 0] = "RONFLEUR";
    TRAIT[TRAIT["GROS_MANGEUR"] = 1] = "GROS_MANGEUR";
    TRAIT[TRAIT["PETIT_MANGEUR"] = 2] = "PETIT_MANGEUR";
    TRAIT[TRAIT["GERMOPHOBE"] = 3] = "GERMOPHOBE";
})(TRAIT || (TRAIT = {}));
const traits = {
    RONFLEUR: new Trait('Ronfleur', 'Gêne les gens dormant dans la même pièce ou à proximité'),
    GROS_MANGEUR: new Trait('Gros mangeur', 'A besoin de plus de nourriture pour être rassasié'),
    PETIT_MANGEUR: new Trait('Petit mangeur', 'A besoin de moins de nourriture pour être rassasié'),
    GERMOPHOBE: new Trait('Germophobe', 'Refuse tout contact avec des malades ou blessés'),
    PACIFISTE: new Trait('Pacifiste', 'Déteste la violence'),
    JOVIAL: new Trait('Jovial', "S'entend facilement avec les autres"),
    MEDISANT: new Trait('Médisant', 'Se fâche facilement avec les autres'),
    JALOUX: new Trait('Jaloux', 'Est susceptible aux différences de traitement'),
    INTERIEUR: new Trait('Intérieur', "Préfère travailler à l'intérieur. +1 joie"),
    EXTERIEUR: new Trait('Extérieur', "Préfère travailler à l'extérieur. +1 joie"),
    NUL: new Trait('', '')
};
class Meeple {
    constructor(id, symbole, nom, naissance) {
        this.id = id;
        this.symbole = symbole;
        this.nom = nom;
        this.naissance = naissance;
        this.selected = false;
        this.traits = [];
        this.histoire = [];
        this.actions = 2;
        this.deplacementMax = 3;
        this.deplacement = 0;
    }
    aTrait(trait) {
        return this.traits.indexOf(trait) > -1;
    }
    setPosition(cellule) {
        if (cellule != this.position) {
            this.position.removeMeeplePresent(this);
            cellule.meeplesPresents.push(this);
            this.position = cellule;
        }
    }
    ajouteHistoire() {
        this.histoire.unshift({});
    }
}


/***/ }),

/***/ "./src/app/meeples/domain/message.ts":
/*!*******************************************!*\
  !*** ./src/app/meeples/domain/message.ts ***!
  \*******************************************/
/*! exports provided: MessageType, TargetType, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetType", function() { return TargetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MessageType;
(function (MessageType) {
    MessageType[MessageType["ACTION"] = 0] = "ACTION";
    MessageType[MessageType["LOG"] = 1] = "LOG";
    MessageType[MessageType["SELECT"] = 2] = "SELECT";
    MessageType[MessageType["MOVE"] = 3] = "MOVE";
})(MessageType || (MessageType = {}));
var TargetType;
(function (TargetType) {
    TargetType[TargetType["NONE"] = 0] = "NONE";
    TargetType[TargetType["MEEPLE"] = 1] = "MEEPLE";
    TargetType[TargetType["CELLULE"] = 2] = "CELLULE";
})(TargetType || (TargetType = {}));
class Message {
    constructor(messageType, 
    // public name: string, 
    // public targetType: TargetType, 
    target) {
        this.messageType = messageType;
        this.target = target;
    }
}


/***/ }),

/***/ "./src/app/meeples/domain/partie.ts":
/*!******************************************!*\
  !*** ./src/app/meeples/domain/partie.ts ***!
  \******************************************/
/*! exports provided: Element, SelectedElement, Carte, CARTES, COLONIE_STATUS, Partie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedElement", function() { return SelectedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carte", function() { return Carte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARTES", function() { return CARTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLONIE_STATUS", function() { return COLONIE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partie", function() { return Partie; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _meeple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeple */ "./src/app/meeples/domain/meeple.ts");
/* harmony import */ var _hexaTerrain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hexaTerrain */ "./src/app/meeples/domain/hexaTerrain.ts");
/* harmony import */ var _batiment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batiment */ "./src/app/meeples/domain/batiment.ts");
/* harmony import */ var _cellule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cellule */ "./src/app/meeples/domain/cellule.ts");
/* harmony import */ var src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils.functions */ "./src/app/utils.functions.ts");
/* harmony import */ var src_app_meeples_domain_cout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/meeples/domain/cout */ "./src/app/meeples/domain/cout.ts");







class Element {
    constructor(nom, description) {
        this.nom = nom;
        this.description = description;
    }
}
class SelectedElement {
}
class Carte extends Element {
    constructor(code, cout, nom, description) {
        super(nom, description);
        this.code = code;
        this.cout = cout;
    }
}
const CARTES = [];
function addCARTE(carte) {
    CARTES[carte.code] = carte;
}
addCARTE(new Carte('rec', '', 'recolte', ''));
addCARTE(new Carte('rech', '', 'recherche', ''));
addCARTE(new Carte('def', '', 'defense', ''));
addCARTE(new Carte('hunt', '', 'chasse', ''));
addCARTE(new Carte('expl', '', 'exploration', ''));
addCARTE(new Carte('cstr', '', 'construction', ''));
addCARTE(new Carte('eau', '2', 'eau', "fournit 10 rations d'eau"));
addCARTE(new Carte('eau 2', '2', 'eau niveau 2', "fournit 30 rations d'eau"));
addCARTE(new Carte('cstr 2', '', 'construction avancée', ''));
addCARTE(new Carte('chal', '', 'chaleur', ''));
addCARTE(new Carte('heal', '', 'soin mineur', ''));
addCARTE(new Carte('heal 2', '', 'soin majeur', ''));
addCARTE(new Carte('def', '', 'defense', ''));
addCARTE(new Carte('rem', '', 'remove', ''));
var COLONIE_STATUS;
(function (COLONIE_STATUS) {
    // les colons savent qu'il faut endurer
    COLONIE_STATUS[COLONIE_STATUS["CONCILIANT"] = 0] = "CONCILIANT";
    // les colons sont un peu plus couineurs
    COLONIE_STATUS[COLONIE_STATUS["NORMAL"] = 1] = "NORMAL";
    // les colons exigent de voir votre manager
    COLONIE_STATUS[COLONIE_STATUS["EXIGEANT"] = 2] = "EXIGEANT";
})(COLONIE_STATUS || (COLONIE_STATUS = {}));
class Partie {
    constructor() {
        this.status = COLONIE_STATUS.CONCILIANT;
        this.logs = [];
        this.reserve = {};
        this.meeples = [];
        this.batiments = [];
        this.plansDisponibles = [];
        this.actionsMeeples = [];
        this.dateDemarrage = Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(100, 200);
        this.generalId = 1;
        this.meepleSyllabes = ['ga', 'fur', 'gol', 'bo', 'ber', 'dil', 'ne', 'zu', 'ra', 'meu', 'mul', 'ta', 'ni'];
        this.buildTerrain();
        const c = this.terrain.getCellule(7, 4);
        this.addBatiment(c, _batiment__WEBPACK_IMPORTED_MODULE_3__["PROTOS_BATIMENTS"].ROBOT);
        c.visible = true;
        this.terrain.getVoisins(c, 2).forEach(c => c.visible = true);
        this.generateMeeples();
        this.initRobot();
        this.initReserve();
        this.initConstructionsPossibles();
        this.log('Init fini');
    }
    initConstructionsPossibles() {
        this.plansDisponibles.push(_batiment__WEBPACK_IMPORTED_MODULE_3__["PROTOS_BATIMENTS"].HUTTE, _batiment__WEBPACK_IMPORTED_MODULE_3__["PROTOS_BATIMENTS"].FEU_DE_CAMP, _batiment__WEBPACK_IMPORTED_MODULE_3__["PROTOS_BATIMENTS"].MINE_ARGILE);
    }
    addBatiment(cellule, protoBatiment) {
        const batiment = new _batiment__WEBPACK_IMPORTED_MODULE_3__["Batiment"](cellule, protoBatiment, []);
        this.batiments.push(batiment);
        cellule.batiment = batiment;
    }
    sendMeeple(meeple, cellule) {
        // on deplace le meeple de cellule
        const celluleOrigine = meeple.position;
        if (celluleOrigine) {
            console.log(celluleOrigine.meeplesPresents, meeple, celluleOrigine.meeplesPresents.filter(m => m.id !== meeple.id));
            celluleOrigine.meeplesPresents = celluleOrigine.meeplesPresents.filter(m => m.id !== meeple.id);
            console.log(celluleOrigine.meeplesPresents);
        }
        cellule.meeplesPresents.push(meeple);
        meeple.position = cellule;
        // on vire le meeple de son potentiel autre boulot
        const currentMeepleAmIdx = this.actionsMeeples.findIndex(ams => ams.meeples.indexOf(meeple) > -1);
        if (currentMeepleAmIdx > -1) {
            const meepleIdx = this.actionsMeeples[currentMeepleAmIdx].meeples.indexOf(meeple);
            delete this.actionsMeeples[currentMeepleAmIdx].meeples[meepleIdx];
        }
        else {
            console.log("meeple not found");
        }
        if (cellule.actionMeeples) {
            const am = cellule.actionMeeples;
            if (am.meeples.indexOf(meeple) > -1) {
                this.log('Ce meeple bosse déjà sur cette case !');
            }
            else {
                am.meeples.push(meeple);
            }
        }
        else {
            this.log("Pas d'action sur cette case");
        }
    }
    /*addActionMeeples(cellule: Cellule, carte: Carte, plan?: TypeBatiment) {
      const oldAm = cellule.actionMeeples;
      if (oldAm) {
        this.actionsMeeples.splice(this.actionsMeeples.indexOf(oldAm), 1);
      }
      const newAm = new ActionMeeples(cellule, carte);
      cellule.actionMeeples = newAm;
      this.actionsMeeples.push(newAm);
      this.log('ajoute un am ' + cellule + ' de ' + carte);
    }*/
    getActionMeeplesByCellule(cellule, carte) {
        const a = this.actionsMeeples.filter(am => am.cellule === cellule && (!carte || am.carte === carte));
        return a.length > 0 ? a[0] : undefined;
    }
    getActionMeeplesByMeeple(meeple) {
        return this.actionsMeeples.filter(am => am.meeples.find(m => m === meeple));
    }
    log(msg) {
        this.logs.push(msg);
    }
    initReserve() {
        this.reserve = src_app_meeples_domain_cout__WEBPACK_IMPORTED_MODULE_6__["Cout"].from('eeeeewwwph');
    }
    initRobot() {
        this.cartesPaquet = [];
        this.cartesMain = [];
        this.cartesDefausse = [];
        this.cartesPaquet = [
            CARTES['expl'],
            CARTES['rec'],
            //  Object.assign({}, CARTES['rec']),
            CARTES['hunt'],
            //    Object.assign({}, CARTES['hunt']),
            CARTES['rech'],
            CARTES['def'],
            CARTES['cstr']
            //      Object.assign({}, CARTES['cstr'])
        ];
        Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["melange"])(this.cartesPaquet);
        this.piocheX(4);
    }
    piocheX(x) {
        for (let i = 0; i < x; i++) {
            console.log('pioche');
            this.pioche();
        }
    }
    defausseMain() {
        const nbMain = this.cartesMain.length;
        for (let i = 0; i < nbMain; i++) {
            this.cartesDefausse.push(this.cartesMain.pop());
        }
    }
    pioche() {
        if (this.cartesPaquet.length > 0) {
            this.cartesMain.push(this.cartesPaquet.pop());
        }
        else {
            if (this.cartesDefausse.length > 0) {
                this.log('Remelange de la défausse dans la pioche');
                this.cartesDefausse.forEach(c => this.cartesPaquet.push(c));
                this.cartesDefausse = [];
                this.cartesMain.push(this.cartesPaquet.pop());
            }
        }
    }
    generateMeeples() {
        const meeple1 = this.generateMeeple(Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(20, 40));
        const meeple2 = this.generateMeeple(Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(20, 40));
        const meeple3 = this.generateMeeple(Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(20, 40));
        this.meeples.push(meeple1);
        this.sendMeeple(meeple1, this.terrain.getVoisin(this.batiments[0].cellule, 1, 0));
        this.setCouche(meeple1, this.terrain.getVoisin(this.batiments[0].cellule, 1, 0));
        this.meeples.push(meeple2);
        this.sendMeeple(meeple2, this.terrain.getVoisin(this.batiments[0].cellule, -1, 0));
        this.setCouche(meeple2, this.terrain.getVoisin(this.batiments[0].cellule, -1, 0));
        this.meeples.push(meeple3);
        this.sendMeeple(meeple3, this.terrain.getVoisin(this.batiments[0].cellule, 0, -1));
        this.setCouche(meeple3, this.terrain.getVoisin(this.batiments[0].cellule, 0, -1));
    }
    setCouche(meeple, cellule) {
        const oldCouche = meeple.couche;
        if (oldCouche) {
            oldCouche.dormeur = undefined;
        }
        cellule.dormeur = meeple;
        meeple.couche = cellule;
    }
    generateMeeple(age) {
        const meeple = new _meeple__WEBPACK_IMPORTED_MODULE_1__["Meeple"](this.generalId++, 'M' + this.generalId, this.generateMeepleName(), this.dateDemarrage - age);
        meeple.color1 = 'rgb(' + Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(0, 255) + ',' + Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(0, 255) + ',' + Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(0, 255) + ')';
        meeple.color2 = 'rgb(' + Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(0, 255) + ',' + Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(0, 255) + ',' + Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(0, 255) + ')';
        return meeple;
    }
    generateMeepleName() {
        const nbSyllabes = Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["random"])(2, 4);
        let nom = '';
        for (let x = 0; x < nbSyllabes; x++) {
            nom = nom.concat(Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_5__["randomElement"])(this.meepleSyllabes));
        }
        return nom.substring(0, 10);
    }
    buildTerrain() {
        const terrain = new _hexaTerrain__WEBPACK_IMPORTED_MODULE_2__["HexaTerrain"](12, 8);
        for (let x = 0; x < 12; x++) {
            for (let y = 0; y < 8; y++) {
                if (x < 2 || (x < 3 && y > 2) || (x < 4 && y > 3)) {
                    terrain.getCellule(x, y).setCelluleType(_cellule__WEBPACK_IMPORTED_MODULE_4__["CelluleType"].FORET);
                }
                if (x > 10 || (x > 9 && y < 6) || (x > 8 && y < 4)) {
                    terrain.getCellule(x, y).setCelluleType(_cellule__WEBPACK_IMPORTED_MODULE_4__["CelluleType"].PIERRE);
                }
            }
        }
        terrain.getCellule(5, 0).setCelluleType(_cellule__WEBPACK_IMPORTED_MODULE_4__["CelluleType"].EAU);
        terrain.getCellule(6, 0).setCelluleType(_cellule__WEBPACK_IMPORTED_MODULE_4__["CelluleType"].EAU);
        terrain.getCellule(6, 1).setCelluleType(_cellule__WEBPACK_IMPORTED_MODULE_4__["CelluleType"].EAU);
        terrain.getCellule(7, 1).setCelluleType(_cellule__WEBPACK_IMPORTED_MODULE_4__["CelluleType"].EAU);
        terrain.getCellule(8, 1).setCelluleType(_cellule__WEBPACK_IMPORTED_MODULE_4__["CelluleType"].EAU);
        terrain.getCellule(8, 2).setCelluleType(_cellule__WEBPACK_IMPORTED_MODULE_4__["CelluleType"].EAU);
        for (let i = 9; i < 12; i++) {
            terrain.getCellule(i, 2).setCelluleType(_cellule__WEBPACK_IMPORTED_MODULE_4__["CelluleType"].EAU);
        }
        this.terrain = terrain;
    }
    finTour() {
        this.meeples.forEach(m => {
            m.ajouteHistoire();
        });
        this.doActions();
        // meeples eat
        this.doMeepleDrink();
        this.doMeepleEat();
        this.doMeepleSleep();
        this.defausseMain();
        this.piocheX(4);
    }
    doActions() {
        this.actionsMeeples.forEach(am => {
            switch (am.carte.code) {
                case 'cstr':
                    const plan = am.plan;
                    // this.retireReserve(plan);
                    // if ()
                    break;
                case 'hunt':
                    break;
                case 'expl':
                    break;
            }
        });
    }
    doMeepleSleep() {
        this.meeples.forEach(m => {
            if (!m.couche.batiment) {
                m.histoire[0].sommeil = 0;
            }
            else if (m.couche.batiment.proto === _batiment__WEBPACK_IMPORTED_MODULE_3__["PROTOS_BATIMENTS"].HUTTE) {
                m.histoire[0].sommeil = 1;
            }
            else if (m.couche.batiment.proto === _batiment__WEBPACK_IMPORTED_MODULE_3__["PROTOS_BATIMENTS"].CABANE) {
                m.histoire[0].sommeil = 2;
            }
        });
        this.log('Pas assez de nourriture pour tous.');
    }
    doMeepleEat() {
        const besoinBouffe = this.meeples.length * 2;
        const reserveBouffe = this.reserve[src_app_meeples_domain_cout__WEBPACK_IMPORTED_MODULE_6__["MATERIAU"].VIANDE];
        this.log(this.meeples.length + ' meeples mangent chacun 2 portions ça fait ' + besoinBouffe + ' portions');
        this.log('Il y a ' + reserveBouffe + ' unités de nourriture de 4 portions chacune.');
        if (besoinBouffe >= reserveBouffe / 4) {
            this.log('Tout le monde mange');
            this.reserve['bouffe'] -= besoinBouffe;
            this.meeples.forEach(m => {
                m.histoire[0].bouffe = 2;
            });
        }
        else if (besoinBouffe >= reserveBouffe / 2) {
            // teste demi portion
            const nbUnites = Math.ceil(besoinBouffe / 4);
            this.log('Restriction de bouffe: une seule portion soit ' + nbUnites + ' unités.');
            this.reserve['bouffe'] -= nbUnites;
            this.meeples.forEach(m => {
                m.histoire[0].bouffe = 1;
            });
        }
        else {
            this.log('Pas assez de nourriture pour tous.');
            this.meeples.forEach(m => {
                m.histoire[0].bouffe = 0;
            });
        }
    }
    doMeepleDrink() {
        const besoinEau = this.meeples.length;
        const reserveEau = this.reserve[src_app_meeples_domain_cout__WEBPACK_IMPORTED_MODULE_6__["MATERIAU"].EAU];
        if (besoinEau > reserveEau) {
            this.meeples.forEach(m => {
                m.histoire[0].eau = 0;
            });
            this.log("Pas assez d'eau pour tous.");
        }
        else {
            this.meeples.forEach(m => {
                m.histoire[0].eau = 1;
            });
            this.log('Tout le monde boit');
            this.reserve['eau'] -= besoinEau;
        }
    }
}


/***/ }),

/***/ "./src/app/meeples/meeple-infos/meeple-infos.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/meeples/meeple-infos/meeple-infos.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZXBsZXMvbWVlcGxlLWluZm9zL21lZXBsZS1pbmZvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/meeples/meeple-infos/meeple-infos.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/meeples/meeple-infos/meeple-infos.component.ts ***!
  \****************************************************************/
/*! exports provided: MeepleInfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeepleInfosComponent", function() { return MeepleInfosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_meeples_domain_cellule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/meeples/domain/cellule */ "./src/app/meeples/domain/cellule.ts");
/* harmony import */ var src_app_meeples_partie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/meeples/partie.service */ "./src/app/meeples/partie.service.ts");




let MeepleInfosComponent = class MeepleInfosComponent {
    constructor(partieService) {
        this.partieService = partieService;
        this.CelluleType = src_app_meeples_domain_cellule__WEBPACK_IMPORTED_MODULE_2__["CelluleType"];
        this.TYPE_ACTION = src_app_meeples_domain_cellule__WEBPACK_IMPORTED_MODULE_2__["TYPE_ACTION"];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        console.log("changes de meeple");
        console.log(changes);
        this.actions = this.partieService.getActionsPossibles(this.meeple);
    }
    doAction(action) {
        console.log("action");
        this.partieService.executeAction(this.meeple, action);
    }
};
MeepleInfosComponent.ctorParameters = () => [
    { type: src_app_meeples_partie_service__WEBPACK_IMPORTED_MODULE_3__["MeeplePartieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MeepleInfosComponent.prototype, "meeple", void 0);
MeepleInfosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meeple-infos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeple-infos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/meeple-infos/meeple-infos.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeple-infos.component.scss */ "./src/app/meeples/meeple-infos/meeple-infos.component.scss")).default]
    })
], MeepleInfosComponent);



/***/ }),

/***/ "./src/app/meeples/meeple/meeple.component.scss":
/*!******************************************************!*\
  !*** ./src/app/meeples/meeple/meeple.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZXBsZXMvbWVlcGxlL21lZXBsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/meeples/meeple/meeple.component.ts":
/*!****************************************************!*\
  !*** ./src/app/meeples/meeple/meeple.component.ts ***!
  \****************************************************/
/*! exports provided: MeepleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeepleComponent", function() { return MeepleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MeepleComponent = class MeepleComponent {
    constructor() { }
    ngOnInit() {
    }
};
MeepleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meeple',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeple.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/meeple/meeple.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeple.component.scss */ "./src/app/meeples/meeple/meeple.component.scss")).default]
    })
], MeepleComponent);



/***/ }),

/***/ "./src/app/meeples/meeples.module.ts":
/*!*******************************************!*\
  !*** ./src/app/meeples/meeples.module.ts ***!
  \*******************************************/
/*! exports provided: MeeplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeeplesModule", function() { return MeeplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "./src/app/meeples/start/start.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _terrain_terrain_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terrain/terrain.component */ "./src/app/meeples/terrain/terrain.component.ts");
/* harmony import */ var _cellule_cellule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cellule/cellule.component */ "./src/app/meeples/cellule/cellule.component.ts");
/* harmony import */ var _partie_partie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partie/partie.component */ "./src/app/meeples/partie/partie.component.ts");
/* harmony import */ var _meeple_meeple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meeple/meeple.component */ "./src/app/meeples/meeple/meeple.component.ts");
/* harmony import */ var _meeple_infos_meeple_infos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meeple-infos/meeple-infos.component */ "./src/app/meeples/meeple-infos/meeple-infos.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");










const ROUTES = [
    {
        path: '',
        component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]
    }
];
let MeeplesModule = class MeeplesModule {
};
MeeplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"], _terrain_terrain_component__WEBPACK_IMPORTED_MODULE_4__["TerrainComponent"], _cellule_cellule_component__WEBPACK_IMPORTED_MODULE_5__["CelluleComponent"], _partie_partie_component__WEBPACK_IMPORTED_MODULE_6__["PartieComponent"], _meeple_meeple_component__WEBPACK_IMPORTED_MODULE_7__["MeepleComponent"], _meeple_infos_meeple_infos_component__WEBPACK_IMPORTED_MODULE_8__["MeepleInfosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)
        ]
    })
], MeeplesModule);



/***/ }),

/***/ "./src/app/meeples/message.service.ts":
/*!********************************************!*\
  !*** ./src/app/meeples/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _domain_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/message */ "./src/app/meeples/domain/message.ts");




let MessageService = class MessageService {
    constructor() {
        this.channel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.channelSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    sendMessage(message) {
        console.log("send mesg", message);
        switch (message.messageType) {
            case _domain_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SELECT:
                this.channelSelected.next(message);
                break;
            default:
                this.channel.next(message);
                break;
        }
    }
    getChannel() {
        return this.channel.asObservable();
    }
    getChannelSelected() {
        return this.channelSelected.asObservable();
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/meeples/partie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/meeples/partie.service.ts ***!
  \*******************************************/
/*! exports provided: MeeplePartieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeeplePartieService", function() { return MeeplePartieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_meeples_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/meeples/message.service */ "./src/app/meeples/message.service.ts");
/* harmony import */ var src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/meeples/domain/message */ "./src/app/meeples/domain/message.ts");
/* harmony import */ var src_app_meeples_domain_partie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/meeples/domain/partie */ "./src/app/meeples/domain/partie.ts");
/* harmony import */ var _domain_cellule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain/cellule */ "./src/app/meeples/domain/cellule.ts");






let MeeplePartieService = class MeeplePartieService {
    constructor(messageService) {
        this.messageService = messageService;
        this.selectedElement = { type: src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["TargetType"].NONE };
        this.partie = new src_app_meeples_domain_partie__WEBPACK_IMPORTED_MODULE_4__["Partie"]();
    }
    executeAction(arg0, arg1) {
        console.log("action", arg0, arg1);
    }
    getPartie() {
        return this.partie;
    }
    unselect() {
        this.selectedElement.type = src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["TargetType"].NONE;
        if (this.selectedElement.meeple) {
            this.selectedElement.meeple.selected = false;
            this.selectedElement.meeple = undefined;
        }
        if (this.selectedElement.cellule) {
            this.selectedElement.cellule.selected = false;
            this.selectedElement.cellule = undefined;
        }
    }
    selectCellule(cellule) {
        if (this.selectedElement.meeple) {
            const m = this.selectedElement.meeple;
            const p = m.position;
            const d = this.partie.terrain.getDistance(cellule, p);
            if (d > m.deplacementMax - m.deplacement) {
                this.messageService.sendMessage(new src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["Message"](src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].LOG, 'trop loin'));
            }
            else {
                this.getPartie().sendMeeple(this.selectedElement.meeple, cellule);
                m.deplacement += d;
                this.messageService.sendMessage(new src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["Message"](src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].MOVE, cellule));
                this.unselect();
                this.messageService.sendMessage(new src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["Message"](src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SELECT, this.selectedElement));
            }
        }
        else {
            this.unselect();
            this.selectedElement = { type: src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["TargetType"].CELLULE, cellule };
            cellule.selected = true;
            this.messageService.sendMessage(new src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["Message"](src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SELECT, this.selectedElement));
        }
    }
    selectMeeple(meeple) {
        if (this.selectedElement.meeple === meeple) {
            this.unselect();
            meeple.selected = false;
            this.selectedElement = { type: src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["TargetType"].MEEPLE, meeple };
            this.messageService.sendMessage(new src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["Message"](src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SELECT, this.selectedElement));
        }
        else {
            this.unselect();
            meeple.selected = true;
            this.selectedElement = { type: src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["TargetType"].MEEPLE, meeple };
            this.messageService.sendMessage(new src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["Message"](src_app_meeples_domain_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SELECT, this.selectedElement));
        }
    }
    getActionsPossibles(meeple) {
        const cellule = meeple.position;
        const actions = [];
        if (cellule.batiment) {
            // switch (cellule.batiment.proto) {
            actions.push({ type_action: _domain_cellule__WEBPACK_IMPORTED_MODULE_5__["TYPE_ACTION"].TRAVAIL, description: 'bosser' });
            // }
        }
        else {
            actions.push({ type_action: _domain_cellule__WEBPACK_IMPORTED_MODULE_5__["TYPE_ACTION"].CONSTRUCTION, description: 'construire un bâtiment' });
        }
        actions.push({ type_action: _domain_cellule__WEBPACK_IMPORTED_MODULE_5__["TYPE_ACTION"].RECOLTE, description: 'Récolter' });
        actions.push({ type_action: _domain_cellule__WEBPACK_IMPORTED_MODULE_5__["TYPE_ACTION"].EXPLORATION, description: 'Explorer les alentours' });
        switch (meeple.position.celluleType) {
            case _domain_cellule__WEBPACK_IMPORTED_MODULE_5__["CelluleType"].FORET:
                actions.push({ type_action: _domain_cellule__WEBPACK_IMPORTED_MODULE_5__["TYPE_ACTION"].RECOLTE, description: 'bosser' });
                break;
            case _domain_cellule__WEBPACK_IMPORTED_MODULE_5__["CelluleType"].PLAINE:
                actions.push({ type_action: _domain_cellule__WEBPACK_IMPORTED_MODULE_5__["TYPE_ACTION"].RECOLTE, description: 'bosser' });
                break;
        }
        return actions;
    }
};
MeeplePartieService.ctorParameters = () => [
    { type: src_app_meeples_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
MeeplePartieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MeeplePartieService);



/***/ }),

/***/ "./src/app/meeples/partie/partie.component.scss":
/*!******************************************************!*\
  !*** ./src/app/meeples/partie/partie.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZXBsZXMvcGFydGllL3BhcnRpZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/meeples/partie/partie.component.ts":
/*!****************************************************!*\
  !*** ./src/app/meeples/partie/partie.component.ts ***!
  \****************************************************/
/*! exports provided: PartieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartieComponent", function() { return PartieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/meeples/message.service.ts");
/* harmony import */ var _domain_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/message */ "./src/app/meeples/domain/message.ts");
/* harmony import */ var _partie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partie.service */ "./src/app/meeples/partie.service.ts");





let PartieComponent = class PartieComponent {
    constructor(ms, partieService) {
        this.ms = ms;
        this.partieService = partieService;
        this.TargetType = _domain_message__WEBPACK_IMPORTED_MODULE_3__["TargetType"];
        this.selectedElement = undefined;
        this.subs = this.ms.getChannel().subscribe((m) => this.onMessage(m));
        this.subs2 = this.ms.getChannelSelected().subscribe((m) => this.onMessageSelected(m));
        this.selectedElement = this.partieService.selectedElement;
    }
    getTitle() {
        console.log("get");
        return "title";
    }
    ngOnInit() {
    }
    onMessageSelected(message) {
        console.log("on msg selected", message);
        this.selectedElement = message.target;
    }
    onMessage(message) {
        switch (message.messageType) {
            case _domain_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].LOG:
                this.log(message.target);
                break;
            default:
                break;
        }
    }
    log(msg) {
        this.logs.push(msg);
    }
};
PartieComponent.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: _partie_service__WEBPACK_IMPORTED_MODULE_4__["MeeplePartieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PartieComponent.prototype, "partie", void 0);
PartieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/partie/partie.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partie.component.scss */ "./src/app/meeples/partie/partie.component.scss")).default]
    })
], PartieComponent);



/***/ }),

/***/ "./src/app/meeples/start/start.component.scss":
/*!****************************************************!*\
  !*** ./src/app/meeples/start/start.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZXBsZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/meeples/start/start.component.ts":
/*!**************************************************!*\
  !*** ./src/app/meeples/start/start.component.ts ***!
  \**************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_meeples_partie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/meeples/partie.service */ "./src/app/meeples/partie.service.ts");



let StartComponent = class StartComponent {
    constructor(partieService) {
        this.partieService = partieService;
    }
    ngOnInit() {
        this.partie = this.partieService.getPartie();
    }
};
StartComponent.ctorParameters = () => [
    { type: src_app_meeples_partie_service__WEBPACK_IMPORTED_MODULE_2__["MeeplePartieService"] }
];
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/start/start.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.scss */ "./src/app/meeples/start/start.component.scss")).default]
    })
], StartComponent);



/***/ }),

/***/ "./src/app/meeples/terrain/terrain.component.scss":
/*!********************************************************!*\
  !*** ./src/app/meeples/terrain/terrain.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".terrain-container {\n  width: 100%;\n  overflow: scroll;\n}\n.terrain-container .carte {\n  font-size: 8px;\n}\n.terrain-container .carte .ligne {\n  display: inline-flex;\n}\n.terrain-container .carte .ligne:nth-child(2n) {\n  margin-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVlcGxlcy90ZXJyYWluL0U6XFxkZXZlbG9wcGVtZW50XFxwcm9qZXRzXzJcXGNvbG9uc19naXRodWJcXGNvbG9uc1xcY29kZVxcbWVlcGxlcy9zcmNcXGFwcFxcbWVlcGxlc1xcdGVycmFpblxcdGVycmFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVlcGxlcy90ZXJyYWluL3RlcnJhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBRUEsZ0JBQUE7QUNIRjtBRElFO0VBRUUsY0FBQTtBQ0hKO0FES0k7RUFHRSxvQkFBQTtBQ0xOO0FETU07RUFDRSxnQkFoQkk7QUNZWiIsImZpbGUiOiJzcmMvYXBwL21lZXBsZXMvdGVycmFpbi90ZXJyYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1pZHRhaWxsZTogMHB4OyAvLyAxNXB4OyB0b2RvIHJlbWV0dHJlIMOgIDE1XHJcbiR0YWlsbGU6IDMwcHg7XHJcblxyXG4udGVycmFpbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogNDUwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAuY2FydGUge1xyXG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIC8vZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAubGlnbmUge1xyXG4gICAgICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8vZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtaWR0YWlsbGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnRlcnJhaW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4udGVycmFpbi1jb250YWluZXIgLmNhcnRlIHtcbiAgZm9udC1zaXplOiA4cHg7XG59XG4udGVycmFpbi1jb250YWluZXIgLmNhcnRlIC5saWduZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnRlcnJhaW4tY29udGFpbmVyIC5jYXJ0ZSAubGlnbmU6bnRoLWNoaWxkKDJuKSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/meeples/terrain/terrain.component.ts":
/*!******************************************************!*\
  !*** ./src/app/meeples/terrain/terrain.component.ts ***!
  \******************************************************/
/*! exports provided: TerrainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainComponent", function() { return TerrainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TerrainComponent = class TerrainComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TerrainComponent.prototype, "terrain", void 0);
TerrainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terrain',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./terrain.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meeples/terrain/terrain.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./terrain.component.scss */ "./src/app/meeples/terrain/terrain.component.scss")).default]
    })
], TerrainComponent);



/***/ }),

/***/ "./src/app/utils.functions.ts":
/*!************************************!*\
  !*** ./src/app/utils.functions.ts ***!
  \************************************/
/*! exports provided: random, randomElement, melange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomElement", function() { return randomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "melange", function() { return melange; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
function randomElement(array) {
    return array[random(0, array.length - 1)];
}
function melange(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        const x = array[j];
        array[j] = array[i];
        array[i] = x;
    }
}


/***/ })

}]);