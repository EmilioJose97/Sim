import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http'

import { Ng5SliderModule } from 'ng5-slider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapaComponent } from './mapa/mapa.component';

import { CCComponent } from './cc/cc.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapaComponent,
  
    CCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng5SliderModule,
    ChartsModule,
    HttpClientModule,
  
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
