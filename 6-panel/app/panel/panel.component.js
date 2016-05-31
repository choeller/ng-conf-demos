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
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var PanelHeaderDirective = (function () {
    function PanelHeaderDirective() {
    }
    PanelHeaderDirective = __decorate([
        core_1.Directive({ selector: 'panel-header' }), 
        __metadata('design:paramtypes', [])
    ], PanelHeaderDirective);
    return PanelHeaderDirective;
}());
exports.PanelHeaderDirective = PanelHeaderDirective;
var PanelComponent = (function () {
    function PanelComponent() {
        this.open = true;
        this.panelToggled = new core_1.EventEmitter();
    }
    PanelComponent.prototype.togglePanel = function () {
        this.open = !this.open;
        this.panelToggled.emit(this);
    };
    PanelComponent.prototype.hasHeader = function () {
        return this.panelHeader != null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "panelToggled", void 0);
    __decorate([
        core_1.ContentChild(PanelHeaderDirective), 
        __metadata('design:type', PanelHeaderDirective)
    ], PanelComponent.prototype, "panelHeader", void 0);
    PanelComponent = __decorate([
        core_1.Component({
            selector: 'panel',
            templateUrl: 'app/panel/panel.component.html',
            styleUrls: ['app/panel/panel.component.css'],
            directives: [PanelHeaderDirective],
            animations: [
                core_2.trigger('active', [
                    core_2.state('void', core_2.style({ height: 0 })),
                    core_2.state('closed', core_2.style({ height: 0 })),
                    core_2.state('open', core_2.style({ height: '*' })),
                    core_2.transition('void => closed', [core_2.animate(0)]),
                    core_2.transition('closed => open', [core_2.animate('350ms ease-out')]),
                    core_2.transition('open => closed', [core_2.animate('350ms ease-out')])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;
exports.PANEL_DIRECTIVES = [PanelComponent, PanelHeaderDirective];
