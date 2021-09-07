import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/fr-BE';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSharedModule } from './material-shared/material-shared.module';

registerLocaleData(locale, 'fr-BE');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialSharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-BE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
