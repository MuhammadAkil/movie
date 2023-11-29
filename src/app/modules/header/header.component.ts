import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search: any;
  loading: boolean = false;
  movies: any[] = [];
  abc: any
  constructor(public movie: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }
  movieDetails(id: any) {
    this.router.navigate(['/movie-details', id])
  }
  getMovies() {
    let url = `list_movies.json?query_term=${this.search || ''}`;
    // let url = `list_movies.json?quality=${this.selectedQuality}&genre=${this.selectedGenre}&rating=${this.selectedRating}&year=${this.selectedYear}&language=${this.languages}`//&year=${this.selectedYear}&language=${this.languages}&order_by=${this.}&query_term=${this.search || ''}
    this.loading = true;
    if (this.abc) {
      this.abc.unsubscribe();
    }

    this.abc = this.movie.get(url).subscribe({
      next: (res) => {
        console.log(res);
        this.movies = res.data.movies;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;

      },
    })
  }
}
