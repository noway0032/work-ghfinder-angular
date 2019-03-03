import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar-extended',
  templateUrl: './search-bar-extended.component.html',
  styleUrls: ['./search-bar-extended.component.scss']
})
export class SearchBarExtendedComponent {

  @Input() stype;
  @Output() mstype = new EventEmitter<void>();

  constructor() {
  }

  modStype() {
    this.mstype.emit();
  }
}
