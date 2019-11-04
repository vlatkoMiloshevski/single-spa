import { Action, createReducer, on } from '@ngrx/store';
import { MovieStateModel, initMovieStateModel } from './movie-state.model';
import { addMovie, handleCheckedMovies, load, loadSuccess } from './movie.actions';

export function moviesReducer(state: MovieStateModel | undefined, action: Action) {
    return featureReducer(state, action);
}

const featureReducer = createReducer(
    initMovieStateModel,
    on(load, state => state),
    on(addMovie, (state, payload) => ({ ...state, movies: [...state.movies, payload.movie] })),
    on(handleCheckedMovies, (state, payload) => ({ ...state, movies: payload.movies })),
    on(loadSuccess, (state, payload) => ({ ...state, movies: payload.movies })),
);
