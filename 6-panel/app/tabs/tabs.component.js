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
var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
    }
    TabComponent = __decorate([
        core_1.Component({
            selector: 'tab',
            inputs: ['title'],
            styleUrls: ['app/tabs/tabs.component.css'],
            template: "<div @state=\"active ? 'active' : 'hidden'\" class=\"tab-content\">\n                 <ng-content></ng-content>\n             </div>",
            animations: [
                core_2.trigger('state', [
                    core_2.state('void', core_2.style({ display: 'none' })),
                    core_2.state('active', core_2.style({ transform: 'translate3d(0, 0, 0)' })),
                    core_2.state('hidden', core_2.style({ transform: 'translate3d(100%, 0, 0)' })),
                    core_2.transition('active => hidden', [core_2.animate('350ms ease-out')]),
                    core_2.transition('hidden => active', [
                        core_2.style({ transform: 'translate3d(-100%, 0, 0)' }),
                        core_2.animate('350ms ease-out')
                    ]),
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TabComponent);
    return TabComponent;
}());
var TabsComponent = (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngAfterContentInit = function () {
        this.tabs.first.active = true;
    };
    TabsComponent.prototype.activate = function (tab) {
        for (var _i = 0, _a = this.tabs.toArray(); _i < _a.length; _i++) {
            var tab_1 = _a[_i];
            tab_1.active = false;
        }
        tab.active = true;
    };
    __decorate([
        core_1.ContentChildren(TabComponent), 
        __metadata('design:type', core_1.QueryList)
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        core_1.Component({
            selector: "tabs",
            styleUrls: ['app/tabs/tabs.component.css'],
            templateUrl: 'app/tabs/tabs.component.html' }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
exports.TABS_DIRECTIVES = [TabsComponent, TabComponent];
