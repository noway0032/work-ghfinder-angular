import {Injectable} from '@angular/core';
import {SearchModel} from '../model/search-model';
import {GitResultService} from './git-result.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _searchDedault: SearchModel;

  constructor(
    private _gitResultService: GitResultService) {
    this._searchDedault = this.defaultSearch;
  }

  get defaultSearch(): SearchModel {
    const sd = new SearchModel();
    sd.searchBy = '';
    sd.inName = true;
    sd.inDescription = false;
    sd.inReadme = false;
    return sd;
  }

  startSearch() {
    if (!this.searchDedault.inName && !this.searchDedault.inDescription && !this.searchDedault.inReadme) {
      this.searchDedault.inName = true;
    }
    let inS = this.searchDedault.inName ? '+in:name' : '';
    inS += this.searchDedault.inDescription ? '+in:description' : '';
    inS += this.searchDedault.inReadme ? '+in:readme' : '';
    this._gitResultService.url = 'https://api.github.com/search/repositories?q=' + this.searchDedault.searchBy + inS + '&per_page=5';
    console.log(this._gitResultService.url);
    this._gitResultService.refresResults();
  }

  get searchDedault(): SearchModel {
    return this._searchDedault;
  }

  set searchDedault(value: SearchModel) {
    this._searchDedault = value;
  }
}
