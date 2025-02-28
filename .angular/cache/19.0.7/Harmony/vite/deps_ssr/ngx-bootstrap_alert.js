import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  NgClass,
  NgIf
} from "./chunk-WEC3A5L3.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-6JA6SQ4L.js";
import "./chunk-YHCV7DAQ.js";

// node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

// node_modules/ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs
var win = typeof window !== "undefined" && window || {};
var document = win.document;
var location = win.location;
var gc = win.gc ? () => win.gc() : () => null;
var performance = win.performance ? win.performance : null;
var Event = win.Event;
var MouseEvent = win.MouseEvent;
var KeyboardEvent = win.KeyboardEvent;
var EventTarget = win.EventTarget;
var History = win.History;
var Location = win.Location;
var EventListener = win.EventListener;
var BsVerions;
(function(BsVerions2) {
  BsVerions2["isBs4"] = "bs4";
  BsVerions2["isBs5"] = "bs5";
})(BsVerions || (BsVerions = {}));
function OnChange() {
  const sufix = "Change";
  return function OnChangeHandler(target, propertyKey) {
    const _key = ` __${propertyKey}Value`;
    Object.defineProperty(target, propertyKey, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get() {
        return this[_key];
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(value) {
        const prevValue = this[_key];
        this[_key] = value;
        if (prevValue !== value && this[propertyKey + sufix]) {
          this[propertyKey + sufix].emit(value);
        }
      }
    });
  };
}
var _hideMsg = typeof console === "undefined" || !("warn" in console);

// node_modules/ngx-bootstrap/alert/fesm2022/ngx-bootstrap-alert.mjs
var _c0 = ["*"];
function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.close());
    });
    ɵɵelementStart(1, "span", 3);
    ɵɵtext(2, "×");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 4);
    ɵɵtext(4, "Close");
    ɵɵelementEnd()();
  }
}
function AlertComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    ɵɵprojection(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap("alert alert-" + ctx_r1.type);
    ɵɵproperty("ngClass", ctx_r1.classes);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.dismissible);
  }
}
var AlertConfig = class _AlertConfig {
  constructor() {
    this.type = "warning";
    this.dismissible = false;
    this.dismissOnTimeout = void 0;
  }
  static {
    this.ɵfac = function AlertConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AlertConfig,
      factory: _AlertConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AlertComponent = class _AlertComponent {
  constructor(_config, changeDetection) {
    this.changeDetection = changeDetection;
    this.type = "warning";
    this.dismissible = false;
    this.isOpen = true;
    this.onClose = new EventEmitter();
    this.onClosed = new EventEmitter();
    this.classes = "";
    this.dismissibleChange = new EventEmitter();
    Object.assign(this, _config);
    this.dismissibleChange.subscribe(() => {
      this.classes = this.dismissible ? "alert-dismissible" : "";
      this.changeDetection.markForCheck();
    });
  }
  ngOnInit() {
    if (this.dismissOnTimeout) {
      setTimeout(() => this.close(), parseInt(this.dismissOnTimeout, 10));
    }
  }
  // todo: animation ` If the .fade and .in classes are present on the element,
  // the alert will fade out before it is removed`
  /**
   * Closes an alert by removing it from the DOM.
   */
  close() {
    if (!this.isOpen) {
      return;
    }
    this.onClose.emit(this);
    this.isOpen = false;
    this.changeDetection.markForCheck();
    this.onClosed.emit(this);
  }
  static {
    this.ɵfac = function AlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertComponent)(ɵɵdirectiveInject(AlertConfig), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AlertComponent,
      selectors: [["alert"], ["bs-alert"]],
      inputs: {
        type: "type",
        dismissible: "dismissible",
        dismissOnTimeout: "dismissOnTimeout",
        isOpen: "isOpen"
      },
      outputs: {
        onClose: "onClose",
        onClosed: "onClosed"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", "btn-close", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "sr-only", "visually-hidden"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.isOpen);
        }
      },
      dependencies: [NgIf, NgClass],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([OnChange(), __metadata("design:type", Object)], AlertComponent.prototype, "dismissible", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{
      selector: "alert,bs-alert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgIf, NgClass],
      template: `<ng-template [ngIf]="isOpen">
  <div [class]="'alert alert-' + type" role="alert" [ngClass]="classes">
    <ng-template [ngIf]="dismissible">
      <button type="button" class="close btn-close" aria-label="Close" (click)="close()">
        <span aria-hidden="true" class="visually-hidden">&times;</span>
        <span class="sr-only visually-hidden">Close</span>
      </button>
    </ng-template>
    <ng-content></ng-content>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: AlertConfig
  }, {
    type: ChangeDetectorRef
  }], {
    type: [{
      type: Input
    }],
    dismissible: [{
      type: Input
    }],
    dismissOnTimeout: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    onClosed: [{
      type: Output
    }]
  });
})();
var AlertModule = class _AlertModule {
  // @deprecated method not required anymore, will be deleted in v19.0.0
  static forRoot() {
    return {
      ngModule: _AlertModule,
      providers: []
    };
  }
  static {
    this.ɵfac = function AlertModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AlertModule,
      imports: [AlertComponent],
      exports: [AlertComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertModule, [{
    type: NgModule,
    args: [{
      imports: [AlertComponent],
      exports: [AlertComponent]
    }]
  }], null, null);
})();
export {
  AlertComponent,
  AlertConfig,
  AlertModule
};
/*! Bundled license information:

ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs:
  (**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=ngx-bootstrap_alert.js.map
