import {Injectable} from '@angular/core';
import {GitResultModel} from '../model/git-result-model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {tap} from 'rxjs/operators';
import {GitResultItemModel} from '../model/git-result-item-model';
import {InputRadioSort} from '../enum/input-radio-sort.enum';
import {InputRadioOrder} from '../enum/input-radio-order.enum';
import {AlertsService} from './alerts.service';

@Injectable({
  providedIn: 'root'
})
export class GitResultService {

  private _page = 0;
  private _rowProPage = 5;
  private _onlineResult: GitResultModel;
  private _onlineResultItems: GitResultItemModel[];
  private _totalPages: number;
  private _url: string;
  private _refreshNeeded$ = new Subject<void>();
  private _headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  private _error = false;

  constructor(private _http: HttpClient,
              private _allerts: AlertsService) {
  }

  refresResults(): Observable<GitResultModel> {
    return this._http
      .get<GitResultModel>(
        this._url, { headers: this._headers })
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        }));
  }

  getAllRow() {
    if (this.url != null) {
      this.refresResults()
        .subscribe(
          data => {
              this.onlineResult = data;
              this.onlineResultItems = data.items;
              this.totalPages = Math.ceil(data.items.length / this.rowProPage);
              this._page = 0;
            },
          (err) => {
            this._error = true;
            this._allerts.alert5sec('No data to display!');
          });
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
    }
  }
  followingPage() {
    if ((this.page + 1) * this._rowProPage < this.onlineResultItems.length) {
      this.page++;
    }
  }

  sortOrderBy(sort: InputRadioSort, order: InputRadioOrder) {
    if (order === InputRadioOrder.ASC) {
      if ((sort === InputRadioSort.FORKS)) {
        this.onlineResultItems.sort((n1, n2) =>
          (n1.forks_count >= n2.forks_count) ? 1 : -1);
      } else if ((sort === InputRadioSort.STARS)) {
        this.onlineResultItems.sort((n1, n2) =>
          (n1.stargazers_count >= n2.stargazers_count) ? 1 : -1);
      } else if ((sort === InputRadioSort.DEFAULT)) {
        this.onlineResultItems.sort((n1, n2) =>
          (n1.id >= n2.id) ? 1 : -1);
      }
    } else {
      if ((sort === InputRadioSort.FORKS)) {
        this.onlineResultItems.sort((n1, n2) =>
          (n1.forks_count <= n2.forks_count) ? 1 : -1);
      } else if ((sort === InputRadioSort.STARS)) {
        this.onlineResultItems.sort((n1, n2) =>
          (n1.stargazers_count <= n2.stargazers_count) ? 1 : -1);
      } else if ((sort === InputRadioSort.DEFAULT)) {
        this.onlineResultItems.sort((n1, n2) =>
          (n1.id <= n2.id) ? 1 : -1);
      }
    }
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get totalPages(): number {
    return this._totalPages;
  }

  set totalPages(value: number) {
    this._totalPages = value;
  }

  get onlineResult(): GitResultModel {
    return this._onlineResult;
  }

  set onlineResult(value: GitResultModel) {
    this._onlineResult = value;
  }

  get onlineResultItems(): GitResultItemModel[] {
    return this._onlineResultItems;
  }

  set onlineResultItems(value: GitResultItemModel[]) {
    this._onlineResultItems = value;
  }

  get rowProPage(): number {
    return this._rowProPage;
  }

  set rowProPage(value: number) {
    this._rowProPage = value;
  }
  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get errorFound(): boolean {
    return this._error;
  }
}
