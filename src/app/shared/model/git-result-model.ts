import {GitResultItemModel} from './git-result-item-model';

export class GitResultModel {
  private _total_count: number;
  private _incomplete_results: boolean;
  private _items: GitResultItemModel[];

  get total_count(): number {
    return this._total_count;
  }

  set total_count(value: number) {
    this._total_count = value;
  }

  get incomplete_results(): boolean {
    return this._incomplete_results;
  }

  set incomplete_results(value: boolean) {
    this._incomplete_results = value;
  }

  get items(): GitResultItemModel[] {
    return this._items;
  }

  set items(value: GitResultItemModel[]) {
    this._items = value;
  }
}
