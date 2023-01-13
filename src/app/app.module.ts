import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LateralLeftComponent } from './components/lateral-left/lateral-left.component';
import { LateralRightComponent } from './components/lateral-right/lateral-right.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LateralLeftComponent,
    LateralRightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
