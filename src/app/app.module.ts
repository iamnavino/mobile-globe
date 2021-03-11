import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobeAndroidComponent } from './globe-android/globe-android.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobeAndroidComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
