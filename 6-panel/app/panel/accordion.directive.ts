import {PanelComponent} from "./panel.component";
import {ContentChildren, QueryList, Input, Directive} from "@angular/core";
@Directive({
  selector: 'accordion, [accordion]',
  exportAs: 'accordion'
})
export class Accordion {
  @Input() onlyOneOpen;

  @ContentChildren(PanelComponent) panels:QueryList<PanelComponent>;

  ngAfterContentInit() {
    console.log(this.panels.toArray())
    for (let panel of this.panels.toArray()) {
      panel.open = false;
      panel.panelToggled.subscribe(panel => {
        if (panel.open && this.onlyOneOpen) {
          this.closeOthers(panel);
        }
      });
    }
  }

  closeOthers(opened) {
    for (let panel of this.panels.toArray()) {
      if (opened != panel && panel.open) {
        panel.open = false;
      }
    }
  }

  closeAll() {
    console.log("close All")
    console.log(this.panels.toArray())
    for (let panel of this.panels.toArray()) {
      panel.open = false;
    }
  }
}
