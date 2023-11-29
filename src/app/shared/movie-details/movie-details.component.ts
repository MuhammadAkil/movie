import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  movieDetails: any[] = [];
  movies: any[] = [];
  loading = false;
  activeTab = 0;
  runtime: any;
  time: any;

  constructor(public movie: MovieService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovies();

    this.activeTab = 0;
    const movieId = this.route.snapshot.params['id'];

    this.getMovieDetails(movieId);
    this.runtime;

  }



  getMovies() {
    this.loading = true;
    this.movie.get('list_movies.json?limit=20').subscribe({
      next: (res) => {
        this.movies = res.data.movies;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;

      },
    })
  }
  torrents: any[] = [];
  getMovieDetails(movieId: any) {
    this.loading = true;
    const apiUrl = `movie_details.json?movie_id=${movieId}`;

    this.movie.get(apiUrl).subscribe({
      next: (res) => {
        this.movieDetails = [res.data.movie];
        this.runtime = res.data.movie.runtime;
        console.log(this.runtime);
        this.loading = false;
        this.getHours();
      },

      error: (err) => {
        this.loading = true;
      },
    })
  }
  getHours() {
    let hour = this.runtime / 60;
    let rhours = Math.floor(hour);
    let minutes = (hour - rhours) * 60;
    let rminutes = Math.round(minutes);
    this.time = " " + rhours + ' hr ' + rminutes + ' min'
  }
}
