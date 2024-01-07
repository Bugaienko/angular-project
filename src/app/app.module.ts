import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MMyCalculatorModule} from "./m-my-calculator/m-my-calculator.module";
import { NavigationComponent } from './navigation/navigation.component';
import { MyEmptyPage } from './empty-route/my-empty-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MyEmptyPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MMyCalculatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
