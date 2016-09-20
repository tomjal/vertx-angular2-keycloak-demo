import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { DemoService } from './demo.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DemoService, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
