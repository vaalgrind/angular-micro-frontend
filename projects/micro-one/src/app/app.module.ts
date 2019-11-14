import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ElbuttonComponent } from './elbutton/elbutton.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    ElbuttonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [AppComponent, ElbuttonComponent]
})
export class AppModule {

  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    if (!customElements.get('micro-one')) {
      customElements.define('micro-one', el);
    }

    const el2 = createCustomElement(ElbuttonComponent, { injector });
    if (!customElements.get('button-el')) {
      customElements.define('button-el', el2);
    }
  }

  ngDoBootstrap() { }

}
