import {
  Directive,
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
} from '@angular/core';

import {trigger, style, animate, state, transition} from '@angular/core'

  @Directive({selector: 'panel-header'})
export class PanelHeaderDirective {
}

@Component({
  selector: 'panel',
  templateUrl: 'app/panel/panel.component.html',
  styleUrls: ['app/panel/panel.component.css'],
  directives: [PanelHeaderDirective],
  animations: [
    trigger('active', [
      state('void', style({ height: 0 })),
      state('closed', style({ height: 0 })),
      state('open', style({ height: '*' })),
      transition('void => closed', [ animate(0) ]),
      transition('closed => open', [ animate('350ms ease-out') ]),
      transition('open => closed', [ animate('350ms ease-out') ])
//      transition('void => *', [ animate('350ms ease-out') ]),
//      transition('* => void', [ animate('350ms ease-out') ])
    ])
  ]
})
export class PanelComponent {

  open = true;
  @Input() title;
  @Output() panelToggled = new EventEmitter();
  @ContentChild(PanelHeaderDirective) panelHeader: PanelHeaderDirective;

  togglePanel() {
    this.open = !this.open;
    this.panelToggled.emit(this);
  }

  hasHeader() {
    return this.panelHeader != null;
  }
}

export const PANEL_DIRECTIVES = [PanelComponent, PanelHeaderDirective];

