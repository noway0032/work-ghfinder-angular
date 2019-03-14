import { Injectable } from '@angular/core';
import {AlertComponent} from 'ngx-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private _alerts: any[] = [];
  num = 1;

  constructor() { }

  onClosed(dismissedAlert: AlertComponent): void {
    this._alerts = this._alerts.filter(alert => alert !== dismissedAlert);
  }

  alert5sec (text: string) {
    this._alerts.push({
      type: 'danger',
      msg: text,
      timeout: 5000
    });
    this.num++;
  }

  get alerts(): any[] {
    return this._alerts;
  }

  set alerts(value: any[]) {
    this._alerts = value;
  }
}
