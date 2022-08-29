import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BolloComponent } from './bollo.component';

@Directive({selector: '[childDirective]'})
export class ChildDirective {

  constructor(private  elem:ElementRef){

  }

  ngAfterViewInit()
  {
    this.elem.nativeElement.style.color = "Red";
    console.log( this.elem.nativeElement);
  }

}

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <div #parent></div>
  <p #bollo > amnit </p>
  <bollo childDirective>  </bollo>
  <div id="parentid" > </div>
  `,
  styles: [`h1 { font-family: Lato; }
  
  #parentid bollo
  {
    display:block !important;
  } 
  
  `],
})
export class HelloComponent {
  @Input() name: string = 'Amit';
  @ViewChild('parent', { read: ViewContainerRef }) target: ViewContainerRef;

  @ViewChild(ChildDirective) child!: ChildDirective;

  @ViewChild('bollo', {
    static: false,
  })
  boloMain: ElementRef;

  @ViewChild(BolloComponent, { read: true }) bolloComponent;

  private componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    // this.name = 'Angular2';
  }
  ngAfterViewInit() {
   // console.log('hi', this.bolloComponent);

  //  let element = document.querySelector("bollo");
  //  let elementParent = element.parentElement;
  //  let destElement = document.querySelector("#parentid");
  //  elementParent.removeChild(element);
  //  destElement.appendChild(element);

   console.log(this.child);


  //  const target = document.getElementById("parentid");
  // const source = document.querySelector("bollo");
  // const clone = source.cloneNode(true);
  // target.appendChild(clone);

    // let childComponent = this.componentFactoryResolver.resolveComponentFactory(BolloComponent);
    // this.componentRef = this.target.createComponent(BolloComponent);
  }
}
