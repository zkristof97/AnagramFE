import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {AnagramService} from "./services/anagram.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'BASE_URL', useValue: environment.anagramApiBaseUrl},
    AnagramService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
