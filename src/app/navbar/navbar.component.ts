import { Component } from '@angular/core';
import { MovieSearchService } from '../services/movie-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private movieSearchService: MovieSearchService) { }

  handleKeySearch(value: string) {
    this.movieSearchService.getMoviesByKey(value).subscribe(data => {
      console.log(data.results);
    });
  }

  clearSearch() {
    this.movieSearchService.getMovies().subscribe(data => {
      console.log(data.results);
    });
  }
}