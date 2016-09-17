import { Component } from '@angular/core';
import {Deploy} from '@ionic/cloud-angular';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
 constructor(public deploy: Deploy) {
   
  }
  constructor(public navCtrl: NavController) {

  }
  
  mySlideOptions = {
    initialSlide: 1,
    loop: true,
	speed:3000,
	autoplay:true,
	pager:true
  };
  
}
