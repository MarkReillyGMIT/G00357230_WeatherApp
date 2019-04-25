import { Component, OnInit } from '@angular/core';
import { WeatherServicePage } from '../../services/weather-service/weather-service.page';
import { Observable } from 'rxjs';
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
  humidity: string;
  pressure: any;
  sunriseHour: any;
  sunriseMinute: any;
  sunsetHour: any;
  sunsetMinute: any;
  looksLike: string;

  constructor(private storage: Storage,
              private service: WeatherServicePage,
              private router: Router,
              private modal: ModalController,
              public navCtrl: NavController) {}


  ionViewWillEnter(){
    this.storage.get('location').then((val) =>{
      if(val != null){
        this.location =JSON.parse(val);
      }else{
        this.location = {
          city: 'Galway',
          country: 'IE'
        }
      }
      this.service.getData(this.location.city,this.location.country).subscribe((res:any) => {
        console.log('getData',res);
        this.cityName = res.name;
        this.country = res.sys.country;
        this.weather = res.weather[0].main;
        this.icon = 'http://openweathermap.org/img/w/'+res.weather[0].icon+'.png';
        this.temp = ((res.main.temp-32)* 5/9).toFixed(1);
        this.tempMax = ((res.main.temp_max-32)* 5/9).toFixed(1);
        this.tempMin = ((res.main.temp_min-32)* 5/9).toFixed(1);
      });
    });
  }




    

    //this.service.getData(this.location.city, this.location.country).subscribe(weather => { this.weather = weather.current_observation;
    //})
    
  

      

  //  // Get location.
  //  getLocation() {
  //  this.service.getGeo(32.715736, -117.161087).subscribe
  //  ((res: any) => {
  //   console.log('geoLocation',res);
  //   })

  //   }

  // // Show Modal
  // async cityChange() {
  //   const modal = await this.modal.create({
  //     component: SettingsPage,
  //   });

  //   // Reload page once modal closes
  //   modal.onDidDismiss().then (_ => {
  //     this.ngOnInit();
  //   })
  
    
  //   return await modal.present();
  // }

  // getTimeOfDay() {
  //   let time = new Date().getHours();
  //   this.ampm = time;
  // }
 
  


  // // Switch statement to get Date
  // getDay () {
  //   let date = new Date().getDay();
  //   switch(date) {
  //     case 0:
  //     this.day = 'Sunday';
  //     break;
  
  //     case 1:
  //     this.day = 'Monday';
  //     break;
  
  //     case 2:
  //     this.day = 'Tuesday';
  //     break;
  
  //     case 3:
  //     this.day = 'Wednesday';
  //     break;
  
  //     case 4:
  //     this.day = 'Thursday';
  //     break;
  
  //     case 5:
  //     this.day = 'Friday';
  //     break;
  
  //     case 6:
  //     this.day = 'Saturday';
  //     break;
  

  //   }
  // };

  // // Function to turn API milliseconds to minutes
  // milliToMinutes (milliseconds) {
  //   return new Date(milliseconds * 1000).getMinutes();
  // }

  // // Function to turn API milliseconds to hour
  // milliToHour(milliseconds) {
  //   return ((new Date(milliseconds * 1000).getHours() + 11) % 12 + 1); 
  // }

  // ngOnInit() {

  //    // Get storage on page load
  //    this.storage.get('location').then((val) => {
  //     if(val != null){
  //       this.location = JSON.parse(val);
  //     } else {
  //       this.location = {
  //         city: 'Galway',
  //         country: 'Ire'
  //       }
  //     }


    
  //   //API call to get data
  //   this.service.getData(this.location.city,this.location.country).subscribe((res:any) => {
  //     console.log('getData',res);
  //     this.cityName = res.name;
  //     this.country = res.sys.country;
  //     this.weather = res.weather[0].main;
  //     this.icon = 'http://openweathermap.org/img/w/'+res.weather[0].icon+'.png';
  //     this.temp = res.main.temp.toFixed(1);
  //     this.tempMax = res.main.temp_max.toFixed(1);
  //     this.tempMin = res.main.temp_min.toFixed(1);
  //     this.windSpeed = res.wind.speed;
  //     this.humidity = res.main.humidity;
  //     this.pressure = (res.main.pressure / 33.864).toFixed(1);
  //     this.sunriseHour = new Date(res.sys.sunrise * 1000).getHours();
  //     this.sunriseMinute = this.milliToMinutes(res.sys.sunrise);
  //     this.sunsetHour = this.milliToHour(res.sys.sunset);
  //     this.sunsetMinute = this.milliToMinutes(res.sys.sunset);
  //     this.looksLike = res.weather[0].description;
  //     });
  //   });


  //   // Get Day
  //   this.getDay();

  //   this.getLocation();

  //   this.getTimeOfDay();
  // }
  

}
