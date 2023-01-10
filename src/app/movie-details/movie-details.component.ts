import { Component } from '@angular/core';
import {MoviesServiceService} from "../services/movies-service.service";
import {Movie} from "../models/Movie";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  idFilm:number = 1;
  detailService:MoviesServiceService=new MoviesServiceService(this.http);
  film:any;


  constructor(public route : ActivatedRoute , private http : HttpClient) {
  }

  ngOnInit(): void {

    this.idFilm= this.route.snapshot.params['id'];
    //this.idFilm=this.detailService.currentItemId;
    this.detailService.getMovieDetail(this.idFilm).subscribe(data => {
      this.film=data;
      console.log(this.film);


    });



  }
}
