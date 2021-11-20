import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { City } from 'src/app/shared/models/city.model';
import { Weather } from 'src/app/shared/models/weather.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnInit {
  city!: City;
  weather!: Weather;
  loaded = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private dataService: DataService
  ) {
    if (config?.data?.city) {
      this.city = config.data.city;
    }
  }

  ngOnInit(): void {
    this.loaded = false;
    this.getWeatherInfoOfCity();
  }

  getWeatherInfoOfCity() {
    this.dataService.getCityWeather(this.city.id).subscribe((data) => {
      this.weather = data.weather;
      this.loaded = true;
    });
  }
}
