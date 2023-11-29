import { Component } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent {
  movies: any[] = [];
  title: any;
  bgImg: any;
  p: number = 1;


  constructor(public movie: MovieService) { }

  ngOnInit(): void {
    this.getCategory();
  }



  getCategory() {
    this.movie.get('list_movies.json?limit=20').subscribe({
      next: (res) => {
        console.log(res);
        this.movies = res.data.movies;
        // this.bgImg = res.data.movies[0].background_image;

        console.log(this.movies);
      },
      error: (err) => {
      },
    })
  }
}
