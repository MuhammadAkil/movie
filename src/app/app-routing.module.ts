import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { MovieDetailsComponent } from './shared/movie-details/movie-details.component';
import { TrendComponent } from './shared/trend/trend.component';
import { BrowseMoviesComponent } from './shared/browse-movies/browse-movies.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'movie-details',
    children: [
      {
        path: '',
        component: MovieDetailsComponent,
        data: { title: 'Movie-details' },
      },
      {
        path: ':id',
        component: MovieDetailsComponent,
        data: { title: 'Movie-details' },
      },
    ]
  },
  {
    path: 'trending-movies', component: TrendComponent,
    data: { title: 'Trending-details' }
  },
  {
    path: 'browse-movies', component: BrowseMoviesComponent,
    data: { title: 'Browse-movies' }
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
