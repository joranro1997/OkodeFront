import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8080/api/movies';
  private apiUrlSingleMovie = 'http://localhost:8080/api/movie';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        original_language: movie.original_language,
        overview: movie.overview
      })))
    );
  }

  getMovie(movie_id: number): Observable<Movie> {
    const url = `${this.apiUrlSingleMovie}/${movie_id}`;
    return this.http.get<Movie>(url);
  }
}
