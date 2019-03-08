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
  private _page = 0;
  private _rowProPage = 5;

  constructor(private _gitResultService: GitResultService,
              private _searchDefaultService: SearchService) {
  }

  ngOnInit() {
    this.getAllRow();
  }

  getAllRow() {
    if (this._searchDefaultService.activeSearch) {
      this._gitResultService.refresResults()
        .subscribe(
          data => {
            this.onlineResult = data;
            this.onlineResultItems = data.items;
          });
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
    }
  }
  followingPage() {
    if ((this.page + 1) * 5 < this.onlineResultItems.length) {
      this.page++;
    }
  }

  get searchDefaultService(): SearchService {
    return this._searchDefaultService;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get rowProPage(): number {
    return this._rowProPage;
  }

  set rowProPage(value: number) {
    this._rowProPage = value;
  }
}
