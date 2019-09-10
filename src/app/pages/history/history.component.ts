import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../../shared/service/history.service';
import {SearchModel} from '../../shared/model/search-model';
import {GitResultService} from '../../shared/service/git-result.service';
import {SearchService} from '../../shared/service/search.service';
import {Router} from '@angular/router';
import {HistoryModel} from '../../shared/model/history-model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(
    private _router: Router,
    private _gitResultService: GitResultService,
    private _historyService: HistoryService,
    private _searchService: SearchService) { }

  ngOnInit() {
  }

  actual(hs: SearchModel) {
    this._searchService.searchModel = hs;
  }

  get SearchModel(): SearchModel[] {
    return this._historyService.historyModel.searchModel;
  }

  get gitResultService(): GitResultService {
    return this._gitResultService;
  }

  set gitResultService(value: GitResultService) {
    this._gitResultService = value;
  }
}
