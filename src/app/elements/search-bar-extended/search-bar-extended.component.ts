import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchModel} from '../../shared/model/search-model';
import {SearchService} from '../../shared/service/search.service';
import {Router} from '@angular/router';
import {InputRadioSize} from '../../shared/enum/input-radio-size.enum';
import {InputRadioCreated} from '../../shared/enum/input-radio-created.enum';
import {InputRadioStars} from '../../shared/enum/input-radio-stars.enum';

@Component({
  selector: 'app-search-bar-extended',
  templateUrl: './search-bar-extended.component.html',
  styleUrls: ['./search-bar-extended.component.scss']
})
export class SearchBarExtendedComponent implements OnInit {

  @Input() stype;
  @Output() mstype = new EventEmitter<void>();
  private _searchModel: SearchModel;
  starsBetweenFilter = false;
  createdBetweenFilter = false;
  sizeBetweenFilter = false;

  constructor(
    private _router: Router,
    private _searchService: SearchService) {
  }

  ngOnInit() {
    this._searchModel = this._searchService.searchModel;
  }

  modStype() {
    this.mstype.emit();
  }

  onSubmit(form) {
    this._searchService.startAdvancedSearch();
    this._router
      .navigateByUrl('/Refrsh', {skipLocationChange: true})
      .then(() =>
        this._router.navigate(['/search']));
  }

  starsRadiosClick() {
    if (this.searchModel.starsRadios === InputRadioStars.BETWEEN) {
      this.starsBetweenFilter = true;
    } else {
      this.starsBetweenFilter = false;
    }
  }

  createdsRadiosClick() {
    if (this.searchModel.createdRadios === InputRadioCreated.BETWEEN) {
      this.createdBetweenFilter = true;
    } else {
      this.createdBetweenFilter = false;
    }
  }

  sizeRadiosClick() {
    if (this.searchModel.sizeRadios === InputRadioSize.BETWEEN) {
      this.sizeBetweenFilter = true;
    } else {
      this.sizeBetweenFilter = false;
    }
  }

  checkedInput(bool: boolean): string {
    return bool ? 'active' : '';
  }

  get searchModel(): SearchModel {
    return this._searchModel;
  }
}
