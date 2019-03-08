import {Component, Input, OnInit} from '@angular/core';
import {GitResultModel} from '../../shared/model/git-result-model';
import {GitResultItemModel} from '../../shared/model/git-result-item-model';

@Component({
  selector: 'app-search-results-row',
  templateUrl: './search-results-row.component.html',
  styleUrls: ['./search-results-row.component.scss']
})
export class SearchResultsRowComponent implements OnInit {
  @Input() result: GitResultItemModel;

  constructor() { }

  ngOnInit() {
  }

  smallText(txt: string, len: number): string {
    return txt == null || txt.length < len ? txt : txt.substr(0, len) + '...';
  }
}
