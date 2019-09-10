import {Injectable, OnInit} from '@angular/core';
import {HistoryModel} from '../model/history-model';
import {SearchModel} from '../model/search-model';
import {SearchService} from './search.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService implements OnInit {

  private _historyModel: HistoryModel;

  constructor(private _searchService: SearchService) {
  }

  ngOnInit() {
  }

  get historyModel(): HistoryModel {
    return this._historyModel;
  }

  set historyModel(value: HistoryModel) {
    this._historyModel = value;
  }

  set searchModel(value: SearchModel) {
    this._historyModel.searchModel.push(value);
  }
}
