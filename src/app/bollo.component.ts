import { Component, Input } from '@angular/core';

@Component({
  selector: 'bollo',
  template: `<h1>Bollo {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class BolloComponent  {
  @Input() name: string;
}
