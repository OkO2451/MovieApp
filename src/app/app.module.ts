import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieItemComponent } from './movie-item/movie-item.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";


@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MovieDetailsComponent,
    MovieItemComponent
  ],
    imports: [
        BrowserModule, HttpClientModule, FormsModule, Ng2SearchPipeModule,AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
