//our root app component
import {trigger, style, animate, state, transition, Component} from '@angular/core'
import {PANEL_DIRECTIVES} from "./panel/panel.component";
import {Accordion} from "./panel/accordion.directive";
import {TABS_DIRECTIVES} from "./tabs/tabs.component";

@Component({
  selector: 'my-app',
  providers: [],
  templateUrl: 'app/app.html',
  directives: [PANEL_DIRECTIVES, Accordion, TABS_DIRECTIVES],
})
export class App {
 
}

class Page {
  constructor(public title: string, public content: string) {}
} 
