import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoversComponent } from './covers/cover.component';
import { MoviesComponent } from './movies/movie.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'covers', component: CoversComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
