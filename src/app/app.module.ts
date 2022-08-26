import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BolloComponent } from './bollo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,BolloComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents:[BolloComponent]
})
export class AppModule { }
