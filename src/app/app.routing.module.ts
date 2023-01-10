import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListMoviesComponent} from "./list-movies/list-movies.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";


//import { DetailmovieComponent } from './detail-movie/detail-movie.component';
//import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: ListMoviesComponent  },

  {
    path: "movie-detail/:id",
    component: MovieDetailsComponent ,

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
