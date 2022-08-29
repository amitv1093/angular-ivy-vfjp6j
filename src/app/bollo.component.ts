import { Component, Directive, Input, ViewChild } from '@angular/core';




@Component({
  selector: 'bollo',
  template: `<h1>Bollo Amit
  
  <button (click)="amit()"> Click </button>
  </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class BolloComponent  {
  @Input() name: string;
  

  
  amit()
  {
    alert("amit")
  }
}
