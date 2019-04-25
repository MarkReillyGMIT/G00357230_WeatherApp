import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  city:String;
  country:String;

  constructor( public navCtrl:NavController, private storage:Storage) {

    //Allows the user to input the city and country of there choice
    //Default city and country is set to Galway IE
    //Stores the last location enter by the user, using Ionic Storage
    this.storage.get('location').then((val) => {
      if(val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.country = location.country;
      }else{
        this.city = 'Galway';
        this.country = 'IE';
      }
    });
   }

  ngOnInit() {
  }

  //Function saveForm updates the homePage when the user changes the city and country and clicks the 'Save Changes' button
  
  saveForm(){
    let location = {
      city: this.city,
      country: this.country
    }
    //Changes location to a string
    this.storage.set('location', JSON.stringify(location));
    //Navigate to the home page once the save button is clicked
    this.navCtrl.navigateForward("home");
  }

}
