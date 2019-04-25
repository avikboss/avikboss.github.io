webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackStory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackStory = /** @class */ (function () {
    function BackStory(navCtrl) {
        this.navCtrl = navCtrl;
        this.clickCount = 0;
        // this.resetPage();
    }
    BackStory.prototype.backButton = function () {
        this.resetPage();
        this.navCtrl.pop();
    };
    BackStory.prototype.click = function () {
        this.clickCount++;
        if (this.clickCount == 1) {
            document.getElementById("image1").style.visibility = "hidden";
            document.getElementById("image2").style.visibility = "visible";
        }
        if (this.clickCount == 2) {
            document.getElementById("image1").style.visibility = "hidden";
            document.getElementById("image2").style.visibility = "hidden";
            document.getElementById("image3").style.visibility = "visible";
            document.getElementById("next").style.visibility = "hidden";
        }
        if (this.clickCount == 3) {
            this.clickCount = 0;
            this.resetPage();
        }
    };
    BackStory.prototype.resetPage = function () {
        document.getElementById("image3").style.visibility = "hidden";
        document.getElementById("image2").style.visibility = "hidden";
        document.getElementById("image1").style.visibility = "visible";
        document.getElementById("next").style.visibility = "visible";
        this.clickCount = 0;
    };
    BackStory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'backstory',template:/*ion-inline-start:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\pages\backstory\backstory.html"*/'<ion-content class="backstory">\n\n  <head>\n\n    <meta charset="UTF-8">\n\n    <title>About</title>\n\n  </head>\n\n  <body>\n\n\n\n    <div >\n\n\n\n    <img id="image3" src="../assets/imgs/bs3_short.png">\n\n\n\n\n\n    <img id="image2" src="../../assets/imgs/bs2_short.png">\n\n\n\n      <img  id="image1" src="../../assets/imgs/bs1_short.png">\n\n\n\n    </div>\n\n    <button class="next" id="next"(click)="click()">Next</button>\n\n  </body>\n\n  <button (click)="backButton()">Go To Game</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\pages\backstory\backstory.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BackStory);
    return BackStory;
}());

//# sourceMappingURL=backstory.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_thing__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backend_decider__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__backend_thingManager__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__backend_utilities__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__backend_datamuse__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__backstory_backstory__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.alreadyClicked = false;
        this.decider = new __WEBPACK_IMPORTED_MODULE_4__backend_decider__["a" /* Decider */]();
        this.manager = new __WEBPACK_IMPORTED_MODULE_5__backend_thingManager__["a" /* thingManager */]();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__backstory_backstory__["a" /* BackStory */]);
    }
    HomePage.prototype.aboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.compareClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var datamuse, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, response, applewins;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        // disable button while processing current click so user can't double compareClick
                        this.alreadyClicked = true;
                        // make sure the name is properly formatted
                        this.ThingOneName = __WEBPACK_IMPORTED_MODULE_6__backend_utilities__["a" /* Utilities */].sanitize(this.ThingOneName);
                        this.ThingTwoName = __WEBPACK_IMPORTED_MODULE_6__backend_utilities__["a" /* Utilities */].sanitize(this.ThingTwoName);
                        // check to see if there already exists a Thing object of the same name, and if so, set the ThingOne or ThingTwo to that object
                        this.ThingOne = this.manager.inThings(this.ThingOneName);
                        this.ThingTwo = this.manager.inThings(this.ThingTwoName);
                        datamuse = new __WEBPACK_IMPORTED_MODULE_7__backend_datamuse__["a" /* Datamuse */]();
                        if (!(this.ThingOne === null)) return [3 /*break*/, 6];
                        this.ThingOne = new __WEBPACK_IMPORTED_MODULE_3__backend_thing__["a" /* Thing */](this.ThingOneName);
                        _a = this.ThingOne;
                        return [4 /*yield*/, datamuse.request(this.ThingOne.name, null, null)];
                    case 1:
                        _a.datamuseRelated = _l.sent();
                        _b = this.ThingOne;
                        return [4 /*yield*/, datamuse.requestWithOptions(null, null, null, null, null, this.ThingOne.name, null, 30, true, null)];
                    case 2:
                        _b.datamuseLeftContext = _l.sent();
                        _c = this.ThingOne;
                        return [4 /*yield*/, datamuse.requestWithOptions(null, null, null, null, null, null, this.ThingOne.name, 30, true, null)];
                    case 3:
                        _c.datamuseModifies = _l.sent();
                        _d = this.ThingOne;
                        return [4 /*yield*/, datamuse.request(null, 'spc', this.ThingOne.name)];
                    case 4:
                        _d.datamuseKindOf = _l.sent();
                        _e = this.ThingOne;
                        return [4 /*yield*/, datamuse.request(null, 'trg', this.ThingOne.name)];
                    case 5:
                        _e.datamuseStats = _l.sent();
                        this.manager.add(this.ThingOne);
                        _l.label = 6;
                    case 6:
                        //note how many times this Thing has been compared
                        this.ThingOne.iterateCount();
                        if (!(this.ThingTwo === null)) return [3 /*break*/, 12];
                        this.ThingTwo = new __WEBPACK_IMPORTED_MODULE_3__backend_thing__["a" /* Thing */](this.ThingTwoName);
                        _f = this.ThingTwo;
                        return [4 /*yield*/, datamuse.request(this.ThingTwo.name, null, null)];
                    case 7:
                        _f.datamuseRelated = _l.sent();
                        _g = this.ThingTwo;
                        return [4 /*yield*/, datamuse.requestWithOptions(null, null, null, null, null, this.ThingTwo.name, null, 30, true, null)];
                    case 8:
                        _g.datamuseLeftContext = _l.sent();
                        _h = this.ThingTwo;
                        return [4 /*yield*/, datamuse.requestWithOptions(null, null, null, null, null, null, this.ThingTwo.name, 30, true, null)];
                    case 9:
                        _h.datamuseModifies = _l.sent();
                        _j = this.ThingTwo;
                        return [4 /*yield*/, datamuse.request(null, 'spc', this.ThingTwo.name)];
                    case 10:
                        _j.datamuseKindOf = _l.sent();
                        _k = this.ThingTwo;
                        return [4 /*yield*/, datamuse.request(null, 'trg', this.ThingTwo.name)];
                    case 11:
                        _k.datamuseStats = _l.sent();
                        this.manager.add(this.ThingTwo);
                        _l.label = 12;
                    case 12:
                        this.ThingTwo.iterateCount();
                        response = this.decider.chooseComparer(this.ThingOne, this.ThingTwo);
                        applewins = this.ThingOne.qualIndex > this.ThingTwo.qualIndex;
                        // pushes the results screen and passes it parameters for the response, winner, and if the graphics should display an apple
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsComponent */], {
                            respond: response, aw: applewins,
                            win: applewins ? this.ThingOne : this.ThingTwo
                        });
                        // reset Thing text and re-enable button
                        this.ThingOneName = "";
                        this.ThingTwoName = "";
                        this.alreadyClicked = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.buttonDisabled = function () {
        if (typeof this.ThingOneName == "undefined"
            || typeof this.ThingTwoName == "undefined"
            || this.alreadyClicked) {
            return true;
        }
        if (this.ThingTwoName.length == 0 || this.ThingOneName.length == 0) {
            return true;
        }
        if (/^\s+$/.test(this.ThingOneName) || /^\s+$/.test(this.ThingTwoName)) {
            return true;
        }
        return false;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\pages\home\home.html"*/'<!--<ion-header>-->\n\n<!--<ion-title>-->\n\n\n\n<!--<h3>A Thing Comparer</h3>&lt;!&ndash; What a great name! It sure is!! &ndash;&gt;-->\n\n<!--</ion-title>-->\n\n<!--</ion-header>-->\n\n\n\n<ion-content padding>\n\n  <div class="logo_about">\n\n    <img class="logo" src="assets/imgs/title.png">\n\n    <button class="info" (click)="aboutPage()">?</button>\n\n  </div>\n\n\n\n  <img class="banana" src="assets/imgs/celestial_banana.png">\n\n\n\n  <div class="flagpole right"></div>\n\n  <div class="flagpole left"></div>\n\n\n\n  <img class="apple_land" src="assets/imgs/green_cliff.png">\n\n  <img class="orange_land" src="assets/imgs/orange_cliff.png">\n\n\n\n  <form (ngSubmit)="compareClick()">\n\n    <ion-input maxlength="20" type="text" class="banner apple" placeholder="Enter apples\' word here"\n\n               [(ngModel)]="ThingOneName" name="thing1"></ion-input>\n\n    <ion-input maxlength="20" type="text" class="banner orange" placeholder="Enter oranges\' word here"\n\n               [(ngModel)]="ThingTwoName" name="thing2"></ion-input>\n\n    <div class="button_container">\n\n      <button [disabled]="buttonDisabled()" type="submit">Petition the Celestial Banana</button>\n\n    </div>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.winner = navParams.get('win');
        this.response = navParams.get('respond');
        this.appleWins = navParams.get('aw');
    }
    ResultsComponent.prototype.onBackButton = function () {
        this.navCtrl.pop();
    };
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\pages\results\results.html"*/'<!-- Generated template for the ResultsComponent component -->\n\n<ion-content>\n\n  <div class="column">\n\n    <img class="pedestal" src="../../assets/imgs/pedestal2.png">\n\n    <img *ngIf="appleWins" class="fruit" src="../../assets/imgs/soloHappyApple.png">\n\n    <img *ngIf="!appleWins" class="fruit" src="../../assets/imgs/soloHappyOrange.png">\n\n    <div class="banana_spotlight">\n\n      <img class="spotlight" src="../../assets/imgs/spotlight.png">\n\n      <img class="banana" src="../../assets/imgs/celestial_banana.png">\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div class="flagpole orange" *ngIf="!appleWins"></div>\n\n  <div class="flagpole apple" *ngIf="appleWins"></div>\n\n\n\n  <img *ngIf="appleWins" id="green_grass" class="grass" src="../../assets/imgs/green_grass.png">\n\n  <img *ngIf="!appleWins" id="orange_grass" class="grass" src="../../assets/imgs/orange_grass.png">\n\n\n\n\n\n  <div class="banner orange" *ngIf="!appleWins"><p [innerHTML]="winner.name"></p></div>\n\n  <div class="banner apple" *ngIf="appleWins"><p [innerHTML]="winner.name"></p></div>\n\n\n\n  <h2 [innerHTML]="response"></h2>\n\n  <button (click)="onBackButton()">Petition again!</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\pages\results\results.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ResultsComponent);
    return ResultsComponent;
}());

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backstory_backstory__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.backButton = function () {
        this.navCtrl.pop();
    };
    AboutPage.prototype.BS = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__backstory_backstory__["a" /* BackStory */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\pages\about\about.html"*/'<ion-content class="about">\n<head>\n    <meta charset="UTF-8">\n    <title>About</title>\n</head>\n<body>\n  <h1>\n    Our Story\n  </h1>\n<h3>\n  This app exists not only to decide the fate of apples and oranges, but also to be of amusement to you! <br>\n  So if you decide that the fate of apples and oranges is beneath you, just put in any old thing, compare them!<br>\n  <br> Settle arguments! <br>\n  <br> Create controversy!<br>\n  <br> But also note that the decisions made by the celestial banana are not perfect and are subject to your input. Please do not take\n  everything, or even anything, the celestial banana says seriously. Bananas are not to be trusted, particularly in cases where you choose\n  to fly under banners that relate to hate speech or violence in any way. If you need more guidance on these issues, I would strongly encourage\n  you to speak to a counselor or trusted adult.\n  <br><br> Now get comparing!\n\n</h3>\n  <button class="BS"(click)="BS()">Read Backstory</button>\n\n</body>\n  <button (click)="backButton()">Back</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_results_results__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_backstory_backstory__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_results_results__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_backstory_backstory__["a" /* BackStory */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_results_results__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_backstory_backstory__["a" /* BackStory */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pluralize__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pluralize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pluralize__);

var AbstractComparer = /** @class */ (function () {
    function AbstractComparer() {
    }
    AbstractComparer.prototype.compare = function (one, two) {
        return "";
    };
    // A helper method for improving the grammar of a comparer's response strings
    AbstractComparer.prototype.conjugate = function (singular, plural, word) {
        if (word === void 0) { word = this.winner; }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_pluralize__["isPlural"])(word)) {
            return plural;
        }
        return singular;
    };
    Object.defineProperty(AbstractComparer.prototype, "winner", {
        get: function () {
            return this._winner;
        },
        set: function (value) {
            this._winner = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComparer.prototype, "loser", {
        get: function () {
            return this._loser;
        },
        set: function (value) {
            this._loser = value;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractComparer;
}());

//# sourceMappingURL=abstract_comparer.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utilities; });
// provides useful methods to the rest of the project
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    // returns random int from 0 to max, exclusive
    Utilities.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    // clean up user input and make sure it's safe
    Utilities.sanitize = function (s) {
        // if s is a bad word, change it to ****
        if (this.badWords.indexOf(s.toLowerCase()) != -1) {
            s = "****";
        }
        // strip whitespace at beginning and end
        while (s.charAt(s.length - 1) == ' ') {
            s = s.substring(0, s.length - 2);
        }
        // remove HTML tags
        return s.replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };
    Utilities.notStopWord = function (word) {
        return (this._stopwords.indexOf(word) == -1);
    };
    Utilities.notBadWord = function (word) {
        return (this.badWords.indexOf(word) == -1);
    };
    // shuffle entries in a list
    Utilities.shuffle = function (a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    // capitalize first letter of string
    Utilities.capitalize = function (str) {
        if (str.length < 1) {
            return str;
        }
        else if (str.length == 1) {
            return str.toUpperCase();
        }
        else {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    };
    Object.defineProperty(Utilities, "stopwords", {
        // GETTER AND SETTER METHODS
        get: function () {
            return this._stopwords;
        },
        set: function (value) {
            this._stopwords = value;
        },
        enumerable: true,
        configurable: true
    });
    // words that are not interesting and shouldn't be shown to the user as part of a response
    Utilities._stopwords = ['. ', '.', 'a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always',
        'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be',
        'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by',
        'call', 'can', 'cannot', "can't", 'co', 'computer', 'con', 'could', "couldn't", 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg',
        'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find',
        'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', "hasn't", 'have',
        'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herse"', 'him', 'himse"', 'his', 'how', 'however', 'hundred', 'i', 'ie', 'if', 'in',
        'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', "it's", 'itse', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'like', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile',
        'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myse', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no',
        'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise',
        'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious',
        'several', 'shall', 'said', 'says', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system',
        'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thick', 'thin',
        'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under',
        'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein',
        'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your',
        'yours', 'yourself', 'yourselves'];
    // An array of bad words and slurs to be censored.
    Utilities.badWords = ["arian", "aryan", "ass pirate", "ass-pirate", "asspirate", "assnigger", "asswipe", "asswipes", "bastard", "bastardo", "bastards", "batty boy", "beaner", "beaners", "bimbo", "bimbos", "bint", "boiolas", "brotherfucker", "buceta", "bugger", "bulldyke", "bum boy", "butt fuck", "buttfuck", "buttfucka", "buttfucker", "butt-pirate", "c.u.n.t", "c0cksucker", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "chi-chi man", "chick with a dick", "child-fucker", "chinc", "chincs", "chink", "chinky", "choc ice", "circlejerk", "clit licker", "clit licker", "clitface", "clitfuck", "clover clamps", "cnut", "cock sucker", "cockbite", "cockfucker", "cockholster", "cockjockey", "cockknocker", "cockknoker", "cockmaster", "cockmongler", "cockmongruel", "cockmonkey", "cockmunch", "cockmuncher", "cocksmoke", "cocksmoker", "cocksniffer", "cocksuck", "cocksuck", "cocksucked", "cocksucked", "cocksucker", "cock-sucker", "cocksuckers", "cocksucking", "cocksucks", "cocksucks", "cocksuka", "cocksukka", "cockwaffle", "cokmuncher", "coksucka", "coon", "coonnass", "coons", "corksucker", "corp whore", "corp whore", "crackwhore", "cretin", "cripple", "crotte", "cum chugger", "cum chugger", "cum dumpster", "cum dumpster", "cum freak", "cum freak", "cum guzzler", "cum guzzler", "cumbubble", "cumdump", "cumdump", "cumdumpster", "cumguzzler", "cumjockey", "cumslut", "cumtart", "cunilingus", "cunillingus", "cunnie", "cunnilingus", "cunny", "cunt", "c-u-n-t", "cunt hair", "cunt hair", "cuntass", "cuntbag", "cuntbag", "cuntface", "cunthole", "cunthunter", "cuntlick", "cuntlick", "cuntlicker", "cuntlicker", "cuntlicking", "cuntlicking", "cuntrag", "cunts", "cuntsicle", "cuntsicle", "cuntslut", "cunt-struck", "cunt-struck", "cut rope", "cut rope", "dago", "darkie", "date rape", "daterape", "deggo", "dickfuck", "dickfucker", "dickmonger", "dicksipper", "dicksucker", "dicksucking", "dicktickler", "dike", "diligaf", "dimwit", "dink", "dinks", "dirsa", "dolcett", "dommes", "Doublelift", "douche-fag", "Dumbcunt", "dyke", "dykes", "ecchi", "fag", "fagbag", "fagfucker", "fagg", "fagged", "fagging", "faggit", "faggitt", "faggot", "faggotcock", "faggots", "faggs", "fagot", "fagots", "fags", "fagtard", "faig", "faigt", "fannyfucker", "femdom", "flamer", "floozy", "frotting", "fuck puppet", "fuck trophy", "fuck-bitch", "fuckbutt", "fuckbutter", "fuckersucker", "fuckmeat", "fucktard", "fuck-tard", "fucktards", "fucktoy", "fuckwhit", "fuckwit", "fuckwitt", "fudge packer", "fudgepacker", "fudge-packer", "fukwhit", "fukwit", "futanari", "gae", "gai", "gayass", "gaybob", "gaydo", "gayfuck", "gayfuckist", "gaylord", "gaytard", "gaywad", "gender bender", "gey", "ghay", "ghey", "golliwog", "gook", "gooks", "goregasm", "gringo", "grope", "guido", "h0m0", "h0mo", "heeb", "heshe", "he-she", "ho", "hoar", "hoare", "hobag", "hoe", "hoer", "homodumbshit", "homoey", "honkey", "honky", "hoor", "hore", "hussy", "iap", "injun", "jail bait", "jailbait", "jap", "japs", "jigaboo", "jiggaboo", "jiggerboo", "jungle bunny", "junglebunny", "kafir", "kike", "kikes", "kinbaku", "klan", "knobjocky", "knobjokey", "kraut", "kunt", "kyke", "lardass", "mcfagget", "mick", "midget", "molest", "mong", "moolie", "n1gga", "n1gger", "nazi", "nazism", "negro", "neonazi", "nig nog", "nigaboo", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "niggle", "niglet", "nig-nog", "nob jokey", "nobjocky", "nobjokey", "numbnuts", "old bag", "omorashi", "paki", "panooch", "penisbanger", "penisfucker", "penispuffer", "pigfucker", "pikey", "pillowbiter", "pinko", "piss pig", "pisspig", "polack", "pole smoker", "polesmoker", "ponyplay", "Poopuncher", "porch monkey", "porchmonkey", "prickteaser", "puto", "queerbait", "queerhole", "queero", "raghead", "rape", "raped", "raper", "rapey", "raping", "rapist", "reetard", "reich", "retard", "retarded", "ritard", "rtard", "r-tard", "rumprammer", "ruski", "sambo", "sand nigger", "sandnigger", "sausage queen", "sausage queen", "scag", "schizo", "scroat", "scrud", "shemale", "shirt lifter", "shitblimp", "shitbrains", "shitcunt", "shitdick", "shitfuck", "shota", "sissy", "skag", "skank", "slag", "slanteye", "sleaze", "sleazy", "slut", "slut bucket", "slut bucket", "slutbag", "slutdumper", "slutkiss", "sluts", "son of a whore", "spic", "spick", "spik", "spiks", "spread legs", "sultry women", "swastika", "taff", "taig", "tard", "thundercunt", "towelhead", "tramp", "tranny", "tub girl", "twink", "twunt", "twunter", "unclefucker", "w00se", "wench", "wetback", "wh0re", "wh0reface", "white supremacy", "white supremacist", "whoar", "whoralicious", "whore", "whorealicious", "whorebag", "whored", "whoreface", "whorehopper", "whorehouse", "whores", "whoring", "wigger", "window licker", "wog", "wop", "wrapping men", "yid", "yiffy", "zibbi", "zubb"];
    return Utilities;
}());

//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.show();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\avik9\OneDrive\Documents\GitHub\ThingComparer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Thing; });
/*
The Thing class stores information about an object, both the name, how many times it has been called, and
all the relevant data gathered form the dataMuse API
 */
var Thing = /** @class */ (function () {
    function Thing(name) {
        this._name = name;
        this._count = 0;
        this.setQualIndex();
    }
    //goes through a series of mostly random calculations to ensure a unique qualIndex for each word that will be consistent
    //for any given day, such that decisions are consistent.
    Thing.prototype.setQualIndex = function () {
        var day = new Date().getDay();
        this._qualIndex = this._name.charCodeAt(0) + this._name.length % 10;
        if (day % 2 == 0) {
            this._qualIndex -= 3 * this._name.charCodeAt(0) / 2;
        }
        if (this._name.includes('a')) {
            this._qualIndex += this._name.lastIndexOf('a');
        }
        if (this._name.includes('e')) {
            this._qualIndex *= this._name.indexOf('e') % 3;
        }
        if (this._name.includes('i')) {
            this._qualIndex += this._name.lastIndexOf('i') - 5;
        }
        if (this._name.includes('o')) {
            this._qualIndex -= this._name.indexOf('o') * 2;
        }
        if (this._name.includes('s')) {
            this._qualIndex += this._name.indexOf('s') - 4;
        }
        //allows for testing against guaranteed wins and losses
        if (this._name == "plzwin") {
            this._qualIndex = 10000;
        }
        if (this._name == "plzlose") {
            this._qualIndex = -10000;
        }
    };
    Object.defineProperty(Thing.prototype, "qualIndex", {
        get: function () {
            return this._qualIndex;
        },
        //getters and setters for the various attributes of the Thing
        set: function (number) {
            this._qualIndex = number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "datamuseRelated", {
        get: function () {
            return this._datamuseRelated;
        },
        set: function (value) {
            this._datamuseRelated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "datamuseLeftContext", {
        get: function () {
            return this._datemuseLeftContext;
        },
        set: function (value) {
            this._datemuseLeftContext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "datamuseRightContext", {
        get: function () {
            return this._datemuseRightContext;
        },
        set: function (value) {
            this._datemuseRightContext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "datamuseKindOf", {
        get: function () {
            return this._datamuseKindOf;
        },
        set: function (value) {
            this._datamuseKindOf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "datamuseStats", {
        get: function () {
            return this._datamuseStats;
        },
        set: function (value) {
            this._datamuseStats = value;
        },
        enumerable: true,
        configurable: true
    });
    // Iterates the count, noting that the Thing has been compared again
    Thing.prototype.iterateCount = function () {
        this._count++;
        if (this._name == "plzlose" || this.name == "plzwin") {
            this._count = 1;
        }
    };
    return Thing;
}());

//# sourceMappingURL=thing.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comparers_random_comparer__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comparers_easter_egg_comparer__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comparers_quantity_comparer__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comparers_similar_meaning_comparer__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comparers_left_context_comparer__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comparers_right_context_comparer__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comparers_kind_of_comparer__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comparers_stats_comparer__ = __webpack_require__(283);









var Decider = /** @class */ (function () {
    function Decider() {
    }
    // Runs down the list of comparers until a result is returned
    Decider.prototype.chooseComparer = function (thing1, thing2) {
        var result;
        // Datamuse comparers are iterated in a random order to increase variety of responses
        var comparers = __WEBPACK_IMPORTED_MODULE_6__utilities__["a" /* Utilities */].shuffle([new __WEBPACK_IMPORTED_MODULE_5__comparers_right_context_comparer__["a" /* RightContextComparer */](),
            new __WEBPACK_IMPORTED_MODULE_4__comparers_left_context_comparer__["a" /* leftContextComparer */](), new __WEBPACK_IMPORTED_MODULE_3__comparers_similar_meaning_comparer__["a" /* SimilarMeaningComparer */](), new __WEBPACK_IMPORTED_MODULE_8__comparers_stats_comparer__["a" /* StatsComparer */](),
            new __WEBPACK_IMPORTED_MODULE_7__comparers_kind_of_comparer__["a" /* KindOfComparer */](), new __WEBPACK_IMPORTED_MODULE_0__comparers_random_comparer__["a" /* RandomComparer */]()]);
        var easterEgg = new __WEBPACK_IMPORTED_MODULE_1__comparers_easter_egg_comparer__["a" /* EasterEggComparer */]();
        result = easterEgg.compare(thing1, thing2);
        if (result != null) {
            return result;
        }
        var quantity = new __WEBPACK_IMPORTED_MODULE_2__comparers_quantity_comparer__["a" /* QuantityComparer */]();
        result = quantity.compare(thing1, thing2);
        if (result != null) {
            return result;
        }
        // Choose either one or two datamuse responses to string together as a result
        var response;
        var count = 0;
        var numResponses = Math.random() < .33 ? 2 : 1;
        result = "";
        for (var i = 0; i < comparers.length; i++) {
            if (count == numResponses) {
                break;
            }
            response = comparers[i].compare(thing1, thing2);
            if (response != null) {
                result += " " + response;
                count++;
            }
        }
        if (result != "")
            return result;
    };
    return Decider;
}());

//# sourceMappingURL=decider.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_comparer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var lastResponseIndex; //Keeps track of the index of the last response.
/**
 * This is the class our program defaults to if Datamuse does not return a viable response. From this class,
 * a response is randomly chosen from the 'responses' array and formatted to include the specific 'thing' that won.
 */
var RandomComparer = /** @class */ (function (_super) {
    __extends(RandomComparer, _super);
    function RandomComparer() {
        return _super.call(this) || this;
    }
    RandomComparer.prototype.compare = function (ThingOne, ThingTwo) {
        //Whichever thing has a higher calculated 'quality index' wins.
        if (ThingOne.qualIndex > ThingTwo.qualIndex) {
            this.winner = ThingOne.name;
            this.loser = ThingTwo.name;
        }
        else {
            this.winner = ThingTwo.name;
            this.loser = ThingOne.name;
        }
        //Array of responses.
        var responses = [
            "Obviously " + this.winner + " " + this.conjugate('is', 'are') + " better than " + this.loser + ", everyone knows that.",
            "I like " + this.winner + " better. Because I said so.",
            "I like " + this.winner + " better! " + this.loser + " " + this.conjugate('sucks', 'suck', this.loser) + "!",
            "Well, " + this.winner + " " + this.conjugate('is', 'are') + " mediocre, but I'll go with\n       " + this.conjugate('it', 'them') + " anyway. I'm feeling spicy today.",
            "Honestly, " + this.winner + " just " + this.conjugate('brings', 'bring', this.winner) + " me more joy.",
            "When considering the cosmic value of " + this.winner + " and " + this.loser + ", its clear to see that " + this.winner + "\n      " + this.conjugate('is', 'are', this.winner) + " far more important.",
            "Just as water flows through a river, so too " + this.conjugate('does', 'do', this.winner) + " " + this.winner + "\n      " + this.conjugate('flow', 'flows', this.winner) + " through the lives of all of us.",
            "You foolish fool! Who could possibly think that " + this.loser + " could even compare to " + this.winner + "!",
            "I find " + this.winner + " to be more ap-peel-ing.",
            "I go absolutely bananas for " + this.winner + ".",
            "From my perch here on this cloud, its easy to see the superior merit of " + this.winner + ".",
            "When push comes to shove, I have to go with " + this.winner,
            "Of the millions and millions of decisions I make every day, this has been the easiest one...by far.\n      " + this.winner + " " + this.conjugate('is', 'are') + " better.",
            "Hah, " + this.loser + " " + this.conjugate('is', 'are') + " a joke compared to " + this.winner + ".",
            "Considering " + this.loser + " " + this.conjugate("doesn't", "don't", this.loser) + " exist in a lot of other multiverses, I'm going to have to go with " + this.winner + ".",
            "I'd rather be chopped up and put in fruit salad than allow you to believe that " + this.loser + "\n      " + this.conjugate('is', 'are') + " of higher quality than " + this.winner + ".",
            "Can I ask you something? Are you mad questioning the superiority of " + this.winner + "?",
            __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].capitalize(this.winner) + " " + this.conjugate('eats', 'eat') + " " + this.loser + " for breakfast.",
            "So long as tomatoes are a fake fruit, " + this.loser + " too will be subordinate to " + this.winner + "."
        ];
        //Picks a response from the array of responses, so long as the response isn't the same as the last random response.
        var responseIndex = __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].getRandomInt(responses.length);
        while (responseIndex == lastResponseIndex) {
            responseIndex = __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].getRandomInt(responses.length);
        }
        lastResponseIndex = responseIndex;
        return responses[responseIndex].toString();
    };
    return RandomComparer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_comparer__["a" /* AbstractComparer */]));

//# sourceMappingURL=random_comparer.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasterEggComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_comparer__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * This class is designed to catch any 'special', pre-determined words and return a specific response for those words.
 */
var EasterEggComparer = /** @class */ (function (_super) {
    __extends(EasterEggComparer, _super);
    function EasterEggComparer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EasterEggComparer.prototype.compare = function (ThingOne, ThingTwo) {
        //If one of the 'things' entered satisfies any one of the below cases, our app will return the respective "special" response.
        if (this.hasEasterEgg("me", ThingOne, ThingTwo)) {
            return 'Stop trying to compare yourself: you are valuable just as you are!!';
        }
        if (this.hasEasterEgg("shilad", ThingOne, ThingTwo)) {
            if (ThingOne.name.toLowerCase() == "shilad") {
                ThingOne.qualIndex = 1000;
            }
            if (ThingTwo.name.toLowerCase() == "shilad") {
                ThingTwo.qualIndex = 1000;
            }
            return "Shilad is the best!";
        }
        if (ThingOne.name.toLowerCase() == ThingTwo.name.toLowerCase()) {
            return "Y'know, I'm feeling conflicted on this one...it's almost like they're the same thing.";
        }
        if (this.hasEasterEgg("****", ThingOne, ThingTwo)) {
            if (ThingOne.name.toLowerCase() == "****") {
                ThingOne.qualIndex = -1000;
            }
            if (ThingTwo.name.toLowerCase() == "****") {
                ThingTwo.qualIndex = -1000;
            }
            return "Chill with the words, homie.";
        }
        if ((this.hasEasterEgg("apple", ThingOne, ThingTwo) || this.hasEasterEgg("apple", ThingOne, ThingTwo))
            && (this.hasEasterEgg("oranges", ThingOne, ThingTwo) || this.hasEasterEgg("orange", ThingOne, ThingTwo))) {
            return "Wow, aren't you original--who would ever have thought of comparing apples and oranges?";
        }
        if ((this.hasEasterEgg("cats", ThingOne, ThingTwo) || this.hasEasterEgg("cat", ThingOne, ThingTwo))
            && (this.hasEasterEgg("dogs", ThingOne, ThingTwo) || this.hasEasterEgg("dog", ThingOne, ThingTwo))) {
            return "Ah yes, the ancient feud of cats and dogs. This could have been easily settled eons ago if only I had " +
                "been consulted--cats are far superior. Their purrs and warm snuggles bring me so much joy.";
        }
        if ((this.hasEasterEgg("cat", ThingOne, ThingTwo))) {
            if (ThingOne.name.toLowerCase() == "cat") {
                ThingOne.qualIndex = 1000;
            }
            if (ThingTwo.name.toLowerCase() == "cat") {
                ThingTwo.qualIndex = 1000;
            }
            return ("I love cats!");
        }
        if (this.hasEasterEgg("macalester", ThingOne, ThingTwo)) {
            if (ThingOne.name.toLowerCase() == "macalester") {
                ThingOne.qualIndex = 1000;
            }
            if (ThingTwo.name.toLowerCase() == "macalester") {
                ThingTwo.qualIndex = 1000;
            }
            return "MA-CA-LE-STER! IS WON-DER-FUL!";
        }
        return null;
    };
    EasterEggComparer.prototype.hasEasterEgg = function (name, ThingOne, ThingTwo) {
        if (ThingOne.name.toLowerCase() == name || ThingTwo.name.toLowerCase() == name) {
            return true;
        }
        return false;
    };
    return EasterEggComparer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_comparer__["a" /* AbstractComparer */]));

//# sourceMappingURL=easter_egg_comparer.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantityComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_comparer__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * This class returns a response if the user types in the same 'thing' multiple times.
 */
var QuantityComparer = /** @class */ (function (_super) {
    __extends(QuantityComparer, _super);
    function QuantityComparer() {
        return _super.call(this) || this;
    }
    QuantityComparer.prototype.compare = function (ThingOne, ThingTwo) {
        console.log(ThingOne.count);
        //If the user types the same 'thing' thrice.
        if (ThingOne.count % 5 == 0) {
            return ("I'm getting kind of tired of " + ThingOne.name + ".");
        }
        if (ThingTwo.count % 5 == 0) {
            return ("I'm getting kind of tired of " + ThingTwo.name + ".");
        }
        //If the user types the same 'thing' five times.
        if (ThingOne.count % 9 == 0) {
            return ("Don't you think you've tried " + ThingOne.name + " enough for now?");
        }
        if (ThingTwo.count % 9 == 0) {
            return ("Don't you think you've tried " + ThingTwo.name + " enough for now?");
        }
        //If the user types the same 'thing' eight times.
        if (ThingOne.count % 14 == 0 || ThingTwo.count % 14 == 0) {
            return ("Seriously, be more original.");
        }
        return null;
    };
    return QuantityComparer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_comparer__["a" /* AbstractComparer */]));

//# sourceMappingURL=quantity_comparer.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimilarMeaningComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_comparer__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * This class makes use of the 'similar meaning' call to Datamuses' API.
 */
var SimilarMeaningComparer = /** @class */ (function (_super) {
    __extends(SimilarMeaningComparer, _super);
    function SimilarMeaningComparer() {
        return _super.call(this) || this;
    }
    SimilarMeaningComparer.prototype.compare = function (ThingOne, ThingTwo) {
        var data;
        var winnerName;
        //Sets data to be the datamuse data from the winning 'thing'.
        if (ThingOne.qualIndex > ThingTwo.qualIndex) {
            data = ThingOne.datamuseRelated;
            winnerName = ThingOne.name;
        }
        else {
            data = ThingTwo.datamuseRelated;
            winnerName = ThingTwo.name;
        }
        if (data.length <= 0) {
            return null;
        }
        //Creates the first half of response with the winning 'thing'.
        var response = "What " + this.conjugate('does', 'do', winnerName) + " " + winnerName + " make me think of? ";
        //The second half of the response includes a list of related words that are pulled directly
        //from the list of words returned by Datamuse.
        var wordsFound = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].score >= 0) {
                response += data[i].word + ", ";
                wordsFound++;
            }
            if (wordsFound > 4) {
                break;
            }
        }
        if (wordsFound >= 2) {
            response += "the ideas of these things makes me happy!";
            return (response);
        }
        else {
            return null;
        }
    };
    return SimilarMeaningComparer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_comparer__["a" /* AbstractComparer */]));

//# sourceMappingURL=similar_meaning_comparer.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return leftContextComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_comparer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pluralize__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pluralize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pluralize__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var leftContextComparer = /** @class */ (function (_super) {
    __extends(leftContextComparer, _super);
    function leftContextComparer() {
        var _this = _super.call(this) || this;
        _this.lastResponseIndex = -1;
        return _this;
    }
    leftContextComparer.prototype.compare = function (ThingOne, ThingTwo) {
        var winner;
        if (ThingOne.qualIndex > ThingTwo.qualIndex) {
            winner = ThingOne;
        }
        else {
            winner = ThingTwo;
        }
        var response;
        response = null;
        if (winner.datamuseLeftContext.length == 0) {
            return null;
        }
        if (winner.datamuseLeftContext.length > 0) {
            for (var i = 0; i < winner.datamuseLeftContext.length; i++) {
                if (winner.datamuseLeftContext[i].score >= 15000 && winner.datamuseLeftContext[i].tags.length != 0 && winner.datamuseLeftContext[i].tags.indexOf("n") != -1) {
                    var combined = winner.name + " " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.datamuseLeftContext[i].word);
                    var responses = [
                        "I like " + combined + ".",
                        __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].capitalize(winner.name) + "... as in " + combined + "? I like the sound of that.",
                        "I choose " + winner.name + " because I like " + combined + ".",
                        "What could be " + winner.name + "? How about... " + combined + " ? Yeah, that sounds pretty good to me.",
                        "I'll take " + combined + " any day of the week. I pick " + winner.name + "!",
                        "Doesn't " + winner.name + " just make you think of " + combined + "?",
                        "I can't hear " + winner.name + " without thinking " + combined + ".",
                    ];
                    //Picks a response from the array of responses, so long as the response isn't the same as the last random response.
                    var responseIndex = __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].getRandomInt(responses.length);
                    while (responseIndex == this.lastResponseIndex) {
                        responseIndex = __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].getRandomInt(responses.length);
                    }
                    this.lastResponseIndex = responseIndex;
                    response = responses[responseIndex];
                    break;
                }
            }
        }
        return (response);
    };
    return leftContextComparer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_comparer__["a" /* AbstractComparer */]));

//# sourceMappingURL=left_context_comparer.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightContextComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_comparer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pluralize__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pluralize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pluralize__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RightContextComparer = /** @class */ (function (_super) {
    __extends(RightContextComparer, _super);
    function RightContextComparer() {
        var _this = _super.call(this) || this;
        _this.lastResponseIndex = -1;
        return _this;
    }
    RightContextComparer.prototype.compare = function (ThingOne, ThingTwo) {
        var winner;
        if (ThingOne.qualIndex > ThingTwo.qualIndex) {
            winner = ThingOne;
        }
        else {
            winner = ThingTwo;
        }
        if (winner.datamuseModifies != null && winner.datamuseModifies.length <= 0) {
            return null;
        }
        var response;
        for (var i = 0; i < winner.datamuseModifies.length; i++) {
            if (winner.datamuseModifies[i].score >= 0) {
                var combined = winner.datamuseModifies[i].word + " " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.name);
                var responses = [
                    "I like " + combined + ".",
                    "Doesn't " + winner.name + " just make you think of " + combined + "?",
                    "I can't hear " + winner.name + " without thinking " + combined + "."
                ];
                //Picks a response from the array of responses, so long as the response isn't the same as the last random response.
                var responseIndex = __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].getRandomInt(responses.length);
                while (responseIndex == this.lastResponseIndex) {
                    responseIndex = __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].getRandomInt(responses.length);
                }
                this.lastResponseIndex = responseIndex;
                response = responses[responseIndex];
                break;
            }
        }
        return (response);
    };
    return RightContextComparer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_comparer__["a" /* AbstractComparer */]));

//# sourceMappingURL=right_context_comparer.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KindOfComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_comparer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pluralize__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pluralize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pluralize__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var KindOfComparer = /** @class */ (function (_super) {
    __extends(KindOfComparer, _super);
    function KindOfComparer() {
        return _super.call(this) || this;
    }
    KindOfComparer.prototype.compare = function (ThingOne, ThingTwo) {
        var winner;
        if (ThingOne.qualIndex > ThingTwo.qualIndex) {
            winner = ThingOne;
        }
        else {
            winner = ThingTwo;
        }
        var response;
        response = null;
        if (winner.datamuseKindOf.length <= 0 || winner.datamuseKindOf == null) {
            return null;
        }
        var responses;
        var thisKindOf;
        for (var i = 0; i < winner.datamuseKindOf.length; i++) {
            if (winner.datamuseKindOf[i].score >= 0) {
                thisKindOf = winner.datamuseKindOf[i].word;
                responses = [
                    __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].capitalize(Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.name)) + " are my favorite kind of " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(thisKindOf) + ". ",
                    "When considering " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(thisKindOf) + ", I always think of " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.name) + ".",
                    "I really like " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(thisKindOf) + " and " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.name) + " are my favorite!"
                ];
                response = responses[__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].getRandomInt(responses.length)];
                break;
            }
        }
        return (response);
    };
    return KindOfComparer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_comparer__["a" /* AbstractComparer */]));

//# sourceMappingURL=kind_of_comparer.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_comparer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pluralize__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pluralize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pluralize__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * This class makes use of the 'statistically signifciant' call to Datamuses' API. A list of words that
 * are statistically associated with the query word in the same piece of text is returned.
 */
var StatsComparer = /** @class */ (function (_super) {
    __extends(StatsComparer, _super);
    function StatsComparer() {
        var _this = _super.call(this) || this;
        _this.lastResponseIndex = -1; //Tracks the last response.
        return _this;
    }
    StatsComparer.prototype.compare = function (ThingOne, ThingTwo) {
        var winner;
        //Sets data to be the datamuse data from the winning 'thing'.
        if (ThingOne.qualIndex > ThingTwo.qualIndex) {
            winner = ThingOne;
        }
        else {
            winner = ThingTwo;
        }
        var response;
        if (winner.datamuseStats.length <= 0) {
            return null;
        }
        //Takes the highest scoring word and returns it as the most 'statistically significant'.
        if (winner.datamuseStats.length > 0) {
            for (var i = 0; i < winner.datamuseStats.length; i++) {
                if (winner.datamuseStats[i].score >= 0) {
                    var responses = [
                        "You know, when I think of " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.name) + ", I think of " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.datamuseStats[i].word) + ". And I really like thinking of \n            " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.datamuseStats[i].word) + ".",
                        "I just ran the numbers and apparently, " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.name) + " is a trigger word for " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.datamuseStats[i].word) + ". LOVE it.",
                        "I can't hear " + winner.name + " without thinking " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.datamuseStats[i].word) + ". \n            " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.datamuseStats[i].word).charAt(0).toUpperCase() + " " + Object(__WEBPACK_IMPORTED_MODULE_2_pluralize__["plural"])(winner.datamuseStats[i].word).slice(1) + " are my favorite!"
                    ];
                    //Picks a response from the array of responses, so long as the response isn't the same as the last random response.
                    var responseIndex = __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].getRandomInt(responses.length);
                    while (responseIndex == this.lastResponseIndex) {
                        responseIndex = __WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* Utilities */].getRandomInt(responses.length);
                    }
                    this.lastResponseIndex = responseIndex;
                    response = responses[responseIndex];
                    break;
                }
            }
        }
        return (response);
    };
    return StatsComparer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_comparer__["a" /* AbstractComparer */]));

//# sourceMappingURL=stats_comparer.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thingManager; });
/*
The thingManager class stores all of the Thing objects and provides functions to search for Things of a given name
within the array.
 */
var thingManager = /** @class */ (function () {
    function thingManager() {
        this._things = new Array();
    }
    //adds a Thing object to the array of Things
    thingManager.prototype.add = function (thing) {
        this._things.push(thing);
        this._count++;
    };
    //searches the array for a Thing by its name, and returns the Thing if it exists, else returns null
    thingManager.prototype.inThings = function (name) {
        var found = null;
        this._things.forEach(function (Thing, index, array) {
            if (Thing.name.toLowerCase() === name.toLowerCase()) {
                found = Thing;
                return (found);
            }
        });
        return found;
    };
    //iterates the count of how many Things are in the array
    thingManager.prototype.iterateCount = function () {
        this._count++;
    };
    Object.defineProperty(thingManager.prototype, "count", {
        //returns how many Things are in the array
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    //prints all Things in the array for debugging purposes
    thingManager.prototype.printall = function () {
        this._things.forEach(function (Thing) {
        });
    };
    return thingManager;
}());

//# sourceMappingURL=thingManager.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datamuse; });
/* unused harmony export Code */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities__ = __webpack_require__(25);

// wraps the datamuse API to allow easier HTTP requests to datamuse
var Datamuse = /** @class */ (function () {
    function Datamuse() {
    }
    // allows making a request without specifying any optional arguments
    Datamuse.prototype.request = function (means, relatedCode, related) {
        return this.requestWithOptions(means, relatedCode, related, 'enwiki', null, null, null, 15, false, false);
    };
    // make a request with the optional arguments. see datamuse.com for more documentation.
    Datamuse.prototype.requestWithOptions = function (means, relatedCode, related, vocab, topics, leftContext, rightContext, maxResults, includePartsOfSpeech, includeFrequency) {
        // store context to be used inside Promise
        var context = this;
        return new Promise(function (resolve, reject) {
            var params = {
                means: means,
                relatedCode: relatedCode,
                related: related,
                vocab: vocab,
                topics: topics,
                leftContext: leftContext,
                rightContext: rightContext,
                maxResults: maxResults,
                includePartsOfSpeech: includePartsOfSpeech,
                includeFrequency: includeFrequency
            };
            var endpoint = "https://api.datamuse.com/words?" + context.createSuffix(params);
            var request = new XMLHttpRequest();
            request.open('GET', endpoint, true);
            request.onload = function () {
                var data = JSON.parse(this.response);
                // filter removes anything that returns FALSE, so this removes stopwords
                if (data.length > 0) {
                    data = data.filter(context.entryIsNotStopWord);
                    data = data.filter(context.entryIsNotBadWord);
                }
                resolve(data);
            };
            // handle failed http requests (for example, no internet) by returning an empty list,
            // which is also what datamuse returns if it can't find any results.
            request.onerror = function (error) {
                console.log(error);
                resolve([]);
            };
            request.send();
        });
    };
    // format any options passed in to be included in the http request endpoint.
    // see datamuse.com for more documentation on format and what the options mean
    Datamuse.prototype.createSuffix = function (params) {
        var suffix = '';
        if (params.means) {
            suffix += '&ml=' + params.means;
        }
        if (params.relatedCode && params.related) {
            // check that relatedCode is a valid code contained in the RelatedCode enum, then add it.
            if (Object.values(Code.RelatedCode).includes(params.relatedCode)) {
                suffix += '&rel_' + params.relatedCode + '=' + params.related;
            }
        }
        // check that vocab option is a valid vocab code, then add it.
        if (Object.values(Code.VocabCode).includes(params.vocab)) {
            suffix += '&v=' + params.vocab;
        }
        // there can be at most 5 topics passed to datamuse
        if (params.topics != null && params.topics.length >= 1 && params.topics.length <= 5) {
            suffix += '&topics=';
            params.topics.forEach(function (topic, index, array) {
                suffix += topic + ',';
            });
            // remove trailing comma
            suffix = suffix.substr(0, suffix.length - 1);
        }
        if (params.leftContext != null) {
            suffix += '&lc=' + params.leftContext;
        }
        if (params.rightContext != null) {
            suffix += '&rc=' + params.rightContext;
        }
        if (params.maxResults != null && params.maxResults >= 0) {
            suffix += '&max=' + params.maxResults;
        }
        // if needed, add the metadata options as either &md=p, &md=f, or &md=pf
        var p = params.includePartsOfSpeech;
        var f = params.includeFrequency;
        if (p || f) {
            suffix += '&md=' + (p ? 'p' : '') + (f ? 'f' : '');
        }
        // remove the first char of the endpoint suffix so it doesn't have a leading &
        if (suffix.length > 1) {
            suffix = suffix.substr(1);
        }
        return suffix;
    };
    Datamuse.prototype.entryIsNotStopWord = function (element, index, array) {
        return __WEBPACK_IMPORTED_MODULE_0__utilities__["a" /* Utilities */].notStopWord(element.word);
    };
    Datamuse.prototype.entryIsNotBadWord = function (element, index, array) {
        return __WEBPACK_IMPORTED_MODULE_0__utilities__["a" /* Utilities */].notBadWord(element.word);
    };
    return Datamuse;
}());

var Code;
(function (Code) {
    var RelatedCode;
    (function (RelatedCode) {
        RelatedCode["NounsModifiedBy"] = "jja";
        RelatedCode["AdjectivesThatModify"] = "jjb";
        RelatedCode["Synonyms"] = "syn";
        RelatedCode["StatisticallyAssociated"] = "trg";
        RelatedCode["Antonyms"] = "ant";
        RelatedCode["KindOf"] = "spc";
        RelatedCode["MoreGeneralThan"] = "gen";
        RelatedCode["Comprises"] = "com";
        RelatedCode["PartOf"] = "par";
        RelatedCode["FrequentFollowers"] = "bga";
        RelatedCode["FrequentPredecessors"] = "bgb";
        RelatedCode["Rhymes"] = "rhy";
        RelatedCode["AlmostRhymes"] = "nry";
        RelatedCode["Homophones"] = "hom";
        RelatedCode["ConsonantMatch"] = "cns";
    })(RelatedCode = Code.RelatedCode || (Code.RelatedCode = {}));
    var VocabCode;
    (function (VocabCode) {
        VocabCode["Espanol"] = "es";
        VocabCode["EnglishWikipedia"] = "enwiki";
    })(VocabCode = Code.VocabCode || (Code.VocabCode = {}));
})(Code || (Code = {}));
//# sourceMappingURL=datamuse.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map