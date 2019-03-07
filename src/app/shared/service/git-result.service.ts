import {Injectable, OnInit} from '@angular/core';
import {GitResultModel} from '../model/git-result-model';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitResultService implements OnInit {

  private _results: GitResultModel;

  constructor(private _router: Router,
              private _http: HttpClient) {
  }

  getResults(): Observable<GitResultModel> {
    const url = 'https://api.github.com/search/repositories?q=tetris&per_page=5';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._http.get<GitResultModel>(url, { headers: headers });
  }

  ngOnInit(): void {
  }
}
