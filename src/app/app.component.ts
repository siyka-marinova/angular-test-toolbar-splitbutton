import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <kendo-toolbar style="width: 200px;" [overflow]="true">
      <kendo-toolbar-dropdownbutton [text]="'Paste Variations'" [data]="data" [disabled]="true">
      </kendo-toolbar-dropdownbutton>
      <kendo-toolbar-dropdownbutton [text]="'Paste Variations'" [data]="data" [disabled]="true">
      </kendo-toolbar-dropdownbutton>
    </kendo-toolbar>
    <kendo-toolbar style="width: 100px;" [overflow]="true">
      <kendo-toolbar-splitbutton [disabled]="true" [data]="[{ text: 'Should be disabled' }]">
      </kendo-toolbar-splitbutton>
    </kendo-toolbar>
  `
})
export class AppComponent {
  public data: Array<any> = [
    {
      text: "Paste",
      icon: "paste",
      click: () => {
        console.log("Paste");
      }
    },
    {
      text: "Keep Text Only",
      icon: "paste-plain-text",
      click: () => {
        console.log("Keep Text Only");
      }
    },
    {
      text: "Paste as HTML",
      icon: "paste-as-html",
      click: () => {
        console.log("Paste as HTML");
      }
    },
    {
      text: "Paste Markdown",
      icon: "paste-markdown",
      click: () => {
        console.log("Paste Markdown");
      }
    },
    {
      text: "Set Default Paste",
      click: () => {
        console.log("Set Default Paste");
      }
    }
  ];

  public onPaste(): void {
    console.log("Paste");
  }
}
