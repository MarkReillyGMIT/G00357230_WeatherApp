import { Component, OnInit } from '@angular/core';
import { WeatherServicePage, SearchType } from '../../services/weather-service/weather-service.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

   /**
   * Constructor of my first page
   * @param movieService The movie Service to get data
   */

  constructor(private weatherService: WeatherServicePage) { }

  ngOnInit(){}

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.weatherService.searchData(this.searchTerm, this.type);
  }

}
