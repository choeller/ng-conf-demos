"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var panel_component_1 = require("./panel.component");
var core_1 = require("@angular/core");
var Accordion = (function () {
    function Accordion() {
    }
    Accordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        console.log(this.panels.toArray());
        for (var _i = 0, _a = this.panels.toArray(); _i < _a.length; _i++) {
            var panel = _a[_i];
            panel.open = false;
            panel.panelToggled.subscribe(function (panel) {
                if (panel.open && _this.onlyOneOpen) {
                    _this.closeOthers(panel);
                }
            });
        }
    };
    Accordion.prototype.closeOthers = function (opened) {
        for (var _i = 0, _a = this.panels.toArray(); _i < _a.length; _i++) {
            var panel = _a[_i];
            if (opened != panel && panel.open) {
                panel.open = false;
            }
        }
    };
    Accordion.prototype.closeAll = function () {
        console.log("close All");
        console.log(this.panels.toArray());
        for (var _i = 0, _a = this.panels.toArray(); _i < _a.length; _i++) {
            var panel = _a[_i];
            panel.open = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Accordion.prototype, "onlyOneOpen", void 0);
    __decorate([
        core_1.ContentChildren(panel_component_1.PanelComponent), 
        __metadata('design:type', core_1.QueryList)
    ], Accordion.prototype, "panels", void 0);
    Accordion = __decorate([
        core_1.Directive({
            selector: 'accordion, [accordion]',
            exportAs: 'accordion'
        }), 
        __metadata('design:paramtypes', [])
    ], Accordion);
    return Accordion;
}());
exports.Accordion = Accordion;
