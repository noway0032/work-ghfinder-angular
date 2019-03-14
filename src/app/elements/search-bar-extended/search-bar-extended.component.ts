import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchModel} from '../../shared/model/search-model';
import {SearchService} from '../../shared/service/search.service';
import {Router} from '@angular/router';
import {InputRadioSize} from '../../shared/enum/input-radio-size.enum';
import {InputRadioCreated} from '../../shared/enum/input-radio-created.enum';
import {InputRadioStars} from '../../shared/enum/input-radio-stars.enum';
import {AlertsService} from '../../shared/service/alerts.service';

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
  languageInput: '';
  language: string[] = [];
  topicInput: '';
  topic: string[] = [];

  constructor(
    private _router: Router,
    private _searchService: SearchService,
    private _allerts: AlertsService) {
  }

  ngOnInit() {
    this._searchModel = this._searchService.searchModel;
    this.starsRadiosClick();
    this.createdsRadiosClick();
    this.sizeRadiosClick();
  }

  modStype() {
    this.mstype.emit();
  }

  languageAdd() {
    if (this.languageInput.length > 2) {
      let van = true;
      for (const lang of this.language) {
        if (lang === this.languageInput) {
          van = false;
        }
      }
      if (van) {
        this.language.push(this.languageInput);
        this._searchService.searchModel.language = this.language;
      }
      this.languageInput = '';
    }
  }

  topicAdd() {
    if (this.topicInput.length > 2) {
      let van = true;
      for (const lang of this.topic) {
        if (lang === this.topicInput) {
          van = false;
        }
      }
      if (van) {
        this.topic.push(this.topicInput);
        this._searchService.searchModel.topic = this.topic;
      }
      this.topicInput = '';
    }
  }

  private getSearchByValid(): boolean {
    return (this.searchModel.searchBy  === null ||
      this.searchModel.searchBy.length < 3);
  }

  private getUserNameValid(): boolean {
    return (this.searchModel.userName.length < 3 &&
      this.searchModel.userName.length  > 0 &&
      this.searchModel.userName != null);
  }

  private getOrganizationValid(): boolean {
    return (this.searchModel.organization.length < 3 &&
      this.searchModel.organization.length  > 0 &&
      this.searchModel.organization != null);
  }

  private getLanguageValid(): boolean {
    return this.searchModel.language.length  != null;
  }

  private getTopicValid(): boolean {
    return this.searchModel.topic  != null;
  }

  private getStarsValid(): boolean {
    if (this.searchModel.starsRadios === InputRadioStars.BETWEEN && ((
      this.searchModel.starsMin !== this._searchService.defaultSearch.starsMin &&
      this.searchModel.starsMax !== this._searchService.defaultSearch.starsMax &&
      this.searchModel.starsMin >= this.searchModel.starsMax) ||
      ( this.searchModel.starsMin !== this._searchService.defaultSearch.starsMin &&
        this.searchModel.starsMax === this._searchService.defaultSearch.starsMax))) {
      return true;
    } else {
      return false;
    }
  }

  private getCreatedValid(): boolean {
    if (this.searchModel.createdRadios === InputRadioCreated.BETWEEN && ((
      this.searchModel.createdMin !== this._searchService.defaultSearch.createdMin &&
      this.searchModel.createdMax !== this._searchService.defaultSearch.createdMax &&
      this.searchModel.createdMin >= this.searchModel.createdMax) ||
      ( this.searchModel.createdMin !== this._searchService.defaultSearch.createdMin &&
        this.searchModel.createdMax === this._searchService.defaultSearch.createdMax))) {
      return true;
    } else {
      return false;
    }
  }

  private getSizeValid(): boolean {
    if (this.searchModel.sizeRadios === InputRadioSize.BETWEEN && ((
      this.searchModel.sizeMin !== this._searchService.defaultSearch.sizeMin &&
      this.searchModel.sizeMax !== this._searchService.defaultSearch.sizeMax &&
      this.searchModel.sizeMin >= this.searchModel.sizeMax) ||
    ( this.searchModel.sizeMin !== this._searchService.defaultSearch.sizeMin &&
      this.searchModel.sizeMax === this._searchService.defaultSearch.sizeMax))) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit(form) {
    if (this.getSearchByValid()) {
      this.allerts.alert5sec('Minimum 3 characters required!');
    } else if (this.searchModel.userName === this._searchService.defaultSearch.userName &&
      this.searchModel.organization === this._searchService.defaultSearch.organization &&
      this.searchModel.language === this._searchService.defaultSearch.language &&
      this.searchModel.topic === this._searchService.defaultSearch.topic &&
      this.searchModel.starsMin === this._searchService.defaultSearch.starsMin &&
      this.searchModel.createdMin === this._searchService.defaultSearch.createdMin &&
      this.searchModel.sizeMin === this._searchService.defaultSearch.sizeMin) {
      this.allerts.alert5sec('Another parameter is required!');
    } else if (this.getUserNameValid() ||
      this.getOrganizationValid()) {
      this.allerts.alert5sec('Minimum 3 characters per selected parameter!');
    } else if (this.getStarsValid() ||
      this.getCreatedValid() ||
      this.getSizeValid()) {
      this.allerts.alert5sec('The minimum value must not be greater than the maximum!');
    } else {
      this._searchService.startAdvancedSearch();
      this._router
        .navigateByUrl('/Refrsh', {skipLocationChange: true})
        .then(() =>
          this._router.navigate(['/search']));
    }
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

  get allerts(): AlertsService {
    return this._allerts;
  }

  set allerts(value: AlertsService) {
    this._allerts = value;
  }

  get searchService(): SearchService {
    return this._searchService;
  }

  set searchService(value: SearchService) {
    this._searchService = value;
  }
}
