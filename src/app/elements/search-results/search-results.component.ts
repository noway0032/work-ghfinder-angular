import { Component, OnInit } from '@angular/core';
import {GitResultService} from '../../shared/service/git-result.service';
import {SearchService} from '../../shared/service/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {


  constructor(private _gitResultService: GitResultService,
              private _searchService: SearchService) {
  }

  ngOnInit() {
    if (this.gitResultService.onlineResult == null) {
      this.gitResultService.getAllRow();
    }
  }

  get searchService(): SearchService {
    return this._searchService;
  }

  get gitResultService(): GitResultService {
    return this._gitResultService;
  }
}
