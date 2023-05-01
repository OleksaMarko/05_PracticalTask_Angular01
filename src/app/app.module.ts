import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, UserModule],
})
export class AppModule {}
