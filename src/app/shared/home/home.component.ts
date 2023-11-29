import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  title: any;
  bgImg: any;
  upcoming: any[] = [];
  loading = false
  p: number = 1;

  constructor(public movie: MovieService, public router: Router) { }

  ngOnInit(): void {
    this.getMovies();
    this.upComingMovies();
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
  upComingMovies() {
    // this.movie.get('list_upcoming.json').subscribe({
    //   next: (res) => {
    //     // console.log(res);
    //     this.upcoming = res.data;
    //     console.log(this.upcoming);
    //   },
    //   error: (err) => {
    //   },
    // })
  }
  movieDetails(id: any) {
    this.router.navigate(['/movie-details', id])
  }
}
