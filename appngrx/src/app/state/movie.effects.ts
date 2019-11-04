import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../services/api-service';
import * as movieActions from './movie.actions';
import { load } from './movie.actions';

@Injectable()
export class MovieEffects {
    first = true;

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) {
    }

    // @Effect()
    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(load),
        mergeMap(action =>
            this.apiService.getInitMovies()
                .pipe(
                    map(movies => movieActions.loadSuccess({ movies: movies })),
                    catchError(error => of(null))
                )
        )
    ));

    // addMovie$ = createEffect(() => this.actions$.pipe(
    //     ofType(movieActions.addMovie),
    //     mergeMap(action => this.apiService.addNewMovie(action.payload).pipe(
    //         map((movies: Array<MovieStateModel>) => movieActions.addMovieSuccess(movies))),
    //         catchError(error => of(new movieActions.AddMovieFail(error)))
    //     ))
    // );
}
