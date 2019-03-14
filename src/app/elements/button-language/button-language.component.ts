import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../../shared/service/search.service';

@Component({
  selector: 'app-button-language',
  templateUrl: './button-language.component.html',
  styleUrls: ['./button-language.component.scss']
})
export class ButtonLanguageComponent implements OnInit {
  @Input() result: string;

  constructor(
    private _searchService: SearchService) { }

  ngOnInit() {
  }

  languageDel(value: string) {
    this._searchService.languageRem(value);
  }
}
