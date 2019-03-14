import {GitResultItemModel} from './git-result-item-model';
import {ErrorsModel} from './errors-model';

export class GitResultModel {
  private _total_count: number;
  private _incomplete_results: boolean;
  private _items: GitResultItemModel[];
  private _message: string;
  private _errors: ErrorsModel[];
  private _documentation_url: string;


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

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get errors(): ErrorsModel[] {
    return this._errors;
  }

  set errors(value: ErrorsModel[]) {
    this._errors = value;
  }

  get documentation_url(): string {
    return this._documentation_url;
  }

  set documentation_url(value: string) {
    this._documentation_url = value;
  }
}
