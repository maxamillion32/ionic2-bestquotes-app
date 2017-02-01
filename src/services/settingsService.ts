export class SettingsService {
  get isAltBackground(): boolean {
    return this._isAltBackground;
  }

  set isAltBackground(value: boolean) {
    this._isAltBackground = value;
  }

  private _isAltBackground:boolean = false;



}
