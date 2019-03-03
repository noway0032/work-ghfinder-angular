import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar-default',
  templateUrl: './search-bar-default.component.html',
  styleUrls: ['./search-bar-default.component.scss']
})
export class SearchBarDefaultComponent {

  @Input() stype;
  @Output() mstype = new EventEmitter<void>();

  constructor() {
  }

  modStype() {
    this.mstype.emit();
  }
}
