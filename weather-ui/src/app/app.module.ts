import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { CitiesComponent } from './features/cities/cities.component';
import { HttpClientModule } from '@angular/common/http';
import { CityWeatherComponent } from './features/city-weather/city-weather.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HighlightTextPipe } from './shared/pipes/highlight-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityWeatherComponent,
    HighlightTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CityWeatherComponent
  ]
})
export class AppModule { }
