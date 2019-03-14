import {Injectable} from '@angular/core';
import {SearchModel} from '../model/search-model';
import {GitResultService} from './git-result.service';
import {InputRadioOrder} from '../enum/input-radio-order.enum';
import {InputRadioSort} from '../enum/input-radio-sort.enum';
import {InputRadioStars} from '../enum/input-radio-stars.enum';
import {InputRadioCreated} from '../enum/input-radio-created.enum';
import {InputRadioSize} from '../enum/input-radio-size.enum';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _searchModel: SearchModel;
  private _activeSearch = false;

  constructor(
    private _gitResultService: GitResultService) {
    this._searchModel = this.defaultSearch;
  }

  languageRem(value: string) {
    let i = 0;
    for (const lang of this._searchModel.language) {
      if (lang === value) {
        this._searchModel.language.splice(i, 1);
      }
      i++;
    }
  }

  topicRem(value: string) {
    let i = 0;
    for (const lang of this._searchModel.topic) {
      if (lang === value) {
        this._searchModel.topic.splice(i, 1);
      }
      i++;
    }
  }

  get defaultSearch(): SearchModel {
    const sd = new SearchModel();
    sd.searchBy = '';
    sd.inName = true;
    sd.inDescription = false;
    sd.inReadme = false;
    sd.sortBy = InputRadioSort.DEFAULT;
    sd.orderBy = InputRadioOrder.DESC;
    sd.userName = '';
    sd.organization = '';
    sd.language = null;
    sd.topic = null;
    sd.starsMin = null;
    sd.starsMax = null;
    sd.starsRadios = InputRadioStars.GREATER_THAN;
    sd.createdMin = null;
    sd.createdMax = null;
    sd.createdRadios = InputRadioCreated.ON_OR_BEFORE;
    sd.sizeMin = null;
    sd.sizeMax = null;
    sd.sizeRadios = InputRadioSize.GREATER_THAN;
    return sd;
  }

  private searchHeader() {
    this._gitResultService.onlineResult = null;
    this.activeSearch = true;
    if (!this.searchModel.inName && !this.searchModel.inDescription && !this.searchModel.inReadme) {
      this.searchModel.inName = true;
    }
  }

  private makeUrlHeader(): string {
    let inS = this.searchModel.inName ? '+in:name' : '';
    inS += this.searchModel.inDescription ? '+in:description' : '';
    inS += this.searchModel.inReadme ? '+in:readme' : '';
    return 'https://api.github.com/search/repositories?q=' + this.searchModel.searchBy + inS;
  }

  private makeUrlTail(): string {
    let inS = '&sort=' + this.searchModel.sortBy;
    inS += '&order=' + this.searchModel.orderBy;
    inS += ''; // '&per_page=5'
    inS += '&per_page=100'; // '&per_page=100; default: 30'
    return inS;
  }

  private starsFilter(): string {
    const vMin = this.searchModel.starsMin != null && this.searchModel.starsMin.toString().length > 0;
    const vMax = this.searchModel.starsMax != null && this.searchModel.starsMax.toString().length > 0;
    switch (this.searchModel.starsRadios) {
      case InputRadioStars.EQUAL: {
        return vMin ? '+stars:' + this.searchModel.starsMin : '';
      }
      case InputRadioStars.GREATER_THAN: {
        return vMin ? '+stars:>' + this.searchModel.starsMin : '';
      }
      case InputRadioStars.LESS_THAN: {
        return vMin ? '+stars:<' + this.searchModel.starsMin : '';
      }
      case InputRadioStars.BETWEEN: {
        return vMin && vMax ? '+stars:' + this.searchModel.starsMin + '..' + this.searchModel.starsMax : '';
      }
    }
  }

  private createdFilter(): string {
    const vMin = this.searchModel.createdMin != null && this.searchModel.createdMin.toString().length > 0;
    const vMax = this.searchModel.createdMax != null && this.searchModel.createdMax.toString().length > 0;
    switch (this.searchModel.createdRadios) {
      case InputRadioCreated.BEFORE: {
        return vMin ? '+created:<' + this.searchModel.createdMin : '';
      }
      case InputRadioCreated.ON_OR_BEFORE: {
        return vMin ? '+created:<=' + this.searchModel.createdMin : '';
      }
      case InputRadioCreated.AFTER: {
        return vMin ? '+created:>' + this.searchModel.createdMin : '';
      }
      case InputRadioCreated.ON_OR_AFTER: {
        return vMin ? '+created:>=' + this.searchModel.createdMin : '';
      }
      case InputRadioCreated.BETWEEN: {
        return vMin && vMax ? '+created:' + this.searchModel.createdMin + '..' + this.searchModel.createdMax : '';
      }
    }
  }

  private sizeFilter(): string {
    const vMin = this.searchModel.sizeMin != null && this.searchModel.sizeMin.toString().length > 0;
    const vMax = this.searchModel.sizeMax != null && this.searchModel.sizeMax.toString().length > 0;
    switch (this.searchModel.sizeRadios) {
      case InputRadioSize.EQUAL: {
        return vMin ? '+size:' + this.searchModel.sizeMin : '';
      }
      case InputRadioSize.GREATER_THAN: {
        return vMin ? '+size:>' + this.searchModel.sizeMin : '';
      }
      case InputRadioSize.LESS_THAN: {
        return vMin ? '+size:<' + this.searchModel.sizeMin : '';
      }
      case InputRadioSize.BETWEEN: {
        return vMin && vMax ? '+size:' + this.searchModel.sizeMin + '..' + this.searchModel.sizeMax : '';
      }
    }
  }

  private makeUrlParam(): string {
    let inS = this.searchModel.userName.length > 2 ? '+user:' + this.searchModel.userName : '';
    inS += this.searchModel.organization.length > 2 ? '+org:' + this.searchModel.organization : '';
    if (this.searchModel.language != null) {
      for (const lanfs of this.searchModel.language) {
        inS += '+language:' + lanfs;
      }
    }
    if (this.searchModel.topic != null) {
      for (const tops of this.searchModel.topic) {
        inS += '+topic:' + tops;
      }
    }
    inS += this.starsFilter();
    inS += this.createdFilter();
    inS += this.sizeFilter();
    return inS;
  }

  startStandardSearch() {
    if (this.searchModel.searchBy.length > 2) {
      this.searchHeader();
      this._gitResultService.url = this.makeUrlHeader() + this.makeUrlTail();
    }
  }

  startAdvancedSearch() {
    if (this.searchModel.searchBy.length > 2) {
      this.searchHeader();
      this._gitResultService.url = this.makeUrlHeader() + this.makeUrlParam() + this.makeUrlTail();
    }
  }

  get searchModel(): SearchModel {
    return this._searchModel;
  }

  set searchModel(value: SearchModel) {
    this._searchModel = value;
  }

  get activeSearch(): boolean {
    return this._activeSearch;
  }

  set activeSearch(value: boolean) {
    this._activeSearch = value;
  }
}
