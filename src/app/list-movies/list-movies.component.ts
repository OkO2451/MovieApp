import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../movie-search.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  allMovies: any[] = [];

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieSearchService.getMovies('').subscribe(data => {
      this.allMovies = data.results;
    });
  }
}