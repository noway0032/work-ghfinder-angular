import { Component, OnInit } from '@angular/core';
import {AlertsService} from '../../shared/service/alerts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  alerts: any[] = [];

  constructor(private _allerts: AlertsService) {
    this.alerts = _allerts.alerts;
  }

  ngOnInit() {
  }

}
