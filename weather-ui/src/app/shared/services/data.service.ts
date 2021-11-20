import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { AllCitiesRespone } from "../models/all-cities-response.model";
import { WeatherResponse } from "../models/weather-response.model";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    apiBaseUrl = '';

    constructor(private httpClient: HttpClient) {
    }

    loadAssetConfigurations(configPath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(configPath).toPromise().then((response: any) => {
                this.apiBaseUrl = response.apiBaseUrl;
                return resolve(this.apiBaseUrl);
            }).then(() => resolve(this.apiBaseUrl))
                .catch(() => reject());
        });
    }

    getAllCities(pageNo: number, pageCount: number, searchText: string): Observable<AllCitiesRespone> {
        const url = `get-cities?pageNo=${pageNo}&pageCount=${pageCount}&searchText=${searchText}`;
        return this.getData<AllCitiesRespone>(url);
    }

    getCityWeather(cityId: number): Observable<WeatherResponse> {
        const url = `get-city-weather?cityId=${cityId}`;
        return this.getData<WeatherResponse>(url);
    }

    private getData<T>(apiUrl: string): Observable<T> {
        const url = this.apiBaseUrl + apiUrl;
        return this.httpClient.get<T>(url);
    }
}