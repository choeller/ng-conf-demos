import {Component, ContentChildren, QueryList} from '@angular/core';
import {trigger, style, animate, state, transition} from '@angular/core'

@Component({
  selector: 'tab',
  inputs: ['title'],
  styleUrls: ['app/tabs/tabs.component.css'],
  template: `<div @state="active ? 'active' : 'hidden'" class="tab-content">
                 <ng-content></ng-content>
             </div>`,
  animations: [
    trigger('state', [
      state('void', style({ display: 'none' })),
      state('active', style({ transform: 'translate3d(0, 0, 0)' })),
      state('hidden', style({ transform: 'translate3d(100%, 0, 0)' })),
      transition('active => hidden', [animate('350ms ease-out')]),
      transition('hidden => active', [
        style({ transform: 'translate3d(-100%, 0, 0)' }),
        animate('350ms ease-out')
      ]),
    ]),
  ]
})
class TabComponent {
  active: boolean;
  constructor() {
    this.active = false;
  }
}

@Component({
  selector: "tabs",
  styleUrls: ['app/tabs/tabs.component.css'],
  templateUrl: 'app/tabs/tabs.component.html'})
export class TabsComponent {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.tabs.first.active = true;
  }

  activate(tab) {
    for (let tab of this.tabs.toArray()) {
      tab.active = false;
    }
    tab.active = true;
  }
}

export var TABS_DIRECTIVES = [TabsComponent, TabComponent];