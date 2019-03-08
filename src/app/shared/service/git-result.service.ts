import {Injectable} from '@angular/core';
import {GitResultModel} from '../model/git-result-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitResultService {

  private _url = '';
  private _refreshNeeded$ = new Subject<void>();
  private _headers = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private _http: HttpClient) {
  }

  getResults(): Observable<GitResultModel> {
    return this._http
      .get<GitResultModel>(
        this._url, { headers: this._headers });
  }

  refresResults(): Observable<GitResultModel> {
    return this._http
      .get<GitResultModel>(
        this._url, { headers: this._headers })
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  get refreshNeeded$(): Subject<void> {
    return this._refreshNeeded$;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
