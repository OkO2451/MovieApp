import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  url:string ="https://api.themoviedb.org/3/movie/popular?api_key=b9e250836c77731e4daa1e7f4714d416";
  public currentItemId:number=1;
  public setCurrentItemId=(id:number)=>{
    this.currentItemId=id;
  }
  constructor(private http: HttpClient) {
  }
  getMovies(){
    return  this.http.get<any>(this.url);
  }
getMovieDetail=(id:number)=>{
  const urlDetail ='https://api.themoviedb.org/3/movie/' + id + '?api_key=b9e250836c77731e4daa1e7f4714d416&language=fr';
  return  this.http.get<any>(urlDetail);
}


}
