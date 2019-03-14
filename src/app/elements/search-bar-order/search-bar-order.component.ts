import { Component, OnInit } from '@angular/core';
import {SearchModel} from '../../shared/model/search-model';
import {Router} from '@angular/router';
import {SearchService} from '../../shared/service/search.service';
import {InputRadioOrder} from '../../shared/enum/input-radio-order.enum';
import {GitResultService} from '../../shared/service/git-result.service';
import {InputRadioSort} from '../../shared/enum/input-radio-sort.enum';
import {GitResultModel} from '../../shared/model/git-result-model';

@Component({
  selector: 'app-search-bar-order',
  templateUrl: './search-bar-order.component.html',
  styleUrls: ['./search-bar-order.component.scss']
})
export class SearchBarOrderComponent implements OnInit {

  private _searchModel: SearchModel;
  private _gitResultModel: GitResultModel;

  constructor(
    private _router: Router,
    private _searchService: SearchService,
    private _gitResultService: GitResultService) {
    this._gitResultModel = this._gitResultService.onlineResult;
  }

  ngOnInit() {
    this._searchModel = this._searchService.searchModel;
  }

  orderByRadiosClick(sort: InputRadioSort, order: InputRadioOrder) {
    this._gitResultService.sortOrderBy(sort, order);
    // this._searchService.startSearch();
    this._router
      .navigateByUrl('/Refrsh', {skipLocationChange: true})
      .then(() =>
        this._router.navigate(['/search']));
  }

  get searchModel(): SearchModel {
    return this._searchModel;
  }

  set searchModel(value: SearchModel) {
    this._searchModel = value;
  }
}
