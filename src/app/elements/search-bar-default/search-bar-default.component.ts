import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchModel} from '../../shared/model/search-model';
import {Router} from '@angular/router';
import {SearchService} from '../../shared/service/search.service';
import {GitResultService} from '../../shared/service/git-result.service';

@Component({
  selector: 'app-search-bar-default',
  templateUrl: './search-bar-default.component.html',
  styleUrls: ['./search-bar-default.component.scss']
})
export class SearchBarDefaultComponent implements OnInit {

  @Input() stype;
  @Output() mstype = new EventEmitter<void>();
  private _searchModel: SearchModel;

  constructor(
    private _router: Router,
    private _searchService: SearchService,
    private _gitResultService: GitResultService) {
  }

  ngOnInit() {
      this._searchModel = this._searchService.searchModel;
  }

  modStype() {
    this.mstype.emit();
  }

  onSubmit(form) {
    this._searchService.startStandardSearch();
    this._router
      .navigateByUrl('/Refrsh', {skipLocationChange: true})
      .then(() =>
        this._router.navigate(['/search']));
  }

  checkedInput(bool: boolean): string {
    return bool ? 'active' : '';
  }

  get searchModel(): SearchModel {
    return this._searchModel;
  }
}
