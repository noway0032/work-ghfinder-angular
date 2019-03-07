import { Component, OnInit } from '@angular/core';
import {GitResultModel} from '../../shared/model/git-result-model';
import {GitResultService} from '../../shared/service/git-result.service';
import {GitResultItemModel} from '../../shared/model/git-result-item-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private onlineResult: GitResultModel;
  private onlineResultItems: GitResultItemModel[];

  constructor(private _gitResultService: GitResultService) { }

  private loadGitResult() {
    this._gitResultService.getResults().subscribe(data => {
      this.onlineResult = data;
      this.onlineResultItems = data.items;
    });
  }

  ngOnInit() {
    this.loadGitResult();
  }

}
