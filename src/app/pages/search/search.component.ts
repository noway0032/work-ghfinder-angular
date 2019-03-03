import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  /**
   * Egyszerű vagy összetett keresés váltó.
   * @_extended {boolean} igaz esetén hagyományos keresés
   */
  private _extended = true;
  /**
   * Változó a keresés típusának módosításához.
   * @stype {boolean} igaz esetén hagyományos keresés
   */
  @Input() stype = this._extended;

  constructor() {
  }

  modInput() {
    this._extended = !this._extended;
  }

  ngOnInit() {
  }

}
