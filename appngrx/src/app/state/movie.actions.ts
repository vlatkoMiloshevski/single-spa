import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie-model';

export const handleCheckedMovies = createAction('[MOVIE] HANDLE_CHECKED_MOVIES', props<{ movies: Movie[] }>());
export const load = createAction('[MOVIE] LOAD');
export const loadSuccess = createAction('[MOVIE] LOAD_SUCCESS', props<{ movies: Movie[] }>());
export const addMovie = createAction('[MOVIE] ADD_MOVIE', props<{ movie: Movie }>());

