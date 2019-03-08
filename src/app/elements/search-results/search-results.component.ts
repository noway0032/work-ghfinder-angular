import { Component, OnInit } from '@angular/core';
import {GitResultModel} from '../../shared/model/git-result-model';
import {GitResultService} from '../../shared/service/git-result.service';
import {GitResultItemModel} from '../../shared/model/git-result-item-model';
import {SearchService} from '../../shared/service/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private onlineResult: GitResultModel;
  private onlineResultItems: GitResultItemModel[];

  constructor(private _gitResultService: GitResultService,
              private _searchDefaultService: SearchService) {
  }

  get foundSeaschBy(): boolean {
    return this._searchDefaultService.searchDedault.searchBy !== '';
  }


  ngOnInit() {
    this._gitResultService.refreshNeeded$
      .subscribe(() => {
        this.getAllRow();
      });
    this.getAllRow();
  }

  getAllRow() {
    this._gitResultService.getResults()
      .subscribe(
        data => {
          this.onlineResult = data;
          this.onlineResultItems = data.items;
        });
  }
}
