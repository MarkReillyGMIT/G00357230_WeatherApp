import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WeatherServicePage {
//My personal Api Key from OpenWeatherMap
  apiKey = 'a2d9b007fdbb806721588a833477b7e6';
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  
  constructor(private http: Http) { }

  //Concatenate the URL to the city and country variables  
  //Parse the results into JSON format 
  getData(city,country) {
    return this.http.get(`${this.url}${city},${country}&units=imperial&APPID=${this.apiKey}`).pipe(map(res => res.json()));
  }

  

}
