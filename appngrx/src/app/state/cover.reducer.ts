import { Action, createReducer, on } from '@ngrx/store';
import { CoverStateModel, initCoverStateModel } from './cover-state.model';
import { handleToggleLargeImages } from './cover.actions';

export function coversReducer(state: CoverStateModel | undefined, action: Action) {
    return featureReducer(state, action);
}

const featureReducer = createReducer(
    initCoverStateModel,
    on(handleToggleLargeImages, (state, payload) => ({ ...state, showLargeImages: payload.showLargeImages })),
);
