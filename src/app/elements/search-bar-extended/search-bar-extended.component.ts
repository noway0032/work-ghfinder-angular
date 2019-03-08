import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchModel} from '../../shared/model/search-model';
import {SearchService} from '../../shared/service/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar-extended',
  templateUrl: './search-bar-extended.component.html',
  styleUrls: ['./search-bar-extended.component.scss']
})
export class SearchBarExtendedComponent implements OnInit {

  @Input() stype;
  @Output() mstype = new EventEmitter<void>();
  private _searchModel: SearchModel;

  constructor(
    private _router: Router,
    private _searchService: SearchService) {
  }

  ngOnInit() {
    this._searchModel = this._searchService.searchDedault;
  }

  modStype() {
    this.mstype.emit();
  }

  onSubmit(form) {
    this._searchService.startSearch();
    this._router
      .navigateByUrl('/Refrsh', {skipLocationChange: true})
      .then(() =>
        this._router.navigate(['/search']));

  }

  get searchModel(): SearchModel {
    return this._searchModel;
  }
}
