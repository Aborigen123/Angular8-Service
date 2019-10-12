import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OutCarComponent } from './out-car/out-car.component';
import { AddCarComponent } from './add-car/add-car.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {CarService} from "./car.service";
import {ConsoleService} from "./out-car/console.service";

@NgModule({
  declarations: [
    AppComponent,
    OutCarComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    HttpClientModule
  ],
  providers: [CarService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
