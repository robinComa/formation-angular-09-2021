import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/fr-BE';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

registerLocaleData(locale, 'fr-BE');

export function translateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialSharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-BE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
