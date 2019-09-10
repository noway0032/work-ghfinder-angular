import {SearchModel} from './search-model';

export class HistoryModel {

  private _searchModel: SearchModel[];

  get searchModel(): SearchModel[] {
    return this._searchModel;
  }

  set searchModel(value: SearchModel[]) {
    this._searchModel = value;
  }
}
