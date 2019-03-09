import { Injectable } from '@angular/core';
import {InputRadioOrder} from '../enum/input-radio-order.enum';
import {inputRadioStars} from '../enum/input-radio-stars.enum';
import {SearchAdvancedModel} from '../model/search-advanced-model';
import {InputRadioSort} from '../enum/input-radio-sort.enum';
import {InputRadioCreated} from '../enum/input-radio-created.enum';
import {InputRadioSize} from '../enum/input-radio-size.enum';
import {GitResultService} from './git-result.service';

class SearchAdvancadModel {
}

@Injectable({
  providedIn: 'root'
})
export class SearchAdvancadService {

  private _searchAdvancadModel: SearchAdvancadModel;
  private _activeSearch = false;

  constructor(
    private _gitResultService: GitResultService) {
    this._searchAdvancadModel = this.defaultAdvancadSearch;
  }

  get defaultAdvancadSearch(): SearchAdvancedModel {
    const sd = new SearchAdvancedModel();
    sd.searchBy = '';
    sd.inName = true;
    sd.inDescription = false;
    sd.inReadme = false;
    sd.sortBy = InputRadioSort.DEFAULT;
    sd.orderBy = InputRadioOrder.DESC;

    sd.userName = '';
    sd.organisation = '';
    sd.language = '';
    sd.topic = '';
    sd.starsMin = null;
    sd.starsMax = null;
    sd.starsRadios = inputRadioStars.GREATER_THAN;
    sd.createdMin = null;
    sd.createdMax = null;
    sd.createdRadios = InputRadioCreated.ON_OR_BEFORE;
    sd.sizeMin = null;
    sd.sizeMax = null;
    sd.sizeRadios = InputRadioSize.GREATER_THAN;
    return sd;
  }

  get searchAdvancadModel(): SearchAdvancadModel {
    return this._searchAdvancadModel;
  }

  set searchAdvancadModel(value: SearchAdvancadModel) {
    this._searchAdvancadModel = value;
  }

  get activeAdvancadSearch(): boolean {
    return this._activeSearch;
  }

  set activeAdvancadSearch(value: boolean) {
    this._activeSearch = value;
  }
}
