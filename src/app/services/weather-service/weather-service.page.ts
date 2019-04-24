import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})

export class WeatherServicePage {
  apiKey = 'a2d9b007fdbb806721588a833477b7e6';
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';

  globalUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=';
  
  constructor(private http: Http) { }

  getData(city,country) {
    return this.http.get(`${this.url}${city},${country}&units=imperial&APPID=${this.apiKey}`).pipe(map(res => res.json()));
  }

  getGeo(lat, lon) {
    return this.http.get(`${this.globalUrl}${lat}&lon=${lon}&units=imperial&APPID=${this.apiKey}`).pipe(map(res => res.json()));
  }

}
