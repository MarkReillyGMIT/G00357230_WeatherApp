import { Component, OnInit } from '@angular/core';
import { WeatherServicePage } from '../../services/weather-service/weather-service.page';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page'
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  ngOnInit(){
  }

  
  location: {
    city: string,
    country: string
  }

  //Variables

  ampm: any;
  cityName: string;
  country: string;
  weather: string;
  icon: string;
  temp: string;
  tempMax: string;
  tempMin: string;
  day: string;
  windSpeed: string;
  looksLike: string;

  constructor(private storage: Storage,
              private service: WeatherServicePage,
              private router: Router,
              private modal: ModalController,
              public navCtrl: NavController) {}

//Stores the location from the previous use using ionic storage 
//If its the first time being used, the default is Galway , Ireland
  ionViewWillEnter(){
    this.storage.get('location').then((val) =>{
      if(val != null){
        this.location =JSON.parse(val);
      }else{
        this.location = {
          city: 'Galway',
          country: 'Ireland'
        }
      }
      //Gets the data from the openWeatherMap Api
      // I specify which data I want to receive from the Api
      this.service.getData(this.location.city,this.location.country).subscribe((res:any) => {
        console.log('getData',res);
        this.cityName = res.name;
        this.country = res.sys.country;
        this.weather = res.weather[0].main;
        this.icon = 'http://openweathermap.org/img/w/'+res.weather[0].icon+'.png';
        this.temp = ((res.main.temp-32)* 5/9).toFixed(1);
        this.tempMax = ((res.main.temp_max-32)* 5/9).toFixed(1);
        this.tempMin = ((res.main.temp_min-32)* 5/9).toFixed(1);
        this.looksLike = res.weather[0].description;
        this.windSpeed = res.wind.speed;
      });
    });

    // Get Day
   this.getDay();

   this.getTimeOfDay();
  }

  //Use the time so i can display the day time or night time image on my home page
  getTimeOfDay() {
  let time = new Date().getHours();
  this.ampm = time;
   }
 

  // Switch statement to get Date
  getDay () {
    let date = new Date().getDay();
    switch(date) {
      case 0:
      this.day = 'Sunday';
      break;
  
      case 1:
      this.day = 'Monday';
      break;
  
      case 2:
      this.day = 'Tuesday';
      break;
  
      case 3:
      this.day = 'Wednesday';
      break;
  
      case 4:
      this.day = 'Thursday';
      break;
  
      case 5:
      this.day = 'Friday';
      break;
  
      case 6:
      this.day = 'Saturday';
      break;
    }
  };
  
  // Function to turn API milliseconds to hour
  milliToHour(milliseconds) {
    return ((new Date(milliseconds * 1000).getHours() + 11) % 12 + 1); 
  }
}
