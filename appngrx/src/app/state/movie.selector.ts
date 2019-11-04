import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieStateModel } from './movie-state.model';

export const getMovieFeatureState = createFeatureSelector<MovieStateModel>('movies');

export const getMovieListState = createSelector(
    getMovieFeatureState,
    state => state.movies
);
