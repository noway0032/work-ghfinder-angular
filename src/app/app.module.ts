import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { HistoryComponent } from './pages/history/history.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './core/loading-spinner/loading-spinner.component';
import { SearchResultsComponent } from './elements/search-results/search-results.component';
import { SearchBarExtendedComponent } from './elements/search-bar-extended/search-bar-extended.component';
import { SearchBarDefaultComponent } from './elements/search-bar-default/search-bar-default.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HistoryComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
    SearchResultsComponent,
    SearchBarExtendedComponent,
    SearchBarDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
