import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'weather-ui';
  configLoaded = false;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.loadConfigurations();
  }

  loadConfigurations() {
    this.dataService.loadAssetConfigurations(environment.configurationPath).then(() => {
      this.configLoaded = true;
    });
  }
}
