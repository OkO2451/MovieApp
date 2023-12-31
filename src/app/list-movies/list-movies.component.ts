import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../services/movie-search.service';

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
    this.movieSearchService.getMovies().subscribe(data => {
      this.allMovies = data.results;
    });
  }

  handleKeySearch(keyword: string) {
    this.movieSearchService.getMoviesByKey(keyword).subscribe(data => {
      this.allMovies = data.results;
    });
  }

  clearSearch(){
    this.movieSearchService.getMovies().subscribe(data => {
      this.allMovies = data.results;
    });
  }

}