import {Component, ViewChild} from '@angular/core';
import {Platform, NavController, MenuController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //selects the #nav element on page
  @ViewChild('nav') navCtrl:NavController;

  tabsPage = TabsPage;
  settingsPage = SettingsPage;

  constructor(platform: Platform, private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  loadPage(page:any){
    this.navCtrl.setRoot(page);
    this.menuCtrl.close();
  }
}
