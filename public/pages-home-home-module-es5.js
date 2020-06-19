function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js ***!
    \*************************************************************************************************************/

  /*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__ComponentLoaderFesm2015NgxBootstrapComponentLoaderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsComponentRef", function () {
      return BsComponentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentLoader", function () {
      return ComponentLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function () {
      return ComponentLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentRef", function () {
      return ContentRef;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var BsComponentRef = function BsComponentRef() {
      _classCallCheck(this, BsComponentRef);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */


    var ContentRef =
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    function ContentRef(
    /* tslint:disable-next-line: no-any */
    nodes, viewRef,
    /* tslint:disable-next-line: no-any */
    componentRef) {
      _classCallCheck(this, ContentRef);

      this.nodes = nodes;
      this.viewRef = viewRef;
      this.componentRef = componentRef;
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var ComponentLoader = /*#__PURE__*/function () {
      /**
       * Do not use this directly, it should be instanced via
       * `ComponentLoadFactory.attach`
       * \@internal
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _injector
       * @param {?} _componentFactoryResolver
       * @param {?} _ngZone
       * @param {?} _applicationRef
       * @param {?} _posService
       */
      // tslint:disable-next-line
      function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        _classCallCheck(this, ComponentLoader);

        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/

        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        /**
         * A selector used if container element was not found
         */

        this.containerDefaultSelector = 'body';
        this._listenOpts = {};
        this._globalListener = Function.prototype;
      }
      /**
       * @return {?}
       */


      _createClass(ComponentLoader, [{
        key: "attach",

        /**
         * @param {?} compType
         * @return {?}
         */
        value: function attach(compType) {
          this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
          return this;
        } // todo: add behaviour: to target element, `body`, custom element

        /**
         * @param {?=} container
         * @return {?}
         */

      }, {
        key: "to",
        value: function to(container) {
          this.container = container || this.container;
          return this;
        }
        /**
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "position",
        value: function position(opts) {
          this.attachment = opts.attachment || this.attachment;
          /* tslint:disable-next-line: no-unnecessary-type-assertion */

          this._elementRef =
          /** @type {?} */
          opts.target || this._elementRef;
          return this;
        }
        /**
         * @param {?} provider
         * @return {?}
         */

      }, {
        key: "provide",
        value: function provide(provider) {
          this._providers.push(provider);

          return this;
        } // todo: appendChild to element or document.querySelector(this.container)

        /**
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._subscribePositioning();

          this._innerComponent = null;

          if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            /** @type {?} */

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
              providers: this._providers,
              parent: this._injector
            });

            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);

            this._applicationRef.attachView(this._componentRef.hostView); // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);


            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);

            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
              this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }

            if (typeof this.container === 'string' && typeof document !== 'undefined') {
              /** @type {?} */
              var selectedElement = document.querySelector(this.container) || document.querySelector(this.containerDefaultSelector);
              selectedElement.appendChild(this._componentRef.location.nativeElement);
            }

            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
              this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            } // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy


            if (this._contentRef.componentRef) {
              this._innerComponent = this._contentRef.componentRef.instance;

              this._contentRef.componentRef.changeDetectorRef.markForCheck();

              this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }

            this._componentRef.changeDetectorRef.markForCheck();

            this._componentRef.changeDetectorRef.detectChanges();

            this.onShown.emit(this._componentRef.instance);
          }

          this._registerOutsideClick();

          return this._componentRef;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (!this._componentRef) {
            return this;
          }

          this._posService.deletePositionElement(this._componentRef.location);

          this.onBeforeHide.emit(this._componentRef.instance);
          /** @type {?} */

          var componentEl = this._componentRef.location.nativeElement;
          componentEl.parentNode.removeChild(componentEl);

          if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
          }

          this._componentRef.destroy();

          if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
          }

          if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
          }

          this._contentRef = null;
          this._componentRef = null;

          this._removeGlobalListener();

          this.onHidden.emit();
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isShown) {
            this.hide();
            return;
          }

          this.show();
        }
        /**
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.isShown) {
            this.hide();
          }

          this._unsubscribePositioning();

          if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
          }
        }
        /**
         * @param {?} listenOpts
         * @return {?}
         */

      }, {
        key: "listen",
        value: function listen(listenOpts) {
          var _this = this;

          this.triggers = listenOpts.triggers || this.triggers;
          this._listenOpts.outsideClick = listenOpts.outsideClick;
          this._listenOpts.outsideEsc = listenOpts.outsideEsc;
          listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
          /** @type {?} */

          var hide = this._listenOpts.hide =
          /**
          * @return {?}
          */
          function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
          };
          /** @type {?} */


          var show = this._listenOpts.show =
          /**
          * @param {?} registerHide
          * @return {?}
          */
          function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
          };
          /** @type {?} */


          var toggle =
          /**
          * @param {?} registerHide
          * @return {?}
          */
          function toggle(registerHide) {
            _this.isShown ? hide() : show(registerHide);
          };

          this._unregisterListenersFn = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
          });
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalListener) {
            this._globalListener();

            this._globalListener = null;
          }
        }
        /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */

      }, {
        key: "attachInline",
        value: function attachInline(vRef,
        /* tslint:disable-next-line: no-any*/
        template) {
          this._inlineViewRef = vRef.createEmbeddedView(template);
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_registerOutsideClick",
        value: function _registerOutsideClick() {
          var _this2 = this;

          if (!this._componentRef || !this._componentRef.location) {
            return;
          } // why: should run after first event bubble


          if (this._listenOpts.outsideClick) {
            /** @type {?} */
            var target = this._componentRef.location.nativeElement;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this2._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"])(_this2._renderer, {
                targets: [target, _this2._elementRef.nativeElement],
                outsideClick: _this2._listenOpts.outsideClick,
                hide:
                /**
                * @return {?}
                */
                function hide() {
                  return _this2._listenOpts.hide();
                }
              });
            });
          }

          if (this._listenOpts.outsideEsc) {
            /** @type {?} */
            var _target = this._componentRef.location.nativeElement;
            this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerEscClick"])(this._renderer, {
              targets: [_target, this._elementRef.nativeElement],
              outsideEsc: this._listenOpts.outsideEsc,
              hide:
              /**
              * @return {?}
              */
              function hide() {
                return _this2._listenOpts.hide();
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getInnerComponent",
        value: function getInnerComponent() {
          return this._innerComponent;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribePositioning",
        value: function _subscribePositioning() {
          var _this3 = this;

          if (this._zoneSubscription || !this.attachment) {
            return;
          }

          this.onShown.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this3._posService.position({
              element: _this3._componentRef.location,
              target: _this3._elementRef,
              attachment: _this3.attachment,
              appendToBody: _this3.container === 'body'
            });
          });
          this._zoneSubscription = this._ngZone.onStable.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!_this3._componentRef) {
              return;
            }

            _this3._posService.calcPosition();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_unsubscribePositioning",
        value: function _unsubscribePositioning() {
          if (!this._zoneSubscription) {
            return;
          }

          this._zoneSubscription.unsubscribe();

          this._zoneSubscription = null;
        }
        /**
         * @private
         * @param {?} content
         * @param {?=} context
         * @param {?=} initialState
         * @return {?}
         */

      }, {
        key: "_getContentRef",
        value: function _getContentRef(
        /* tslint:disable-next-line: no-any*/
        content,
        /* tslint:disable-next-line: no-any*/
        context,
        /* tslint:disable-next-line: no-any*/
        initialState) {
          if (!content) {
            return new ContentRef([]);
          }

          if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            if (this._viewContainerRef) {
              /** @type {?} */
              var _viewRef = this._viewContainerRef.createEmbeddedView(content, context);

              _viewRef.markForCheck();

              return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            /** @type {?} */


            var viewRef = content.createEmbeddedView({});

            this._applicationRef.attachView(viewRef);

            return new ContentRef([viewRef.rootNodes], viewRef);
          }

          if (typeof content === 'function') {
            /** @type {?} */
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */


            var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
              providers: this._providers,
              parent: this._injector
            });
            /** @type {?} */


            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);

            this._applicationRef.attachView(componentRef.hostView);

            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
          }

          return new ContentRef([[this._renderer.createText("".concat(content))]]);
        }
      }, {
        key: "isShown",
        get: function get() {
          if (this._isHiding) {
            return false;
          }

          return !!this._componentRef;
        }
      }]);

      return ComponentLoader;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ComponentLoaderFactory = /*#__PURE__*/function () {
      /**
       * @param {?} _componentFactoryResolver
       * @param {?} _ngZone
       * @param {?} _injector
       * @param {?} _posService
       * @param {?} _applicationRef
       */
      function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        _classCallCheck(this, ComponentLoaderFactory);

        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
      }
      /**
       *
       * @template T
       * @param {?} _elementRef
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @return {?}
       */


      _createClass(ComponentLoaderFactory, [{
        key: "createLoader",
        value: function createLoader(_elementRef, _viewContainerRef, _renderer) {
          return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
        }
      }]);

      return ComponentLoaderFactory;
    }();

    ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) {
      return new (t || ComponentLoaderFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]));
    };

    ComponentLoaderFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ComponentLoaderFactory,
      factory: ComponentLoaderFactory.ɵfac
    });
    /** @nocollapse */

    ComponentLoaderFactory.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentLoaderFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-component-loader.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js ***!
    \***************************************************************************************************/

  /*! exports provided: Positioning, PositioningService, positionElements */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__PositioningFesm2015NgxBootstrapPositioningJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Positioning", function () {
      return Positioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositioningService", function () {
      return PositioningService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return positionElements;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get CSS computed property of the given element
     * @param {?} element
     * @param {?=} property
     * @return {?}
     */


    function getStyleComputedProperty(element, property) {
      if (element.nodeType !== 1) {
        return [];
      } // NOTE: 1 DOM access here

      /** @type {?} */


      var window = element.ownerDocument.defaultView;
      /** @type {?} */

      var css = window.getComputedStyle(element, null);
      return property ? css[
      /** @type {?} */
      property] : css;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns the parentNode or the host of the element
     * @param {?} element
     * @return {?}
     */


    function getParentNode(element) {
      if (element.nodeName === 'HTML') {
        return element;
      }

      return element.parentNode || element.host;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getScrollParent(element) {
      // Return body, `getScroll` will take care to get the correct `scrollTop` from it
      if (!element) {
        return document.body;
      }

      switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
          return element.ownerDocument.body;

        case '#document':
          return element.body;

        default:
      } // Firefox want us to check `-x` and `-y` variations as well


      var _getStyleComputedProp = getStyleComputedProperty(element),
          overflow = _getStyleComputedProp.overflow,
          overflowX = _getStyleComputedProp.overflowX,
          overflowY = _getStyleComputedProp.overflowY;

      if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
      }

      return getScrollParent(getParentNode(element));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var isIE11 = isBrowser && !!(
    /** @type {?} */
    window.MSInputMethodContext &&
    /** @type {?} */
    document.documentMode);
    /** @type {?} */

    var isIE10 = isBrowser && !!(
    /** @type {?} */
    window.MSInputMethodContext && /MSIE 10/.test(
    /** @type {?} */
    navigator.userAgent));
    /**
     * @param {?=} version
     * @return {?}
     */

    function isIE(version) {
      if (version === 11) {
        return isIE11;
      }

      if (version === 10) {
        return isIE10;
      }

      return isIE11 || isIE10;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getOffsetParent(element) {
      if (!element) {
        return document.documentElement;
      }
      /** @type {?} */


      var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

      /** @type {?} */

      var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

      /** @type {?} */

      var sibling;

      while (offsetParent === noOffsetParent && element.nextElementSibling && sibling !== element.nextElementSibling) {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
      }
      /** @type {?} */


      var nodeName = offsetParent && offsetParent.nodeName;

      if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
      } // .offsetParent will return the closest TH, TD or TABLE in case


      if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
      }

      return offsetParent;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function isOffsetContainer(element) {
      var nodeName = element.nodeName;

      if (nodeName === 'BODY') {
        return false;
      }

      return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Finds the root node (document, shadowDOM root) of the given element
     * @param {?} node
     * @return {?}
     */


    function getRoot(node) {
      if (node.parentNode !== null) {
        return getRoot(node.parentNode);
      }

      return node;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element1
     * @param {?} element2
     * @return {?}
     */


    function findCommonOffsetParent(element1, element2) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
      } // Here we make sure to give as "start" the element that comes first in the DOM

      /* tslint:disable-next-line: no-bitwise */

      /** @type {?} */


      var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
      /** @type {?} */

      var start = order ? element1 : element2;
      /** @type {?} */

      var end = order ? element2 : element1; // Get common ancestor container

      /** @type {?} */

      var range = document.createRange();
      range.setStart(start, 0);
      range.setEnd(end, 0);
      var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

      if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
          return commonAncestorContainer;
        }

        return getOffsetParent(commonAncestorContainer);
      } // one of the nodes is inside shadowDOM, find which one

      /** @type {?} */


      var element1root = getRoot(element1);

      if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
      } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to detect borders of a given element
     */

    /**
     * @param {?} styles
     * @param {?} axis
     * @return {?}
     */


    function getBordersSize(styles, axis) {
      /** @type {?} */
      var sideA = axis === 'x' ? 'Left' : 'Top';
      /** @type {?} */

      var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
      return parseFloat(styles[
      /** @type {?} */
      "border".concat(sideA, "Width")]) + parseFloat(styles[
      /** @type {?} */
      "border".concat(sideB, "Width")]);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} axis
     * @param {?} body
     * @param {?} html
     * @param {?} computedStyle
     * @return {?}
     */


    function getSize(axis, body, html, computedStyle) {
      return Math.max(
      /** @type {?} */
      body["offset".concat(axis)],
      /** @type {?} */
      body["scroll".concat(axis)],
      /** @type {?} */
      html["client".concat(axis)],
      /** @type {?} */
      html["offset".concat(axis)],
      /** @type {?} */
      html["scroll".concat(axis)], isIE(10) ? parseInt(
      /** @type {?} */
      html["offset".concat(axis)], 10) + parseInt(computedStyle[
      /** @type {?} */
      "margin".concat(axis === 'Height' ? 'Top' : 'Left')], 10) + parseInt(computedStyle[
      /** @type {?} */
      "margin".concat(axis === 'Height' ? 'Bottom' : 'Right')], 10) : 0);
    }
    /**
     * @param {?} document
     * @return {?}
     */


    function getWindowSizes(document) {
      /** @type {?} */
      var body = document.body;
      /** @type {?} */

      var html = document.documentElement;
      /** @type {?} */

      var computedStyle = isIE(10) && getComputedStyle(html);
      return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Gets the scroll value of the given element in the given side (top and left)
     * @param {?} element
     * @param {?=} side
     * @return {?}
     */


    function getScroll(element) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

      /** @type {?} */
      var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
      /** @type {?} */

      var nodeName = element.nodeName;

      if (nodeName === 'BODY' || nodeName === 'HTML') {
        /** @type {?} */
        var html = element.ownerDocument.documentElement;
        /** @type {?} */

        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
      }

      return element[upperSide];
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} offsets
     * @return {?}
     */


    function getClientRect(offsets) {
      return Object.assign({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getBoundingClientRect(element) {
      /** @type {?} */
      var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
      // considered in DOM in some circumstances...
      // This isn't reproducible in IE10 compatibility mode of IE11

      try {
        if (isIE(10)) {
          rect = element.getBoundingClientRect();
          /** @type {?} */

          var scrollTop = getScroll(element, 'top');
          /** @type {?} */

          var scrollLeft = getScroll(element, 'left');
          rect.top += scrollTop;
          rect.left += scrollLeft;
          rect.bottom += scrollTop;
          rect.right += scrollLeft;
        } else {
          rect = element.getBoundingClientRect();
        }
      } catch (e) {
        return undefined;
      }
      /** @type {?} */


      var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      }; // subtract scrollbar size from sizes

      /** @type {?} */

      var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
      /** @type {?} */

      var width = sizes.width || element.clientWidth || result.right - result.left;
      /** @type {?} */

      var height = sizes.height || element.clientHeight || result.bottom - result.top;
      /** @type {?} */

      var horizScrollbar = element.offsetWidth - width;
      /** @type {?} */

      var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
      // we make this check conditional for performance reasons

      if (horizScrollbar || vertScrollbar) {
        /** @type {?} */
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
      }

      return getClientRect(result);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} rect
     * @param {?} element
     * @param {?=} subtract
     * @return {?}
     */


    function includeScroll(rect, element) {
      var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /** @type {?} */
      var scrollTop = getScroll(element, 'top');
      /** @type {?} */

      var scrollLeft = getScroll(element, 'left');
      /** @type {?} */

      var modifier = subtract ? -1 : 1;
      rect.top += scrollTop * modifier;
      rect.bottom += scrollTop * modifier;
      rect.left += scrollLeft * modifier;
      rect.right += scrollLeft * modifier;
      return rect;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} children
     * @param {?} parent
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getOffsetRectRelativeToArbitraryNode(children, parent) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /** @type {?} */
      var isIE10 = isIE(10);
      /** @type {?} */

      var isHTML = parent.nodeName === 'HTML';
      /** @type {?} */

      var childrenRect = getBoundingClientRect(children);
      /** @type {?} */

      var parentRect = getBoundingClientRect(parent);
      /** @type {?} */

      var scrollParent = getScrollParent(children);
      /** @type {?} */

      var styles = getStyleComputedProperty(parent);
      /** @type {?} */

      var borderTopWidth = parseFloat(styles.borderTopWidth);
      /** @type {?} */

      var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

      if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
      }
      /** @type {?} */


      var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
      });
      offsets.marginTop = 0;
      offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
      // we do this only on HTML because it's the only element that behaves
      // differently when margins are applied to it. The margins are included in
      // the box of the documentElement, in the other cases not.

      if (!isIE10 && isHTML) {
        /** @type {?} */
        var marginTop = parseFloat(styles.marginTop);
        /** @type {?} */

        var marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
      }

      if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
      }

      return offsets;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @param {?=} excludeScroll
     * @return {?}
     */


    function getViewportOffsetRectRelativeToArtbitraryNode(element) {
      var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /** @type {?} */
      var html = element.ownerDocument.documentElement;
      /** @type {?} */

      var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
      /** @type {?} */

      var width = Math.max(html.clientWidth, window.innerWidth || 0);
      /** @type {?} */

      var height = Math.max(html.clientHeight, window.innerHeight || 0);
      /** @type {?} */

      var scrollTop = !excludeScroll ? getScroll(html) : 0;
      /** @type {?} */

      var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
      /** @type {?} */

      var offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width: width,
        height: height
      };
      return getClientRect(offset);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function isFixed(element) {
      /** @type {?} */
      var nodeName = element.nodeName;

      if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
      }

      if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
      }

      return isFixed(getParentNode(element));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getFixedPositionOffsetParent(element) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
      }
      /** @type {?} */


      var el = element.parentElement;

      while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
      }

      return el || document.documentElement;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} padding
     * @param {?=} boundariesElement
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getBoundaries(target, host) {
      var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var boundariesElement = arguments.length > 3 ? arguments[3] : undefined;
      var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      // NOTE: 1 DOM access here
      // NOTE: 1 DOM access here

      /** @type {?} */
      var boundaries = {
        top: 0,
        left: 0
      };
      /** @type {?} */

      var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host); // Handle viewport case

      if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
      } else {
        // Handle other cases based on DOM element used as boundaries

        /** @type {?} */
        var boundariesNode;

        if (boundariesElement === 'scrollParent') {
          boundariesNode = getScrollParent(getParentNode(host));

          if (boundariesNode.nodeName === 'BODY') {
            boundariesNode = target.ownerDocument.documentElement;
          }
        } else if (boundariesElement === 'window') {
          boundariesNode = target.ownerDocument.documentElement;
        } else {
          boundariesNode = boundariesElement;
        }
        /** @type {?} */


        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
          var _getWindowSizes = getWindowSizes(target.ownerDocument),
              height = _getWindowSizes.height,
              width = _getWindowSizes.width;

          boundaries.top += offsets.top - offsets.marginTop;
          boundaries.bottom = Number(height) + Number(offsets.top);
          boundaries.left += offsets.left - offsets.marginLeft;
          boundaries.right = Number(width) + Number(offsets.left);
        } else {
          // for all the other DOM elements, this one is good
          boundaries = offsets;
        }
      } // Add paddings


      boundaries.left += padding;
      boundaries.top += padding;
      boundaries.right -= padding;
      boundaries.bottom -= padding;
      return boundaries;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} __0
     * @return {?}
     */


    function getArea(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return width * height;
    }
    /**
     * @param {?} placement
     * @param {?} refRect
     * @param {?} target
     * @param {?} host
     * @param {?=} allowedPositions
     * @param {?=} boundariesElement
     * @param {?=} padding
     * @return {?}
     */


    function computeAutoPlacement(placement, refRect, target, host) {
      var allowedPositions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['top', 'bottom', 'right', 'left'];
      var boundariesElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'viewport';
      var padding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

      if (placement.indexOf('auto') === -1) {
        return placement;
      }
      /** @type {?} */


      var boundaries = getBoundaries(target, host, padding, boundariesElement);
      /** @type {?} */

      var rects = {
        top: {
          width: boundaries.width,
          height: refRect.top - boundaries.top
        },
        right: {
          width: boundaries.right - refRect.right,
          height: boundaries.height
        },
        bottom: {
          width: boundaries.width,
          height: boundaries.bottom - refRect.bottom
        },
        left: {
          width: refRect.left - boundaries.left,
          height: boundaries.height
        }
      };
      /** @type {?} */

      var sortedAreas = Object.keys(rects).map(
      /**
      * @param {?} key
      * @return {?}
      */
      function (key) {
        return Object.assign({
          key: key
        }, rects[key], {
          area: getArea(rects[key])
        });
      }).sort(
      /**
      * @param {?} a
      * @param {?} b
      * @return {?}
      */
      function (a, b) {
        return b.area - a.area;
      });
      /** @type {?} */

      var filteredAreas = sortedAreas.filter(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        return width >= target.clientWidth && height >= target.clientHeight;
      });
      filteredAreas = filteredAreas.filter(
      /**
      * @param {?} position
      * @return {?}
      */
      function (position) {
        return allowedPositions.some(
        /**
        * @param {?} allowedPosition
        * @return {?}
        */
        function (allowedPosition) {
          return allowedPosition === position.key;
        });
      });
      /** @type {?} */

      var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
      /** @type {?} */

      var variation = placement.split(' ')[1]; // for tooltip on auto position

      target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(computedPlacement));
      return computedPlacement + (variation ? "-".concat(variation) : '');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function getOffsets(data) {
      return {
        width: data.offsets.target.width,
        height: data.offsets.target.height,
        left: Math.floor(data.offsets.target.left),
        top: Math.round(data.offsets.target.top),
        bottom: Math.round(data.offsets.target.bottom),
        right: Math.floor(data.offsets.target.right)
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the opposite placement of the given one
     * @param {?} placement
     * @return {?}
     */


    function getOppositePlacement(placement) {
      /** @type {?} */
      var hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
      };
      return placement.replace(/left|right|bottom|top/g,
      /**
      * @param {?} matched
      * @return {?}
      */
      function (matched) {
        return (
          /** @type {?} */
          hash[matched]
        );
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the opposite placement variation of the given one
     * @param {?} variation
     * @return {?}
     */


    function getOppositeVariation(variation) {
      if (variation === 'right') {
        return 'left';
      } else if (variation === 'left') {
        return 'right';
      }

      return variation;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @param {?} element
     * @return {?}
     */


    function getOuterSizes(element) {
      /** @type {?} */
      var window = element.ownerDocument.defaultView;
      /** @type {?} */

      var styles = window.getComputedStyle(element);
      /** @type {?} */

      var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
      /** @type {?} */

      var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
      return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getReferenceOffsets(target, host) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      /** @type {?} */
      var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
      return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} hostOffsets
     * @param {?} position
     * @return {?}
     */


    function getTargetOffsets(target, hostOffsets, position) {
      /** @type {?} */
      var placement = position.split(' ')[0]; // Get target node sizes

      /** @type {?} */

      var targetRect = getOuterSizes(target); // Add position, width and height to our offsets object

      /** @type {?} */

      var targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
      }; // depending by the target placement we have to compute its offsets slightly differently

      /** @type {?} */

      var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
      /** @type {?} */

      var mainSide = isHoriz ? 'top' : 'left';
      /** @type {?} */

      var secondarySide = isHoriz ? 'left' : 'top';
      /** @type {?} */

      var measurement = isHoriz ? 'height' : 'width';
      /** @type {?} */

      var secondaryMeasurement = !isHoriz ? 'height' : 'width';

      /** @type {?} */
      targetOffsets[mainSide] = hostOffsets[mainSide] + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;

      /** @type {?} */
      targetOffsets[secondarySide] = placement === secondarySide ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement] :
      /** @type {?} */
      hostOffsets[getOppositePlacement(secondarySide)];
      return targetOffsets;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper used to know if the given modifier is enabled.
     * @param {?} options
     * @param {?} modifierName
     * @return {?}
     */


    function isModifierEnabled(options, modifierName) {
      return options && options.modifiers && options.modifiers[modifierName] && options.modifiers[modifierName].enabled;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tells if a given input is a number
     * @param {?} n
     * @return {?}
     */


    function isNumeric(n) {
      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @param {?=} renderer
     * @return {?}
     */


    function updateContainerClass(data, renderer) {
      /** @type {?} */
      var target = data.instance.target;
      /** @type {?} */

      var containerClass = target.className;

      if (data.placementAuto) {
        containerClass = containerClass.replace(/bs-popover-auto/g, "bs-popover-".concat(data.placement));
        containerClass = containerClass.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(data.placement));
        containerClass = containerClass.replace(/\sauto/g, " ".concat(data.placement));

        if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
          containerClass += ' popover-auto';
        }

        if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
          containerClass += ' tooltip-auto';
        }
      }

      containerClass = containerClass.replace(/left|right|top|bottom/g, "".concat(data.placement.split(' ')[0]));

      if (renderer) {
        renderer.setAttribute(target, 'class', containerClass);
        return;
      }

      target.className = containerClass;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @param {?} styles
     * @param {?=} renderer
     * @return {?}
     */


    function setStyles(element, styles, renderer) {
      Object.keys(styles).forEach(
      /**
      * @param {?} prop
      * @return {?}
      */
      function (prop) {
        /** @type {?} */
        var unit = ''; // add unit if the value is numeric and is one of the following

        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
          unit = 'px';
        }

        if (renderer) {
          renderer.setStyle(element, prop, "".concat(String(styles[prop])).concat(unit));
          return;
        }

        element.style[prop] = String(styles[prop]) + unit;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function arrow(data) {
      var _data$offsets$arrow;

      /** @type {?} */
      var targetOffsets = data.offsets.target; // if arrowElement is a string, suppose it's a CSS selector

      /** @type {?} */

      var arrowElement = data.instance.target.querySelector('.arrow'); // if arrowElement is not found, don't run the modifier

      if (!arrowElement) {
        return data;
      }
      /** @type {?} */


      var isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
      /** @type {?} */

      var len = isVertical ? 'height' : 'width';
      /** @type {?} */

      var sideCapitalized = isVertical ? 'Top' : 'Left';
      /** @type {?} */

      var side = sideCapitalized.toLowerCase();
      /** @type {?} */

      var altSide = isVertical ? 'left' : 'top';
      /** @type {?} */

      var opSide = isVertical ? 'bottom' : 'right';
      /** @type {?} */

      var arrowElementSize = getOuterSizes(arrowElement)[len];
      /** @type {?} */

      var placementVariation = data.placement.split(' ')[1]; // top/left side

      if (data.offsets.host[opSide] - arrowElementSize <
      /** @type {?} */
      targetOffsets[side]) {
        /** @type {?} */
        targetOffsets[side] -=
        /** @type {?} */
        targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
      } // bottom/right side


      if (Number(
      /** @type {?} */
      data.offsets.host[side]) + Number(arrowElementSize) >
      /** @type {?} */
      targetOffsets[opSide]) {
        /** @type {?} */
        targetOffsets[side] += Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(arrowElementSize) - Number(
        /** @type {?} */
        targetOffsets[opSide]);
      }

      targetOffsets = getClientRect(targetOffsets); // Compute the sideValue using the updated target offsets
      // take target margin in account because we don't have this info available

      /** @type {?} */

      var css = getStyleComputedProperty(data.instance.target);
      /** @type {?} */

      var targetMarginSide = parseFloat(css["margin".concat(sideCapitalized)]);
      /** @type {?} */

      var targetBorderSide = parseFloat(css["border".concat(sideCapitalized, "Width")]); // compute center of the target

      /** @type {?} */

      var center;

      if (!placementVariation) {
        center = Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
      } else {
        /** @type {?} */
        var targetBorderRadius = parseFloat(css.borderRadius);
        /** @type {?} */

        var targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
        center = side === placementVariation ? Number(
        /** @type {?} */
        data.offsets.host[side]) + targetSideArrowOffset : Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
      }
      /** @type {?} */


      var sideValue = center -
      /** @type {?} */
      targetOffsets[side] - targetMarginSide - targetBorderSide; // prevent arrowElement from being placed not contiguously to its target

      sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
      data.offsets.arrow = (_data$offsets$arrow = {}, _defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), _defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
      data.instance.arrow = arrowElement;
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function flip(data) {
      data.offsets.target = getClientRect(data.offsets.target);

      if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
      }
      /** @type {?} */


      var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
      'viewport', false // positionFixed
      );
      /** @type {?} */

      var placement = data.placement.split(' ')[0];
      /** @type {?} */

      var variation = data.placement.split(' ')[1] || '';
      /** @type {?} */

      var offsetsHost = data.offsets.host;
      /** @type {?} */

      var target = data.instance.target;
      /** @type {?} */

      var host = data.instance.host;
      /** @type {?} */

      var adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
      /** @type {?} */

      var flipOrder = [placement, adaptivePosition];
      /* tslint:disable-next-line: cyclomatic-complexity */

      flipOrder.forEach(
      /**
      * @param {?} step
      * @param {?} index
      * @return {?}
      */
      function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
          return data;
        }

        placement = data.placement.split(' ')[0]; // using floor because the host offsets may contain decimals we are not going to consider here

        /** @type {?} */

        var overlapsRef = placement === 'left' && Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left) || placement === 'right' && Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right) || placement === 'top' && Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top) || placement === 'bottom' && Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom);
        /** @type {?} */

        var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */

        var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */

        var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */

        var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */

        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

        /** @type {?} */

        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */

        var flippedVariation = isVertical && variation === 'left' && overflowsLeft || isVertical && variation === 'right' && overflowsRight || !isVertical && variation === 'left' && overflowsTop || !isVertical && variation === 'right' && overflowsBottom;

        if (overlapsRef || overflowsBoundaries || flippedVariation) {
          if (overlapsRef || overflowsBoundaries) {
            placement = flipOrder[index + 1];
          }

          if (flippedVariation) {
            variation = getOppositeVariation(variation);
          }

          data.placement = placement + (variation ? " ".concat(variation) : '');
          data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
      });
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} targetElement
     * @param {?} hostElement
     * @param {?} position
     * @param {?} options
     * @return {?}
     */


    function initData(targetElement, hostElement, position, options) {
      /** @type {?} */
      var hostElPosition = getReferenceOffsets(targetElement, hostElement);

      if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/) && !position.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)) {
        /* tslint:disable-next-line: no-parameter-reassignment */
        position = 'auto';
      }
      /** @type {?} */


      var placementAuto = !!position.match(/auto/g); // support old placements 'auto left|right|top|bottom'

      /** @type {?} */

      var placement = position.match(/auto\s(left|right|top|bottom)/) ? position.split(' ')[1] || 'auto' : position; // Normalize placements that have identical main placement and variation ("right right" => "right").

      /** @type {?} */

      var matches = placement.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);

      if (matches) {
        placement = matches[1] + (matches[2] ? " ".concat(matches[2]) : '');
      } // "left right", "top bottom" etc. placements also considered incorrect.


      if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
        placement = 'auto';
      }
      /** @type {?} */


      var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
      placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
      return {
        options: options,
        instance: {
          target: targetElement,
          host: hostElement,
          arrow: null
        },
        offsets: {
          target: targetOffset,
          host: hostElPosition,
          arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function preventOverflow(data) {
      if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
      } // NOTE: DOM access here
      // resets the targetOffsets's position so that the document size can be calculated excluding
      // the size of the targetOffsets element itself

      /** @type {?} */


      var transformProp = 'transform';
      /** @type {?} */

      var targetStyles = data.instance.target.style; // assignment to help minification

      var top = targetStyles.top,
          left = targetStyles.left,
          transform = targetStyles[transformProp];
      targetStyles.top = '';
      targetStyles.left = '';
      targetStyles[transformProp] = '';
      /** @type {?} */

      var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
      'scrollParent', false // positionFixed
      ); // NOTE: DOM access here
      // restores the original style properties after the offsets have been computed

      targetStyles.top = top;
      targetStyles.left = left;
      targetStyles[transformProp] = transform;
      /** @type {?} */

      var order = ['left', 'right', 'top', 'bottom'];
      /** @type {?} */

      var check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary: function primary(placement) {
          /** @type {?} */
          var value =
          /** @type {?} */
          data.offsets.target[placement];

          if (
          /** @type {?} */
          data.offsets.target[placement] < boundaries[placement] && !false // options.escapeWithReference
          ) {
              value = Math.max(
              /** @type {?} */
              data.offsets.target[placement], boundaries[placement]);
            }

          return _defineProperty({}, placement, value);
        },

        /**
         * @param {?} placement
         * @return {?}
         */
        secondary: function secondary(placement) {
          /** @type {?} */
          var mainSide = placement === 'right' ? 'left' : 'top';
          /** @type {?} */

          var value = data.offsets.target[mainSide];

          if (
          /** @type {?} */
          data.offsets.target[placement] > boundaries[placement] && !false // escapeWithReference
          ) {
              value = Math.min(data.offsets.target[mainSide], boundaries[placement] - (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }

          return _defineProperty({}, mainSide, value);
        }
      };
      /** @type {?} */

      var side;
      order.forEach(
      /**
      * @param {?} placement
      * @return {?}
      */
      function (placement) {
        side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        data.offsets.target = Object.assign({}, data.offsets.target,
        /** @type {?} */
        check[side](placement));
      });
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function shift(data) {
      /** @type {?} */
      var placement = data.placement;
      /** @type {?} */

      var basePlacement = placement.split(' ')[0];
      /** @type {?} */

      var shiftVariation = placement.split(' ')[1];

      if (shiftVariation) {
        var _data$offsets = data.offsets,
            host = _data$offsets.host,
            target = _data$offsets.target;
        /** @type {?} */

        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */

        var side = isVertical ? 'left' : 'top';
        /** @type {?} */

        var measurement = isVertical ? 'width' : 'height';
        /** @type {?} */

        var shiftOffsets = {
          start: _defineProperty({}, side, host[side]),
          end: _defineProperty({}, side, host[side] + host[measurement] - target[measurement])
        };
        data.offsets.target = Object.assign({}, target, _defineProperty({}, side, side === shiftVariation ?
        /** @type {?} */
        shiftOffsets.start[side] :
        /** @type {?} */
        shiftOffsets.end[side]));
      }

      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Positioning = /*#__PURE__*/function () {
      function Positioning() {
        _classCallCheck(this, Positioning);
      }

      _createClass(Positioning, [{
        key: "position",

        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */
        value: function position(hostElement, targetElement) {
          var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.offset(hostElement, targetElement, false);
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */

      }, {
        key: "offset",
        value: function offset(hostElement, targetElement) {
          var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return getReferenceOffsets(targetElement, hostElement);
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} position
         * @param {?=} appendToBody
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "positionElements",
        value: function positionElements(hostElement, targetElement, position, appendToBody, options) {
          /** @type {?} */
          var chainOfModifiers = [flip, shift, preventOverflow, arrow];
          return chainOfModifiers.reduce(
          /**
          * @param {?} modifiedData
          * @param {?} modifier
          * @return {?}
          */
          function (modifiedData, modifier) {
            return modifier(modifiedData);
          }, initData(targetElement, hostElement, position, options));
        }
      }]);

      return Positioning;
    }();
    /** @type {?} */


    var positionService = new Positioning();
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @param {?=} options
     * @param {?=} renderer
     * @return {?}
     */

    function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
      /** @type {?} */
      var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
      /** @type {?} */

      var offsets = getOffsets(data);
      setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: "translate3d(".concat(offsets.left, "px, ").concat(offsets.top, "px, 0px)")
      }, renderer);

      if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
      }

      updateContainerClass(data, renderer);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function PositioningOptions() {}

    if (false) {}

    var PositioningService = /*#__PURE__*/function () {
      /**
       * @param {?} ngZone
       * @param {?} rendererFactory
       * @param {?} platformId
       */
      function PositioningService(ngZone, rendererFactory, platformId) {
        var _this4 = this;

        _classCallCheck(this, PositioningService);

        this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.positionElements = new Map();
        this.isDisabled = false;

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
          ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this4.triggerEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll', {
              passive: true
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize', {
              passive: true
            }),
            /* tslint:disable-next-line: deprecation */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), _this4.update$$);

            _this4.triggerEvent$.subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this4.isDisabled) {
                return;
              }

              _this4.positionElements
              /* tslint:disable-next-line: no-any */
              .forEach(
              /**
              * @param {?} positionElement
              * @return {?}
              */
              function (positionElement) {
                positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this4.options, rendererFactory.createRenderer(null, null));
              });
            });
          });
        }
      }
      /**
       * @param {?} options
       * @return {?}
       */


      _createClass(PositioningService, [{
        key: "position",
        value: function position(options) {
          this.addPositionElement(options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "disable",

        /**
         * @return {?}
         */
        value: function disable() {
          this.isDisabled = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          this.isDisabled = false;
        }
        /**
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "addPositionElement",
        value: function addPositionElement(options) {
          this.positionElements.set(_getHtmlElement(options.element), options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "calcPosition",
        value: function calcPosition() {
          this.update$$.next();
        }
        /**
         * @param {?} elRef
         * @return {?}
         */

      }, {
        key: "deletePositionElement",
        value: function deletePositionElement(elRef) {
          this.positionElements["delete"](_getHtmlElement(elRef));
        }
        /**
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          this.options = options;
        }
      }, {
        key: "event$",
        get: function get() {
          return this.triggerEvent$;
        }
      }]);

      return PositioningService;
    }();

    PositioningService.ɵfac = function PositioningService_Factory(t) {
      return new (t || PositioningService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    PositioningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PositioningService,
      factory: PositioningService.ɵfac
    });
    /** @nocollapse */

    PositioningService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
      }, {
        type: Number,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositioningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: Number,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @param {?} element
     * @return {?}
     */


    function _getHtmlElement(element) {
      // it means that we got a selector
      if (typeof element === 'string') {
        return document.querySelector(element);
      }

      if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
        return element.nativeElement;
      }

      return element;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-positioning.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js ***!
    \*******************************************************************************************/

  /*! exports provided: TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__TooltipFesm2015NgxBootstrapTooltipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipConfig", function () {
      return TooltipConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function () {
      return TooltipContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
      return TooltipDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipModule", function () {
      return TooltipModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/component-loader */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default values provider for tooltip
     */


    var _c0 = ["*"];

    var TooltipConfig = function TooltipConfig() {
      _classCallCheck(this, TooltipConfig);

      /**
       * sets disable adaptive position
       */
      this.adaptivePosition = true;
      /**
       * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
       */

      this.placement = 'top';
      /**
       * array of event names which triggers tooltip opening
       */

      this.triggers = 'hover focus';
      /**
       * delay before showing the tooltip
       */

      this.delay = 0;
    };

    TooltipConfig.ɵfac = function TooltipConfig_Factory(t) {
      return new (t || TooltipConfig)();
    };

    TooltipConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TooltipConfig,
      factory: TooltipConfig.ɵfac
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TooltipContainerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} config
       */
      function TooltipContainerComponent(config) {
        _classCallCheck(this, TooltipContainerComponent);

        Object.assign(this, config);
      }
      /**
       * @return {?}
       */


      _createClass(TooltipContainerComponent, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          this.classMap = {
            "in": false,
            fade: false
          };
          this.classMap[this.placement] = true;
          this.classMap["tooltip-".concat(this.placement)] = true;
          this.classMap["in"] = true;

          if (this.animation) {
            this.classMap.fade = true;
          }

          if (this.containerClass) {
            this.classMap[this.containerClass] = true;
          }
        }
      }, {
        key: "isBs3",
        get: function get() {
          return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        }
      }]);

      return TooltipContainerComponent;
    }();

    TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) {
      return new (t || TooltipContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig));
    };

    TooltipContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TooltipContainerComponent,
      selectors: [["bs-tooltip-container"]],
      hostAttrs: ["role", "tooltip"],
      hostVars: 7,
      hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
        }
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]],
      template: function TooltipContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"],
      changeDetection: 0
    });
    /** @nocollapse */

    TooltipContainerComponent.ctorParameters = function () {
      return [{
        type: TooltipConfig
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var id = 0;

    var TooltipDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainerRef
       * @param {?} cis
       * @param {?} config
       * @param {?} _elementRef
       * @param {?} _renderer
       * @param {?} _positionService
       */
      function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        _classCallCheck(this, TooltipDirective);

        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /**
         * Fired when tooltip content changes
         */

        /* tslint:disable-next-line:no-any */

        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Css class for tooltip container
         */

        this.containerClass = '';
        /**
         * @deprecated - removed, will be added to configuration
         */

        this.tooltipAnimation = true;
        /**
         * @deprecated
         */

        this.tooltipFadeDuration = 150;
        /**
         * @deprecated
         */

        this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._tooltip = cis.createLoader(this._elementRef, _viewContainerRef, this._renderer).provide({
          provide: TooltipConfig,
          useValue: config
        });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
      }
      /**
       * Returns whether or not the tooltip is currently being shown
       * @return {?}
       */


      _createClass(TooltipDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this5 = this;

          this._tooltip.listen({
            triggers: this.triggers,
            show:
            /**
            * @return {?}
            */
            function show() {
              return _this5.show();
            }
          });
          /* tslint:disable-next-line:no-any */


          this.tooltipChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            if (!value) {
              _this5._tooltip.hide();
            }
          });
          this.onShown.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this5.setAriaDescribedBy();
          });
          this.onHidden.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this5.setAriaDescribedBy();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "setAriaDescribedBy",
        value: function setAriaDescribedBy() {
          this._ariaDescribedby = this.isOpen ? "tooltip-".concat(this.tooltipId) : null;

          if (this._ariaDescribedby) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
          } else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
          }
        }
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isOpen) {
            return this.hide();
          }

          this.show();
        }
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this6 = this;

          this._positionService.setOptions({
            modifiers: {
              flip: {
                enabled: this.adaptivePosition
              },
              preventOverflow: {
                enabled: this.adaptivePosition
              }
            }
          });

          if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
            return;
          }
          /** @type {?} */


          var showTooltip =
          /**
          * @return {?}
          */
          function showTooltip() {
            if (_this6._delayTimeoutId) {
              _this6._delayTimeoutId = undefined;
            }

            _this6._tooltip.attach(TooltipContainerComponent).to(_this6.container).position({
              attachment: _this6.placement
            }).show({
              content: _this6.tooltip,
              placement: _this6.placement,
              containerClass: _this6.containerClass,
              id: "tooltip-".concat(_this6.tooltipId)
            });
          };
          /** @type {?} */


          var cancelDelayedTooltipShowing =
          /**
          * @return {?}
          */
          function cancelDelayedTooltipShowing() {
            if (_this6._tooltipCancelShowFn) {
              _this6._tooltipCancelShowFn();
            }
          };

          if (this.delay) {
            if (this._delaySubscription) {
              this._delaySubscription.unsubscribe();
            }

            this._delaySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(this.delay).subscribe(
            /**
            * @return {?}
            */
            function () {
              showTooltip();
              cancelDelayedTooltipShowing();
            });

            if (this.triggers) {
              Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"])(this.triggers).forEach(
              /**
              * @param {?} trigger
              * @return {?}
              */
              function (trigger) {
                _this6._tooltipCancelShowFn = _this6._renderer.listen(_this6._elementRef.nativeElement, trigger.close,
                /**
                * @return {?}
                */
                function () {
                  _this6._delaySubscription.unsubscribe();

                  cancelDelayedTooltipShowing();
                });
              });
            }
          } else {
            showTooltip();
          }
        }
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var _this7 = this;

          if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
          }

          if (!this._tooltip.isShown) {
            return;
          }

          this._tooltip.instance.classMap["in"] = false;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this7._tooltip.hide();
          }, this.tooltipFadeDuration);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._tooltip.dispose();

          this.tooltipChange.unsubscribe();

          if (this._delaySubscription) {
            this._delaySubscription.unsubscribe();
          }

          this.onShown.unsubscribe();
          this.onHidden.unsubscribe();
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this._tooltip.isShown;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value) {
            this.show();
          } else {
            this.hide();
          }
        }
        /**
         * @deprecated - please use `tooltip` instead
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "htmlContent",
        set: function set(value) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
          this.tooltip = value;
        }
        /**
         * @deprecated - please use `placement` instead
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_placement",
        set: function set(value) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
          this.placement = value;
        }
        /**
         * @deprecated - please use `isOpen` instead
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_isOpen",
        set: function set(value) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
          this.isOpen = value;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
          return this.isOpen;
        }
        /**
         * @deprecated - please use `isDisabled` instead
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_enable",
        set: function set(value) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
          this.isDisabled = !value;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
          return this.isDisabled;
        }
        /**
         * @deprecated - please use `container="body"` instead
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_appendToBody",
        set: function set(value) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
          this.container = value ? 'body' : this.container;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
          return this.container === 'body';
        }
        /**
         * @deprecated - will replaced with customClass
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_popupClass",
        set: function set(value) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipClass deprecated');
        }
        /**
         * @deprecated - removed
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_tooltipContext",
        set: function set(value) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipContext deprecated');
        }
        /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_tooltipPopupDelay",
        set: function set(value) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
          this.delay = value;
        }
        /**
         * @deprecated -  please use `triggers` instead
         * @return {?}
         */

      }, {
        key: "_tooltipTrigger",
        get: function get() {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
          return this.triggers;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
          this.triggers = (value || '').toString();
        }
      }]);

      return TooltipDirective;
    }();

    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
      return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]));
    };

    TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TooltipDirective,
      selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]],
      inputs: {
        containerClass: "containerClass",
        tooltipAnimation: "tooltipAnimation",
        tooltipFadeDuration: "tooltipFadeDuration",
        isOpen: "isOpen",
        htmlContent: ["tooltipHtml", "htmlContent"],
        tooltip: "tooltip",
        _placement: ["tooltipPlacement", "_placement"],
        placement: "placement",
        _isOpen: ["tooltipIsOpen", "_isOpen"],
        _enable: ["tooltipEnable", "_enable"],
        isDisabled: "isDisabled",
        _appendToBody: ["tooltipAppendToBody", "_appendToBody"],
        container: "container",
        _popupClass: ["tooltipClass", "_popupClass"],
        _tooltipContext: ["tooltipContext", "_tooltipContext"],
        _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"],
        delay: "delay",
        _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"],
        triggers: "triggers",
        adaptivePosition: "adaptivePosition"
      },
      outputs: {
        tooltipChange: "tooltipChange",
        tooltipStateChanged: "tooltipStateChanged",
        onShown: "onShown",
        onHidden: "onHidden"
      },
      exportAs: ["bs-tooltip"]
    });
    /** @nocollapse */

    TooltipDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
      }, {
        type: TooltipConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]
      }];
    };

    TooltipDirective.propDecorators = {
      adaptivePosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltip: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      triggers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      containerClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      delay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onShown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      htmlContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipHtml']
      }],
      _placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipPlacement']
      }],
      _isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipIsOpen']
      }],
      _enable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipEnable']
      }],
      _appendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipAppendToBody']
      }],
      tooltipAnimation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _popupClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipClass']
      }],
      _tooltipContext: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipContext']
      }],
      _tooltipPopupDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipPopupDelay']
      }],
      tooltipFadeDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _tooltipTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipTrigger']
      }],
      tooltipStateChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], TooltipDirective.prototype, "tooltip", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bs-tooltip-container',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          // tslint:disable-next-line
          host: {
            '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
            '[class.show]': '!isBs3',
            '[class.bs3]': 'isBs3',
            '[attr.id]': 'this.id',
            role: 'tooltip'
          },
          template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
          styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: TooltipConfig
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[tooltip], [tooltipHtml]',
          exportAs: 'bs-tooltip'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
        }, {
          type: TooltipConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]
        }];
      }, {
        tooltipChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        containerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipFadeDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipStateChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        htmlContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipHtml']
        }],
        tooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipPlacement']
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipIsOpen']
        }],
        _enable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipEnable']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _appendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipAppendToBody']
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _popupClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipClass']
        }],
        _tooltipContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipContext']
        }],
        _tooltipPopupDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipPopupDelay']
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _tooltipTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltipTrigger']
        }],
        triggers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        adaptivePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TooltipModule = /*#__PURE__*/function () {
      function TooltipModule() {
        _classCallCheck(this, TooltipModule);
      }

      _createClass(TooltipModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]]
          };
        }
      }]);

      return TooltipModule;
    }();

    TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TooltipModule
    });
    TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TooltipModule_Factory(t) {
        return new (t || TooltipModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipModule, {
        declarations: function declarations() {
          return [TooltipDirective, TooltipContainerComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]];
        },
        exports: function exports() {
          return [TooltipDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
          declarations: [TooltipDirective, TooltipContainerComponent],
          exports: [TooltipDirective],
          entryComponents: [TooltipContainerComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-tooltip.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js ***!
    \***************************************************************************************/

  /*! exports provided: LinkedList, OnChange, Trigger, Utils, document, isBs3, listenToTriggers, listenToTriggersV2, parseTriggers, registerEscClick, registerOutsideClick, setTheme, warnOnce, window */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__UtilsFesm2015NgxBootstrapUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkedList", function () {
      return LinkedList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnChange", function () {
      return OnChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Trigger", function () {
      return Trigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "document", function () {
      return document$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isBs3", function () {
      return isBs3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listenToTriggers", function () {
      return listenToTriggers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function () {
      return listenToTriggersV2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseTriggers", function () {
      return parseTriggers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerEscClick", function () {
      return registerEscClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function () {
      return registerOutsideClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setTheme", function () {
      return setTheme;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "warnOnce", function () {
      return warnOnce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "window", function () {
      return win;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */


    var Trigger = /*#__PURE__*/function () {
      /**
       * @param {?} open
       * @param {?=} close
       */
      function Trigger(open, close) {
        _classCallCheck(this, Trigger);

        this.open = open;
        this.close = close || open;
      }
      /**
       * @return {?}
       */


      _createClass(Trigger, [{
        key: "isManual",
        value: function isManual() {
          return this.open === 'manual' || this.close === 'manual';
        }
      }]);

      return Trigger;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function ListenOptions() {}

    if (false) {}
    /** @type {?} */


    var DEFAULT_ALIASES = {
      hover: ['mouseover', 'mouseout'],
      focus: ['focusin', 'focusout']
    };
    /* tslint:disable-next-line: no-any */

    /**
     * @param {?} triggers
     * @param {?=} aliases
     * @return {?}
     */

    function parseTriggers(triggers) {
      var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ALIASES;

      /** @type {?} */
      var trimmedTriggers = (triggers || '').trim();

      if (trimmedTriggers.length === 0) {
        return [];
      }
      /** @type {?} */


      var parsedTriggers = trimmedTriggers.split(/\s+/).map(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        return trigger.split(':');
      }).map(
      /**
      * @param {?} triggerPair
      * @return {?}
      */
      function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
      });
      /** @type {?} */

      var manualTriggers = parsedTriggers.filter(
      /**
      * @param {?} triggerPair
      * @return {?}
      */
      function (triggerPair) {
        return triggerPair.isManual();
      });

      if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
      }

      if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
      }

      return parsedTriggers;
    }
    /**
     * @param {?} renderer
     * @param {?} target
     * @param {?} triggers
     * @param {?} showFn
     * @param {?} hideFn
     * @param {?} toggleFn
     * @return {?}
     */


    function listenToTriggers(renderer,
    /* tslint:disable-next-line: no-any */
    target, triggers, showFn, hideFn, toggleFn) {
      /** @type {?} */
      var parsedTriggers = parseTriggers(triggers);
      /* tslint:disable-next-line: no-any */

      /** @type {?} */

      var listeners = [];

      if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
      }

      parsedTriggers.forEach(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        if (trigger.open === trigger.close) {
          listeners.push(renderer.listen(target, trigger.open, toggleFn));
          return;
        }

        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
      });
      return (
        /**
        * @return {?}
        */
        function () {
          listeners.forEach(
          /**
          * @param {?} unsubscribeFn
          * @return {?}
          */
          function (unsubscribeFn) {
            return unsubscribeFn();
          });
        }
      );
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function listenToTriggersV2(renderer, options) {
      /** @type {?} */
      var parsedTriggers = parseTriggers(options.triggers);
      /** @type {?} */

      var target = options.target; // do nothing

      if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
      } // all listeners

      /* tslint:disable-next-line: no-any */

      /** @type {?} */


      var listeners = []; // lazy listeners registration

      /** @type {?} */

      var _registerHide = [];
      /** @type {?} */

      var registerHide =
      /**
      * @return {?}
      */
      function registerHide() {
        // add hide listeners to unregister array
        _registerHide.forEach(
        /**
        * @param {?} fn
        * @return {?}
        */
        function (fn) {
          return listeners.push(fn());
        }); // register hide events only once


        _registerHide.length = 0;
      }; // register open\close\toggle listeners


      parsedTriggers.forEach(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        /** @type {?} */
        var useToggle = trigger.open === trigger.close;
        /** @type {?} */

        var showFn = useToggle ? options.toggle : options.show;

        if (!useToggle) {
          _registerHide.push(
          /**
          * @return {?}
          */
          function () {
            return renderer.listen(target, trigger.close, options.hide);
          });
        }

        listeners.push(renderer.listen(target, trigger.open,
        /**
        * @return {?}
        */
        function () {
          return showFn(registerHide);
        }));
      });
      return (
        /**
        * @return {?}
        */
        function () {
          listeners.forEach(
          /**
          * @param {?} unsubscribeFn
          * @return {?}
          */
          function (unsubscribeFn) {
            return unsubscribeFn();
          });
        }
      );
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function registerOutsideClick(renderer, options) {
      if (!options.outsideClick) {
        return Function.prototype;
      }
      /* tslint:disable-next-line: no-any */


      return renderer.listen('document', 'click',
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (options.target && options.target.contains(event.target)) {
          return undefined;
        }

        if (options.targets && options.targets.some(
        /**
        * @param {?} target
        * @return {?}
        */
        function (target) {
          return target.contains(event.target);
        })) {
          return undefined;
        }

        options.hide();
      });
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function registerEscClick(renderer, options) {
      if (!options.outsideEsc) {
        return Function.prototype;
      }

      return renderer.listen('document', 'keyup.esc',
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (options.target && options.target.contains(event.target)) {
          return undefined;
        }

        if (options.targets && options.targets.some(
        /**
        * @param {?} target
        * @return {?}
        */
        function (target) {
          return target.contains(event.target);
        })) {
          return undefined;
        }

        options.hide();
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * JS version of browser APIs. This library can only run in the browser.
     * @type {?}
     */


    var win = typeof window !== 'undefined' && window ||
    /** @type {?} */
    {};
    /** @type {?} */

    var document$1 = win.document;
    /** @type {?} */

    var location = win.location;
    /** @type {?} */

    var gc = win.gc ?
    /**
    * @return {?}
    */
    function () {
      return win.gc();
    } :
    /**
    * @return {?}
    */
    function () {
      return null;
    };
    /** @type {?} */

    var performance = win.performance ? win.performance : null;
    /** @type {?} */

    var Event = win.Event;
    /** @type {?} */

    var MouseEvent = win.MouseEvent;
    /** @type {?} */

    var KeyboardEvent = win.KeyboardEvent;
    /** @type {?} */

    var EventTarget = win.EventTarget;
    /** @type {?} */

    var History = win.History;
    /** @type {?} */

    var Location = win.Location;
    /** @type {?} */

    var EventListener = win.EventListener;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var guessedVersion;
    /**
     * @return {?}
     */

    function _guessBsVersion() {
      if (typeof document === 'undefined') {
        return null;
      }
      /** @type {?} */


      var spanEl = document.createElement('span');
      spanEl.innerText = 'test bs version';
      document.body.appendChild(spanEl);
      spanEl.classList.add('d-none');
      /** @type {?} */

      var rect = spanEl.getBoundingClientRect();
      document.body.removeChild(spanEl);

      if (!rect) {
        return 'bs3';
      }

      return rect.top === 0 ? 'bs4' : 'bs3';
    }
    /**
     * @param {?} theme
     * @return {?}
     */


    function setTheme(theme) {
      guessedVersion = theme;
    } // todo: in ngx-bootstrap, bs4 will became a default one

    /**
     * @return {?}
     */


    function isBs3() {
      if (typeof win === 'undefined') {
        return true;
      }

      if (typeof win.__theme === 'undefined') {
        if (guessedVersion) {
          return guessedVersion === 'bs3';
        }

        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
      }

      return win.__theme !== 'bs4';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var LinkedList = /*#__PURE__*/function () {
      function LinkedList() {
        _classCallCheck(this, LinkedList);

        this.length = 0;
        this.asArray = []; // Array methods overriding END
      }
      /**
       * @param {?} position
       * @return {?}
       */


      _createClass(LinkedList, [{
        key: "get",
        value: function get(position) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
          }
          /** @type {?} */


          var current = this.head;

          for (var index = 0; index < position; index++) {
            current = current.next;
          }

          return current.value;
        }
        /**
         * @param {?} value
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(value) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;

          if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
          }
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */


          var node = {
            value: value,
            next: undefined,
            previous: undefined
          };

          if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
          } else {
            if (position === 0) {
              // first node
              node.next = this.head;
              this.head.previous = node;
              this.head = node;
            } else if (position === this.length) {
              // last node
              this.tail.next = node;
              node.previous = this.tail;
              this.tail = node;
            } else {
              // node in middle

              /** @type {?} */
              var currentPreviousNode = this.getNode(position - 1);
              /** @type {?} */

              var currentNextNode = currentPreviousNode.next;
              currentPreviousNode.next = node;
              currentNextNode.previous = node;
              node.previous = currentPreviousNode;
              node.next = currentNextNode;
            }
          }

          this.length++;
          this.createInternalArrayRepresentation();
        }
        /**
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }

          if (position === 0) {
            // first node
            this.head = this.head.next;

            if (this.head) {
              // there is no second node
              this.head.previous = undefined;
            } else {
              // there is no second node
              this.tail = undefined;
            }
          } else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
          } else {
            // middle node

            /** @type {?} */
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
          }

          this.length--;
          this.createInternalArrayRepresentation();
        }
        /**
         * @param {?} position
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "set",
        value: function set(position, value) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }
          /** @type {?} */


          var node = this.getNode(position);
          node.value = value;
          this.createInternalArrayRepresentation();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toArray",
        value: function toArray() {
          return this.asArray;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "findAll",
        value: function findAll(fn) {
          /** @type {?} */
          var current = this.head;
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */

          var result = [];

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result.push({
                index: index,
                value: current.value
              });
            }

            current = current.next;
          }

          return result;
        } // Array methods overriding start

        /**
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "push",
        value: function push() {
          var _this8 = this;

          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }

          /* tslint:disable-next-line: no-any*/
          args.forEach(
          /**
          * @param {?} arg
          * @return {?}
          */
          function (arg) {
            _this8.add(arg);
          });
          return this.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "pop",
        value: function pop() {
          if (this.length === 0) {
            return undefined;
          }
          /** @type {?} */


          var last = this.tail;
          this.remove(this.length - 1);
          return last.value;
        }
        /**
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "unshift",
        value: function unshift() {
          var _this9 = this;

          for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
            args[_key3] = arguments[_key3];
          }

          args.reverse();
          /* tslint:disable-next-line: no-any*/

          args.forEach(
          /**
          * @param {?} arg
          * @return {?}
          */
          function (arg) {
            _this9.add(arg, 0);
          });
          return this.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0) {
            return undefined;
          }
          /** @type {?} */


          var lastItem = this.head.value;
          this.remove();
          return lastItem;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "forEach",
        value: function forEach(fn) {
          /** @type {?} */
          var current = this.head;

          for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "indexOf",
        value: function indexOf(value) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var position = 0;

          for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
              position = index;
              break;
            }

            current = current.next;
          }

          return position;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "some",
        value: function some(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result = false;

          while (current && !result) {
            if (fn(current.value)) {
              result = true;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "every",
        value: function every(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result = true;

          while (current && result) {
            if (!fn(current.value)) {
              result = false;
            }

            current = current.next;
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          return '[Linked List]';
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "find",
        value: function find(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result;

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result = current.value;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "findIndex",
        value: function findIndex(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result;

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result = index;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @protected
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "getNode",
        value: function getNode(position) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }
          /** @type {?} */


          var current = this.head;

          for (var index = 0; index < position; index++) {
            current = current.next;
          }

          return current;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "createInternalArrayRepresentation",
        value: function createInternalArrayRepresentation() {
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */
          var outArray = [];
          /** @type {?} */

          var current = this.head;

          while (current) {
            outArray.push(current.value);
            current = current.next;
          }

          this.asArray = outArray;
        }
      }]);

      return LinkedList;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /*tslint:disable:no-invalid-this */

    /* tslint:disable-next-line: no-any */

    /**
     * @param {?=} defaultValue
     * @return {?}
     */


    function OnChange(defaultValue) {
      /** @type {?} */
      var sufix = 'Change';
      /* tslint:disable-next-line: no-any */

      return (
        /**
        * @param {?} target
        * @param {?} propertyKey
        * @return {?}
        */
        function OnChangeHandler(target, propertyKey) {
          /** @type {?} */
          var _key = " __".concat(propertyKey, "Value");

          Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */

            /**
             * @return {?}
             */
            get: function get() {
              return this[_key];
            },

            /* tslint:disable-next-line: no-any */

            /**
             * @param {?} value
             * @return {?}
             */
            set: function set(value) {
              /** @type {?} */
              var prevValue = this[_key];
              this[_key] = value;

              if (prevValue !== value && this[propertyKey + sufix]) {
                this[propertyKey + sufix].emit(value);
              }
            }
          });
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Utils = /*#__PURE__*/function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "reflow",

        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} element
         * @return {?}
         */
        value: function reflow(element) {
          /* tslint:disable-next-line: no-any */
          (
          /**
          * @param {?} bs
          * @return {?}
          */
          function (bs) {
            return bs;
          })(element.offsetHeight);
        } // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js

        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} elem
         * @return {?}
         */

      }, {
        key: "getStyles",
        value: function getStyles(elem) {
          // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
          // IE throws on elements created in popups
          // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"

          /** @type {?} */
          var view = elem.ownerDocument.defaultView;

          if (!view || !view.opener) {
            view = win;
          }

          return view.getComputedStyle(elem);
        }
      }]);

      return Utils;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _messagesHash = {};
    /** @type {?} */

    var _hideMsg = typeof console === 'undefined' || !('warn' in console);
    /**
     * @param {?} msg
     * @return {?}
     */


    function warnOnce(msg) {
      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
      }

      _messagesHash[msg] = true;
      /*tslint:disable-next-line*/

      console.warn(msg);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-utils.js.map

    /***/

  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/pages/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pipes/truncate.pipe */
    "./src/app/pipes/truncate.pipe.ts");

    function HomeComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_p_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var category_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.getCategory(category_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3);
      }
    }

    function HomeComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_14_Template_p_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var country_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.getCountry(country_r6.code);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r6.name);
      }
    }

    function HomeComponent_article_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "truncate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ver nota");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", article_r9.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", article_r9.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", article_r9.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, article_r9.title), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r9.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", article_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(api) {
        _classCallCheck(this, HomeComponent);

        this.api = api;
        this.articles = [];
        this.categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
        this.countries = [{
          name: 'Mexico',
          code: 'mx'
        }, {
          name: 'United States',
          code: 'us'
        }, {
          name: 'Argentina',
          code: 'ar'
        }, {
          name: 'Colombia',
          code: 'co'
        }, {
          name: 'Venezuela',
          code: 've'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllNews('mx');
        }
      }, {
        key: "getAllNews",
        value: function getAllNews(country) {
          var _this10 = this;

          this.api.getAllNews(country).subscribe(function (news) {
            var articles = news.articles;
            _this10.articles = articles;
          });
        }
      }, {
        key: "getCategory",
        value: function getCategory(category) {
          var _this11 = this;

          this.api.getCategory(category).subscribe(function (news) {
            var articles = news.articles;
            _this11.articles = articles;
          });
        }
      }, {
        key: "getCountry",
        value: function getCountry(country) {
          var _this12 = this;

          this.api.getCountry(country).subscribe(function (news) {
            var articles = news.articles;
            _this12.articles = articles;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 18,
      vars: 3,
      consts: [[1, "home-main"], [1, "container"], [1, "row", "justify-content-center", "justify-content-md-end", "mr-4"], [1, "dropdown", "mx-1"], [1, "dropdown-content"], [3, "click"], [4, "ngFor", "ngForOf"], [1, "container", "my-3"], [1, "row", "justify-content-around"], ["class", "custom-card card mb-3 mb-md-4 mb-lg-5", "style", "width: 21rem;", 4, "ngFor", "ngForOf"], [1, "custom-card", "card", "mb-3", "mb-md-4", "mb-lg-5", 2, "width", "21rem"], [1, "card-img-top", 3, "src", "alt"], [1, "custom-card-body", "card-body", "d-flex", "flex-column"], [1, "card-title", 3, "tooltip"], [1, "card-text", "pr-1"], ["target", "_blank", 1, "btn", "custom-button", 3, "href"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_p_click_7_listener() {
            return ctx.getAllNews("mx");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 3, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Countries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 3, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "main", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_article_17_Template, 10, 8, "article", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]],
      pipes: [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"]],
      styles: [".home-main[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  padding: 12px 16px;\n  z-index: 1;\n  color: #e7305b;\n  cursor: pointer;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.custom-card[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 2px 4px 0 #0000001a;\n}\n\n.custom-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  overflow-y: scroll;\n  \n  \n}\n\n.custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n.custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e0e0e0;\n  border-radius: 25px;\n}\n\n.custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%] {\n  background: linear-gradient(#e7305b, #e7308c);\n  color: #fff;\n  transition: all 0.5s ease;\n}\n\n.custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#e62452, #e71e89);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9FOlxcRG9jdW1lbnRvc1xcT3N2YWxkb1xcQ29kZVxccHJ1ZWJhcy10ZWNuaWNhc1xcYmFtYnUtbW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FER0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUNBRjs7QURFRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQUo7O0FESUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBTUEsV0FBQTtFQU1BLG9CQUFBO0FDWk47O0FERU07RUFDRSxVQUFBO0FDQVI7O0FESU07RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FETU07RUFDRSxnQkFBQTtBQ0pSOztBRFFJO0VBQ0UsZUFBQTtBQ05OOztBRFNJO0VBQ0UsNkNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNQTjs7QURTTTtFQUNFLDZDQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1tYWluIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogI2U3MzA1YjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8vIENhcmQgU3R5bGVcclxuLmN1c3RvbS1jYXJkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwICMwMDAwMDAxYTtcclxuXHJcbiAgJiBpbWcge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgJiAuY3VzdG9tLWNhcmQtYm9keSB7XHJcbiAgICAmIHAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIEhhbmRsZSAqL1xyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmIGg1IHtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuICAgICYgLmN1c3RvbS1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2U3MzA1YiwgI2U3MzA4Yyk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlNjI0NTIsICNlNzFlODkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5ob21lLW1haW4ge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZTczMDViO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWNhcmQge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwICMwMDAwMDAxYTtcbn1cbi5jdXN0b20tY2FyZCBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5jdXN0b20tY2FyZCAuY3VzdG9tLWNhcmQtYm9keSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgLyogSGFuZGxlICovXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xufVxuLmN1c3RvbS1jYXJkIC5jdXN0b20tY2FyZC1ib2R5IHA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cbi5jdXN0b20tY2FyZCAuY3VzdG9tLWNhcmQtYm9keSBwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uY3VzdG9tLWNhcmQgLmN1c3RvbS1jYXJkLWJvZHkgcDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuLmN1c3RvbS1jYXJkIC5jdXN0b20tY2FyZC1ib2R5IGg1IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmN1c3RvbS1jYXJkIC5jdXN0b20tY2FyZC1ib2R5IC5jdXN0b20tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlNzMwNWIsICNlNzMwOGMpO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cbi5jdXN0b20tY2FyZCAuY3VzdG9tLWNhcmQtYm9keSAuY3VzdG9tLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTYyNDUyLCAjZTcxZTg5KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../pipes/truncate.pipe */
    "./src/app/pipes/truncate.pipe.ts"); // Components
    // Pipes


    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot()]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/truncate.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/truncate.pipe.ts ***!
    \****************************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppPipesTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TruncatePipe = /*#__PURE__*/function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        value: function transform(value) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 52;
          var completeWords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var ellipsis = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '...';

          if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
          }

          return value.length > limit ? value.substr(0, limit) + ellipsis : value;
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe.ɵfac = function TruncatePipe_Factory(t) {
      return new (t || TruncatePipe)();
    };

    TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncate",
      type: TruncatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'truncate'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
      }

      _createClass(ApiService, [{
        key: "getAllNews",
        value: function getAllNews(country) {
          var url = "".concat(this.baseUrl, "country=").concat(country, "&apiKey=a1eceddfc8c54da599014f86ad7043df");
          return this.http.get(url);
        }
      }, {
        key: "getCategory",
        value: function getCategory(category) {
          var url = "".concat(this.baseUrl, "country=\"mx\"&category=").concat(category, "&apiKey=a1eceddfc8c54da599014f86ad7043df");
          return this.http.get(url);
        }
      }, {
        key: "getCountry",
        value: function getCountry(country) {
          var url = "".concat(this.baseUrl, "country=").concat(country, "&apiKey=a1eceddfc8c54da599014f86ad7043df");
          return this.http.get(url);
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map