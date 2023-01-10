import {Component, Input} from '@angular/core';
import {Movie} from "../models/Movie";
import {MoviesServiceService} from "../services/movies-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie!: Movie ;
  @Input() prodItem: any;
  detailService:MoviesServiceService=new MoviesServiceService(this.http)

  handleDetailClick(id: number) {
    //this.detailService.setCurrentItemId(id);
    this.router.navigateByUrl("/movie-detail/"+id);

  }
  constructor(private http: HttpClient, private router:Router) {
  }
}
