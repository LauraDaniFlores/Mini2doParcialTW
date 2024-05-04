import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-KHH7G2IC.js";
import "./chunk-IA2HCJGT.js";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "./chunk-6YPR4PF2.js";
import {
  Ripple,
  RippleModule
} from "./chunk-YY3SGBOO.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-LZMSIMQG.js";
import {
  ObjectUtils,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId,
  zindexutils
} from "./chunk-PQVQMKFQ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-HVM5PKYO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-ZMYTVTXI.js";
import {
  __spreadValues
} from "./chunk-QOHD3WUR.js";

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var Tooltip = class _Tooltip {
  platformId;
  el;
  zone;
  config;
  renderer;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: UniqueComponentId() + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  scrollHandler;
  resizeListener;
  constructor(platformId, el, zone, config, renderer, viewContainer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.config = config;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.getOption("tooltipEvent") === "hover") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        } else if (this.getOption("tooltipEvent") === "focus") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.getTarget(this.el.nativeElement);
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = DomHandler.hasClass(e.relatedTarget, "p-tooltip") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-text") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  onPressEscape() {
    if (this.hideOnEscape) {
      this.deactivate();
    }
  }
  activate() {
    this.active = true;
    this.clearHideTimeout();
    if (this.getOption("showDelay"))
      this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption("showDelay"));
    else
      this.show();
    if (this.getOption("life")) {
      let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }
  deactivate() {
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("id", this.getOption("id"));
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = document.createElement("div");
    tooltipArrow.className = "p-tooltip-arrow";
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement("div");
    this.tooltipText.className = "p-tooltip-text";
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body")
      document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target")
      DomHandler.appendChild(this.container, this.el.nativeElement);
    else
      DomHandler.appendChild(this.container, this.getOption("appendTo"));
    this.container.style.display = "inline-block";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    this.align();
    DomHandler.fadeIn(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto")
      zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else
      this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content instanceof TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption("tooltipPosition");
    switch (position) {
      case "top":
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "bottom":
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "left":
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
      case "right":
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
      let targetTop = offset.top + DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  alignRight() {
    this.preAlign("right");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + DomHandler.getOuterWidth(this.el.nativeElement);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignLeft() {
    this.preAlign("left");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left - DomHandler.getOuterWidth(this.container);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignTop() {
    this.preAlign("top");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top - DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignBottom() {
    this.preAlign("bottom");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top + DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return DomHandler.hasClass(el, "p-inputwrapper") ? DomHandler.findSingle(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    let defaultClassName = "p-tooltip p-component p-tooltip-" + position;
    this.container.className = this.getOption("tooltipStyleClass") ? defaultClassName + " " + this.getOption("tooltipStyleClass") : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = DomHandler.getOuterWidth(this.container);
    let height = DomHandler.getOuterHeight(this.container);
    let viewport = DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    if (this.getOption("tooltipEvent") === "hover") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    } else if (this.getOption("tooltipEvent") === "focus") {
      let target = this.getTarget(this.el.nativeElement);
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body")
        document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target")
        this.el.nativeElement.removeChild(this.container);
      else
        DomHandler.removeChild(this.container, this.getOption("appendTo"));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static ɵfac = function Tooltip_Factory(t) {
    return new (t || _Tooltip)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Tooltip_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function Tooltip_keydown_escape_HostBindingHandler($event) {
          return ctx.onPressEscape($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: [InputFlags.HasDecoratorInputTransform, "escape", "escape", booleanAttribute],
      showDelay: [InputFlags.HasDecoratorInputTransform, "showDelay", "showDelay", numberAttribute],
      hideDelay: [InputFlags.HasDecoratorInputTransform, "hideDelay", "hideDelay", numberAttribute],
      life: [InputFlags.HasDecoratorInputTransform, "life", "life", numberAttribute],
      positionTop: [InputFlags.HasDecoratorInputTransform, "positionTop", "positionTop", numberAttribute],
      positionLeft: [InputFlags.HasDecoratorInputTransform, "positionLeft", "positionLeft", numberAttribute],
      autoHide: [InputFlags.HasDecoratorInputTransform, "autoHide", "autoHide", booleanAttribute],
      fitContent: [InputFlags.HasDecoratorInputTransform, "fitContent", "fitContent", booleanAttribute],
      hideOnEscape: [InputFlags.HasDecoratorInputTransform, "hideOnEscape", "hideOnEscape", booleanAttribute],
      content: [InputFlags.None, "pTooltip", "content"],
      disabled: [InputFlags.None, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    hideDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionTop: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionLeft: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fitContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }],
    onPressEscape: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static ɵfac = function TooltipModule_Factory(t) {
    return new (t || _TooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TooltipModule,
    declarations: [Tooltip],
    imports: [CommonModule],
    exports: [Tooltip]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tabmenu.mjs
var _c0 = ["content"];
var _c1 = ["navbar"];
var _c2 = ["inkbar"];
var _c3 = ["prevBtn"];
var _c4 = ["nextBtn"];
var _c5 = ["tabLink"];
var _c6 = ["tab"];
var _c7 = (a0) => ({
  "p-tabmenu p-component": true,
  "p-tabmenu-scrollable": a0
});
var _c8 = (a0, a1, a2) => ({
  "p-tabmenuitem": true,
  "p-disabled": a0,
  "p-highlight": a1,
  "p-hidden": a2
});
var _c9 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
var _c10 = () => ({
  exact: false
});
function TabMenu_button_2_ChevronLeftIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronLeftIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true);
  }
}
function TabMenu_button_2_3_ng_template_0_Template(rf, ctx) {
}
function TabMenu_button_2_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabMenu_button_2_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabMenu_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17, 3);
    ɵɵlistener("click", function TabMenu_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navBackward());
    });
    ɵɵtemplate(2, TabMenu_button_2_ChevronLeftIcon_2_Template, 1, 1, "ChevronLeftIcon", 18)(3, TabMenu_button_2_3_Template, 1, 0, null, 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.previousIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.previousIconTemplate);
  }
}
function TabMenu_li_7_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 28);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", item_r5.icon)("ngStyle", item_r5.iconStyle);
  }
}
function TabMenu_li_7_a_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(item_r5, "label"));
  }
}
function TabMenu_li_7_a_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 30);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemProp(item_r5, "label"), ɵɵsanitizeHtml);
  }
}
function TabMenu_li_7_a_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", item_r5.badgeStyleClass);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(item_r5, "badge"));
  }
}
function TabMenu_li_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 24, 5);
    ɵɵelementContainerStart(2);
    ɵɵtemplate(3, TabMenu_li_7_a_2_span_3_Template, 1, 2, "span", 25)(4, TabMenu_li_7_a_2_span_4_Template, 2, 1, "span", 26)(5, TabMenu_li_7_a_2_ng_template_5_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor)(7, TabMenu_li_7_a_2_span_7_Template, 2, 2, "span", 27);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r8 = ɵɵreference(6);
    const item_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("target", ctx_r2.getItemProp(item_r5, "target"));
    ɵɵattribute("href", ctx_r2.getItemProp(item_r5, "url"), ɵɵsanitizeUrl)("id", ctx_r2.getItemProp(item_r5, "id"))("aria-disabled", ctx_r2.disabled(item_r5))("aria-label", ctx_r2.getItemProp(item_r5, "label"))("tabindex", ctx_r2.disabled(item_r5) ? -1 : 0);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r5.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r5.escape !== false)("ngIfElse", htmlLabel_r8);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r5.badge);
  }
}
function TabMenu_li_7_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 28);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", item_r5.icon)("ngStyle", item_r5.iconStyle);
    ɵɵattribute("aria-hidden", true);
  }
}
function TabMenu_li_7_a_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(item_r5, "label"));
  }
}
function TabMenu_li_7_a_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 30);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemProp(item_r5, "label"), ɵɵsanitizeHtml);
  }
}
function TabMenu_li_7_a_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", item_r5.badgeStyleClass);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(item_r5, "badge"));
  }
}
function TabMenu_li_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 32, 5);
    ɵɵelementContainerStart(2);
    ɵɵtemplate(3, TabMenu_li_7_a_3_span_3_Template, 1, 3, "span", 25)(4, TabMenu_li_7_a_3_span_4_Template, 2, 1, "span", 26)(5, TabMenu_li_7_a_3_ng_template_5_Template, 1, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor)(7, TabMenu_li_7_a_3_span_7_Template, 2, 2, "span", 27);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r9 = ɵɵreference(6);
    const item_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("routerLink", item_r5.routerLink)("queryParams", item_r5.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r5.routerLinkActiveOptions || ɵɵpureFunction0(19, _c10))("target", item_r5.target)("fragment", item_r5.fragment)("queryParamsHandling", item_r5.queryParamsHandling)("preserveFragment", item_r5.preserveFragment)("skipLocationChange", item_r5.skipLocationChange)("replaceUrl", item_r5.replaceUrl)("state", item_r5.state);
    ɵɵattribute("id", ctx_r2.getItemProp(item_r5, "id"))("aria-disabled", ctx_r2.disabled(item_r5))("aria-label", ctx_r2.getItemProp(item_r5, "label"))("tabindex", ctx_r2.disabled(item_r5) ? -1 : 0);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r5.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r5.escape !== false)("ngIfElse", htmlRouteLabel_r9);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r5.badge);
  }
}
function TabMenu_li_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabMenu_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20, 4);
    ɵɵlistener("click", function TabMenu_li_7_Template_li_click_0_listener($event) {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.itemClick($event, item_r5));
    })("keydown", function TabMenu_li_7_Template_li_keydown_0_listener($event) {
      const ctx_r5 = ɵɵrestoreView(_r4);
      const item_r5 = ctx_r5.$implicit;
      const i_r7 = ctx_r5.index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeydownItem($event, i_r7, item_r5));
    })("focus", function TabMenu_li_7_Template_li_focus_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMenuItemFocus(item_r5));
    });
    ɵɵtemplate(2, TabMenu_li_7_a_2_Template, 8, 10, "a", 21)(3, TabMenu_li_7_a_3_Template, 8, 20, "a", 22)(4, TabMenu_li_7_ng_container_4_Template, 1, 0, "ng-container", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(item_r5.styleClass);
    ɵɵproperty("ngStyle", item_r5.style)("ngClass", ɵɵpureFunction3(11, _c8, ctx_r2.getItemProp(item_r5, "disabled"), ctx_r2.isActive(item_r5), item_r5.visible === false))("tooltipOptions", item_r5.tooltipOptions);
    ɵɵattribute("data-p-disabled", ctx_r2.disabled(item_r5))("data-p-highlight", ctx_r2.focusedItemInfo() === item_r5);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !item_r5.routerLink && !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r5.routerLink && !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(15, _c9, item_r5, i_r7));
  }
}
function TabMenu_button_10_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true);
  }
}
function TabMenu_button_10_3_ng_template_0_Template(rf, ctx) {
}
function TabMenu_button_10_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabMenu_button_10_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabMenu_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33, 8);
    ɵɵlistener("click", function TabMenu_button_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navForward());
    });
    ɵɵtemplate(2, TabMenu_button_10_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 18)(3, TabMenu_button_10_3_Template, 1, 0, null, 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.previousIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.nextIconTemplate);
  }
}
var TabMenu = class _TabMenu {
  platformId;
  router;
  route;
  cd;
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._focusableItems = (this._model || []).reduce((result, item) => {
      result.push(item);
      return result;
    }, []);
  }
  get model() {
    return this._model;
  }
  /**
   * Defines the default active menuitem
   * @group Props
   */
  set activeItem(value) {
    this._activeItem = value;
    this.activeItemChange.emit(value);
    this.tabChanged = true;
  }
  get activeItem() {
    return this._activeItem;
  }
  /**
   * When enabled displays buttons at each side of the tab headers to scroll the tab list.
   * @group Props
   */
  scrollable;
  /**
   * Defines if popup mode enabled.
   */
  popup;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Event fired when a tab is selected.
   * @param {MenuItem} item - Menu item.
   * @group Emits
   */
  activeItemChange = new EventEmitter();
  content;
  navbar;
  inkbar;
  prevBtn;
  nextBtn;
  tabLink;
  tab;
  templates;
  itemTemplate;
  previousIconTemplate;
  nextIconTemplate;
  tabChanged;
  backwardIsDisabled = true;
  forwardIsDisabled = false;
  timerIdForInitialAutoScroll = null;
  _focusableItems;
  _model;
  _activeItem;
  focusedItemInfo = signal(null);
  get focusableItems() {
    if (!this._focusableItems || !this._focusableItems.length) {
      this._focusableItems = (this.model || []).reduce((result, item) => {
        result.push(item);
        return result;
      }, []);
    }
    return this._focusableItems;
  }
  constructor(platformId, router, route, cd) {
    this.platformId = platformId;
    this.router = router;
    this.route = route;
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "nexticon":
          this.nextIconTemplate = item.template;
          break;
        case "previousicon":
          this.previousIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateInkBar();
      this.initAutoScrollForActiveItem();
      this.initButtonState();
    }
  }
  ngAfterViewChecked() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateInkBar();
      this.tabChanged = false;
    }
  }
  ngOnDestroy() {
    this.clearAutoScrollHandler();
  }
  isActive(item) {
    if (item.routerLink) {
      const routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
      return this.router.isActive(this.router.createUrlTree(routerLink, {
        relativeTo: this.route
      }).toString(), item.routerLinkActiveOptions?.exact ?? item.routerLinkActiveOptions ?? false);
    }
    return item === this.activeItem;
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  visible(item) {
    return typeof item.visible === "function" ? item.visible() : item.visible !== false;
  }
  disabled(item) {
    return typeof item.disabled === "function" ? item.disabled() : item.disabled;
  }
  onMenuItemFocus(item) {
    this.focusedItemInfo.set(item);
  }
  itemClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    this.activeItem = item;
    this.activeItemChange.emit(item);
    this.tabChanged = true;
    this.cd.markForCheck();
  }
  onKeydownItem(event, index, item) {
    let i = index;
    let foundElement = {};
    const tabLinks = this.tabLink.toArray();
    const tabs = this.tab.toArray();
    switch (event.code) {
      case "ArrowRight":
        foundElement = this.findNextItem(tabs, i);
        i = foundElement["i"];
        break;
      case "ArrowLeft":
        foundElement = this.findPrevItem(tabs, i);
        i = foundElement["i"];
        break;
      case "End":
        foundElement = this.findPrevItem(tabs, this.model.length);
        i = foundElement["i"];
        event.preventDefault();
        break;
      case "Home":
        foundElement = this.findNextItem(tabs, -1);
        i = foundElement["i"];
        event.preventDefault();
        break;
      case "Space":
      case "Enter":
        this.itemClick(event, item);
        break;
      case "Tab":
        this.onTabKeyDown(tabLinks);
        break;
      default:
        break;
    }
    if (tabLinks[i] && tabLinks[index]) {
      tabLinks[index].nativeElement.tabIndex = "-1";
      tabLinks[i].nativeElement.tabIndex = "0";
      tabLinks[i].nativeElement.focus();
    }
    this.cd.markForCheck();
  }
  onTabKeyDown(tabLinks) {
    tabLinks.forEach((item) => {
      item.nativeElement.tabIndex = DomHandler.getAttribute(item.nativeElement.parentElement, "data-p-highlight") ? "0" : "-1";
    });
  }
  findNextItem(items, index) {
    let i = index + 1;
    if (i >= items.length) {
      return {
        nextItem: items[items.length],
        i: items.length
      };
    }
    let nextItem = items[i];
    if (nextItem)
      return DomHandler.getAttribute(nextItem.nativeElement, "data-p-disabled") ? this.findNextItem(items, i) : {
        nextItem: nextItem.nativeElement,
        i
      };
    else
      return null;
  }
  findPrevItem(items, index) {
    let i = index - 1;
    if (i < 0) {
      return {
        prevItem: items[0],
        i: 0
      };
    }
    let prevItem = items[i];
    if (prevItem)
      return DomHandler.getAttribute(prevItem.nativeElement, "data-p-disabled") ? this.findPrevItem(items, i) : {
        prevItem: prevItem.nativeElement,
        i
      };
    else
      return null;
  }
  updateInkBar() {
    const tabHeader = DomHandler.findSingle(this.navbar?.nativeElement, "li.p-highlight");
    if (tabHeader) {
      this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + "px";
      this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar?.nativeElement).left + "px";
    }
  }
  getVisibleButtonWidths() {
    return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
  }
  updateButtonState() {
    const content = this.content?.nativeElement;
    const {
      scrollLeft,
      scrollWidth
    } = content;
    const width = DomHandler.getWidth(content);
    this.backwardIsDisabled = scrollLeft === 0;
    this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width;
  }
  updateScrollBar(index) {
    const tabHeader = this.navbar?.nativeElement.children[index];
    if (!tabHeader) {
      return;
    }
    tabHeader.scrollIntoView({
      block: "nearest",
      inline: "center"
    });
  }
  onScroll(event) {
    this.scrollable && this.updateButtonState();
    event.preventDefault();
  }
  navBackward() {
    const content = this.content?.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft - width;
    content.scrollLeft = pos <= 0 ? 0 : pos;
  }
  navForward() {
    const content = this.content?.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft + width;
    const lastPos = content.scrollWidth - width;
    content.scrollLeft = pos >= lastPos ? lastPos : pos;
  }
  initAutoScrollForActiveItem() {
    if (!this.scrollable) {
      return;
    }
    this.clearAutoScrollHandler();
    this.timerIdForInitialAutoScroll = setTimeout(() => {
      const activeItem = this.model.findIndex((menuItem) => this.isActive(menuItem));
      if (activeItem !== -1) {
        this.updateScrollBar(activeItem);
      }
    });
  }
  clearAutoScrollHandler() {
    if (this.timerIdForInitialAutoScroll) {
      clearTimeout(this.timerIdForInitialAutoScroll);
      this.timerIdForInitialAutoScroll = null;
    }
  }
  initButtonState() {
    if (this.scrollable) {
      Promise.resolve().then(() => {
        this.updateButtonState();
        this.cd.markForCheck();
      });
    }
  }
  static ɵfac = function TabMenu_Factory(t) {
    return new (t || _TabMenu)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabMenu,
    selectors: [["p-tabMenu"]],
    contentQueries: function TabMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TabMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(_c3, 5);
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navbar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inkbar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prevBtn = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextBtn = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabLink = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tab = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      activeItem: "activeItem",
      scrollable: [InputFlags.HasDecoratorInputTransform, "scrollable", "scrollable", booleanAttribute],
      popup: [InputFlags.HasDecoratorInputTransform, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      activeItemChange: "activeItemChange"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 11,
    vars: 11,
    consts: [["content", ""], ["navbar", ""], ["inkbar", ""], ["prevBtn", ""], ["tab", ""], ["tabLink", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], ["nextBtn", ""], [3, "ngClass", "ngStyle"], [1, "p-tabmenu-nav-container"], ["class", "p-tabmenu-nav-prev p-tabmenu-nav-btn p-link", "type", "button", "role", "navigation", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabmenu-nav-content", 3, "scroll"], ["role", "menubar", 1, "p-tabmenu-nav", "p-reset"], ["role", "presentation", "pTooltip", "", 3, "ngStyle", "class", "ngClass", "tooltipOptions", "click", "keydown", "focus", 4, "ngFor", "ngForOf"], ["role", "none", 1, "p-tabmenu-ink-bar"], ["class", "p-tabmenu-nav-next p-tabmenu-nav-btn p-link", "type", "button", "role", "navigation", "pRipple", "", 3, "click", 4, "ngIf"], ["type", "button", "role", "navigation", "pRipple", "", 1, "p-tabmenu-nav-prev", "p-tabmenu-nav-btn", "p-link", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "presentation", "pTooltip", "", 3, "click", "keydown", "focus", "ngStyle", "ngClass", "tooltipOptions"], ["class", "p-menuitem-link", "role", "menuitem", "pRipple", "", 3, "target", 4, "ngIf"], ["role", "menuitem", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["type", "button", "role", "navigation", "pRipple", "", 1, "p-tabmenu-nav-next", "p-tabmenu-nav-btn", "p-link", 3, "click"]],
    template: function TabMenu_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 9)(1, "div", 10);
        ɵɵtemplate(2, TabMenu_button_2_Template, 4, 2, "button", 11);
        ɵɵelementStart(3, "div", 12, 0);
        ɵɵlistener("scroll", function TabMenu_Template_div_scroll_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onScroll($event));
        });
        ɵɵelementStart(5, "ul", 13, 1);
        ɵɵtemplate(7, TabMenu_li_7_Template, 5, 18, "li", 14);
        ɵɵelement(8, "li", 15, 2);
        ɵɵelementEnd()();
        ɵɵtemplate(10, TabMenu_button_10_Template, 4, 2, "button", 16);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c7, ctx.scrollable))("ngStyle", ctx.style);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.scrollable && !ctx.backwardIsDisabled);
        ɵɵadvance(3);
        ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.focusableItems);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.scrollable && !ctx.forwardIsDisabled);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, ChevronLeftIcon, ChevronRightIcon],
    styles: ["@layer primeng{.p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabMenu, [{
    type: Component,
    args: [{
      selector: "p-tabMenu",
      template: `
        <div [ngClass]="{ 'p-tabmenu p-component': true, 'p-tabmenu-scrollable': scrollable }" [ngStyle]="style" [class]="styleClass">
            <div class="p-tabmenu-nav-container">
                <button *ngIf="scrollable && !backwardIsDisabled" #prevBtn class="p-tabmenu-nav-prev p-tabmenu-nav-btn p-link" (click)="navBackward()" type="button" role="navigation" pRipple>
                    <ChevronLeftIcon *ngIf="!previousIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="previousIconTemplate"></ng-template>
                </button>
                <div #content class="p-tabmenu-nav-content" (scroll)="onScroll($event)">
                    <ul #navbar class="p-tabmenu-nav p-reset" role="menubar" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-label]="ariaLabel">
                        <li
                            #tab
                            *ngFor="let item of focusableItems; let i = index"
                            role="presentation"
                            [ngStyle]="item.style"
                            [class]="item.styleClass"
                            [attr.data-p-disabled]="disabled(item)"
                            [attr.data-p-highlight]="focusedItemInfo() === item"
                            (click)="itemClick($event, item)"
                            (keydown)="onKeydownItem($event, i, item)"
                            (focus)="onMenuItemFocus(item)"
                            [ngClass]="{ 'p-tabmenuitem': true, 'p-disabled': getItemProp(item, 'disabled'), 'p-highlight': isActive(item), 'p-hidden': item.visible === false }"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                        >
                            <a
                                #tabLink
                                *ngIf="!item.routerLink && !itemTemplate"
                                class="p-menuitem-link"
                                role="menuitem"
                                [attr.href]="getItemProp(item, 'url')"
                                [attr.id]="getItemProp(item, 'id')"
                                [attr.aria-disabled]="disabled(item)"
                                [attr.aria-label]="getItemProp(item, 'label')"
                                [attr.tabindex]="disabled(item) ? -1 : 0"
                                [target]="getItemProp(item, 'target')"
                                pRipple
                            >
                                <ng-container>
                                    <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{ getItemProp(item, 'label') }}</span>
                                    <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                    <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ getItemProp(item, 'badge') }}</span>
                                </ng-container>
                            </a>
                            <a
                                #tabLink
                                *ngIf="item.routerLink && !itemTemplate"
                                [routerLink]="item.routerLink"
                                [queryParams]="item.queryParams"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                                role="menuitem"
                                class="p-menuitem-link"
                                [target]="item.target"
                                [attr.id]="getItemProp(item, 'id')"
                                [attr.aria-disabled]="disabled(item)"
                                [attr.aria-label]="getItemProp(item, 'label')"
                                [attr.tabindex]="disabled(item) ? -1 : 0"
                                [fragment]="item.fragment"
                                [queryParamsHandling]="item.queryParamsHandling"
                                [preserveFragment]="item.preserveFragment"
                                [skipLocationChange]="item.skipLocationChange"
                                [replaceUrl]="item.replaceUrl"
                                [state]="item.state"
                                pRipple
                            >
                                <ng-container>
                                    <span class="p-menuitem-icon" [attr.aria-hidden]="true" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{ getItemProp(item, 'label') }}</span>
                                    <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                    <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ getItemProp(item, 'badge') }}</span>
                                </ng-container>
                            </a>
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                        </li>
                        <li #inkbar class="p-tabmenu-ink-bar" role="none"></li>
                    </ul>
                </div>
                <button *ngIf="scrollable && !forwardIsDisabled" #nextBtn class="p-tabmenu-nav-next p-tabmenu-nav-btn p-link" (click)="navForward()" type="button" role="navigation" pRipple>
                    <ChevronRightIcon *ngIf="!previousIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="nextIconTemplate"></ng-template>
                </button>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: ChangeDetectorRef
  }], {
    model: [{
      type: Input
    }],
    activeItem: [{
      type: Input
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    activeItemChange: [{
      type: Output
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    navbar: [{
      type: ViewChild,
      args: ["navbar"]
    }],
    inkbar: [{
      type: ViewChild,
      args: ["inkbar"]
    }],
    prevBtn: [{
      type: ViewChild,
      args: ["prevBtn"]
    }],
    nextBtn: [{
      type: ViewChild,
      args: ["nextBtn"]
    }],
    tabLink: [{
      type: ViewChildren,
      args: ["tabLink"]
    }],
    tab: [{
      type: ViewChildren,
      args: ["tab"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TabMenuModule = class _TabMenuModule {
  static ɵfac = function TabMenuModule_Factory(t) {
    return new (t || _TabMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TabMenuModule,
    declarations: [TabMenu],
    imports: [CommonModule, RouterModule, SharedModule, RippleModule, TooltipModule, ChevronLeftIcon, ChevronRightIcon],
    exports: [TabMenu, RouterModule, SharedModule, TooltipModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, SharedModule, RippleModule, TooltipModule, ChevronLeftIcon, ChevronRightIcon, RouterModule, SharedModule, TooltipModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, SharedModule, RippleModule, TooltipModule, ChevronLeftIcon, ChevronRightIcon],
      exports: [TabMenu, RouterModule, SharedModule, TooltipModule],
      declarations: [TabMenu]
    }]
  }], null, null);
})();
export {
  TabMenu,
  TabMenuModule
};
//# sourceMappingURL=primeng_tabmenu.js.map
