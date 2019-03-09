import {Injectable} from '@angular/core';
import {SearchModel} from '../model/search-model';
import {GitResultService} from './git-result.service';
import {InputRadioOrder} from '../enum/input-radio-order.enum';
import {InputRadioSort} from '../enum/input-radio-sort.enum';
import {SearchAdvancedModel} from '../model/search-advanced-model';

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

  get defaultSearch(): SearchModel {
    const sd = new SearchAdvancedModel();
    sd.searchBy = '';
    sd.inName = true;
    sd.inDescription = false;
    sd.inReadme = false;
    sd.sortBy = InputRadioSort.DEFAULT;
    sd.orderBy = InputRadioOrder.DESC;
    return sd;
  }

  startSearch() {
    if (!this.searchModel.inName && !this.searchModel.inDescription && !this.searchModel.inReadme) {
      this.searchModel.inName = true;
    }
    let inS = this.searchModel.inName ? '+in:name' : '';
    inS += this.searchModel.inDescription ? '+in:description' : '';
    inS += this.searchModel.inReadme ? '+in:readme' : '';
    inS += '&sort=' + this.searchModel.sortBy;
    inS += '&order=' + this.searchModel.orderBy;
    const perPages = ''; // '&per_page=5'
    this._gitResultService.url = 'https://api.github.com/search/repositories?q=' + this.searchModel.searchBy + inS + perPages;
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
