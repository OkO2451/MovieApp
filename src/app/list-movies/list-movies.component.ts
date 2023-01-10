import { Component } from '@angular/core';
import {MoviesServiceService} from "../services/movies-service.service";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/Movie";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {
allMovies:Movie[]=[];
  searchText = '';

  moviesJson = new MoviesServiceService(this.http);
getAllMovies=()=>{

  this.moviesJson.getMovies().subscribe(data => {
    this.allMovies=data.results;

    console.log(this.allMovies);
  });

}

constructor(private http: HttpClient) {
}
  ngOnInit() {
    this.getAllMovies();

  }

}
