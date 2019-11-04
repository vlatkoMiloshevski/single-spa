import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie-model';
import { ErrorService } from '../services/error-handler.service';
import * as movieActions from '../state/movie.actions';
import * as fromMovie from '../state/movie.selector';

@Component({
  selector: 'appngrx-movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MoviesComponent implements OnInit, OnChanges, OnDestroy {
  movies: Array<Movie> = [];
  moviesSub$: Subscription;

  constructor(
    // private store: Store<StateModel>,
    private store: Store<{ movies: Movie[] }>,
    private errorService: ErrorService
  ) {
  }

  ngOnInit() {
    this.moviesSub$ = this.store.pipe(select(fromMovie.getMovieListState)).subscribe(
      movies => this.handleMoviesCheckedState(movies),
      error => this.errorService.errorHandler(error),
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  changeCheckedValue(movie: Movie) {
    this.store.dispatch(movieActions.handleCheckedMovies({ movies: this.movies }));
  }

  addNewMovie(movieTitle, movieUrl) {
    const movie: Movie = new Movie(this.movies.length, movieTitle, true, movieUrl);
    this.store.dispatch(movieActions.addMovie({ movie: movie }));
  }

  // handle movies state
  handleMoviesCheckedState(movieList: Array<Movie>) {
    this.movies = movieList;
  }

  ngOnDestroy() {
    this.moviesSub$.unsubscribe();
  }
}
