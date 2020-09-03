(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    /***/ "./$$_lazy_route_resource lazy recursive":
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
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

    /***/ "./src/app/about/about.component.ts":
      /*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
      /*! exports provided: AboutComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AboutComponent",
          function () {
            return AboutComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */ var _carousel_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./carousel-basic */ "./src/app/about/carousel-basic.ts"
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );

        class AboutComponent {
          constructor(http) {
            this.http = http;
          }
          ngOnInit() {}
        }
        AboutComponent.ɵfac = function AboutComponent_Factory(t) {
          return new (t || AboutComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
            )
          );
        };
        AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AboutComponent,
          selectors: [["cmuthyala-about"]],
          decls: 16,
          vars: 0,
          consts: [
            [1, "cs-about-section"],
            [1, "example-large-box"],
            [1, "about-card"],
            [1, "about-title"],
            [1, "about-paragraph"],
            [1, "competencies"],
          ],
          template: function AboutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                0,
                "ngbd-carousel-basic"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "section",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                2,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "mat-card",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "h1",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                5,
                "About Me"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "p",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                7,
                " Results-driven senior software engineer with 5+ years of experience in development and a year of Experience in leading a team of 6 developers to deliver incremental value on multiple projects via an Agile Development Methodology. Expertise at scripting dialects on both client and server side. Capable at creating reusable solutions with object-oriented programming (OOP) concepts, strong understanding of Software Development Life Cycle (SDLC) with the ability to work from scratch in designing and developing web applications. "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "strong",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                11,
                "Competencies"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                12,
                " : Angular 7, ExpressJS, ES6, NodeJS, REST API, PHP, Python, AWS(EC2, S3, IAM, AWS Lambda Serverless, VPC, IaC, Redshift, Apache Airflow, EMR, Athena, and Amazon Glue), MySQL, NoSQL, MongoDB, D3JS, JIRA, Test Driven Development(TDD), Jasmin-Unit testing, Agile Development Methodology, SDLC, Scrum Meetings, Daily standups, Documenting the work. "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                15,
                " => Team Lead, Hackathon Winner, Online Certifications, Linkedin Recommendations. "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _carousel_basic__WEBPACK_IMPORTED_MODULE_2__["NgbdCarouselBasic"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"],
          ],
          styles: [
            ".example-large-box[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-right: 20%;\n  margin-left: 10%;\n  height: 25rem;\n  background: linear-gradient(90deg, #eeaeca 36%, #94c0e9 36%);\n  border-radius: 15px;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0px;\n}\n\n.about-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-top: -20rem;\n  margin-right: 10%;\n  margin-left: 15%;\n  border-radius: 15px;\n  margin-bottom: 1rem;\n}\n\n.about-paragraph[_ngcontent-%COMP%] {\n  padding: 0rem 0.5rem 2rem 0.5rem;\n  line-height: 1.5rem;\n  font-size: 1rem;\n}\n\n.about-title[_ngcontent-%COMP%] {\n  font-family: cursive;\n  letter-spacing: 1px;\n  line-height: normal;\n  font-size: 2.5rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n.cs-about-section[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBS0YiLCJmaWxlIjoiYXBwcy9wb3J0Zm9saW8vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWxhcmdlLWJveCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBoZWlnaHQ6IDI1cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlZWFlY2EgMzYlLCAjOTRjMGU5IDM2JSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4ubWF0LWNhcmQtc3VidGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmFib3V0LWNhcmQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMjByZW07XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmFib3V0LXBhcmFncmFwaCB7XG4gIHBhZGRpbmc6IDByZW0gMC41cmVtIDJyZW0gMC41cmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5hYm91dC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNzLWFib3V0LXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIC8vIGJhY2tncm91bmQ6ICMwMDQxNmE7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gIC8vICAgdG8gcmlnaHQsXG4gIC8vICAgI2U0ZTVlNixcbiAgLy8gICAjMDA0MTZhXG4gIC8vICk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgLy8gICB0byByaWdodCxcbiAgLy8gICAjZTRlNWU2LFxuICAvLyAgICMwMDQxNmFcbiAgLy8gKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuIl19 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AboutComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-about",
                    templateUrl: "./about.component.html",
                    styleUrls: ["./about.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                      "HttpClient"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/about/carousel-basic.module.ts":
      /*!************************************************!*\
  !*** ./src/app/about/carousel-basic.module.ts ***!
  \************************************************/
      /*! exports provided: NgbdCarouselBasicModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "NgbdCarouselBasicModule",
          function () {
            return NgbdCarouselBasicModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */ var _carousel_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./carousel-basic */ "./src/app/about/carousel-basic.ts"
        );

        class NgbdCarouselBasicModule {}
        NgbdCarouselBasicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: NgbdCarouselBasicModule,
          bootstrap: [
            _carousel_basic__WEBPACK_IMPORTED_MODULE_3__["NgbdCarouselBasic"],
          ],
        });
        NgbdCarouselBasicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function NgbdCarouselBasicModule_Factory(t) {
            return new (t || NgbdCarouselBasicModule)();
          },
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
                "BrowserModule"
              ],
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                "NgbModule"
              ],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵsetNgModuleScope"
            ](NgbdCarouselBasicModule, {
              declarations: [
                _carousel_basic__WEBPACK_IMPORTED_MODULE_3__[
                  "NgbdCarouselBasic"
                ],
              ],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
                  "BrowserModule"
                ],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                  "NgbModule"
                ],
              ],
              exports: [
                _carousel_basic__WEBPACK_IMPORTED_MODULE_3__[
                  "NgbdCarouselBasic"
                ],
              ],
            });
        })();
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            NgbdCarouselBasicModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
                        "BrowserModule"
                      ],
                      _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
                        "NgbModule"
                      ],
                    ],
                    declarations: [
                      _carousel_basic__WEBPACK_IMPORTED_MODULE_3__[
                        "NgbdCarouselBasic"
                      ],
                    ],
                    exports: [
                      _carousel_basic__WEBPACK_IMPORTED_MODULE_3__[
                        "NgbdCarouselBasic"
                      ],
                    ],
                    bootstrap: [
                      _carousel_basic__WEBPACK_IMPORTED_MODULE_3__[
                        "NgbdCarouselBasic"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/about/carousel-basic.ts":
      /*!*****************************************!*\
  !*** ./src/app/about/carousel-basic.ts ***!
  \*****************************************/
      /*! exports provided: NgbdCarouselBasic */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "NgbdCarouselBasic",
          function () {
            return NgbdCarouselBasic;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js"
        );

        function NgbdCarouselBasic_ngb_carousel_1_ng_template_1_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              1,
              "img",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "div",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              4,
              "Hackathon (Hack U7), 2019"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              6,
              " Developed a "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "strong"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              8,
              "Realtor 3D-View Mobile App"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " for ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              10,
              "i"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              11,
              "a",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              12,
              " Dominion Enterprises"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"](
              "src",
              ctx_r1.images[0],
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
            );
          }
        }
        function NgbdCarouselBasic_ngb_carousel_1_ng_template_2_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              1,
              "img",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              2,
              "div",
              5
            );
          }
          if (rf & 2) {
            const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"](
              "src",
              ctx_r2.images[1],
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
            );
          }
        }
        function NgbdCarouselBasic_ngb_carousel_1_ng_template_3_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              1,
              "img",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "div",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              4,
              "Hackathon (Hack U7), 2019"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              6,
              " Developed a "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "strong"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              8,
              "Google Home Assistant"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " for ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              10,
              "i"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              11,
              "a",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              12,
              " Dominion Enterprises"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"](
              "src",
              ctx_r3.images[2],
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
            );
          }
        }
        function NgbdCarouselBasic_ngb_carousel_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "ngb-carousel",
              1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              1,
              NgbdCarouselBasic_ngb_carousel_1_ng_template_1_Template,
              13,
              1,
              "ng-template",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              NgbdCarouselBasic_ngb_carousel_1_ng_template_2_Template,
              3,
              1,
              "ng-template",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              NgbdCarouselBasic_ngb_carousel_1_ng_template_3_Template,
              13,
              1,
              "ng-template",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "showNavigationArrows",
              ctx_r0.showNavigationArrows
            )("showNavigationIndicators", ctx_r0.showNavigationIndicators);
          }
        }
        class NgbdCarouselBasic {
          constructor() {
            this.showNavigationArrows = false;
            this.showNavigationIndicators = true;
            this.images = [
              `./assets/carousal-image1.jpeg`,
              `./assets/carousal-image5.jpeg`,
              `./assets/carousal-image3.jpeg`,
            ];
          }
        }
        NgbdCarouselBasic.ɵfac = function NgbdCarouselBasic_Factory(t) {
          return new (t || NgbdCarouselBasic)();
        };
        NgbdCarouselBasic.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: NgbdCarouselBasic,
          selectors: [["ngbd-carousel-basic"]],
          decls: 2,
          vars: 1,
          consts: [
            [3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"],
            [3, "showNavigationArrows", "showNavigationIndicators"],
            ["ngbSlide", ""],
            [1, "picsum-img-wrapper"],
            ["alt", "Random first slide", 1, "carousel-img", 3, "src"],
            [1, "carousel-caption"],
            [
              "href",
              "https://www.dominionenterprises.com/",
              "target",
              "_blank",
              1,
              "linkStyle",
            ],
            ["alt", "Random second slide", 1, "carousel-img", 3, "src"],
            ["alt", "Random third slide", 1, "carousel-img", 3, "src"],
          ],
          template: function NgbdCarouselBasic_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                1,
                NgbdCarouselBasic_ngb_carousel_1_Template,
                4,
                2,
                "ngb-carousel",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.images
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__[
              "NgbCarousel"
            ],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"],
          ],
          styles: [
            ".carousel-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15%;\n  bottom: 0.1rem;\n  left: 15%;\n  z-index: 10;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  color: #fff;\n  text-align: center;\n}\n\n.linkStyle[_ngcontent-%COMP%] {\n  color: white;\n  font-style: italic;\n  text-align: center;\n  text-decoration: underline;\n  cursor: pointer;\n  font-weight: 900;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0rem 0rem 1rem 0rem;\n  font-size: 1rem;\n}\n\n@media only screen and (max-width: 600px) {\n  p[_ngcontent-%COMP%] {\n    margin: 0rem 0rem 0.5rem 0rem;\n    font-size: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvYWJvdXQvY2Fyb3VzZWwtYmFzaWMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VBS0Y7QUFDRiIsImZpbGUiOiJhcHBzL3BvcnRmb2xpby9zcmMvYXBwL2Fib3V0L2Nhcm91c2VsLWJhc2ljLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1JTtcbiAgYm90dG9tOiAwLjFyZW07XG4gIGxlZnQ6IDE1JTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5saW5rU3R5bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogOTAwO1xufVxucCB7XG4gIG1hcmdpbjogMHJlbSAwcmVtIDFyZW0gMHJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBwIHtcbiAgICBtYXJnaW46IDByZW0gMHJlbSAwLjVyZW0gMHJlbTtcbiAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgfVxufVxuIl19 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            NgbdCarouselBasic,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ngbd-carousel-basic",
                    templateUrl: "./carousel-basic.html",
                    styleUrls: ["./carousel-basic.scss"],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/app.component.ts":
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppComponent",
          function () {
            return AppComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _services_color_scheme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./services/color-scheme.service */ "./src/app/services/color-scheme.service.ts"
        );
        /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./home/home.component */ "./src/app/home/home.component.ts"
        );

        class AppComponent {
          constructor(colorSchemeService) {
            this.colorSchemeService = colorSchemeService;
            this.title = "portfolio";
            // Load Color Scheme
            console.log(this.colorSchemeService.currentActive());
            this.colorSchemeService.update("dark");
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _services_color_scheme_service__WEBPACK_IMPORTED_MODULE_1__[
                "ColorSchemeService"
              ]
            )
          );
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AppComponent,
          selectors: [["cmuthyala-root"]],
          decls: 2,
          vars: 0,
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                1,
                "cmuthyala-home"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BvcnRmb2xpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-root",
                    templateUrl: "./app.component.html",
                    styleUrls: ["./app.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _services_color_scheme_service__WEBPACK_IMPORTED_MODULE_1__[
                      "ColorSchemeService"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/app.module.ts":
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppModule",
          function () {
            return AppModule;
          }
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js"
        );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js"
        );
        /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js"
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/grid-list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
        );
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
        );
        /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js"
        );
        /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
        );
        /* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @angular/material/stepper */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! @angular/material/snack-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js"
        );
        /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! @angular/material/sidenav */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js"
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./app.component */ "./src/app/app.component.ts"
        );
        /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./home/home.component */ "./src/app/home/home.component.ts"
        );
        /* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./experience/experience.component */ "./src/app/experience/experience.component.ts"
        );
        /* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./education/education.component */ "./src/app/education/education.component.ts"
        );
        /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./about/about.component */ "./src/app/about/about.component.ts"
        );
        /* harmony import */ var _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./certifications/certifications.component */ "./src/app/certifications/certifications.component.ts"
        );
        /* harmony import */ var _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./testimonies/testimonies.component */ "./src/app/testimonies/testimonies.component.ts"
        );
        /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./footer/footer.component */ "./src/app/footer/footer.component.ts"
        );
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./header/header.component */ "./src/app/header/header.component.ts"
        );
        /* harmony import */ var _thank_you_note_thank_you_note_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./thank-you-note/thank-you-note.component */ "./src/app/thank-you-note/thank-you-note.component.ts"
        );
        /* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts"
        );
        /* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./projects/projects.component */ "./src/app/projects/projects.component.ts"
        );
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js"
        );
        /* harmony import */ var _about_carousel_basic_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./about/carousel-basic.module */ "./src/app/about/carousel-basic.module.ts"
        );
        /* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./social-media/social-media.component */ "./src/app/social-media/social-media.component.ts"
        );
        /* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! @angular/google-maps */ "../../node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js"
        );

        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineNgModule"
        ]({
          type: AppModule,
          bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
          ],
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                "BrowserModule"
              ],
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__[
                "BrowserAnimationsModule"
              ],
              _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__[
                "MatTabsModule"
              ],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__[
                "MatIconModule"
              ],
              _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__[
                "MatToolbarModule"
              ],
              _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__[
                "MatSlideToggleModule"
              ],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_6__[
                "MatCardModule"
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_7__[
                "MatButtonModule"
              ],
              _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__[
                "MatGridListModule"
              ],
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__[
                "NgbModule"
              ],
              _about_carousel_basic_module__WEBPACK_IMPORTED_MODULE_32__[
                "NgbdCarouselBasicModule"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_9__[
                "ReactiveFormsModule"
              ],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__[
                "MatFormFieldModule"
              ],
              _angular_material_input__WEBPACK_IMPORTED_MODULE_11__[
                "MatInputModule"
              ],
              _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__[
                "MatDividerModule"
              ],
              _angular_material_list__WEBPACK_IMPORTED_MODULE_13__[
                "MatListModule"
              ],
              _angular_google_maps__WEBPACK_IMPORTED_MODULE_34__[
                "GoogleMapsModule"
              ],
              _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__[
                "MatStepperModule"
              ],
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__[
                "MatSnackBarModule"
              ],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_15__[
                "HttpClientModule"
              ],
              _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__[
                "MatSidenavModule"
              ],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵsetNgModuleScope"
            ](AppModule, {
              declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__[
                  "HomeComponent"
                ],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_20__[
                  "ExperienceComponent"
                ],
                _education_education_component__WEBPACK_IMPORTED_MODULE_21__[
                  "EducationComponent"
                ],
                _about_about_component__WEBPACK_IMPORTED_MODULE_22__[
                  "AboutComponent"
                ],
                _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_23__[
                  "CertificationsComponent"
                ],
                _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_24__[
                  "TestimoniesComponent"
                ],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__[
                  "FooterComponent"
                ],
                _header_header_component__WEBPACK_IMPORTED_MODULE_26__[
                  "HeaderComponent"
                ],
                _thank_you_note_thank_you_note_component__WEBPACK_IMPORTED_MODULE_27__[
                  "ThankYouNoteComponent"
                ],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_28__[
                  "ContactFormComponent"
                ],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_29__[
                  "ProjectsComponent"
                ],
                _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_33__[
                  "SocialMediaComponent"
                ],
              ],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                  "BrowserModule"
                ],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__[
                  "BrowserAnimationsModule"
                ],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__[
                  "MatTabsModule"
                ],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__[
                  "MatIconModule"
                ],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__[
                  "MatToolbarModule"
                ],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__[
                  "MatSlideToggleModule"
                ],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__[
                  "MatCardModule"
                ],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__[
                  "MatButtonModule"
                ],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__[
                  "MatGridListModule"
                ],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__[
                  "NgbModule"
                ],
                _about_carousel_basic_module__WEBPACK_IMPORTED_MODULE_32__[
                  "NgbdCarouselBasicModule"
                ],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__[
                  "ReactiveFormsModule"
                ],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__[
                  "MatFormFieldModule"
                ],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__[
                  "MatInputModule"
                ],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__[
                  "MatDividerModule"
                ],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__[
                  "MatListModule"
                ],
                _angular_google_maps__WEBPACK_IMPORTED_MODULE_34__[
                  "GoogleMapsModule"
                ],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__[
                  "MatStepperModule"
                ],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__[
                  "MatSnackBarModule"
                ],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__[
                  "HttpClientModule"
                ],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__[
                  "MatSidenavModule"
                ],
              ],
              exports: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__[
                  "HomeComponent"
                ],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_20__[
                  "ExperienceComponent"
                ],
                _education_education_component__WEBPACK_IMPORTED_MODULE_21__[
                  "EducationComponent"
                ],
                _about_about_component__WEBPACK_IMPORTED_MODULE_22__[
                  "AboutComponent"
                ],
                _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_23__[
                  "CertificationsComponent"
                ],
                _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_24__[
                  "TestimoniesComponent"
                ],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__[
                  "FooterComponent"
                ],
                _header_header_component__WEBPACK_IMPORTED_MODULE_26__[
                  "HeaderComponent"
                ],
                _thank_you_note_thank_you_note_component__WEBPACK_IMPORTED_MODULE_27__[
                  "ThankYouNoteComponent"
                ],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_28__[
                  "ContactFormComponent"
                ],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_29__[
                  "ProjectsComponent"
                ],
              ],
            });
        })();
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [
                  {
                    declarations: [
                      _app_component__WEBPACK_IMPORTED_MODULE_18__[
                        "AppComponent"
                      ],
                      _home_home_component__WEBPACK_IMPORTED_MODULE_19__[
                        "HomeComponent"
                      ],
                      _experience_experience_component__WEBPACK_IMPORTED_MODULE_20__[
                        "ExperienceComponent"
                      ],
                      _education_education_component__WEBPACK_IMPORTED_MODULE_21__[
                        "EducationComponent"
                      ],
                      _about_about_component__WEBPACK_IMPORTED_MODULE_22__[
                        "AboutComponent"
                      ],
                      _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_23__[
                        "CertificationsComponent"
                      ],
                      _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_24__[
                        "TestimoniesComponent"
                      ],
                      _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__[
                        "FooterComponent"
                      ],
                      _header_header_component__WEBPACK_IMPORTED_MODULE_26__[
                        "HeaderComponent"
                      ],
                      _thank_you_note_thank_you_note_component__WEBPACK_IMPORTED_MODULE_27__[
                        "ThankYouNoteComponent"
                      ],
                      _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_28__[
                        "ContactFormComponent"
                      ],
                      _projects_projects_component__WEBPACK_IMPORTED_MODULE_29__[
                        "ProjectsComponent"
                      ],
                      _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_33__[
                        "SocialMediaComponent"
                      ],
                    ],
                    imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                        "BrowserModule"
                      ],
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__[
                        "BrowserAnimationsModule"
                      ],
                      _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__[
                        "MatTabsModule"
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__[
                        "MatIconModule"
                      ],
                      _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__[
                        "MatToolbarModule"
                      ],
                      _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__[
                        "MatSlideToggleModule"
                      ],
                      _angular_material_card__WEBPACK_IMPORTED_MODULE_6__[
                        "MatCardModule"
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_7__[
                        "MatButtonModule"
                      ],
                      _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__[
                        "MatGridListModule"
                      ],
                      _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__[
                        "NgbModule"
                      ],
                      _about_carousel_basic_module__WEBPACK_IMPORTED_MODULE_32__[
                        "NgbdCarouselBasicModule"
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_9__[
                        "ReactiveFormsModule"
                      ],
                      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__[
                        "MatFormFieldModule"
                      ],
                      _angular_material_input__WEBPACK_IMPORTED_MODULE_11__[
                        "MatInputModule"
                      ],
                      _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__[
                        "MatDividerModule"
                      ],
                      _angular_material_list__WEBPACK_IMPORTED_MODULE_13__[
                        "MatListModule"
                      ],
                      _angular_google_maps__WEBPACK_IMPORTED_MODULE_34__[
                        "GoogleMapsModule"
                      ],
                      _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__[
                        "MatStepperModule"
                      ],
                      _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__[
                        "MatSnackBarModule"
                      ],
                      _angular_common_http__WEBPACK_IMPORTED_MODULE_15__[
                        "HttpClientModule"
                      ],
                      _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__[
                        "MatSidenavModule"
                      ],
                    ],
                    providers: [],
                    bootstrap: [
                      _app_component__WEBPACK_IMPORTED_MODULE_18__[
                        "AppComponent"
                      ],
                    ],
                    exports: [
                      _home_home_component__WEBPACK_IMPORTED_MODULE_19__[
                        "HomeComponent"
                      ],
                      _experience_experience_component__WEBPACK_IMPORTED_MODULE_20__[
                        "ExperienceComponent"
                      ],
                      _education_education_component__WEBPACK_IMPORTED_MODULE_21__[
                        "EducationComponent"
                      ],
                      _about_about_component__WEBPACK_IMPORTED_MODULE_22__[
                        "AboutComponent"
                      ],
                      _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_23__[
                        "CertificationsComponent"
                      ],
                      _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_24__[
                        "TestimoniesComponent"
                      ],
                      _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__[
                        "FooterComponent"
                      ],
                      _header_header_component__WEBPACK_IMPORTED_MODULE_26__[
                        "HeaderComponent"
                      ],
                      _thank_you_note_thank_you_note_component__WEBPACK_IMPORTED_MODULE_27__[
                        "ThankYouNoteComponent"
                      ],
                      _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_28__[
                        "ContactFormComponent"
                      ],
                      _projects_projects_component__WEBPACK_IMPORTED_MODULE_29__[
                        "ProjectsComponent"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/certifications/certifications.component.ts":
      /*!************************************************************!*\
  !*** ./src/app/certifications/certifications.component.ts ***!
  \************************************************************/
      /*! exports provided: CertificationsComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CertificationsComponent",
          function () {
            return CertificationsComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );
        /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );

        function CertificationsComponent_ng_container_47_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              1,
              "mat-divider",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              4,
              "div",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              6,
              "MEAN stack"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              8,
              "Udemy, Issued on August 2019, Credential ID: UC-U0Q0G9DN "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              9,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              10,
              "a",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              11,
              "See credential"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              12,
              "mat-divider",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              14,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              15,
              "div",
              16
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              16,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              17,
              "Gold Badge SQL"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              18,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              19,
              "HackerRank, Issued on August 2019 "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              20,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              21,
              "a",
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              22,
              "See credential"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              23,
              "mat-divider",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              25,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              26,
              "div",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              27,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              28,
              "Data Engineering Nanodegree"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              29,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              30,
              "Udacity, Issued on April 2019, Credential ID: E9AU43CU "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              31,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              32,
              "a",
              19
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              33,
              "See credential"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              34,
              "mat-divider",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              36,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              37,
              "div",
              20
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              38,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              39,
              "Introduction to Data Science in Python "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              40,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              41,
              "Coursera, By University of Michigan(Grade Achieved: 90.0%), Issued on March 2017 "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              42,
              "mat-divider",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              44,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              45,
              "div",
              20
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              46,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              47,
              "Python Data Structures "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              48,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              49,
              "Coursera, By University of Michigan(Grade Achieved: 100.0%), Issued on January 2017 "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              50,
              "mat-divider",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              52,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              53,
              "div",
              20
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              54,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              55,
              "Using Python to Access Web Data "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              56,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              57,
              "Coursera, By University of Michigan(Grade Achieved: 98.4%) , Issued on November 2016 "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              58,
              "mat-divider",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              60,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              61,
              "div",
              20
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              62,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              63,
              "Using Databases with Python"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              64,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              65,
              "Coursera, By University of Michigan(Grade Achieved: 98.9%), Issued on December 2016 "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              66,
              "mat-divider",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              68,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              69,
              "div",
              21
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              70,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              71,
              "Certificate of Completion: Python Course"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              72,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              73,
              "SoloLearn, Issued on November 2016, Credential ID: 1073-2777149 "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              74,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              75,
              "a",
              22
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              76,
              "See credential"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              77,
              "mat-divider",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              79,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              80,
              "div",
              23
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              81,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              82,
              "HTML5 Animated Image Gallery"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              83,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              84,
              "Eduonix Learning Solutions Pvt Ltd, Issued on May 2016, Credential ID: d163249f2d "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              85,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              86,
              "a",
              24
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              87,
              "See credential"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "inset",
              true
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "inset",
              true
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "inset",
              true
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "inset",
              true
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "inset",
              true
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "inset",
              true
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "inset",
              true
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "inset",
              true
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "inset",
              true
            );
          }
        }
        class CertificationsComponent {
          constructor() {
            this.isCollapsed = false;
            this.certToggleText = "...show more";
            this.certToggleIcon = "expand_more";
          }
          ngOnInit() {}
          toggleViewMore() {
            this.isCollapsed = !this.isCollapsed;
            this.certToggleText = this.isCollapsed
              ? "show less"
              : "...show more";
            this.certToggleIcon = this.isCollapsed
              ? "expand_less"
              : "expand_more";
          }
        }
        CertificationsComponent.ɵfac = function CertificationsComponent_Factory(
          t
        ) {
          return new (t || CertificationsComponent)();
        };
        CertificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: CertificationsComponent,
          selectors: [["cmuthyala-certifications"]],
          decls: 51,
          vars: 5,
          consts: [
            [1, "cm-cert-section"],
            [1, "cm-cert-main-div"],
            [1, "cert-title"],
            [1, "example-card"],
            ["mat-card-avatar", "", 1, "comptia-header-image"],
            [
              "href",
              "http://www.linkedin.com/learning/google-cloud-platform-essential-training-3?trk=flagship-lil_details_certification",
              "target",
              "_blank",
            ],
            [3, "inset"],
            ["mat-card-avatar", "", 1, "aws-header-image"],
            [
              "href",
              "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=S6bcLuyvAEaj2zWdKXkHTQ2",
              "target",
              "_blank",
            ],
            [
              "href",
              "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=y4CRFEispUS_2v3E8LXblw2",
              "target",
              "_blank",
            ],
            ["mat-card-avatar", "", 1, "udemy-header-image"],
            [
              "href",
              "https://www.udemy.com/certificate/UC-W28IW9HK/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email",
              "target",
              "_blank",
            ],
            [4, "ngIf"],
            [1, "seeMoreDiv"],
            [1, "seeMoreLink", 3, "click"],
            [
              "href",
              "https://www.udemy.com/certificate/UC-U0Q0G9DN/",
              "target",
              "_blank",
            ],
            ["mat-card-avatar", "", 1, "hackerrank-header-image"],
            [
              "href",
              "https://www.hackerrank.com/mchandrasekharr1",
              "target",
              "_blank",
            ],
            ["mat-card-avatar", "", 1, "udacity-header-image"],
            [
              "href",
              "https://confirm.udacity.com/E9AU43CU",
              "target",
              "_blank",
            ],
            ["mat-card-avatar", "", 1, "coursera-header-image"],
            ["mat-card-avatar", "", 1, "sololearn-header-image"],
            [
              "href",
              "http://www.sololearn.com/Profile/2777149/",
              "target",
              "_blank",
            ],
            ["mat-card-avatar", "", 1, "eduonix-header-image"],
            [
              "href",
              "https://www.eduonix.com/certificate/d163249f2d",
              "target",
              "_blank",
            ],
          ],
          template: function CertificationsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h1",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "Certifications"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "mat-card",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                6,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                8,
                "Google Cloud Platform Essential Training"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                10,
                "CompTIA, Issued on November 2019, Credential ID:AcZdHpPbzwgWvNFnn0buBN2yCEXG "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "a",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                13,
                "See credential"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                14,
                "mat-divider",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                17,
                "div",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                19,
                "Introduction to Amazon API Gateway"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                21,
                "Amazon Web Services (AWS), Issued on September 2019, Credential ID:S6bcLuyvAEaj2zWdKXkHTQ2 "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "a",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                24,
                "See credential"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                25,
                "mat-divider",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                28,
                "div",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                29,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                30,
                "Introduction to Amazon ElastiCache"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                31,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                32,
                "Amazon Web Services (AWS), Issued on September 2019, Credential ID: y4CRFEispUS_2v3E8LXblw2 "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                33,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                34,
                "a",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                35,
                "See credential"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                36,
                "mat-divider",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                38,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                39,
                "div",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                40,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                41,
                "Web Design for Web Developers: Build Beautiful Websites!"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                42,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                43,
                "Udemy, Issued on September 2019, Credential ID: UC-W28IW9HK "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                44,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                45,
                "a",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                46,
                "See credential "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                47,
                CertificationsComponent_ng_container_47_Template,
                88,
                9,
                "ng-container",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                48,
                "div",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                49,
                "a",
                14
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function CertificationsComponent_Template_a_click_49_listener() {
                  return ctx.toggleViewMore();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "inset",
                true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "inset",
                true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "inset",
                true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.isCollapsed == true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                "",
                ctx.certToggleText,
                " "
              );
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardHeader"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardAvatar"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardSubtitle"
            ],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__[
              "MatDivider"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"],
          ],
          styles: [
            '.aws-header-image[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C4D0BAQGzuSBRRRuphw/company-logo_100_100/0?e=1606348800&v=beta&t=rpWlFUkYYQhzYCpHLek-N0rDYS8rTFLEkd4NJ4Y4x1s");\n  background-size: cover;\n}\n\n.comptia-header-image[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C560BAQERAz2JBkUHzw/company-logo_100_100/0?e=1606348800&v=beta&t=tPlaEE9fxaYSqimX7HNReR9wRzAX98maANzkH_n00jo");\n  background-size: cover;\n}\n\n.udemy-header-image[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C560BAQH0VNXBrdkklA/company-logo_100_100/0?e=1606348800&v=beta&t=49RhGZRxHDkRo3OkijZbZcisKJ9MWcR6lX8pAwH2h0o");\n  background-size: cover;\n}\n\n.hackerrank-header-image[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C560BAQHli6etYJTCrA/company-logo_100_100/0?e=1606348800&v=beta&t=ExDI961K-gQsEXZhWSL2qAaBJHiQCTUd8GSafRbUJIU");\n  background-size: cover;\n}\n\n.udacity-header-image[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C560BAQGSBVNHbqKIdA/company-logo_100_100/0?e=1606348800&v=beta&t=pkSDwNg9-t0x76TtdsNdWoVMeugN69gkPMwxDb5QyOs");\n  background-size: cover;\n}\n\n.coursera-header-image[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C4E0BAQGt72dvhq4yRA/company-logo_100_100/0?e=1606348800&v=beta&t=jTS6RyqIFzsmWlgoweNnjW7t9p5RiJ0mDCsWULx0TYg");\n  background-size: cover;\n}\n\n.sololearn-header-image[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C4E0BAQHXcZlXhNCAJg/company-logo_100_100/0?e=1606348800&v=beta&t=Vjd5t3vrQkeQpsUkdmGq9msyVbyhdS1tXBJLtBilEKU");\n  background-size: cover;\n}\n\n.eduonix-header-image[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C510BAQFkPgJZqd7XKw/company-logo_100_100/0?e=1606348800&v=beta&t=lelImTapwxhrhP3FoqVj9ykH-mZQy_tNsDPkOD9L7yA");\n  background-size: cover;\n}\n\n.seeMoreLink[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  cursor: pointer;\n  font-style: italic;\n}\n\n.cm-cert-section[_ngcontent-%COMP%] {\n  padding: 1% 10%;\n}\n\n.cm-cert-main-div[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.cert-title[_ngcontent-%COMP%] {\n  font-family: cursive;\n  letter-spacing: 1.5px;\n  line-height: normal;\n  font-size: 2.5rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvY2VydGlmaWNhdGlvbnMvY2VydGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0S0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw0S0FBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSw0S0FBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSw0S0FBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSw0S0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSw0S0FBQTtFQUNBLHNCQUFBO0FBSUY7O0FBRkE7RUFDRSw0S0FBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBSEE7RUFDRSw0S0FBQTtFQUNBLHNCQUFBO0FBTUY7O0FBSkE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtBQVFGOztBQU5BO0VBQ0Usc0JBQUE7QUFTRjs7QUFQQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVVGOztBQVJBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQVdGIiwiZmlsZSI6ImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvY2VydGlmaWNhdGlvbnMvY2VydGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXdzLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tZWRpYS1leHAxLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzREMEJBUUd6dVNCUlJSdXBody9jb21wYW55LWxvZ29fMTAwXzEwMC8wP2U9MTYwNjM0ODgwMCZ2PWJldGEmdD1ycFdsRlVrWVlRaHpZQ3BITGVrLU4wckRZUzhyVEZMRWtkNE5KNFk0eDFzJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29tcHRpYS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWVkaWEtZXhwMS5saWNkbi5jb20vZG1zL2ltYWdlL0M1NjBCQVFFUkF6MkpCa1VIencvY29tcGFueS1sb2dvXzEwMF8xMDAvMD9lPTE2MDYzNDg4MDAmdj1iZXRhJnQ9dFBsYUVFOWZ4YVlTcWltWDdITlJlUjl3UnpBWDk4bWFBTnprSF9uMDBqbycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udWRlbXktaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21lZGlhLWV4cDEubGljZG4uY29tL2Rtcy9pbWFnZS9DNTYwQkFRSDBWTlhCcmRra2xBL2NvbXBhbnktbG9nb18xMDBfMTAwLzA/ZT0xNjA2MzQ4ODAwJnY9YmV0YSZ0PTQ5UmhHWlJ4SERrUm8zT2tpalpiWmNpc0tKOU1XY1I2bFg4cEF3SDJoMG8nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhhY2tlcnJhbmstaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21lZGlhLWV4cDEubGljZG4uY29tL2Rtcy9pbWFnZS9DNTYwQkFRSGxpNmV0WUpUQ3JBL2NvbXBhbnktbG9nb18xMDBfMTAwLzA/ZT0xNjA2MzQ4ODAwJnY9YmV0YSZ0PUV4REk5NjFLLWdRc0VYWmhXU0wycUFhQkpIaVFDVFVkOEdTYWZSYlVKSVUnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi51ZGFjaXR5LWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tZWRpYS1leHAxLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzU2MEJBUUdTQlZOSGJxS0lkQS9jb21wYW55LWxvZ29fMTAwXzEwMC8wP2U9MTYwNjM0ODgwMCZ2PWJldGEmdD1wa1NEd05nOS10MHg3NlR0ZHNOZFdvVk1ldWdONjlna1BNd3hEYjVReU9zJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY291cnNlcmEtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21lZGlhLWV4cDEubGljZG4uY29tL2Rtcy9pbWFnZS9DNEUwQkFRR3Q3MmR2aHE0eVJBL2NvbXBhbnktbG9nb18xMDBfMTAwLzA/ZT0xNjA2MzQ4ODAwJnY9YmV0YSZ0PWpUUzZSeXFJRnpzbVdsZ293ZU5ualc3dDlwNVJpSjBtRENzV1VMeDBUWWcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5zb2xvbGVhcm4taGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21lZGlhLWV4cDEubGljZG4uY29tL2Rtcy9pbWFnZS9DNEUwQkFRSFhjWmxYaE5DQUpnL2NvbXBhbnktbG9nb18xMDBfMTAwLzA/ZT0xNjA2MzQ4ODAwJnY9YmV0YSZ0PVZqZDV0M3ZyUWtlUXBzVWtkbUdxOW1zeVZieWhkUzF0WEJKTHRCaWxFS1UnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5lZHVvbml4LWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tZWRpYS1leHAxLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzUxMEJBUUZrUGdKWnFkN1hLdy9jb21wYW55LWxvZ29fMTAwXzEwMC8wP2U9MTYwNjM0ODgwMCZ2PWJldGEmdD1sZWxJbVRhcHd4aHJoUDNGb3FWajl5a0gtbVpReV90TnNEUGtPRDlMN3lBJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2VlTW9yZUxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY20tY2VydC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMSUgMTAlO1xufVxuLmNtLWNlcnQtbWFpbi1kaXYge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLmNlcnQtdGl0bGUge1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuIl19 */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            CertificationsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-certifications",
                    templateUrl: "./certifications.component.html",
                    styleUrls: ["./certifications.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/contact-form/contact-form.component.ts":
      /*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
      /*! exports provided: ContactFormComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ContactFormComponent",
          function () {
            return ContactFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/snack-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js"
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
        );
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
        );
        /* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/cdk/text-field */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js"
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );

        class ContactFormComponent {
          constructor(fb, _snackBar) {
            this.fb = fb;
            this._snackBar = _snackBar;
          }
          ngOnInit() {
            this.myForm = this.fb.group({
              name: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
              email: [
                "",
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .email,
                ],
              ],
              message: [
                "",
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].minLength(15),
                ],
              ],
            });
          }
          onSubmit(form) {
            if (this.myForm.valid) {
              this.myForm.reset();
              this._snackBar.open(
                "Your response is successfully submitted!",
                "OK",
                {
                  duration: 5000,
                }
              );
            }
          }
        }
        ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) {
          return new (t || ContactFormComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__[
                "MatSnackBar"
              ]
            )
          );
        };
        ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ContactFormComponent,
          selectors: [["cmuthyala-contact-form"]],
          decls: 24,
          vars: 2,
          consts: [
            [1, "contact-form-section"],
            [1, "contact-title"],
            [1, "mat-card-form"],
            [3, "formGroup"],
            [1, "example-container"],
            ["appearance", "fill"],
            [
              "matInput",
              "",
              "placeholder",
              "Robert Downey",
              "formControlName",
              "name",
              "required",
              "",
            ],
            [
              "matInput",
              "",
              "placeholder",
              "pat@example.com",
              "formControlName",
              "email",
              "required",
              "",
            ],
            [1, "example-full-width"],
            [
              "cdkTextareaAutosize",
              "",
              "cdkAutosizeMinRows",
              "5",
              "matInput",
              "",
              "placeholder",
              "Ex. It makes me feel...",
              "formControlName",
              "message",
            ],
            [1, "example-button-row"],
            ["mat-button", "", "color", "primary", 3, "disabled", "click"],
            [1, "contact-help-text"],
          ],
          template: function ContactFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "h1",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                "Contact me here"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "mat-card",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "form",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "mat-form-field",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                8,
                "Enter your Name"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "input",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "mat-form-field",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                13,
                "Enter your email"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                14,
                "input",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                15,
                "mat-form-field",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                17,
                "Leave a comment"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                18,
                "textarea",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "div",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "button",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ContactFormComponent_Template_button_click_20_listener() {
                  return ctx.onSubmit(ctx.myForm);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                21,
                " SUBMIT "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                22,
                "div",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                23,
                "section"
              );
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "formGroup",
                ctx.myForm
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "disabled",
                !ctx.myForm.valid
              );
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__[
              "MatFormField"
            ],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__[
              "MatLabel"
            ],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"],
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__[
              "CdkTextareaAutosize"
            ],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"],
          ],
          styles: [
            "mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.contact-form-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  background-repeat: no-repeat;\n  padding: 2%;\n}\n\n.mat-card-form[_ngcontent-%COMP%] {\n  padding: 2%;\n  width: 60%;\n  margin: auto;\n}\n\n.contact-title[_ngcontent-%COMP%] {\n  font-family: cursive;\n  letter-spacing: 1px;\n  line-height: normal;\n  font-size: 2.5rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n.contact-help-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.theme-switch[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBRUEsNEJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBRUUsa0JBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7QUFHRiIsImZpbGUiOiJhcHBzL3BvcnRmb2xpby9zcmMvYXBwL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtZm9ybS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvY29udGFjdC1iZy1pbWFnZS5zdmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMiU7XG59XG4ubWF0LWNhcmQtZm9ybSB7XG4gIHBhZGRpbmc6IDIlO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGFjdC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QtaGVscC10ZXh0IHtcbiAgLy8gZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRoZW1lLXN3aXRjaCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ContactFormComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-contact-form",
                    templateUrl: "./contact-form.component.html",
                    styleUrls: ["./contact-form.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
                },
                {
                  type:
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__[
                      "MatSnackBar"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/education/education.component.ts":
      /*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
      /*! exports provided: EducationComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EducationComponent",
          function () {
            return EducationComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );

        class EducationComponent {
          constructor() {}
          ngOnInit() {}
        }
        EducationComponent.ɵfac = function EducationComponent_Factory(t) {
          return new (t || EducationComponent)();
        };
        EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: EducationComponent,
          selectors: [["cmuthyala-education"]],
          decls: 28,
          vars: 2,
          consts: [
            [1, "cm-education-section"],
            [1, "cm-education-main-div"],
            [1, "education-title"],
            [1, "example-card", "col-md-6"],
            [
              "mat-card-avatar",
              "",
              1,
              "example-header-image",
              "amrita-header-image",
            ],
            [1, "card-title-size"],
            ["href", "https://www.amrita.edu/", "target", "_blank"],
            ["mat-button", "", "color", "primary"],
            [3, "src"],
            [
              "mat-card-avatar",
              "",
              1,
              "example-header-image",
              "odu-header-image",
            ],
            ["href", "https://www.odu.edu/", "target", "_blank"],
          ],
          template: function EducationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h1",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "Education"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "mat-card",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                6,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "mat-card-title",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                8,
                "Amrita University"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                10,
                "B.Tech in Computer Science, CGPA: 7.67/10.0"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "mat-card-actions"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "a",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "button",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                14,
                " VISIT "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                15,
                "img",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "mat-card",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                18,
                "div",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "mat-card-title",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                20,
                "Old Dominion University"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                22,
                "Master's in Computer Science, CGPA: 3.77/4.0"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "mat-card-actions"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "a",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "button",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                26,
                " VISIT "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                27,
                "img",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ](
                "src",
                "../../assets/launch.svg",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ](
                "src",
                "../../assets/launch.svg",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
              );
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardHeader"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardAvatar"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardSubtitle"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardActions"
            ],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"],
          ],
          styles: [
            ".example-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  box-shadow: none;\n}\n\n.cm-education-section[_ngcontent-%COMP%] {\n  padding: 1% 10%;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('odu-education-logo.png');\n  background-size: contain;\n  width: 5rem;\n  height: 5rem;\n}\n\n.amrita-header-image[_ngcontent-%COMP%] {\n  background-image: url('amrita-education-logo.png');\n}\n\n.odu-header-image[_ngcontent-%COMP%] {\n  background-image: url('odu-education-logo.png');\n}\n\n.education-title[_ngcontent-%COMP%] {\n  font-family: cursive;\n  letter-spacing: 1px;\n  line-height: normal;\n  font-size: 2.5rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\nexample-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLCtDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0Usa0RBQUE7QUFHRjs7QUFEQTtFQUNFLCtDQUFBO0FBSUY7O0FBRkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFIQTtFQUNFLDBCQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0FBT0Y7O0FBTEE7RUFDRSw2QkFBQTtBQVFGIiwiZmlsZSI6ImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY20tZWR1Y2F0aW9uLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxJSAxMCU7XG59XG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9vZHUtZWR1Y2F0aW9uLWxvZ28ucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbn1cblxuLmFtcml0YS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9hbXJpdGEtZWR1Y2F0aW9uLWxvZ28ucG5nJyk7XG59XG4ub2R1LWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL29kdS1lZHVjYXRpb24tbG9nby5wbmcnKTtcbn1cbi5lZHVjYXRpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuZXhhbXBsZS1jYXJkIHtcbiAgcGFkZGluZzogMDtcbn1cbm1hdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            EducationComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-education",
                    templateUrl: "./education.component.html",
                    styleUrls: ["./education.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/experience/experience.component.ts":
      /*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
      /*! exports provided: ExperienceComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ExperienceComponent",
          function () {
            return ExperienceComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );
        /* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/stepper */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );

        function ExperienceComponent_ng_template_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              0,
              " Highmark Health (Oct 2019 - Present)"
            );
          }
        }
        function ExperienceComponent_ng_container_21_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " \u2022 Communicated Business Analyst and UX team and transformed wireframes and mockups into responsive, interactive features."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              3,
              " \u2022 Experience in hybrid operations using Ionic & Angular framework, Mobile Angular UI, and Cordova."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              5,
              " \u2022 Implemented a feature toggling functionality for targeted users."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              7,
              " \u2022 Proficient in using SASS for writing CSS styles more easily with the Mixins, Parametric mixins, Nested Rules, Operations, Namespaces, etc."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              9,
              " \u2022 Developed a custom and re-usable model popups for warning, success, information, and error messages."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              11,
              " \u2022 Implemented a push notification service for cross platforms using Firebase Cloud Messaging (FCM)."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              13,
              " \u2022 Actively took part in technical meetings, requirements gathering, analysis, planning, effort estimations, development and testing under Agile Methodologies (Scrum) to manage full life-cycle development of the project."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              15,
              "strong"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              16,
              "Tech Stack:"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              17,
              " NodeJS, Cloud Firestore, HTML5, SASS, CSS3, Typescript, ExpressJS, Angular 7+, Cordova, Postman, Stoplight"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
          }
        }
        function ExperienceComponent_ng_template_26_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              0,
              " Old Dominion University (Aug 2017 - Sep 2019)"
            );
          }
        }
        function ExperienceComponent_ng_container_38_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " \u2022 Led a summer research workshop mentoring 30 interns in machine learning tasks for multiple datasets."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
          }
        }
        function ExperienceComponent_ng_container_55_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " \u2022 Delivered incremental value via an Agile Development Methodology."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              3,
              " \u2022 Assisted co-developers on support needs and provide guidance on architectural issues."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              5,
              " \u2022 Implemented modern features like Two Factor Authentication(2FA), user profile search, login with GitHub association, bot verification with reCAPTCHA and user Activity Graph."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "strong"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              8,
              "Tech Stack:"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              9,
              " NodeJS, Cloud Firestore, HTML5, SASS, CSS3, Typescript, ExpressJS, Angular 7+, Cordova, Postman, Stoplight"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
          }
        }
        function ExperienceComponent_ng_template_60_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              0,
              " Synopsys (Sep 2015 - July 2017)"
            );
          }
        }
        function ExperienceComponent_ng_container_74_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " \u2022 Implemented RESTful APIs, JSON architecture for development of newly generated daily logs."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              3,
              " \u2022 Modified the file driven mechanism of portal to Database driven, using PostgreSQL."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              5,
              " \u2022 Developed an automated system which can find the hardcoded paths associated with all Verification Group (VG) products."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              7,
              " \u2022 Wrote a script that automatically detect and removes the unused code and it increased the efficiency by 2%."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              9,
              " \u2022 Fixing the errors generated by GCC after removing the -Wno- switches from Makefiles."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
          }
        }
        class ExperienceComponent {
          constructor() {
            this.seeMoreHighmarkText = "...see more";
            this.seeMoreHighmarkToggle = false;
            this.seeMoreOduText1 = "...see more";
            this.seeMoreOduToggle1 = false;
            this.seeMoreOduText2 = "...see more";
            this.seeMoreOduToggle2 = false;
            this.seeMoreSynopsysText = "...see more";
            this.seeMoreSynopsysToggle = false;
            this.completed = true;
          }
          ngOnInit() {}
          highmarkSeeMoreToggle() {
            this.seeMoreHighmarkToggle = !this.seeMoreHighmarkToggle;
            this.seeMoreHighmarkText = this.seeMoreHighmarkToggle
              ? "see less"
              : "...see more";
          }
          oduSeeMoreToggle1() {
            this.seeMoreOduToggle1 = !this.seeMoreOduToggle1;
            this.seeMoreOduText1 = this.seeMoreOduToggle1
              ? "see less"
              : "...see more";
          }
          oduSeeMoreToggle2() {
            this.seeMoreOduToggle2 = !this.seeMoreOduToggle2;
            this.seeMoreOduText2 = this.seeMoreOduToggle2
              ? "see less"
              : "...see more";
          }
          synopsysSeeMoreToggle() {
            this.seeMoreSynopsysToggle = !this.seeMoreSynopsysToggle;
            this.seeMoreSynopsysText = this.seeMoreSynopsysToggle
              ? "see less"
              : "...see more";
          }
        }
        ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
          return new (t || ExperienceComponent)();
        };
        ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ExperienceComponent,
          selectors: [["cmuthyala-experience"]],
          decls: 78,
          vars: 12,
          consts: [
            [1, "experience-section"],
            [1, "experience-title"],
            [1, "experience-mat-card-main"],
            [3, "linear"],
            ["stepper", ""],
            [3, "stepControl"],
            ["matStepLabel", ""],
            ["mat-card-avatar", "", 1, "highmark-header-image"],
            [1, "experience-content"],
            [4, "ngIf"],
            [1, "seeMoreDiv"],
            [1, "seeMoreLink", 3, "click"],
            ["mat-card-avatar", "", 1, "odu-header-image"],
            ["mat-card-avatar", "", 1, "synopsys-header-image"],
          ],
          template: function ExperienceComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "h1",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                "Experience"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "mat-card",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "mat-vertical-stepper",
                3,
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "mat-step",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                7,
                ExperienceComponent_ng_template_7_Template,
                1,
                0,
                "ng-template",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "div",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                11,
                "Software Engineer, Digital Innovation"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                13,
                "Greater Pittsburgh Area, Pennsylvania"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "mat-card-content",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                15,
                " \u2022 Implemented HTTP requests using RxJS Observable library to handle multiple values over time."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                17,
                " \u2022 Created reusable components and services to consume API's using Component-based architecture provided by angular."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                19,
                " \u2022 Implemented various Validation Controls for form validation and implemented custom validation controls with Regular Expressions."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                21,
                ExperienceComponent_ng_container_21_Template,
                19,
                0,
                "ng-container",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "div",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "a",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ExperienceComponent_Template_a_click_23_listener() {
                  return ctx.highmarkSeeMoreToggle();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "mat-step",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                26,
                ExperienceComponent_ng_template_26_Template,
                1,
                0,
                "ng-template",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                28,
                "div",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                29,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                30,
                "Software Developer (Research Assistant)"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                31,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                32,
                "Norfolk, Virginia (May 2018 - Sep 2019)"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                33,
                "mat-card-content",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                34,
                " \u2022 Developed machine learning models to profile the patients, detect anger with an accuracy of 0.821 and alert the authorities immediately and Implemented Intervention methods to sooth the agitated dementia patients."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                36,
                " \u2022 Developed a tool to automate the process of generating interactive visualizations to provide insights and trends in analyzing hotel revenue (AIRBNB), US employment and populate them in PowerPoint slides."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                38,
                ExperienceComponent_ng_container_38_Template,
                3,
                0,
                "ng-container",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                39,
                "div",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                40,
                "a",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ExperienceComponent_Template_a_click_40_listener() {
                  return ctx.oduSeeMoreToggle1();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                42,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                43,
                "div",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                44,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                45,
                "Full Stack Developer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                46,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                47,
                "Norfolk, Virginia (Aug 2017 - April 2018)"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                48,
                "mat-card-content",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                49,
                " \u2022 Served as a technical lead at The Hands-on Lab."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                51,
                " \u2022 Developed a website using LAMP stack for Multiple Organizations Learning Management System for ODU School of Nursing. Innovated the student\u2019s evaluation methods using data analysis techniques."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                53,
                " \u2022 Developed an interactive web application using MEAN stack , communicating with REST API."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                55,
                ExperienceComponent_ng_container_55_Template,
                11,
                0,
                "ng-container",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                56,
                "div",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                57,
                "a",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ExperienceComponent_Template_a_click_57_listener() {
                  return ctx.oduSeeMoreToggle2();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                59,
                "mat-step",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                60,
                ExperienceComponent_ng_template_60_Template,
                1,
                0,
                "ng-template",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                61,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                62,
                "div",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                63,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                64,
                "Software Engineer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                65,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                66,
                "Bengaluru Area, India"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                67,
                "mat-card-content",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                68,
                " \u2022 Designed and developed a single page web app using RESTful API's. was involved in the complete development cycle involving planning, designing, development, testing, and deployment of this portal."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                70,
                " \u2022 Developed, documented and validated complex business rules vital for data transformation."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                72,
                " \u2022 Designed ETL flows to extract data from CRM application and stored in Oracle DB."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                74,
                ExperienceComponent_ng_container_74_Template,
                11,
                0,
                "ng-container",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                75,
                "div",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                76,
                "a",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ExperienceComponent_Template_a_click_76_listener() {
                  return ctx.synopsysSeeMoreToggle();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "linear",
                true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "stepControl",
                true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.seeMoreHighmarkToggle == true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.seeMoreHighmarkText
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "stepControl",
                true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.seeMoreOduToggle1 == true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.seeMoreOduText1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.seeMoreOduToggle2 == true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.seeMoreOduText2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "stepControl",
                true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.seeMoreSynopsysToggle == true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.seeMoreSynopsysText
              );
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__[
              "MatVerticalStepper"
            ],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStep"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__[
              "MatStepLabel"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardHeader"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardAvatar"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardSubtitle"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardContent"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"],
          ],
          styles: [
            ".experience-mat-card-main[_ngcontent-%COMP%] {\n  padding: 0px;\n  box-shadow: none;\n}\n\n.highmark-header-image[_ngcontent-%COMP%] {\n  background-image: url('highmark.png');\n  background-size: cover;\n}\n\n.odu-header-image[_ngcontent-%COMP%] {\n  background-image: url('odu-experience-logo.jpeg');\n  background-size: cover;\n}\n\n.synopsys-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/57d2df1c11f0e8a619b79d84c88c042e\");\n  background-size: cover;\n}\n\n.experience-section[_ngcontent-%COMP%] {\n  padding-top: 1%;\n  padding-right: 10%;\n  padding-bottom: 1%;\n  padding-left: 10%;\n}\n\n.experience-content[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n  font-size: 1rem;\n  font-style: normal;\n}\n\n.experience-title[_ngcontent-%COMP%] {\n  font-family: cursive;\n  letter-spacing: 2px;\n  line-height: normal;\n  font-size: 2.5rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n.seeMoreLink[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  font-style: normal;\n}\n\n.mat-vertical-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsWUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0FBQUY7O0FBRUE7RUFDRSxpREFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw2R0FBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFGQTtFQUNFLHVCQUFBO0FBS0YiLCJmaWxlIjoiYXBwcy9wb3J0Zm9saW8vc3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZXJpZW5jZS1tYXQtY2FyZC1tYWluIHtcbiAgLy8gZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIC8vIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmhpZ2htYXJrLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2hpZ2htYXJrLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm9kdS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9vZHUtZXhwZXJpZW5jZS1sb2dvLmpwZWcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5zeW5vcHN5cy1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZDJxNzlpdTd5NzQ4anouY2xvdWRmcm9udC5uZXQvcy9fc3F1YXJlbG9nby81N2QyZGYxYzExZjBlOGE2MTliNzlkODRjODhjMDQyZScpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXhwZXJpZW5jZS1zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDElO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG59XG4uZXhwZXJpZW5jZS1jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgLy8gZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmV4cGVyaWVuY2UtdGl0bGUge1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWVNb3JlTGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5tYXQtdmVydGljYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ExperienceComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-experience",
                    templateUrl: "./experience.component.html",
                    styleUrls: ["./experience.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/footer/footer.component.ts":
      /*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
      /*! exports provided: FooterComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FooterComponent",
          function () {
            return FooterComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );

        class FooterComponent {
          constructor() {
            this.d = new Date();
            this.currentYear = this.d.getFullYear();
          }
          ngOnInit() {}
        }
        FooterComponent.ɵfac = function FooterComponent_Factory(t) {
          return new (t || FooterComponent)();
        };
        FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: FooterComponent,
          selectors: [["cmuthyala-footer"]],
          decls: 8,
          vars: 1,
          consts: [
            [1, "footer-section-main"],
            [1, "footer-section"],
            [1, "p-quote"],
          ],
          template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "mat-card"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "footer",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "p",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "Made with Passion \uD83D\uDE80"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "p",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                5,
                ' "I could either watch it happen or be a part of it." -anonymous '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "small"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                " Copyright \u00A9 ",
                ctx.currentYear,
                " Chandu"
              );
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"],
          ],
          styles: [
            ".footer-section-main[_ngcontent-%COMP%] {\n  padding: 2rem 0rem;\n  width: 100%;\n  background-color: #a5d6ed;\n  color: black;\n  text-align: center;\n}\n\n.footer-section[_ngcontent-%COMP%] {\n  left: 0;\n  bottom: 0;\n  font-size: 1.5rem;\n  color: black;\n  font-family: cursive;\n  letter-spacing: 2px;\n}\n\n.p-quote[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-style: italic;\n  text-align: center;\n  color: black;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border-radius: 0rem;\n  padding: 0em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFHRiIsImZpbGUiOiJhcHBzL3BvcnRmb2xpby9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXNlY3Rpb24tbWFpbiB7XG4gIHBhZGRpbmc6IDJyZW0gMHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWQ2ZWQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3Rlci1zZWN0aW9uIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5wLXF1b3RlIHtcbiAgLy8gZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxubWF0LWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICBwYWRkaW5nOiAwZW07XG59XG4iXX0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            FooterComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-footer",
                    templateUrl: "./footer.component.html",
                    styleUrls: ["./footer.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/header/header.component.ts":
      /*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
      /*! exports provided: HeaderComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HeaderComponent",
          function () {
            return HeaderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _services_color_scheme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../services/color-scheme.service */ "./src/app/services/color-scheme.service.ts"
        );
        /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/sidenav */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js"
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js"
        );
        /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js"
        );
        /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js"
        );
        /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../about/about.component */ "./src/app/about/about.component.ts"
        );
        /* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../education/education.component */ "./src/app/education/education.component.ts"
        );
        /* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../experience/experience.component */ "./src/app/experience/experience.component.ts"
        );
        /* harmony import */ var _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../certifications/certifications.component */ "./src/app/certifications/certifications.component.ts"
        );
        /* harmony import */ var _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../testimonies/testimonies.component */ "./src/app/testimonies/testimonies.component.ts"
        );
        /* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts"
        );
        /* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../social-media/social-media.component */ "./src/app/social-media/social-media.component.ts"
        );
        /* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../projects/projects.component */ "./src/app/projects/projects.component.ts"
        );

        function HeaderComponent_ng_template_19_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-icon",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Home ");
          }
        }
        function HeaderComponent_ng_template_28_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-icon",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              "local_library"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              2,
              " Education "
            );
          }
        }
        function HeaderComponent_ng_template_31_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-icon",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "work");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              2,
              " Experience "
            );
          }
        }
        function HeaderComponent_ng_template_34_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-icon",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              "folder_special"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              2,
              " Projects "
            );
          }
        }
        function HeaderComponent_ng_template_37_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-icon",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grade");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              2,
              " Certifications "
            );
          }
        }
        function HeaderComponent_ng_template_40_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "mat-icon",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              "format_quote"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              2,
              " Testimonials "
            );
          }
        }
        class HeaderComponent {
          constructor(colorSchemeService) {
            this.colorSchemeService = colorSchemeService;
            this.tiles = [
              { text: "Three", cols: 2, rows: 1, color: "lightpink" },
              { text: "Four", cols: 2, rows: 1, color: "#DDBDF1" },
            ];
            this.useDefaultTheme = true;
          }
          ngOnInit() {}
          toggleTheme(event) {
            event.checked;
            this.useDefaultTheme = !this.useDefaultTheme;
            const theme = this.useDefaultTheme ? "dark" : "light";
            this.colorSchemeService.update(theme);
            // console.log(event);
          }
        }
        HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
          return new (t || HeaderComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _services_color_scheme_service__WEBPACK_IMPORTED_MODULE_1__[
                "ColorSchemeService"
              ]
            )
          );
        };
        HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HeaderComponent,
          selectors: [["cmuthyala-header"]],
          decls: 42,
          vars: 1,
          consts: [
            [1, "example-card", "top-header-bacground-image"],
            [
              "mat-card-avatar",
              "",
              "src",
              "assets/dp-1.jpg",
              1,
              "example-header-image",
            ],
            [1, "position"],
            [1, "example-spacer"],
            [1, "theme-switch-div"],
            ["mat-button", ""],
            ["mat-list-icon", ""],
            [1, "theme-switch", 3, "checked", "change"],
            [1, "color-blue"],
            [1, "mat-tab-padding"],
            ["mat-tab-label", ""],
            ["aria-hidden", "false", "aria-label", "Example home icon"],
            ["aria-hidden", "false", "aria-label", "local_library"],
          ],
          template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "mat-sidenav-container"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "mat-card",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                4,
                "img",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                6,
                "Chandrasekhar Muthyala"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "mat-card-subtitle",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                8,
                "Full Stack Developer \uD83D\uDC68\u200D\uD83D\uDE80 "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "span",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "button",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "mat-icon",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                13,
                "wb_sunny"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "mat-slide-toggle",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "change",
                function HeaderComponent_Template_mat_slide_toggle_change_14_listener(
                  $event
                ) {
                  return ctx.toggleTheme($event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                15,
                "mat-icon",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                16,
                "brightness_3"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "mat-tab-group",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "mat-tab",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                19,
                HeaderComponent_ng_template_19_Template,
                3,
                0,
                "ng-template",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                20,
                "cmuthyala-about"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                21,
                "cmuthyala-education"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                22,
                "cmuthyala-experience"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                23,
                "cmuthyala-certifications"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                24,
                "cmuthyala-testimonies"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                25,
                "cmuthyala-contact-form"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                26,
                "cmuthyala-social-media"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "mat-tab"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                28,
                HeaderComponent_ng_template_28_Template,
                3,
                0,
                "ng-template",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                29,
                "cmuthyala-education"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "mat-tab"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                31,
                HeaderComponent_ng_template_31_Template,
                3,
                0,
                "ng-template",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                32,
                "cmuthyala-experience"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                33,
                "mat-tab"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                34,
                HeaderComponent_ng_template_34_Template,
                3,
                0,
                "ng-template",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                35,
                "cmuthyala-projects"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                36,
                "mat-tab"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                37,
                HeaderComponent_ng_template_37_Template,
                3,
                0,
                "ng-template",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                38,
                "cmuthyala-certifications"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                39,
                "mat-tab"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                40,
                HeaderComponent_ng_template_40_Template,
                3,
                0,
                "ng-template",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                41,
                "cmuthyala-testimonies"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "checked",
                ctx.useDefaultTheme
              );
            }
          },
          directives: [
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__[
              "MatSidenavContainer"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__[
              "MatCardHeader"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__[
              "MatCardAvatar"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__[
              "MatCardSubtitle"
            ],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__[
              "MatListIconCssMatStyler"
            ],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__[
              "MatSlideToggle"
            ],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabLabel"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__[
              "AboutComponent"
            ],
            _education_education_component__WEBPACK_IMPORTED_MODULE_10__[
              "EducationComponent"
            ],
            _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__[
              "ExperienceComponent"
            ],
            _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_12__[
              "CertificationsComponent"
            ],
            _testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_13__[
              "TestimoniesComponent"
            ],
            _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__[
              "ContactFormComponent"
            ],
            _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_15__[
              "SocialMediaComponent"
            ],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__[
              "ProjectsComponent"
            ],
          ],
          styles: [
            ".top-header-bacground-image[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  border-radius: 0px !important;\n  background-image: linear-gradient(to left, #dff7bd, #40f2ec, #add2ed, #ffb2ff);\n  color: black;\n}\n\n.position[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-card-avatar[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.mat-global[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 0rem;\n  box-shadow: none;\n}\n\n.theme-switch-div[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4RUFBQTtFQU9BLFlBQUE7QUFMRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUdBO0VBQ0UsY0FBQTtBQUFGIiwiZmlsZSI6ImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtaGVhZGVyLWJhY2dyb3VuZC1pbWFnZSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBsZWZ0LFxuICAgICNkZmY3YmQsXG4gICAgIzQwZjJlYyxcbiAgICAjYWRkMmVkLFxuICAgICNmZmIyZmZcbiAgKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnBvc2l0aW9uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1hdC1jYXJkLWF2YXRhciB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm1hdC1nbG9iYWwge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnRoZW1lLXN3aXRjaC1kaXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi8vIHVzZWQgZm9yIGRhcmsgdGhlbWVcbi8vIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQgIWltcG9ydGFudDtcbiJdfQ== */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HeaderComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-header",
                    templateUrl: "./header.component.html",
                    styleUrls: ["./header.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _services_color_scheme_service__WEBPACK_IMPORTED_MODULE_1__[
                      "ColorSchemeService"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/home/home.component.ts":
      /*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
      /*! exports provided: HomeComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HomeComponent",
          function () {
            return HomeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../header/header.component */ "./src/app/header/header.component.ts"
        );
        /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../footer/footer.component */ "./src/app/footer/footer.component.ts"
        );

        class HomeComponent {
          constructor() {}
          ngOnInit() {}
        }
        HomeComponent.ɵfac = function HomeComponent_Factory(t) {
          return new (t || HomeComponent)();
        };
        HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HomeComponent,
          selectors: [["cmuthyala-home"]],
          decls: 2,
          vars: 0,
          template: function HomeComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                0,
                "cmuthyala-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                1,
                "cmuthyala-footer"
              );
            }
          },
          directives: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__[
              "HeaderComponent"
            ],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__[
              "FooterComponent"
            ],
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BvcnRmb2xpby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HomeComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-home",
                    templateUrl: "./home.component.html",
                    styleUrls: ["./home.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/projects/projects.component.ts":
      /*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
      /*! exports provided: ProjectsComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ProjectsComponent",
          function () {
            return ProjectsComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        class ProjectsComponent {
          constructor() {
            this.imgUrl = `../../../../assets/uc-page.png`;
          }
          ngOnInit() {}
        }
        ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
          return new (t || ProjectsComponent)();
        };
        ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ProjectsComponent,
          selectors: [["cmuthyala-projects"]],
          decls: 3,
          vars: 1,
          consts: [
            [1, "project-main-div"],
            [3, "src"],
          ],
          template: function ProjectsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                2,
                "img",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ](
                "src",
                ctx.imgUrl,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
              );
            }
          },
          styles: [
            ".project-main-div[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 60%;\n  padding: 10px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJhcHBzL3BvcnRmb2xpby9zcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtbWFpbi1kaXYge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIC8vIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ProjectsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-projects",
                    templateUrl: "./projects.component.html",
                    styleUrls: ["./projects.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/services/color-scheme.service.ts":
      /*!**************************************************!*\
  !*** ./src/app/services/color-scheme.service.ts ***!
  \**************************************************/
      /*! exports provided: ColorSchemeService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ColorSchemeService",
          function () {
            return ColorSchemeService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        class ColorSchemeService {
          constructor(rendererFactory) {
            // Define prefix for clearer and more readable class names in scss files
            this.colorSchemePrefix = "color-scheme-";
            // Create new renderer from renderFactory, to make it possible to use renderer2 in a service
            this.renderer = rendererFactory.createRenderer(null, null);
          }
          _detectPrefersColorScheme() {
            // Detect if prefers-color-scheme is supported
            if (
              window.matchMedia("(prefers-color-scheme)").media !== "not all"
            ) {
              // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise set to light.
              this.colorScheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
              ).matches
                ? "dark"
                : "light";
            } else {
              // If the browser doesn't support prefers-color-scheme, set it as default to dark
              this.colorScheme = "dark";
            }
          }
          _setColorScheme(scheme) {
            this.colorScheme = scheme;
            // Save prefers-color-scheme to localStorage
            localStorage.setItem("prefers-color", scheme);
          }
          _getColorScheme() {
            // Check if any prefers-color-scheme is stored in localStorage
            if (localStorage.getItem("prefers-color")) {
              // Save prefers-color-scheme from localStorage
              this.colorScheme = localStorage.getItem("prefers-color");
            } else {
              // If no prefers-color-scheme is stored in localStorage, try to detect OS default prefers-color-scheme
              this._detectPrefersColorScheme();
            }
          }
          load() {
            this._getColorScheme();
            this.renderer.addClass(
              document.body,
              this.colorSchemePrefix + this.colorScheme
            );
          }
          update(scheme) {
            this._setColorScheme(scheme);
            // Remove the old color-scheme class
            this.renderer.removeClass(
              document.body,
              this.colorSchemePrefix +
                (this.colorScheme === "dark" ? "light" : "dark")
            );
            // Add the new / current color-scheme class
            this.renderer.addClass(
              document.body,
              this.colorSchemePrefix + scheme
            );
          }
          currentActive() {
            return this.colorScheme;
          }
        }
        ColorSchemeService.ɵfac = function ColorSchemeService_Factory(t) {
          return new (t || ColorSchemeService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
            )
          );
        };
        ColorSchemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: ColorSchemeService,
          factory: ColorSchemeService.ɵfac,
          providedIn: "root",
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ColorSchemeService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                      "RendererFactory2"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/social-media/social-media.component.ts":
      /*!********************************************************!*\
  !*** ./src/app/social-media/social-media.component.ts ***!
  \********************************************************/
      /*! exports provided: SocialMediaComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SocialMediaComponent",
          function () {
            return SocialMediaComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        class SocialMediaComponent {
          constructor() {}
          ngOnInit() {}
        }
        SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) {
          return new (t || SocialMediaComponent)();
        };
        SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: SocialMediaComponent,
          selectors: [["cmuthyala-social-media"]],
          decls: 10,
          vars: 0,
          consts: [
            ["id", "sidebar"],
            [1, "icon-bar"],
            [
              "href",
              "https://www.facebook.com/people/Chandu-Muthyala/100002292512909",
              "target",
              "_blank",
              1,
              "facebook",
            ],
            [1, "fa", "fa-facebook"],
            [
              "href",
              "https://twitter.com/chandumuthyala1",
              "target",
              "_blank",
              1,
              "twitter",
            ],
            [1, "fa", "fa-twitter"],
            [
              "href",
              "https://www.instagram.com/chandu_muthyala/?hl=en",
              "target",
              "_blank",
              1,
              "instagran",
            ],
            [1, "fa", "fa-instagram"],
            [
              "href",
              "https://www.linkedin.com/in/cmuth001/",
              "target",
              "_blank",
              1,
              "linkedin",
            ],
            [1, "fa", "fa-linkedin"],
          ],
          template: function SocialMediaComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "a",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                3,
                "i",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "a",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                5,
                "i",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "a",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                7,
                "i",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "a",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "i",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            '.icon-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  padding: 0.7rem;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 1.6rem;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  z-index: 100000;\n}\n\n.icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-radius: 50%;\n}\n\n.facebook[_ngcontent-%COMP%] {\n  background: #3b5998;\n  color: white;\n}\n\n.twitter[_ngcontent-%COMP%] {\n  background: #55acee;\n  color: white;\n}\n\n.google[_ngcontent-%COMP%] {\n  background: #dd4b39;\n  color: white;\n}\n\n.linkedin[_ngcontent-%COMP%] {\n  background: #007bb5;\n  color: white;\n}\n\n.instagran[_ngcontent-%COMP%] {\n  background: #f09433;\n  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#f09433", endColorstr="#bc1888",GradientType=1 );\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvc29jaWFsLW1lZGlhL3NvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBR0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7RUFpQkEsbUdBQUE7RUFRQSxtSEFBQTtBQXBCRiIsImZpbGUiOiJhcHBzL3BvcnRmb2xpby9zcmMvYXBwL3NvY2lhbC1tZWRpYS9zb2NpYWwtbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaWNvbi1iYXIgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuN3JlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgLy8gbWFyZ2luLXRvcDogNXB4O1xuXG4gIC8vIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zaWRlYmFyIHtcbiAgei1pbmRleDogMTAwMDAwO1xufVxuLmljb24tYmFyIGE6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTVhY2VlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saW5rZWRpbiB7XG4gIGJhY2tncm91bmQ6ICMwMDdiYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pbnN0YWdyYW4ge1xuICBiYWNrZ3JvdW5kOiAjZjA5NDMzO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChcbiAgICA0NWRlZyxcbiAgICAjZjA5NDMzIDAlLFxuICAgICNlNjY4M2MgMjUlLFxuICAgICNkYzI3NDMgNTAlLFxuICAgICNjYzIzNjYgNzUlLFxuICAgICNiYzE4ODggMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICA0NWRlZyxcbiAgICAjZjA5NDMzIDAlLFxuICAgICNlNjY4M2MgMjUlLFxuICAgICNkYzI3NDMgNTAlLFxuICAgICNjYzIzNjYgNzUlLFxuICAgICNiYzE4ODggMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgI2YwOTQzMyAwJSxcbiAgICAjZTY2ODNjIDI1JSxcbiAgICAjZGMyNzQzIDUwJSxcbiAgICAjY2MyMzY2IDc1JSxcbiAgICAjYmMxODg4IDEwMCVcbiAgKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmMDk0MzMnLCBlbmRDb2xvcnN0cj0nI2JjMTg4OCcsR3JhZGllbnRUeXBlPTEgKTtcbn1cbiJdfQ== */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            SocialMediaComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-social-media",
                    templateUrl: "./social-media.component.html",
                    styleUrls: ["./social-media.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/testimonies/testimonies.component.ts":
      /*!******************************************************!*\
  !*** ./src/app/testimonies/testimonies.component.ts ***!
  \******************************************************/
      /*! exports provided: TestimoniesComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TestimoniesComponent",
          function () {
            return TestimoniesComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );

        function TestimoniesComponent_ng_container_30_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerStart"
            ](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "mat-card",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "mat-card",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "mat-card-content",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              4,
              "p",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              6,
              " He was my peer when i was working in Synopsys banglore. He is very hardworking and can adapt to the existing system in very faster way. He played a key role in optimizing the VCS incremental build issues. Wish you all the best for furture endeavours \uD83D\uDE01 "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              8,
              "div",
              16
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              9,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              10,
              "Yasaswy Aluri"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              11,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              12,
              "Sr Data Analyst at Synopsys Inc"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              13,
              "mat-card",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              14,
              "mat-card",
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              15,
              "mat-card-content"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              16,
              "p",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              18,
              " I coached a student hackathon, where Chandra and his teammates did an outstanding job working together and ultimately placing in the competition. Chandra was focused and adaptable during this high stress time, and was a pleasure to work with! I would highly recommend Chandra in any position, because he worked so well within a team, and was always open to suggestion for the project! "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              19,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              20,
              "div",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              21,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              22,
              "Kristen Carros"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              23,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              24,
              "Cloud Software Engineer at Cloudreach"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              25,
              "mat-card",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              26,
              "mat-card",
              19
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              27,
              "mat-card-content"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              28,
              "p",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              30,
              " I had the pleasure of serving as Chandra's coach during the 2018 Dominion Enterprises Hackathon. Through out the Hackathon, Chandra stayed focused and collaborated with his team to deliver a great product. I was particularly impressed Chandra's ability remain calm while being under such a short turn around time for his project. With his assistance his team took home the third place prize. I would highly recommend Chandra and would welcome the opportunity to work with him again in the future. "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              31,
              "mat-card-header"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              32,
              "div",
              20
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              33,
              "mat-card-title"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              34,
              "Justin Russell"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              35,
              "mat-card-subtitle"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              36,
              "Product Manager"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵelementContainerEnd"
            ]();
          }
        }
        class TestimoniesComponent {
          constructor() {
            this.isCollapsed = false;
            this.testimonyToggleText = "VIEW MORE";
            this.testimonyToggleIcon = "expand_more";
          }
          ngOnInit() {}
          toggleViewMore() {
            this.isCollapsed = !this.isCollapsed;
            this.testimonyToggleText = this.isCollapsed
              ? "VIEW LESS"
              : "VIEW MORE";
            this.testimonyToggleIcon = this.isCollapsed
              ? "expand_less"
              : "expand_more";
          }
        }
        TestimoniesComponent.ɵfac = function TestimoniesComponent_Factory(t) {
          return new (t || TestimoniesComponent)();
        };
        TestimoniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: TestimoniesComponent,
          selectors: [["cmuthyala-testimonies"]],
          decls: 36,
          vars: 3,
          consts: [
            [1, "testimonial-section"],
            [1, "testimonial-title"],
            [1, "p-note"],
            [1, "mat-card-border"],
            ["id", "timKing", 1, "mat-card-1"],
            [1, "mat-card-content-style"],
            [1, "p-text"],
            ["aria-hidden", "true", 1, "fa", "fa-quote-left"],
            ["mat-card-avatar", "", 1, "timKing-img"],
            ["id", "jyothi", 1, "mat-card-1", "left-side"],
            ["mat-card-avatar", "", 1, "jyothi-img"],
            [4, "ngIf"],
            [1, "viewMoreButtonDiv"],
            [
              "mat-button",
              "",
              "color",
              "primary",
              1,
              "viewMoreButton",
              3,
              "click",
            ],
            [1, "material-icons"],
            ["id", "yasaswy", 1, "mat-card-1"],
            ["mat-card-avatar", "", 1, "yasaswy-img"],
            ["id", "kristen", 1, "mat-card-1", "left-side"],
            ["mat-card-avatar", "", 1, "kristen-img"],
            ["id", "justin", 1, "mat-card-1"],
            ["mat-card-avatar", "", 1, "justin-img"],
          ],
          template: function TestimoniesComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h1",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "Testimonials"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "p",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                5,
                "Note: Loaded from LinkedIn recommendation section."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "mat-card",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "mat-card",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "mat-card-content",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "p",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                10,
                "i",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                11,
                " I currently work with Chandrasekhar (Chandu) on the same team at Highmark Health. It has been my pleasure to work along side him on multiple projects. With every project or task that Chandu has been assigned, he makes it his personal business to master the technologies involved. This is particularly noteworthy as our team requires true, full-stack, expertise. Chandu has successfully completed work in a variety of platforms and languages ranging from nodejs and google cloud, to sql and java. Chandu is extremely hard working, and learns very quickly. He would be a tremendous addition to any software development team. "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                13,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                15,
                "Tim King"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                17,
                "Software Engineer at Highmark Health"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "mat-card",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "mat-card",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "mat-card-content",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "p",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                22,
                "i",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                23,
                " Chandrasekhar is focused, calm and committed and is a great addition to any team. He worked with me on a collaboration project for the Center of Learning and Teaching in Old Dominion University. He quickly established himself as an invaluable member and came up with several fresh ideas at the meetings that we successfully implemented. A confident and friendly co-worker, Chandrasekhar is popular with his colleagues and stakeholders alike and has a real passion and enthusiasm for the software industry. "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "mat-card-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                25,
                "div",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                26,
                "mat-card-title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                27,
                "Jyothi Gummadi"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                28,
                "mat-card-subtitle"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                29,
                "Senior Delivery Data Analyst at ConnectYourCare"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                30,
                TestimoniesComponent_ng_container_30_Template,
                37,
                0,
                "ng-container",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                31,
                "div",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                32,
                "button",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function TestimoniesComponent_Template_button_click_32_listener() {
                  return ctx.toggleViewMore();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                34,
                "i",
                14
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.isCollapsed == true
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                " ",
                ctx.testimonyToggleText,
                " "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                " ",
                ctx.testimonyToggleIcon,
                " "
              );
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardContent"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardHeader"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardAvatar"
            ],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__[
              "MatCardSubtitle"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"],
          ],
          styles: [
            '.testimonial-section[_ngcontent-%COMP%] {\n  padding: 1% 10%;\n}\n\n.timKing-img[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C4D03AQFL3pM_d1LwPw/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=gO1mNe0OH-D4WvjZSFsC7K2odOdJeLwspj027NXF1Ek");\n  background-size: cover;\n}\n\n.justin-img[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C5603AQEjUj94UWR07g/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=ytYb8ad6B45tmy5Im1i_Fh0V6aEJDlnHcm30C-OgBGI");\n  background-size: cover;\n}\n\n.jyothi-img[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C4E03AQGeg7xc94G5Lg/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=utf4iFKcUtjoCqNH30VyPbuqcjpvkHuVjTXjEO7-dzA");\n  background-size: cover;\n}\n\n.yasaswy-img[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C5103AQGcCrKRjLWQQg/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=IMoXkKMjg02eAk5SP75lPj_bfhOx6QBi2AEPph-EL70");\n  background-size: cover;\n}\n\n.kristen-img[_ngcontent-%COMP%] {\n  background-image: url("https://media-exp1.licdn.com/dms/image/C4E03AQE9GsQJK30m5w/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=U7qVwUZYWZ64gOvj5qqlNmiZUMM2U7tlUxH8dPwD_xM");\n  background-size: cover;\n}\n\n.mat-card-1[_ngcontent-%COMP%] {\n  background: inherit;\n  box-shadow: none !important;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0px;\n}\n\n.testimonial-mat-card-main[_ngcontent-%COMP%] {\n  display: grid;\n  box-shadow: none;\n  background: inherit;\n}\n\n.testimonial-title[_ngcontent-%COMP%] {\n  font-family: cursive;\n  line-height: normal;\n  font-size: 2.5rem;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 0px;\n}\n\n.p-text[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n  padding: 1rem;\n  font-size: 1rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.viewMoreButton[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-radius: 3px;\n  font-size: 1rem;\n  transition: background 0.5s ease;\n}\n\n.arrow1[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: #673ab7;\n  font-size: 30px;\n  animation: slide1 1s ease-in-out infinite;\n  margin-left: 9px;\n}\n\n@keyframes slide1 {\n  0%, 100% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(10px, 0);\n  }\n}\n\n.mat-card-border[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  margin-bottom: 2%;\n  box-shadow: none !important;\n  padding: 0;\n}\n\n.p-note[_ngcontent-%COMP%] {\n  color: coral;\n  font-size: 0.6rem;\n  text-align: center;\n  margin: 0px;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcG9ydGZvbGlvL3NyYy9hcHAvdGVzdGltb25pZXMvdGVzdGltb25pZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyTEFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSwyTEFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSwyTEFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSwyTEFBQTtFQUNBLHNCQUFBO0FBSUY7O0FBRkE7RUFDRSwyTEFBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0lBQUE7QUFLRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFO0lBRUUsMEJBQUE7RUFJRjtFQURBO0lBQ0UsNkJBQUE7RUFHRjtBQUNGOztBQURBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUVBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRiIsImZpbGUiOiJhcHBzL3BvcnRmb2xpby9zcmMvYXBwL3Rlc3RpbW9uaWVzL3Rlc3RpbW9uaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFsLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxJSAxMCU7XG59XG4udGltS2luZy1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWVkaWEtZXhwMS5saWNkbi5jb20vZG1zL2ltYWdlL0M0RDAzQVFGTDNwTV9kMUx3UHcvcHJvZmlsZS1kaXNwbGF5cGhvdG8tc2hyaW5rXzQwMF80MDAvMD9lPTE2MDIxMTUyMDAmdj1iZXRhJnQ9Z08xbU5lME9ILUQ0V3ZqWlNGc0M3SzJvZE9kSmVMd3NwajAyN05YRjFFaycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmp1c3Rpbi1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWVkaWEtZXhwMS5saWNkbi5jb20vZG1zL2ltYWdlL0M1NjAzQVFFalVqOTRVV1IwN2cvcHJvZmlsZS1kaXNwbGF5cGhvdG8tc2hyaW5rXzQwMF80MDAvMD9lPTE2MDIxMTUyMDAmdj1iZXRhJnQ9eXRZYjhhZDZCNDV0bXk1SW0xaV9GaDBWNmFFSkRsbkhjbTMwQy1PZ0JHSScpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uanlvdGhpLWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tZWRpYS1leHAxLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzRFMDNBUUdlZzd4Yzk0RzVMZy9wcm9maWxlLWRpc3BsYXlwaG90by1zaHJpbmtfNDAwXzQwMC8wP2U9MTYwMjExNTIwMCZ2PWJldGEmdD11dGY0aUZLY1V0am9DcU5IMzBWeVBidXFjanB2a0h1VmpUWGpFTzctZHpBJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ueWFzYXN3eS1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWVkaWEtZXhwMS5saWNkbi5jb20vZG1zL2ltYWdlL0M1MTAzQVFHY0NyS1JqTFdRUWcvcHJvZmlsZS1kaXNwbGF5cGhvdG8tc2hyaW5rXzQwMF80MDAvMD9lPTE2MDIxMTUyMDAmdj1iZXRhJnQ9SU1vWGtLTWpnMDJlQWs1U1A3NWxQal9iZmhPeDZRQmkyQUVQcGgtRUw3MCcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmtyaXN0ZW4taW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21lZGlhLWV4cDEubGljZG4uY29tL2Rtcy9pbWFnZS9DNEUwM0FRRTlHc1FKSzMwbTV3L3Byb2ZpbGUtZGlzcGxheXBob3RvLXNocmlua180MDBfNDAwLzA/ZT0xNjAyMTE1MjAwJnY9YmV0YSZ0PVU3cVZ3VVpZV1o2NGdPdmo1cXFsTm1pWlVNTTJVN3RsVXhIOGRQd0RfeE0nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hdC1jYXJkLTEge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIC8vIG1hcmdpbi10b3A6IDFyZW07XG59XG4udGVzdGltb25pYWwtbWF0LWNhcmQtbWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG4udGVzdGltb25pYWwtdGl0bGUge1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucC10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50O1xuICAvLyBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cbi52aWV3TW9yZUJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDFyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlO1xufVxuXG4uYXJyb3cxIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjNjczYWI3O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGFuaW1hdGlvbjogc2xpZGUxIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuQGtleWZyYW1lcyBzbGlkZTEge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDApO1xuICB9XG59XG4ubWF0LWNhcmQtYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLy8gYm9yZGVyLXJhZGl1czogMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLnAtbm90ZSB7XG4gIGNvbG9yOiBjb3JhbDtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbm1hdC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbiJdfQ== */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            TestimoniesComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-testimonies",
                    templateUrl: "./testimonies.component.html",
                    styleUrls: ["./testimonies.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/thank-you-note/thank-you-note.component.ts":
      /*!************************************************************!*\
  !*** ./src/app/thank-you-note/thank-you-note.component.ts ***!
  \************************************************************/
      /*! exports provided: ThankYouNoteComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ThankYouNoteComponent",
          function () {
            return ThankYouNoteComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        class ThankYouNoteComponent {
          constructor() {}
          ngOnInit() {}
        }
        ThankYouNoteComponent.ɵfac = function ThankYouNoteComponent_Factory(t) {
          return new (t || ThankYouNoteComponent)();
        };
        ThankYouNoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ThankYouNoteComponent,
          selectors: [["cmuthyala-thank-you-note"]],
          decls: 2,
          vars: 0,
          template: function ThankYouNoteComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                1,
                "thank-you-note works!"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BvcnRmb2xpby9zcmMvYXBwL3RoYW5rLXlvdS1ub3RlL3RoYW5rLXlvdS1ub3RlLmNvbXBvbmVudC5zY3NzIn0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ThankYouNoteComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "cmuthyala-thank-you-note",
                    templateUrl: "./thank-you-note.component.html",
                    styleUrls: ["./thank-you-note.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/environments/environment.ts":
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "environment",
          function () {
            return environment;
          }
        );
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        const environment = {
          production: false,
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

    /***/ "./src/main.ts":
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */ "./src/environments/environment.ts"
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ "./src/app/app.module.ts"
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
        );

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"]
          )();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
          "platformBrowser"
        ]()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]
          )
          .catch((err) => console.error(err));

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/chandu_muthyala/Desktop/workspace/nx/portfolio-cmuthyala/apps/portfolio/src/main.ts */ "./src/main.ts"
        );

        /***/
      },
  },
  [[0, "runtime", "vendor"]],
]);
//# sourceMappingURL=main.js.map
