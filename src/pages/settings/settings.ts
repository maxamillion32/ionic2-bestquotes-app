import { Component } from '@angular/core';
import {Toggle} from "ionic-angular";
import {SettingsService} from "../../services/settingsService";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private settingsSrv:SettingsService) {}

  isAltBackground():boolean{
    return this.settingsSrv.isAltBackground;
  }

  onToggle(toggle:Toggle){
    this.settingsSrv.isAltBackground = toggle.checked;
  }
}
