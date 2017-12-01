import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
  private API_KEY = '8377e3dc96749cab';
  private url: string;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.API_KEY + '/conditions/q/';
  }

  getWeather(city: string, state: string) {
    return this.http.get(this.url + '/' + state + '/' + city + '.json');
  }

}
