import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartjsChartsComponent } from './chartjs-charts/chartjs-charts.component';
import { DougnutChartComponent } from './dougnut-chart/dougnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartjsChartsComponent,
    DougnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
