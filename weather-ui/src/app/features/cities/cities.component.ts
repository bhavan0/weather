import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { City } from 'src/app/shared/models/city.model';
import { DataService } from 'src/app/shared/services/data.service';
import { CityWeatherComponent } from '../city-weather/city-weather.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  providers: [DialogService],
})
export class CitiesComponent implements OnInit {
  @ViewChild('cititesTable') cititesTable: Table | undefined;

  cols: any[] = [];
  loading = false;
  cities: City[] = [];
  totalRecords = 480000;
  selectedCity!: City;
  cityViewRef: any;
  searchText = '';

  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.cols = [
      {
        field: 'id',
        header: 'ID',
      },
      {
        field: 'name',
        header: 'Name',
      },
    ];
  }

  lazyLoadCities(event: LazyLoadEvent) {
    this.loading = true;

    const pageCount = event.rows ?? 0;
    const pageNo = (event.first ?? 0) * pageCount + 1;
    const searchText = event.globalFilter ?? '';

    this.dataService
      .getAllCities(pageNo, pageCount, searchText)
      .subscribe((res) => {
        this.cities = res.cities;
        this.loading = false;
      });
  }

  onCitySelect() {
    this.cityViewRef = this.dialogService.open(CityWeatherComponent, {
      header: 'City Weather',
      width: '680px',
      data: { city: this.selectedCity },
    });
  }

  applyFilterGlobal($event: any) {
    this.cititesTable!.filterGlobal(
      ($event.target as HTMLInputElement).value,
      'contains'
    );
  }
}
