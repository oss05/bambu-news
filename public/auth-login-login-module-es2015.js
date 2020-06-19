(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./src/app/auth/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");





const routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }];
class LoginRoutingModule {
}
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



// Services





const _c0 = function () { return ["/register"]; };
class LoginComponent {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() { }
    onGoogleLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.authSvc.loginGoogle();
                if (user) {
                    this.router.navigate(['/home']);
                }
            }
            catch (_a) {
                console.log('error en login');
            }
        });
    }
    onLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { email, password } = this.loginForm.value;
            try {
                const user = yield this.authSvc.login(email, password);
                if (user) {
                    // Redireccionando al home
                    this.router.navigate(['/home']);
                }
            }
            catch (error) {
                console.log('error, mi rey');
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], decls: 31, vars: 3, consts: [[1, "login-signup-container", "d-flex", "justify-content-center", "align-items-center"], [1, "box"], ["id", "header"], ["id", "cont-lock"], [1, "material-icons", "lock"], ["id", "bottom-head"], ["id", "logintoregister"], [3, "formGroup", "ngSubmit"], [1, "group"], ["type", "text", "required", "", "formControlName", "email", 1, "inputMaterial"], [1, "highlight"], [1, "bar"], ["type", "password", "required", "", "formControlName", "password", 1, "inputMaterial"], ["id", "buttonlogintoregister", "type", "submit"], ["id", "buttonlogintoregister2", "type", "submit", 3, "click"], ["id", "footer-box", 1, "d-flex", "justify-content-center", "align-items-center"], [1, "footer-text"], [1, "sign-up", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Welcome to News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() { return ctx.onGoogleLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Not a member?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".login-signup-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background-image: radial-gradient(circle at 13% 47%, rgba(140, 140, 140, 0.03) 0%, rgba(140, 140, 140, 0.03) 25%, transparent 25%, transparent 100%), radial-gradient(circle at 28% 63%, rgba(143, 143, 143, 0.03) 0%, rgba(143, 143, 143, 0.03) 16%, transparent 16%, transparent 100%), radial-gradient(circle at 81% 56%, rgba(65, 65, 65, 0.03) 0%, rgba(65, 65, 65, 0.03) 12%, transparent 12%, transparent 100%), radial-gradient(circle at 26% 48%, rgba(60, 60, 60, 0.03) 0%, rgba(60, 60, 60, 0.03) 6%, transparent 6%, transparent 100%), radial-gradient(circle at 97% 17%, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 56%, transparent 56%, transparent 100%), radial-gradient(circle at 50% 100%, rgba(25, 25, 25, 0.03) 0%, rgba(25, 25, 25, 0.03) 36%, transparent 36%, transparent 100%), radial-gradient(circle at 55% 52%, rgba(69, 69, 69, 0.03) 0%, rgba(69, 69, 69, 0.03) 6%, transparent 6%, transparent 100%), linear-gradient(90deg, white, white);\n}\n\n\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 470px;\n  z-index: 200;\n  right: 0;\n  width: 400px;\n  color: #fff;\n  border-radius: 3px;\n  background: #fff;\n  margin-bottom: 100px;\n  box-shadow: 0 10px 20px #00000030, 0 6px 6px #0000003b;\n  overflow: hidden;\n}\n\n#header[_ngcontent-%COMP%] {\n  background: #e7305b;\n  position: relative;\n  height: 100px;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n#cont-lock[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65px;\n  position: relative;\n}\n\n.lock[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0;\n  top: 0;\n  bottom: 0;\n  line-height: 65px;\n  font-size: 28px;\n}\n\n#bottom-head[_ngcontent-%COMP%] {\n  position: relative;\n  background: #e7305b;\n  height: 35px;\n}\n\n#bottom-head[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 0px;\n  height: 0px;\n  display: block;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-bottom: 7px solid white;\n  border-right: 7px solid rgba(0, 0, 0, 0);\n  border-left: 7px solid rgba(0, 0, 0, 0);\n  border-top: 7px solid rgba(0, 0, 0, 0);\n}\n\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: 0;\n  font-size: 24px;\n  font-weight: 300;\n  color: #fff;\n  line-height: 35px;\n}\n\n.box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #e7305b;\n  border: 0;\n  color: #ffffff;\n  padding: 10px;\n  font-size: 16px;\n  font-weight: 300;\n  width: 330px;\n  margin: 20px auto;\n  display: block;\n  cursor: pointer;\n  transition: all 0.4s;\n  border-radius: 2px;\n  outline: none;\n}\n\n.box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background: #e7305b;\n  color: #263238;\n}\n\n.box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  width: 90%;\n}\n\n.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\n\n.group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 35px;\n  margin-left: 40px;\n}\n\n.inputMaterial[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575;\n}\n\n.inputMaterial[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: none;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 14px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n\n\n.inputMaterial[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .inputMaterial[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  top: -20px;\n  font-size: 14px;\n  color: #e7305b;\n}\n\n\n\n.bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 315px;\n}\n\n.bar[_ngcontent-%COMP%]:before, .bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #e7305b;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar[_ngcontent-%COMP%]:before {\n  left: 50%;\n}\n\n.bar[_ngcontent-%COMP%]:after {\n  right: 50%;\n}\n\n\n\n.inputMaterial[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:before, .inputMaterial[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n\n\n.inputMaterial[_ngcontent-%COMP%]:focus    ~ .highlight[_ngcontent-%COMP%] {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n#footer-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  background: #e7305b;\n  position: absolute;\n  bottom: 0;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 0;\n}\n\n.sign-up[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.sign-up[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n@media (max-width: 600px) {\n  .box[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9FOlxcRG9jdW1lbnRvc1xcT3N2YWxkb1xcQ29kZVxccHJ1ZWJhcy10ZWNuaWNhc1xcYmFtYnUtbW9iaWxlL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHU3QkFBQTtBQ0NGOztBRG1EQSxjQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUNoREY7O0FEbURBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNoREY7O0FEbURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2hERjs7QURtREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDaERGOztBRG1EQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDaERGOztBRG1EQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtBQ2hERjs7QURtREE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNoREY7O0FEbURBO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDaERGOztBRG1EQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ2hERjs7QURtREE7RUFDRSxVQUFBO0FDaERGOztBRG1EQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2hERjs7QURtREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNoREY7O0FEbURBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNoREY7O0FEbURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDaERGOztBRG1EQSxrREFBQTs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUNqREY7O0FEb0RBLGlCQUFBOztBQUNBOztFQUVFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2pERjs7QURvREEsa0RBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDakRGOztBRG1EQTs7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQ2hERjs7QURrREE7RUFDRSxTQUFBO0FDL0NGOztBRGlEQTtFQUNFLFVBQUE7QUM5Q0Y7O0FEaURBLGlCQUFBOztBQUNBOztFQUVFLFVBQUE7QUM5Q0Y7O0FEaURBLGlCQUFBOztBQUNBO0VBQ0UsNkNBQUE7RUFFQSxxQ0FBQTtBQzlDRjs7QURpREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDOUNGOztBRGlEQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FDOUNGOztBRGlEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUM5Q0Y7O0FEaURBO0VBQ0UsV0FBQTtBQzlDRjs7QURpREE7RUFDRTtJQUNFLGdCQUFBO0VDOUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXNpZ251cC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICBjaXJjbGUgYXQgMTMlIDQ3JSxcclxuICAgICAgcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjAzKSAwJSxcclxuICAgICAgcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjAzKSAyNSUsXHJcbiAgICAgIHRyYW5zcGFyZW50IDI1JSxcclxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxyXG4gICAgKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgY2lyY2xlIGF0IDI4JSA2MyUsXHJcbiAgICAgIHJnYmEoMTQzLCAxNDMsIDE0MywgMC4wMykgMCUsXHJcbiAgICAgIHJnYmEoMTQzLCAxNDMsIDE0MywgMC4wMykgMTYlLFxyXG4gICAgICB0cmFuc3BhcmVudCAxNiUsXHJcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcclxuICAgICksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgIGNpcmNsZSBhdCA4MSUgNTYlLFxyXG4gICAgICByZ2JhKDY1LCA2NSwgNjUsIDAuMDMpIDAlLFxyXG4gICAgICByZ2JhKDY1LCA2NSwgNjUsIDAuMDMpIDEyJSxcclxuICAgICAgdHJhbnNwYXJlbnQgMTIlLFxyXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXHJcbiAgICApLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICBjaXJjbGUgYXQgMjYlIDQ4JSxcclxuICAgICAgcmdiYSg2MCwgNjAsIDYwLCAwLjAzKSAwJSxcclxuICAgICAgcmdiYSg2MCwgNjAsIDYwLCAwLjAzKSA2JSxcclxuICAgICAgdHJhbnNwYXJlbnQgNiUsXHJcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcclxuICAgICksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgIGNpcmNsZSBhdCA5NyUgMTclLFxyXG4gICAgICByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMDMpIDAlLFxyXG4gICAgICByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMDMpIDU2JSxcclxuICAgICAgdHJhbnNwYXJlbnQgNTYlLFxyXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXHJcbiAgICApLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICBjaXJjbGUgYXQgNTAlIDEwMCUsXHJcbiAgICAgIHJnYmEoMjUsIDI1LCAyNSwgMC4wMykgMCUsXHJcbiAgICAgIHJnYmEoMjUsIDI1LCAyNSwgMC4wMykgMzYlLFxyXG4gICAgICB0cmFuc3BhcmVudCAzNiUsXHJcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcclxuICAgICksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgIGNpcmNsZSBhdCA1NSUgNTIlLFxyXG4gICAgICByZ2JhKDY5LCA2OSwgNjksIDAuMDMpIDAlLFxyXG4gICAgICByZ2JhKDY5LCA2OSwgNjksIDAuMDMpIDYlLFxyXG4gICAgICB0cmFuc3BhcmVudCA2JSxcclxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDI1NSwgMjU1LCAyNTUpLCByZ2IoMjU1LCAyNTUsIDI1NSkpO1xyXG59XHJcblxyXG4vKiBCT1ggTE9HSU4gKi9cclxuLmJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDcwcHg7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAjMDAwMDAwMzAsIDAgNnB4IDZweCAjMDAwMDAwM2I7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2U3MzA1YjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jY29udC1sb2NrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubG9jayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsaW5lLWhlaWdodDogNjVweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbiNib3R0b20taGVhZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNlNzMwNWI7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4jYm90dG9tLWhlYWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5ib3ggaDEge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5ib3ggYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZTczMDViO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJveCBidXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZTczMDViO1xyXG4gIGNvbG9yOiAjMjYzMjM4O1xyXG59XHJcblxyXG4uYm94IGJ1dHRvbjpob3ZlciB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmJveCBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRlcmlhbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzU3NTc1O1xyXG59XHJcblxyXG4uaW5wdXRNYXRlcmlhbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4vKiBMQUJFTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbGVmdDogNXB4O1xyXG4gIHRvcDogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG4uaW5wdXRNYXRlcmlhbDpmb2N1cyB+IGxhYmVsLFxyXG4uaW5wdXRNYXRlcmlhbDp2YWxpZCB+IGxhYmVsIHtcclxuICB0b3A6IC0yMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogI2U3MzA1YjtcclxufVxyXG5cclxuLyogQk9UVE9NIEJBUlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5iYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMzE1cHg7XHJcbn1cclxuLmJhcjpiZWZvcmUsXHJcbi5iYXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYm90dG9tOiAxcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNlNzMwNWI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcclxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG59XHJcbi5iYXI6YmVmb3JlIHtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuLmJhcjphZnRlciB7XHJcbiAgcmlnaHQ6IDUwJTtcclxufVxyXG5cclxuLyogYWN0aXZlIHN0YXRlICovXHJcbi5pbnB1dE1hdGVyaWFsOmZvY3VzIH4gLmJhcjpiZWZvcmUsXHJcbi5pbnB1dE1hdGVyaWFsOmZvY3VzIH4gLmJhcjphZnRlciB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogYWN0aXZlIHN0YXRlICovXHJcbi5pbnB1dE1hdGVyaWFsOmZvY3VzIH4gLmhpZ2hsaWdodCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcclxuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4jZm9vdGVyLWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlNzMwNWI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmZvb3Rlci10ZXh0IHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zaWduLXVwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5zaWduLXVwOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4iLCIubG9naW4tc2lnbnVwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEzJSA0NyUsIHJnYmEoMTQwLCAxNDAsIDE0MCwgMC4wMykgMCUsIHJnYmEoMTQwLCAxNDAsIDE0MCwgMC4wMykgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDEwMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDI4JSA2MyUsIHJnYmEoMTQzLCAxNDMsIDE0MywgMC4wMykgMCUsIHJnYmEoMTQzLCAxNDMsIDE0MywgMC4wMykgMTYlLCB0cmFuc3BhcmVudCAxNiUsIHRyYW5zcGFyZW50IDEwMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgxJSA1NiUsIHJnYmEoNjUsIDY1LCA2NSwgMC4wMykgMCUsIHJnYmEoNjUsIDY1LCA2NSwgMC4wMykgMTIlLCB0cmFuc3BhcmVudCAxMiUsIHRyYW5zcGFyZW50IDEwMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDI2JSA0OCUsIHJnYmEoNjAsIDYwLCA2MCwgMC4wMykgMCUsIHJnYmEoNjAsIDYwLCA2MCwgMC4wMykgNiUsIHRyYW5zcGFyZW50IDYlLCB0cmFuc3BhcmVudCAxMDAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5NyUgMTclLCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMDMpIDAlLCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMDMpIDU2JSwgdHJhbnNwYXJlbnQgNTYlLCB0cmFuc3BhcmVudCAxMDAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgMTAwJSwgcmdiYSgyNSwgMjUsIDI1LCAwLjAzKSAwJSwgcmdiYSgyNSwgMjUsIDI1LCAwLjAzKSAzNiUsIHRyYW5zcGFyZW50IDM2JSwgdHJhbnNwYXJlbnQgMTAwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNTUlIDUyJSwgcmdiYSg2OSwgNjksIDY5LCAwLjAzKSAwJSwgcmdiYSg2OSwgNjksIDY5LCAwLjAzKSA2JSwgdHJhbnNwYXJlbnQgNiUsIHRyYW5zcGFyZW50IDEwMCUpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHdoaXRlLCB3aGl0ZSk7XG59XG5cbi8qIEJPWCBMT0dJTiAqL1xuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0NzBweDtcbiAgei1pbmRleDogMjAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQwMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggIzAwMDAwMDMwLCAwIDZweCA2cHggIzAwMDAwMDNiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2U3MzA1YjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2NvbnQtbG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuI2JvdHRvbS1oZWFkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZTczMDViO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbiNib3R0b20taGVhZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5ib3ggaDEge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5ib3ggYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2U3MzA1YjtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMzMwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYm94IGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTczMDViO1xuICBjb2xvcjogIzI2MzIzODtcbn1cblxuLmJveCBidXR0b246aG92ZXIge1xuICB3aWR0aDogOTAlO1xufVxuXG4uYm94IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmlucHV0TWF0ZXJpYWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc1NzU3NTtcbn1cblxuLmlucHV0TWF0ZXJpYWw6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4vKiBMQUJFTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmxhYmVsIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xufVxuXG4vKiBhY3RpdmUgc3RhdGUgKi9cbi5pbnB1dE1hdGVyaWFsOmZvY3VzIH4gbGFiZWwsXG4uaW5wdXRNYXRlcmlhbDp2YWxpZCB+IGxhYmVsIHtcbiAgdG9wOiAtMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2U3MzA1Yjtcbn1cblxuLyogQk9UVE9NIEJBUlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMxNXB4O1xufVxuXG4uYmFyOmJlZm9yZSxcbi5iYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDA7XG4gIGJvdHRvbTogMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNlNzMwNWI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xufVxuXG4uYmFyOmJlZm9yZSB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmJhcjphZnRlciB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi8qIGFjdGl2ZSBzdGF0ZSAqL1xuLmlucHV0TWF0ZXJpYWw6Zm9jdXMgfiAuYmFyOmJlZm9yZSxcbi5pbnB1dE1hdGVyaWFsOmZvY3VzIH4gLmJhcjphZnRlciB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8qIGFjdGl2ZSBzdGF0ZSAqL1xuLmlucHV0TWF0ZXJpYWw6Zm9jdXMgfiAuaGlnaGxpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xuICAtbW96LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XG4gIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XG59XG5cbiNmb290ZXItYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2U3MzA1YjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi5mb290ZXItdGV4dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWduLXVwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5zaWduLXVwOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYm94IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
                providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");






class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es2015.js.map